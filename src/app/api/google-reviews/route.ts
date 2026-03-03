import { NextResponse } from "next/server";

type GoogleReview = {
  author_name?: string;
  rating?: number;
  relative_time_description?: string;
  text?: string;
};

type PlaceDetailsResponse = {
  status: string;
  result?: {
    name?: string;
    rating?: number;
    user_ratings_total?: number;
    url?: string;
    reviews?: GoogleReview[];
  };
  error_message?: string;
};

type FindPlaceResponse = {
  status: string;
  candidates?: Array<{ place_id?: string }>;
  error_message?: string;
};

const DEFAULT_QUERY =
  "Instituto Estrela Azul Ayahuasca Rua Major Theolindo Ferreira Ribas 517 Curitiba";

async function resolvePlaceId(apiKey: string, query: string) {
  const endpoint = new URL(
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json"
  );
  endpoint.searchParams.set("input", query);
  endpoint.searchParams.set("inputtype", "textquery");
  endpoint.searchParams.set("fields", "place_id");
  endpoint.searchParams.set("language", "pt-BR");
  endpoint.searchParams.set("key", apiKey);

  const response = await fetch(endpoint, { cache: "no-store" });
  const data = (await response.json()) as FindPlaceResponse;

  if (!response.ok || data.status !== "OK" || !data.candidates?.[0]?.place_id) {
    throw new Error(data.error_message || "Não foi possível localizar o place_id.");
  }

  return data.candidates[0].place_id;
}

async function fetchPlaceDetails(apiKey: string, placeId: string) {
  const endpoint = new URL(
    "https://maps.googleapis.com/maps/api/place/details/json"
  );
  endpoint.searchParams.set(
    "fields",
    "name,rating,user_ratings_total,url,reviews"
  );
  endpoint.searchParams.set("reviews_sort", "newest");
  endpoint.searchParams.set("language", "pt-BR");
  endpoint.searchParams.set("place_id", placeId);
  endpoint.searchParams.set("key", apiKey);

  const response = await fetch(endpoint, { cache: "no-store" });
  const data = (await response.json()) as PlaceDetailsResponse;

  if (!response.ok || data.status !== "OK" || !data.result) {
    throw new Error(data.error_message || "Não foi possível carregar avaliações.");
  }

  return data.result;
}

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "GOOGLE_MAPS_API_KEY não configurada no ambiente." },
      { status: 500 }
    );
  }

  try {
    const configuredPlaceId = process.env.GOOGLE_PLACE_ID;
    const placeQuery = process.env.GOOGLE_PLACE_QUERY || DEFAULT_QUERY;
    const placeId = configuredPlaceId || (await resolvePlaceId(apiKey, placeQuery));
    const place = await fetchPlaceDetails(apiKey, placeId);

    const reviews = (place.reviews || []).map((review, index) => ({
      id: `${index}-${review.author_name || "google-review"}`,
      author: review.author_name || "Usuário Google",
      quote: review.text || "",
      rating: review.rating || 0,
      relativeTime: review.relative_time_description || "recentemente"
    }));

    return NextResponse.json(
      {
        placeName: place.name || "Google Maps",
        rating: place.rating || null,
        totalRatings: place.user_ratings_total || null,
        mapsUrl: place.url || null,
        reviews
      },
      {
        headers: {
          "Cache-Control": "no-store"
        }
      }
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro ao carregar avaliações.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}

