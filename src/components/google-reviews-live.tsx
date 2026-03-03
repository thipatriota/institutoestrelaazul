"use client";

import { useEffect, useMemo, useState } from "react";

import { TestimonialsCarousel, type Testimonial } from "@/components/testimonials-carousel";

type GoogleReviewItem = {
  id: string;
  author: string;
  quote: string;
  rating: number;
  relativeTime: string;
};

type GoogleReviewsResponse = {
  placeName?: string;
  rating?: number | null;
  totalRatings?: number | null;
  mapsUrl?: string | null;
  reviews?: GoogleReviewItem[];
  error?: string;
};

function buildSubtitle(item: GoogleReviewItem) {
  const ratingText = item.rating > 0 ? `⭐ ${item.rating.toFixed(1)}` : "Google";
  return `${ratingText} • ${item.relativeTime}`;
}

export function GoogleReviewsLive({ mapsShareUrl }: { mapsShareUrl: string }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [payload, setPayload] = useState<GoogleReviewsResponse | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("/api/google-reviews", { cache: "no-store" });
        const data = (await response.json()) as GoogleReviewsResponse;

        if (!response.ok) {
          throw new Error(data.error || "Não foi possível carregar as avaliações.");
        }

        if (!cancelled) {
          setPayload(data);
        }
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Não foi possível carregar as avaliações.";
        if (!cancelled) {
          setError(message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    load();
    const interval = window.setInterval(load, 120000);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, []);

  const testimonials = useMemo<Testimonial[]>(() => {
    const reviews = payload?.reviews || [];
    return reviews
      .filter((review) => Boolean(review.quote))
      .map((review) => ({
        quote: `"${review.quote}"`,
        author: review.author,
        subtitle: buildSubtitle(review)
      }));
  }, [payload]);

  if (loading) {
    return (
      <div
        data-slot="card"
        className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50 min-h-[300px] items-center justify-center"
      >
        <p className="text-muted-foreground">Carregando avaliações do Google...</p>
      </div>
    );
  }

  if (error || testimonials.length === 0) {
    return (
      <div
        data-slot="card"
        className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50 min-h-[300px] items-center justify-center p-8 text-center"
      >
        <p className="text-muted-foreground mb-4">
          {error || "Nenhuma avaliação escrita foi encontrada no momento."}
        </p>
        <a
          href={mapsShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border shadow-xs hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 bg-transparent"
        >
          Ver avaliações no Google Maps
        </a>
      </div>
    );
  }

  return (
    <div>
      <TestimonialsCarousel items={testimonials} />
      <div className="text-center mt-5 text-sm text-muted-foreground">
        {payload?.placeName ? <p>{payload.placeName}</p> : null}
        {payload?.rating && payload?.totalRatings ? (
          <p>
            Nota {payload.rating.toFixed(1)} • {payload.totalRatings} avaliações
          </p>
        ) : null}
      </div>
    </div>
  );
}

