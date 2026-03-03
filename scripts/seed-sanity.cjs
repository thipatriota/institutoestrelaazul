const { createClient } = require("@sanity/client");

const client = createClient({
    projectId: "1giwevpn",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
});

async function seed() {
    console.log("🌱 Criando conteúdo de teste...\n");

    // 1. Create Author
    console.log("👤 Criando autor...");
    const author = await client.createOrReplace({
        _id: "author-instituto",
        _type: "author",
        name: "Instituto Estrela Azul",
        slug: { _type: "slug", current: "instituto-estrela-azul" },
        bio: "O Instituto Estrela Azul é um espaço sagrado dedicado ao trabalho com medicinas da floresta, promovendo cura, autoconhecimento e transformação interior através de práticas ancestrais.",
        twitter: "",
    });
    console.log(`   ✅ Autor criado: ${author.name}`);

    // 2. Create Categories
    console.log("\n📂 Criando categorias...");
    const categories = [
        {
            _id: "cat-espiritualidade",
            title: "Espiritualidade",
            slug: "espiritualidade",
            description: "Artigos sobre práticas espirituais, meditação e conexão com o sagrado.",
        },
        {
            _id: "cat-autoconhecimento",
            title: "Autoconhecimento",
            slug: "autoconhecimento",
            description: "Reflexões e práticas para o desenvolvimento pessoal e a jornada interior.",
        },
        {
            _id: "cat-medicinas",
            title: "Medicinas da Floresta",
            slug: "medicinas-da-floresta",
            description: "Conhecimentos sobre plantas sagradas, tradições ancestrais e suas aplicações terapêuticas.",
        },
    ];

    for (const cat of categories) {
        await client.createOrReplace({
            _id: cat._id,
            _type: "category",
            title: cat.title,
            slug: { _type: "slug", current: cat.slug },
            description: cat.description,
        });
        console.log(`   ✅ Categoria: ${cat.title}`);
    }

    // 3. Create Posts
    console.log("\n📝 Criando posts de exemplo...");

    const posts = [
        {
            _id: "post-o-que-e-ayahuasca",
            title: "O que é Ayahuasca: Um Guia Completo sobre a Medicina da Floresta",
            slug: "o-que-e-ayahuasca",
            excerpt: "Descubra a história, os efeitos e o significado espiritual da Ayahuasca, uma das medicinas sagradas mais poderosas da floresta amazônica.",
            categoryId: "cat-medicinas",
            readingTime: 8,
            body: [
                {
                    _type: "block",
                    _key: "intro1",
                    style: "normal",
                    markDefs: [],
                    children: [
                        {
                            _type: "span",
                            _key: "s1",
                            text: "A Ayahuasca é uma bebida sagrada utilizada há milênios por povos indígenas da Amazônia. Também conhecida como 'cipó da alma' ou 'vinho das almas', essa medicina da floresta tem despertado crescente interesse em todo o mundo por seus profundos efeitos terapêuticos e espirituais.",
                            marks: [],
                        },
                    ],
                },
                {
                    _type: "block",
                    _key: "h2-1",
                    style: "h2",
                    markDefs: [],
                    children: [
                        { _type: "span", _key: "s2", text: "Origens e História", marks: [] },
                    ],
                },
                {
                    _type: "block",
                    _key: "p2",
                    style: "normal",
                    markDefs: [],
                    children: [
                        {
                            _type: "span",
                            _key: "s3",
                            text: "A Ayahuasca é preparada a partir de duas plantas: o cipó Banisteriopsis caapi e as folhas do arbusto Psychotria viridis (Chacrona). Essa combinação foi descoberta pelos povos nativos da Amazônia, que reconheceram a sinergia entre essas duas plantas como um portal para dimensões espirituais profundas.",
                            marks: [],
                        },
                    ],
                },
                {
                    _type: "block",
                    _key: "h2-2",
                    style: "h2",
                    markDefs: [],
                    children: [
                        { _type: "span", _key: "s4", text: "O Contexto Cerimonial", marks: [] },
                    ],
                },
                {
                    _type: "block",
                    _key: "p3",
                    style: "normal",
                    markDefs: [],
                    children: [
                        {
                            _type: "span",
                            _key: "s5",
                            text: "As cerimônias de Ayahuasca são conduzidas por guias espirituais experientes, conhecidos como pajés, xamãs ou padrinhos, dependendo da tradição. O ritual envolve preparação adequada, incluindo dietas específicas e abstinência de certas substâncias, para garantir uma experiência segura e transformadora.",
                            marks: [],
                        },
                    ],
                },
                {
                    _type: "block",
                    _key: "bq1",
                    style: "blockquote",
                    markDefs: [],
                    children: [
                        {
                            _type: "span",
                            _key: "s6",
                            text: "A Ayahuasca não é uma droga recreativa. É uma medicina sagrada que exige respeito, preparação e acompanhamento adequado de pessoas experientes.",
                            marks: ["em"],
                        },
                    ],
                },
                {
                    _type: "block",
                    _key: "h2-3",
                    style: "h2",
                    markDefs: [],
                    children: [
                        { _type: "span", _key: "s7", text: "Benefícios Terapêuticos", marks: [] },
                    ],
                },
                {
                    _type: "block",
                    _key: "p4",
                    style: "normal",
                    markDefs: [],
                    children: [
                        {
                            _type: "span",
                            _key: "s8",
                            text: "Pesquisas científicas recentes têm comprovado diversos benefícios terapêuticos da Ayahuasca, incluindo o tratamento de depressão resistente, ansiedade, TEPT e dependência química. Além disso, muitos participantes relatam experiências profundas de cura emocional e transformação pessoal.",
                            marks: [],
                        },
                    ],
                },
                {
                    _type: "block",
                    _key: "h3-1",
                    style: "h3",
                    markDefs: [],
                    children: [
                        { _type: "span", _key: "s9", text: "Cura Emocional e Espiritual", marks: [] },
                    ],
                },
                {
                    _type: "block",
                    _key: "p5",
                    style: "normal",
                    markDefs: [],
                    children: [
                        {
                            _type: "span",
                            _key: "s10",
                            text: "Além dos benefícios clínicos, a Ayahuasca proporciona experiências de expansão da consciência que podem levar a insights profundos sobre a própria vida, relacionamentos e propósito. Muitas pessoas descrevem essas experiências como as mais significativas de suas vidas.",
                            marks: [],
                        },
                    ],
                },
                {
                    _type: "block",
                    _key: "h2-4",
                    style: "h2",
                    markDefs: [],
                    children: [
                        { _type: "span", _key: "s11", text: "Como Participar com Segurança", marks: [] },
                    ],
                },
                {
                    _type: "block",
                    _key: "p6",
                    style: "normal",
                    markDefs: [],
                    children: [
                        {
                            _type: "span",
                            _key: "s12",
                            text: "Para participar de uma cerimônia de Ayahuasca com segurança, é fundamental buscar instituições sérias e reconhecidas, como o Instituto Estrela Azul, que oferece acompanhamento profissional e um ambiente seguro para a experiência. A preparação adequada, incluindo a dieta e conversa preparatória, é essencial para uma jornada segura e transformadora.",
                            marks: [],
                        },
                    ],
                },
            ],
        },
        {
            _id: "post-meditacao-conexao",
            title: "Meditação e Conexão Interior: Práticas para o Dia a Dia",
            slug: "meditacao-e-conexao-interior",
            excerpt: "Aprenda técnicas simples de meditação que podem ajudá-lo a cultivar paz interior e fortalecer sua conexão espiritual no cotidiano.",
            categoryId: "cat-espiritualidade",
            readingTime: 5,
            body: [
                {
                    _type: "block",
                    _key: "intro2",
                    style: "normal",
                    markDefs: [],
                    children: [
                        {
                            _type: "span",
                            _key: "sm1",
                            text: "A meditação é uma prática milenar que nos permite acessar estados profundos de consciência e estabelecer uma conexão mais íntima com nosso eu interior. No contexto das tradições espirituais amazônicas, a meditação complementa e potencializa o trabalho com as medicinas da floresta.",
                            marks: [],
                        },
                    ],
                },
                {
                    _type: "block",
                    _key: "h2m-1",
                    style: "h2",
                    markDefs: [],
                    children: [
                        { _type: "span", _key: "sm2", text: "Por Que Meditar?", marks: [] },
                    ],
                },
                {
                    _type: "block",
                    _key: "pm2",
                    style: "normal",
                    markDefs: [],
                    children: [
                        {
                            _type: "span",
                            _key: "sm3",
                            text: "A ciência moderna tem comprovado inúmeros benefícios da meditação regular: redução do estresse, melhora na qualidade do sono, aumento da concentração e fortalecimento do sistema imunológico. Mas além dos benefícios físicos, a meditação é uma ferramenta poderosa de autoconhecimento.",
                            marks: [],
                        },
                    ],
                },
                {
                    _type: "block",
                    _key: "h2m-2",
                    style: "h2",
                    markDefs: [],
                    children: [
                        { _type: "span", _key: "sm4", text: "Técnicas para Iniciantes", marks: [] },
                    ],
                },
                {
                    _type: "block",
                    _key: "pm3",
                    style: "normal",
                    markDefs: [],
                    children: [
                        {
                            _type: "span",
                            _key: "sm5",
                            text: "Comece com sessões curtas de 5 a 10 minutos. Sente-se confortavelmente, feche os olhos e concentre-se em sua respiração. Observe o ar entrando e saindo, sem tentar controlá-lo. Quando pensamentos surgirem, simplesmente observe-os e volte sua atenção à respiração.",
                            marks: [],
                        },
                    ],
                },
                {
                    _type: "block",
                    _key: "bqm1",
                    style: "blockquote",
                    markDefs: [],
                    children: [
                        {
                            _type: "span",
                            _key: "sm6",
                            text: "A meditação não é sobre esvaziar a mente, mas sobre observar seus pensamentos sem se apegar a eles.",
                            marks: ["em"],
                        },
                    ],
                },
            ],
        },
        {
            _id: "post-jornada-autoconhecimento",
            title: "A Jornada do Autoconhecimento: Como as Medicinas da Floresta Transformam Vidas",
            slug: "jornada-do-autoconhecimento",
            excerpt: "Histórias reais de transformação e os caminhos que as medicinas da floresta abrem para o autoconhecimento profundo.",
            categoryId: "cat-autoconhecimento",
            readingTime: 6,
            body: [
                {
                    _type: "block",
                    _key: "intro3",
                    style: "normal",
                    markDefs: [],
                    children: [
                        {
                            _type: "span",
                            _key: "sj1",
                            text: "O autoconhecimento é uma jornada que dura toda a vida. Para muitos, as medicinas da floresta representam um catalisador poderoso nesse processo, abrindo portas para dimensões da consciência que permitem uma compreensão mais profunda de quem somos e de nosso lugar no universo.",
                            marks: [],
                        },
                    ],
                },
                {
                    _type: "block",
                    _key: "h2j-1",
                    style: "h2",
                    markDefs: [],
                    children: [
                        { _type: "span", _key: "sj2", text: "O Chamado Interior", marks: [] },
                    ],
                },
                {
                    _type: "block",
                    _key: "pj2",
                    style: "normal",
                    markDefs: [],
                    children: [
                        {
                            _type: "span",
                            _key: "sj3",
                            text: "Muitas pessoas chegam às medicinas da floresta em momentos de grande questionamento existencial. Seja por uma crise pessoal, uma perda significativa ou simplesmente uma inquietação persistente, o chamado interior nos conduz a buscar respostas mais profundas sobre o sentido da vida.",
                            marks: [],
                        },
                    ],
                },
                {
                    _type: "block",
                    _key: "h2j-2",
                    style: "h2",
                    markDefs: [],
                    children: [
                        { _type: "span", _key: "sj4", text: "Transformação Através da Experiência", marks: [] },
                    ],
                },
                {
                    _type: "block",
                    _key: "pj3",
                    style: "normal",
                    markDefs: [],
                    children: [
                        {
                            _type: "span",
                            _key: "sj5",
                            text: "As experiências com as medicinas da floresta frequentemente revelam padrões emocionais e comportamentais que carregamos inconscientemente. Essa tomada de consciência é o primeiro passo para a verdadeira transformação, permitindo que liberemos traumas, medos e crenças limitantes que nos impedem de viver plenamente.",
                            marks: [],
                        },
                    ],
                },
                {
                    _type: "block",
                    _key: "bqj1",
                    style: "blockquote",
                    markDefs: [],
                    children: [
                        {
                            _type: "span",
                            _key: "sj6",
                            text: "A verdadeira cura começa quando temos coragem de olhar para dentro de nós mesmos com honestidade e compaixão.",
                            marks: ["em"],
                        },
                    ],
                },
                {
                    _type: "block",
                    _key: "h2j-3",
                    style: "h2",
                    markDefs: [],
                    children: [
                        { _type: "span", _key: "sj7", text: "Integrando a Experiência", marks: [] },
                    ],
                },
                {
                    _type: "block",
                    _key: "pj4",
                    style: "normal",
                    markDefs: [],
                    children: [
                        {
                            _type: "span",
                            _key: "sj8",
                            text: "Um dos aspectos mais importantes do trabalho com medicinas da floresta é a integração. Após a experiência cerimonial, é fundamental dedicar tempo para processar os insights recebidos, incorporando-os no cotidiano através de práticas como meditação, journaling e conexão com a natureza.",
                            marks: [],
                        },
                    ],
                },
            ],
        },
    ];

    for (const post of posts) {
        const now = new Date().toISOString();
        await client.createOrReplace({
            _id: post._id,
            _type: "post",
            title: post.title,
            slug: { _type: "slug", current: post.slug },
            excerpt: post.excerpt,
            publishedAt: now,
            updatedAt: now,
            readingTime: post.readingTime,
            body: post.body,
            author: { _type: "reference", _ref: "author-instituto" },
            categories: [{ _type: "reference", _ref: post.categoryId }],
        });
        console.log(`   ✅ Post: ${post.title.substring(0, 50)}...`);
    }

    console.log("\n🎉 Conteúdo de teste criado com sucesso!");
    console.log("   - 1 autor");
    console.log("   - 3 categorias");
    console.log("   - 3 posts");
    console.log("\nAgora rode: npm run dev");
}

seed().catch((err) => {
    console.error("❌ Erro:", err.message);
    process.exit(1);
});
