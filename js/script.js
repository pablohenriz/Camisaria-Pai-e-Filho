// ══════════════════════════════════════════════════════════════
// DADOS DO CATÁLOGO
// Cada produto tem um campo `type` (Ternos, Camisas, Sapatos,
// Gravatas, Cintos) usado nos filtros de categoria.
// ══════════════════════════════════════════════════════════════
const suits = [
    // ── TERNOS ──
    {
        id: 1, type: 'Ternos', category: 'Slim Fit', name: 'Terno Slim Preto',
        desc: 'Corte moderno em tecido italiano premium. O clássico absoluto do guarda-roupa masculino elegante. Lapelas finas que alongam a silhueta e conferem modernidade sem abrir mão do refinamento.',
        badge: 'Mais Vendido', ref: 'CPF-001',
        specs: { 'Tecido': 'Lã 100% Italiana', 'Cores': 'Preto', 'Ocasiões': 'Formal, Casamentos, Trabalho', 'Corte': 'Slim' },
        imgs: [
            'https://images.unsplash.com/photo-1617113930975-f9c7243ae527?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=800&h=1100&fit=crop&q=80',
        ]
    },
    {
        id: 2, type: 'Ternos', category: 'Regular Fit', name: 'Terno Azul Marinho',
        desc: 'Versátil e elegante. O azul marinho funciona no escritório, em festas e em qualquer evento formal. Em lã tropical, mantém o caimento impecável durante todo o dia.',
        badge: 'Destaque', ref: 'CPF-002',
        specs: { 'Tecido': 'Lã Tropical', 'Cores': 'Azul Marinho', 'Ocasiões': 'Corporativo, Eventos, Formaturas', 'Corte': 'Regular' },
        imgs: [
            'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1610652492500-ded49ceeb378?w=800&h=1100&fit=crop&q=80',
        ]
    },
    {
        id: 3, type: 'Ternos', category: 'Duplo Botão', name: 'Terno Double-Breasted',
        desc: 'Sofisticação máxima em corte duplo. Para homens que sabem que detalhes fazem toda diferença. O double-breasted retorna com força como símbolo de autoridade e estilo.',
        badge: 'Novo', ref: 'CPF-003',
        specs: { 'Tecido': 'Viscose Italiana', 'Cores': 'Cinza Escuro', 'Ocasiões': 'Eventos Premium, Casamentos', 'Corte': 'Duplo Botão' },
        imgs: [
            'https://images.unsplash.com/photo-1622278647429-71bc97e904e8?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1553882809-a4f57e59501d?w=800&h=1100&fit=crop&q=80',
        ]
    },
    {
        id: 4, type: 'Ternos', category: 'Slim Fit', name: 'Terno Verde Musgo',
        desc: 'Para quem ousa sem perder a elegância. O verde musgo é a aposta da estação em moda masculina. Em linho premium, ideal para eventos ao ar livre e celebrações diurnas.',
        badge: null, ref: 'CPF-004',
        specs: { 'Tecido': 'Linho Premium', 'Cores': 'Verde Musgo', 'Ocasiões': 'Festas, Eventos Criativos', 'Corte': 'Slim' },
        imgs: [
            'https://images.unsplash.com/photo-1611937663641-5cef5189d71b?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=800&h=1100&fit=crop&q=80',
        ]
    },
    {
        id: 5, type: 'Ternos', category: 'Regular Fit', name: 'Terno Chumbo Clássico',
        desc: 'O cinza chumbo é o segundo clássico absoluto depois do preto. Atemporal, funcional e poderoso. Uma peça curinga que transita entre ambientes corporativos e festivos.',
        badge: null, ref: 'CPF-005',
        specs: { 'Tecido': 'Lã + Seda', 'Cores': 'Chumbo', 'Ocasiões': 'Trabalho, Reuniões, Formal', 'Corte': 'Regular' },
        imgs: [
            'https://images.unsplash.com/photo-1522968439036-e6338d0ed84f?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=1100&fit=crop&q=80',
        ]
    },
    {
        id: 6, type: 'Ternos', category: 'Slim Fit', name: 'Terno Azul Royal',
        desc: 'Presença imediata. O azul royal em corte slim transmite autoridade sem abrir mão do estilo. Ideal para quem quer se destacar em eventos importantes.',
        badge: null, ref: 'CPF-006',
        specs: { 'Tecido': 'Lã Tropical', 'Cores': 'Azul Royal', 'Ocasiões': 'Formaturas, Festas, Corporativo', 'Corte': 'Slim' },
        imgs: [
            'https://images.unsplash.com/photo-1603394151492-5e9b974b090b?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1610652492500-ded49ceeb378?w=800&h=1100&fit=crop&q=80',
        ]
    },
    {
        id: 7, type: 'Ternos', category: 'Regular Fit', name: 'Terno Preto Fosco',
        desc: 'Uma interpretação matte do clássico eterno. Tecido de alto brilho opaco para uma presença única. Indicado para cerimônias e galas de alto nível.',
        badge: 'Exclusivo', ref: 'CPF-007',
        specs: { 'Tecido': 'Microfibra Premium', 'Cores': 'Preto Fosco', 'Ocasiões': 'Cerimônias, Galas, Casamentos', 'Corte': 'Regular' },
        imgs: [
            'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1617113930975-f9c7243ae527?w=800&h=1100&fit=crop&q=80',
        ]
    },
    {
        id: 8, type: 'Ternos', category: 'Colete', name: 'Colete &amp; Calça',
        desc: 'Combinações de colete e calça para complementar ou substituir o blazer. Estilo com versatilidade para criar looks marcantes em qualquer ocasião.',
        badge: null, ref: 'CPF-008',
        specs: { 'Tecido': 'Misto Premium', 'Cores': 'Cinza, Preto, Azul', 'Ocasiões': 'Casual Elegante, Semi-Formal', 'Corte': 'Sob medida' },
        imgs: [
            'https://images.unsplash.com/photo-1632226390535-2f02c1a93541?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1553882809-a4f57e59501d?w=800&h=1100&fit=crop&q=80',
        ]
    },
    {
        id: 9, type: 'Ternos', category: 'Slim Fit', name: 'Terno Editorial',
        desc: 'Estilo editorial com look completo. Para o homem que entende moda como arte. Um terno que transcende categorias e se adapta à visão do seu portador.',
        badge: null, ref: 'CPF-009',
        specs: { 'Tecido': 'Lã Premium', 'Cores': 'Preto, Azul Escuro', 'Ocasiões': 'Eventos, Fotografia, Editorial', 'Corte': 'Slim' },
        imgs: [
            'https://images.unsplash.com/photo-1768809248883-09433fe04b0a?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=800&h=1100&fit=crop&q=80',
        ]
    },
    // ── CAMISAS ──
    {
        id: 10, type: 'Camisas', category: 'Social', name: 'Camisa Social Branca Slim',
        desc: 'A camisa que não pode faltar no guarda-roupa. Em algodão egípcio de fio longo, com colarinho italiano e caimento slim que valoriza a postura.',
        badge: 'Mais Vendido', ref: 'CPF-101',
        specs: { 'Tecido': 'Algodão Egípcio', 'Cores': 'Branco', 'Colarinho': 'Italiano', 'Caimento': 'Slim' },
        imgs: [
            'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&h=1100&fit=crop&q=80',
        ]
    },
    {
        id: 11, type: 'Camisas', category: 'Listrada', name: 'Camisa Listrada Azul',
        desc: 'Listras finas em tricoline de alta densidade. Combina perfeitamente com terno azul marinho ou cinza, trazendo um toque clássico e atual.',
        badge: null, ref: 'CPF-102',
        specs: { 'Tecido': 'Tricoline', 'Cores': 'Azul/Branco Listrado', 'Colarinho': 'Clássico', 'Caimento': 'Regular' },
        imgs: [
            'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&h=1100&fit=crop&q=80',
        ]
    },
    {
        id: 12, type: 'Camisas', category: 'Social', name: 'Camisa Social Preta',
        desc: 'Versão moderna do básico essencial. Tecido de algodão premium com leve elasticidade, ideal para eventos noturnos e composições monocromáticas.',
        badge: 'Novo', ref: 'CPF-103',
        specs: { 'Tecido': 'Algodão Premium', 'Cores': 'Preto', 'Colarinho': 'Italiano', 'Caimento': 'Slim' },
        imgs: [
            'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&h=1100&fit=crop&q=80',
        ]
    },
    {
        id: 13, type: 'Camisas', category: 'Casual', name: 'Camisa Linho Bege',
        desc: 'Leveza e respirabilidade para dias quentes. O linho puro garante caimento natural e textura artesanal, perfeita para looks casuais elegantes.',
        badge: null, ref: 'CPF-104',
        specs: { 'Tecido': 'Linho Puro', 'Cores': 'Bege', 'Colarinho': 'Button-down', 'Caimento': 'Regular' },
        imgs: [
            'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=1100&fit=crop&q=80',
        ]
    },
    {
        id: 14, type: 'Camisas', category: 'Casual', name: 'Camisa Xadrez Casual',
        desc: 'Padrão xadrez em flanela macia. Uma opção descontraída para os dias de fim de semana, sem perder a sofisticação da casa.',
        badge: null, ref: 'CPF-105',
        specs: { 'Tecido': 'Flanela', 'Cores': 'Azul/Cinza Xadrez', 'Colarinho': 'Americano', 'Caimento': 'Regular' },
        imgs: [
            'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=1100&fit=crop&q=80',
        ]
    },
    // ── SAPATOS ──
    {
        id: 15, type: 'Sapatos', category: 'Oxford', name: 'Oxford Preto Premium',
        desc: 'O sapato social por excelência. Couro legítimo curtido naturalmente, costura Goodyear e solado de couro — feito para durar gerações com os cuidados certos.',
        badge: 'Mais Vendido', ref: 'CPF-201',
        specs: { 'Material': 'Couro Legítimo', 'Cores': 'Preto', 'Solado': 'Couro', 'Ocasiões': 'Formal, Trabalho' },
        imgs: [
            'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=1100&fit=crop&q=80',
        ]
    },
    {
        id: 16, type: 'Sapatos', category: 'Derby', name: 'Derby Marrom Clássico',
        desc: 'Construção mais aberta que o oxford, com um toque levemente mais casual. Em couro nobuck marrom, combina bem com calças de sarja e ternos em tons terrosos.',
        badge: null, ref: 'CPF-202',
        specs: { 'Material': 'Couro Nobuck', 'Cores': 'Marrom', 'Solado': 'Borracha', 'Ocasiões': 'Casual Elegante' },
        imgs: [
            'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&h=1100&fit=crop&q=80',
        ]
    },
    {
        id: 17, type: 'Sapatos', category: 'Loafer', name: 'Loafer Bordô',
        desc: 'Sem cadarços e cheio de personalidade. O couro envernizado bordô traz brilho discreto, perfeito para festas e jantares.',
        badge: 'Novo', ref: 'CPF-203',
        specs: { 'Material': 'Couro Verniz', 'Cores': 'Bordô', 'Solado': 'Couro', 'Ocasiões': 'Festas, Jantares' },
        imgs: [
            'https://images.unsplash.com/photo-1614253429340-98120bd6d753?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=1100&fit=crop&q=80',
        ]
    },
    {
        id: 18, type: 'Sapatos', category: 'Brogue', name: 'Brogue Café',
        desc: 'Os perfurados decorativos (broguing) dão um charme britânico clássico. Versátil o suficiente para o escritório e para o fim de semana.',
        badge: null, ref: 'CPF-204',
        specs: { 'Material': 'Couro Perfurado', 'Cores': 'Café', 'Solado': 'Couro', 'Ocasiões': 'Formal, Casual' },
        imgs: [
            'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&h=1100&fit=crop&q=80',
        ]
    },
    // ── GRAVATAS ──
    {
        id: 19, type: 'Gravatas', category: 'Listrada', name: 'Gravata Seda Listrada',
        desc: 'Seda pura tecida na Itália, com listras diagonais azul e dourado. O acabamento à mão garante o nó perfeito todas as vezes.',
        badge: 'Destaque', ref: 'CPF-301',
        specs: { 'Material': 'Seda Pura', 'Cores': 'Azul/Dourado', 'Largura': '8 cm', 'Padrão': 'Listrado' },
        imgs: [
            'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=800&h=1100&fit=crop&q=80',
        ]
    },
    {
        id: 20, type: 'Gravatas', category: 'Lisa', name: 'Gravata Slim Preta',
        desc: 'O básico que resolve qualquer composição formal. Corte slim moderno, ideal para quem busca discrição com elegância.',
        badge: null, ref: 'CPF-302',
        specs: { 'Material': 'Poliéster Premium', 'Cores': 'Preto', 'Largura': '6 cm', 'Padrão': 'Liso' },
        imgs: [
            'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&h=1100&fit=crop&q=80',
        ]
    },
    {
        id: 21, type: 'Gravatas', category: 'Texturizada', name: 'Gravata Bordô Texturizada',
        desc: 'Tecido jacquard com textura sutil que captura a luz. Uma escolha sofisticada para casamentos e eventos de gala.',
        badge: null, ref: 'CPF-303',
        specs: { 'Material': 'Seda Jacquard', 'Cores': 'Bordô', 'Largura': '7,5 cm', 'Padrão': 'Texturizado' },
        imgs: [
            'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=800&h=1100&fit=crop&q=80',
            'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&h=1100&fit=crop&q=80',
        ]
    },
    // ── CINTOS ──
    {
        id: 22, type: 'Cintos', category: 'Clássico', name: 'Cinto Couro Preto Clássico',
        desc: 'Couro legítimo curtido ao tanino com fivela em metal escovado. O cinto que combina com qualquer sapato preto formal.',
        badge: 'Mais Vendido', ref: 'CPF-401',
        specs: { 'Material': 'Couro Legítimo', 'Cores': 'Preto', 'Fivela': 'Prata Lisa', 'Tamanhos': '36 ao 44' },
        imgs: [
            'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&h=1100&fit=crop&q=80',
        ]
    },
    {
        id: 23, type: 'Cintos', category: 'Reversível', name: 'Cinto Couro Marrom Reversível',
        desc: 'Dois cintos em um: vire para preto ou marrom conforme a ocasião. Praticidade sem abrir mão da qualidade do couro bovino.',
        badge: null, ref: 'CPF-402',
        specs: { 'Material': 'Couro Bovino', 'Cores': 'Marrom/Preto', 'Fivela': 'Inox', 'Tamanhos': '36 ao 44' },
        imgs: [
            'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=800&h=1100&fit=crop&q=80',
        ]
    },
    {
        id: 24, type: 'Cintos', category: 'Trançado', name: 'Cinto Trançado Bege',
        desc: 'Trançado artesanal em couro bege, com fivela dourada. Um detalhe que eleva looks casuais elegantes e de verão.',
        badge: 'Novo', ref: 'CPF-403',
        specs: { 'Material': 'Couro Trançado', 'Cores': 'Bege', 'Fivela': 'Dourada', 'Tamanhos': '36 ao 44' },
        imgs: [
            'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=800&h=1100&fit=crop&q=80',
        ]
    },
];

const productTypes = ['Todos', 'Ternos', 'Camisas', 'Sapatos', 'Gravatas', 'Cintos'];

// ══════════════════════════════════════════════════════════════
// GOOGLE REVIEWS — DADOS DE EXEMPLO (PLACEHOLDER)
// Troque os itens abaixo pelos dados reais retornados pela Google
// Places API (campo "reviews") ou pelo widget do serviço de sua
// escolha (Elfsight / EmbedSocial / Trustindex). Cada item precisa
// de: name, role (pode deixar "Avaliação no Google"), text, stars.
// Veja o comentário completo na seção de Avaliações na página Home.
// ══════════════════════════════════════════════════════════════
const testimonials = [
    { name: 'Ricardo Mendonça', role: 'Avaliação no Google', text: 'Comprei meu terno de casamento aqui e foi a melhor decisão. O atendimento foi impecável e o resultado, simplesmente perfeito.', stars: 5 },
    { name: 'Fernando Costa', role: 'Avaliação no Google', text: 'Frequento a loja há mais de 10 anos. A qualidade dos tecidos e o acabamento são incomparáveis. Meu guarda-roupa inteiro é daqui.', stars: 5 },
    { name: 'Paulo Rodrigues', role: 'Avaliação no Google', text: 'Descobri a Camisaria na minha formatura. Desde então, nunca mais comprei terno em outro lugar. Serviço de verdade.', stars: 5 },
];

const timeline = [
    { year: '1987', title: 'O Começo', desc: 'Seu Antônio abre as portas da primeira Camisaria Pai & Filho no centro de São Paulo com um único propósito: roupas de qualidade com atendimento de verdade.' },
    { year: '1994', title: 'A Expansão', desc: 'Com a demanda crescendo, a loja dobra de tamanho e passa a oferecer uma linha completa de acessórios masculinos — gravatas, cintos, lenços e mais.' },
    { year: '2001', title: 'O Filho Entra', desc: 'Carlos assume a gestão comercial após formação em moda. A loja ganha um olhar mais contemporâneo sem perder a essência clássica.' },
    { year: '2010', title: 'Renovação', desc: 'Reforma completa do espaço físico e criação do serviço de consultoria de estilo personalizada para clientes exclusivos.' },
    { year: '2018', title: 'Terceira Geração', desc: 'Marina traz o digital para a loja. Uma nova geração de clientes descobre a tradição familiar através das redes sociais.' },
    { year: '2024', title: 'Presente & Futuro', desc: 'Mais de 5.000 clientes ativos, 200+ modelos em estoque e a mesma paixão de 1987. O legado continua, uma geração de cada vez.' },
];

const team = [
    { name: 'Antônio Silva', role: 'Fundador', desc: '37 anos de paixão pela moda masculina. Para Seu Antônio, um terno bem feito é um ato de respeito consigo mesmo.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&q=70' },
    { name: 'Carlos Silva', role: 'Diretor Comercial', desc: 'Filho do fundador, responsável por modernizar a loja sem abrir mão da qualidade que faz a tradição da casa.', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&q=70' },
    { name: 'Marina Silva', role: 'Consultora de Estilo', desc: 'Neta do fundador, especialista em moda masculina. Marina une tradição familiar com tendências contemporâneas.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&q=70' },
];

const services = [
    { num: '01', title: 'Consultoria de Estilo', desc: 'Nosso consultor analisa seu perfil, rotina e ocasiões para montar o guarda-roupa ideal. Do básico ao especial, com orientação personalizada.', icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>` },
    { num: '02', title: 'Ajuste & Alfaiataria', desc: 'Cada terno pode ser ajustado para seu corpo. Trabalhamos com alfaiates experientes para garantir um caimento perfeito em cada peça.', icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>` },
    { num: '03', title: 'Look Completo', desc: 'Montamos o visual completo: terno, camisa, gravata, cinto e sapatos combinando. Você sai pronto para qualquer ocasião, sem esforço.', icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>` },
    { num: '04', title: 'Atendimento VIP', desc: 'Para clientes especiais, oferecemos atendimento por hora marcada fora do horário comercial. Discrição e exclusividade garantidas.', icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>` },
];

// ══════════════════════════════════════════════════════════════
// BLOG — Cuidados e o que não fazer com terno e sapatos
// ══════════════════════════════════════════════════════════════
const blogPosts = [
    {
        id: 1, slug: 'erros-com-terno', tag: 'Erros Comuns',
        title: '7 erros que destroem o seu terno (e como evitar)',
        excerpt: 'Pequenos descuidos do dia a dia que encurtam a vida útil de um terno bom. Veja o que parar de fazer agora.',
        img: 'https://images.unsplash.com/photo-1617113930975-f9c7243ae527?w=900&h=700&fit=crop&q=80',
        date: '12 Jun 2026', readTime: '6 min de leitura',
        body: [
            { type: 'p', text: 'Um terno de qualidade é um investimento, e como todo investimento, precisa de cuidado para render por anos. O problema é que muitos dos hábitos que estragam um terno parecem inofensivos no dia a dia. Reunimos os erros mais comuns que vemos — e que podem ser evitados com pouco esforço.' },
            { type: 'h2', text: '1. Pendurar no cabide errado' },
            { type: 'p', text: 'Cabides finos de plástico ou arame deformam os ombros do paletó em poucas semanas. Use sempre um cabide de madeira com ombros largos e levemente curvados, que sustentam o caimento original da peça.' },
            { type: 'h2', text: '2. Usar o mesmo terno dois dias seguidos' },
            { type: 'p', text: 'O tecido precisa de tempo para "descansar" e liberar a umidade absorvida durante o uso. Alternar entre dois ou três ternos prolonga consideravelmente a vida das fibras e evita que o brilho do tecido apareça antes da hora.' },
            { type: 'h2', text: '3. Sentar com o paletó abotoado' },
            { type: 'p', text: 'Abotoar o paletó ao sentar tensiona o tecido na altura da cintura e marca vincos permanentes com o tempo. A regra é simples: abra o botão sempre que for sentar.' },
            { type: 'h2', text: '4. Lavar a seco com frequência' },
            { type: 'p', text: 'A lavagem a seco usa solventes que, com o uso repetido, ressecam as fibras e desbotam o tecido. Reserve esse processo para quando realmente for necessário — entre duas e quatro vezes por temporada é suficiente para a maioria dos casos.' },
            { type: 'h2', text: '5. Guardar em saco plástico' },
            { type: 'p', text: 'O plástico de lavanderia retém umidade e impede que o tecido respire, favorecendo mofo e mau cheiro. Use uma capa de tecido respirável (algodão ou TNT) para guardar o terno no guarda-roupa.' },
            { type: 'h2', text: '6. Carregar a carteira no bolso interno' },
            { type: 'p', text: 'Objetos volumosos deformam o bolso e desalinham o caimento do paletó na lateral do corpo. Prefira manter o bolso interno vazio ou apenas com itens leves.' },
            { type: 'h2', text: '7. Ignorar pequenos reparos' },
            { type: 'p', text: 'Uma costura solta ou um botão frouxo, se ignorados, viram problemas maiores. Resolver na hora é mais barato e mais rápido do que esperar o estrago se espalhar pelo tecido.' },
        ]
    },
    {
        id: 2, slug: 'cuidados-sapato-social', tag: 'Cuidados',
        title: 'Como cuidar do seu sapato social para ele durar décadas',
        excerpt: 'Um bom par de sapatos de couro pode durar 20, 30 anos com a manutenção certa. Veja a rotina que realmente funciona.',
        img: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=900&h=700&fit=crop&q=80',
        date: '5 Jun 2026', readTime: '5 min de leitura',
        body: [
            { type: 'p', text: 'Diferente de muitos itens de moda, o sapato de couro de qualidade melhora com o tempo — desde que receba os cuidados certos. Aqui está a rotina que recomendamos para quem quer um par que atravesse décadas.' },
            { type: 'h2', text: 'Use formas de madeira' },
            { type: 'p', text: 'Assim que tirar o sapato, coloque uma forma de madeira de cedro dentro. Ela absorve a umidade do uso e mantém o formato original, evitando que o couro vinque permanentemente.' },
            { type: 'h2', text: 'Deixe descansar 24 a 48 horas' },
            { type: 'p', text: 'Assim como o terno, o sapato precisa de tempo para secar completamente entre um uso e outro. Ter pelo menos dois pares para alternar é o segredo mais simples para prolongar a vida útil.' },
            { type: 'h2', text: 'Hidrate o couro regularmente' },
            { type: 'p', text: 'Aplique cremes específicos para couro a cada 15 dias de uso frequente. O couro seco racha; o couro hidratado dobra sem marcar e envelhece bem.' },
            { type: 'h2', text: 'Escove antes de passar o cream' },
            { type: 'p', text: 'Remova a poeira e a sujeira superficial com uma escova de cerdas macias antes de qualquer produto. Aplicar creme sobre sujeira só sela a sujeira no couro.' },
            { type: 'h2', text: 'Cuide do solado também' },
            { type: 'p', text: 'Leve o sapato a um sapateiro de confiança para trocar a meia-sola de borracha quando ela começar a desgastar. Isso protege o solado de couro original, que é a parte mais cara de substituir.' },
        ]
    },
    {
        id: 3, slug: 'o-que-nao-fazer-sapato', tag: 'O Que Não Fazer',
        title: 'O que nunca fazer com um sapato de couro',
        excerpt: 'Da chuva ao secador de cabelo: os hábitos que mais danificam sapatos sociais — e o que fazer no lugar.',
        img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900&h=700&fit=crop&q=80',
        date: '29 Mai 2026', readTime: '4 min de leitura',
        body: [
            { type: 'p', text: 'Alguns hábitos parecem práticos no momento, mas comprometem o couro de forma irreversível. Veja a lista do que evitar a todo custo.' },
            { type: 'h2', text: 'Não seque perto de fontes de calor' },
            { type: 'p', text: 'Secador de cabelo, aquecedor ou sol direto ressecam o couro rapidamente e podem rachá-lo. Se o sapato molhar, seque à sombra, em temperatura ambiente, com jornal amassado dentro para absorver a umidade.' },
            { type: 'h2', text: 'Não use produtos de limpeza genéricos' },
            { type: 'p', text: 'Produtos multiuso e álcool removem o óleo natural do couro. Use sempre produtos específicos para couro — cremes, graxas e sprays impermeabilizantes formulados para esse fim.' },
            { type: 'h2', text: 'Não ande na chuva sem proteção' },
            { type: 'p', text: 'Água parada e respingos de chuva mancham e endurecem o couro. Aplique um spray impermeabilizante a cada poucas semanas, especialmente no inverno.' },
            { type: 'h2', text: 'Não guarde sapatos sujos' },
            { type: 'p', text: 'Sujeira e suor retidos por longos períodos aceleram o desgaste do couro e do forro interno. Limpe antes de guardar, mesmo que o sapato não esteja indo para uso imediato.' },
            { type: 'h2', text: 'Não use o mesmo par todos os dias' },
            { type: 'p', text: 'Assim como o terno, o sapato precisa de tempo para secar entre usos. Alternar pares é o cuidado mais simples e mais subestimado.' },
        ]
    },
    {
        id: 4, slug: 'guarda-roupa-essencial', tag: 'Guia',
        title: 'O guarda-roupa essencial do homem bem vestido',
        excerpt: 'As peças que formam a base de qualquer visual elegante — e como combiná-las entre si sem errar.',
        img: 'https://images.unsplash.com/photo-1549037173-e3b717902c57?w=900&h=700&fit=crop&q=80',
        date: '20 Mai 2026', readTime: '7 min de leitura',
        body: [
            { type: 'p', text: 'Não é sobre ter muitas roupas, é sobre ter as roupas certas. Um guarda-roupa bem construído permite criar dezenas de combinações com poucas peças-chave. Veja a base que recomendamos.' },
            { type: 'h2', text: 'Dois ternos coringa' },
            { type: 'p', text: 'Um terno preto e um azul marinho cobrem praticamente qualquer ocasião formal, do casamento à reunião de trabalho.' },
            { type: 'h2', text: 'Camisas neutras' },
            { type: 'p', text: 'Branco e azul claro são a base. A partir daí, adicione uma listrada e uma de cor sólida mais ousada para variar.' },
            { type: 'h2', text: 'Um oxford preto e um derby marrom' },
            { type: 'p', text: 'Esses dois pares de sapato resolvem 90% das ocasiões formais e semi-formais do dia a dia.' },
            { type: 'h2', text: 'Acessórios de qualidade' },
            { type: 'p', text: 'Um cinto preto, um marrom e duas ou três gravatas versáteis completam o essencial sem exagero.' },
            { type: 'h2', text: 'Por que investir em menos peças, mas melhores' },
            { type: 'p', text: 'Peças de qualidade bem cuidadas duram décadas e, no fim das contas, custam menos por uso do que roupas baratas trocadas com frequência. Esse é o raciocínio por trás de um guarda-roupa verdadeiramente elegante.' },
        ]
    },
];

// ── STATE ──
let curPage = 'home';
let curFilter = 'Todos';
let curView = 'grid';
let tIdx = 0, tTimer = null;
let drawerOpen = false;
let homeCatFilter = 'Todos';
let homeVisibleCount = 8; // quantos produtos extras já foram carregados na home
let homeLoadObserver = null;
let heroCarouselTimer = null;

// ── LOADER ──
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('done');
        const pg = document.getElementById('page-home');
        pg.classList.add('visible');
    }, 1600);
});

// ── SCROLL REVEAL ──
const revObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in');
    });
}, { threshold: 0.12 });
function attachReveal() {
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => {
        el.classList.remove('in');
        revObs.observe(el);
    });
}

// ── NAV SCROLL ──
window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 60);
});

// ── NAVIGATION ──
const validPages = ['home', 'produtos', 'product', 'sobre', 'blog', 'article', 'contato'];
function navigate(page) {
    if (!validPages.includes(page)) return;
    if (curPage === page) return;
    const prev = document.getElementById('page-' + curPage);
    const next = document.getElementById('page-' + page);
    if (!next) return;
    prev.classList.remove('active', 'visible');
    setTimeout(() => {
        next.classList.add('active');
        setTimeout(() => { next.classList.add('visible'); attachReveal(); }, 20);
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, 100);
    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.toggle('active', l.dataset.page === page);
    });
    curPage = page;
    if (page === 'produtos') renderProducts();
    if (page === 'sobre') { renderTimeline(); renderTeam(); }
    if (page === 'blog') renderBlog();
}

// ── DRAWER ──
function toggleDrawer() {
    drawerOpen = !drawerOpen;
    document.getElementById('drawer').classList.toggle('open', drawerOpen);
    document.getElementById('hamburger').classList.toggle('open', drawerOpen);
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
}
function closeDrawer() {
    drawerOpen = false;
    document.getElementById('drawer').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
    document.body.style.overflow = '';
}

// ── MARQUEE ──
(function () {
    const words = ['Elegância', 'Tradição', 'Qualidade', 'Estilo', 'Exclusividade', 'Sofisticação', 'Distinção', 'Requinte'];
    const all = [...words, ...words, ...words, ...words];
    document.getElementById('marquee-track').innerHTML =
        all.map(w => `<span class="marquee-item">${w}<span class="marquee-sep"></span></span>`).join('');
})();

// ── HOME: CATEGORY BAR + FEATURED + INFINITE SCROLL ──
function renderHomeCatBar() {
    document.getElementById('home-cat-bar').innerHTML = productTypes.map(c =>
        `<button class="home-cat-chip${c === homeCatFilter ? ' active' : ''}" onclick="setHomeFilter('${c}')">${c}</button>`
    ).join('');
}

function setHomeFilter(c) {
    homeCatFilter = c;
    homeVisibleCount = 8;
    renderHomeCatBar();
    renderHomeFeatured();
}

function homeFilteredList() {
    return homeCatFilter === 'Todos' ? suits : suits.filter(s => s.type === homeCatFilter);
}

function renderHomeFeatured() {
    const list = homeFilteredList();
    const top3 = list.slice(0, 3);
    document.getElementById('featured-grid').innerHTML = top3.map((s, i) => `
    <button class="suit-card reveal${i > 0 ? ' delay-' + (i) : ''}" onclick="openProduct(${s.id})" style="text-align:left">
      <div class="suit-card-img-wrap">
        <img src="${s.imgs[0]}" alt="${s.name}" loading="lazy"/>
        <div class="suit-card-overlay"></div>
        ${s.badge ? `<span class="suit-card-badge">${s.badge}</span>` : ''}
        <div class="suit-card-info">
          <span class="suit-card-cat">${s.type}</span>
          <h3 class="suit-card-name serif">${s.name}</h3>
          <div class="suit-card-cta">Ver detalhes <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
        </div>
      </div>
    </button>
  `).join('');
    renderHomeMore();
    attachReveal();
}

function renderHomeMore() {
    const list = homeFilteredList();
    const rest = list.slice(3, 3 + homeVisibleCount);
    document.getElementById('home-more-grid').innerHTML = rest.map(s => `
    <button class="p-card" onclick="openProduct(${s.id})">
      <div class="p-card-img">
        <img src="${s.imgs[0]}" alt="${s.name}" loading="lazy"/>
        <div class="p-card-over"></div>
        ${s.badge ? `<span class="p-card-badge">${s.badge}</span>` : ''}
        <div class="p-card-info">
          <span class="p-card-cat">${s.type}</span>
          <h3 class="p-card-name serif">${s.name}</h3>
        </div>
        <div class="p-card-arrow">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
    </button>
  `).join('');
    const totalAvailable = list.length - 3;
    const msg = document.getElementById('home-load-msg');
    if (totalAvailable <= 0) {
        msg.textContent = '';
    } else if (homeVisibleCount >= totalAvailable) {
        msg.textContent = 'Você viu todos os produtos desta categoria';
    } else {
        msg.textContent = 'Carregando mais produtos ao rolar a página…';
    }
}

// Scroll infinito: ao se aproximar do fim da lista, carrega mais produtos
function setupHomeInfiniteScroll() {
    if (homeLoadObserver) homeLoadObserver.disconnect();
    homeLoadObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const list = homeFilteredList();
                const totalAvailable = list.length - 3;
                if (homeVisibleCount < totalAvailable) {
                    homeVisibleCount = Math.min(homeVisibleCount + 4, totalAvailable);
                    renderHomeMore();
                }
            }
        });
    }, { rootMargin: '400px' });
    homeLoadObserver.observe(document.getElementById('home-load-sentinel'));
}

// ── SERVICES ──
(function () {
    document.getElementById('services-grid').innerHTML = services.map((s, i) => `
    <div class="service-item reveal delay-${i}">
      <span class="service-num">${s.num}</span>
      <div class="service-icon">${s.icon}</div>
      <h3 class="service-title serif">${s.title}</h3>
      <p class="service-desc">${s.desc}</p>
    </div>
  `).join('');
    attachReveal();
})();

// ── TESTIMONIALS ──
function renderT(i) {
    const t = testimonials[i];
    const txt = document.getElementById('t-text');
    txt.classList.add('fade-out');
    setTimeout(() => {
        txt.textContent = '\u201c' + t.text + '\u201d';
        document.getElementById('t-name').textContent = t.name;
        document.getElementById('t-role').textContent = t.role;
        document.getElementById('t-avatar').textContent = t.name[0];
        document.getElementById('t-stars').innerHTML =
            Array.from({ length: t.stars }).map(() => `<svg width="13" height="13" viewBox="0 0 24 24" fill="#b8966e"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`).join('');
        document.querySelectorAll('.t-dot').forEach((d, j) => {
            d.classList.toggle('active', j === i);
        });
        tIdx = i;
        txt.classList.remove('fade-out');
    }, 200);
}
(function () {
    document.getElementById('t-dots').innerHTML =
        testimonials.map((_, i) => `<button class="t-dot" onclick="renderT(${i});clearInterval(tTimer)"></button>`).join('');
    renderT(0);
    tTimer = setInterval(() => renderT((tIdx + 1) % testimonials.length), 5000);
})();

// ── PRODUCTS (página Produtos) ──
function renderProducts() {
    const filtered = curFilter === 'Todos' ? suits : suits.filter(s => s.type === curFilter);
    document.getElementById('filter-chips').innerHTML =
        productTypes.map(c => `<button class="filter-chip${c === curFilter ? ' active' : ''}" onclick="setFilter('${c}')">${c}</button>`).join('');
    document.getElementById('filter-count').textContent = filtered.length + ' peças';
    const cont = document.getElementById('products-container');
    if (curView === 'grid') {
        cont.innerHTML = `<div class="products-grid">${filtered.map(s => `
      <button class="p-card" onclick="openProduct(${s.id})">
        <div class="p-card-img">
          <img src="${s.imgs[0]}" alt="${s.name}" loading="lazy"/>
          <div class="p-card-over"></div>
          ${s.badge ? `<span class="p-card-badge">${s.badge}</span>` : ''}
          <div class="p-card-info">
            <span class="p-card-cat">${s.type}</span>
            <h3 class="p-card-name serif">${s.name}</h3>
          </div>
          <div class="p-card-arrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      </button>
    `).join('')}</div>`;
    } else {
        cont.innerHTML = `<div class="products-list">${filtered.map(s => `
      <div class="p-list-item" onclick="openProduct(${s.id})">
        <div class="p-list-thumb"><img src="${s.imgs[0]}" alt="${s.name}" loading="lazy"/></div>
        <div class="p-list-info">
          <span class="p-list-cat">${s.type}</span>
          <h3 class="p-list-name serif">${s.name}</h3>
          <p class="p-list-desc">${s.desc}</p>
          ${s.badge ? `<span style="font-size:.52rem;color:var(--gold);letter-spacing:.2em;text-transform:uppercase">${s.badge}</span>` : ''}
        </div>
      </div>
    `).join('')}</div>`;
    }
}

function setFilter(f) { curFilter = f; renderProducts() }
function setView(v) {
    curView = v;
    document.getElementById('vg').classList.toggle('active', v === 'grid');
    document.getElementById('vl').classList.toggle('active', v === 'list');
    renderProducts();
}

// ── PRODUCT DETAIL ──
function openProduct(id) {
    const s = suits.find(x => x.id === id);
    if (!s) return;

    document.getElementById('pd-cat').textContent = s.type + (s.category ? ' · ' + s.category : '');
    document.getElementById('pd-name').innerHTML = s.name;
    document.getElementById('pd-ref').textContent = 'Ref. ' + s.ref;
    document.getElementById('pd-desc').textContent = s.desc;

    document.getElementById('pd-specs').innerHTML = Object.entries(s.specs).map(([label, val]) => `
    <div class="pd-spec">
      <span class="pd-spec-label">${label}</span>
      <span class="pd-spec-val">${val}</span>
    </div>
  `).join('');

    const mainImg = document.getElementById('pd-main-img');
    mainImg.src = s.imgs[0];
    mainImg.alt = s.name;

    document.getElementById('pd-thumbs').innerHTML = s.imgs.map((img, i) => `
    <div class="pd-thumb${i === 0 ? ' active' : ''}" onclick="switchImg('${img}',this)">
      <img src="${img}" alt="${s.name} ${i + 1}" loading="lazy"/>
    </div>
  `).join('');

    const waMsg = encodeURIComponent(`Olá! Tenho interesse no ${s.name} (Ref. ${s.ref}). Poderia me dar mais informações?`);
    document.getElementById('pd-wa').href = `https://wa.me/5511999999999?text=${waMsg}`;

    document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.page === 'produtos'));

    const prev = document.getElementById('page-' + curPage);
    const next = document.getElementById('page-product');
    prev.classList.remove('active', 'visible');
    setTimeout(() => {
        next.classList.add('active');
        setTimeout(() => { next.classList.add('visible'); }, 20);
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, 100);
    curPage = 'product';
}

function switchImg(src, thumbEl) {
    const mainImg = document.getElementById('pd-main-img');
    mainImg.classList.add('changing');
    setTimeout(() => {
        mainImg.src = src;
        mainImg.classList.remove('changing');
    }, 250);
    document.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('active'));
    thumbEl.classList.add('active');
}

// ── TIMELINE ──
function renderTimeline() {
    const el = document.getElementById('timeline-el');
    if (!el || el.dataset.rendered) return;
    el.dataset.rendered = 1;
    el.innerHTML = `<div class="timeline-line"></div><div class="tl-items">` +
        timeline.map((t, i) => {
            const isEven = i % 2 === 0;
            return `<div class="tl-item reveal">
        <div class="tl-dot"></div>
        ${isEven ? `
          <div class="tl-left">
            <span class="tl-year serif">${t.year}</span>
            <h3 class="tl-title serif">${t.title}</h3>
            <p class="tl-desc">${t.desc}</p>
          </div>
          <div class="tl-right empty"></div>
        `: `
          <div class="tl-left empty"></div>
          <div class="tl-right">
            <span class="tl-year serif">${t.year}</span>
            <h3 class="tl-title serif">${t.title}</h3>
            <p class="tl-desc">${t.desc}</p>
          </div>
        `}
      </div>`;
        }).join('') + `</div>`;
    attachReveal();
}

// ── TEAM ──
function renderTeam() {
    const el = document.getElementById('team-grid');
    if (!el || el.dataset.rendered) return;
    el.dataset.rendered = 1;
    el.innerHTML = team.map((m, i) => `
    <div class="team-card reveal delay-${i}">
      <div class="team-card-img">
        <img src="${m.img}" alt="${m.name}" loading="lazy"/>
        <div class="team-card-over"></div>
        <div class="team-card-sheen"></div>
      </div>
      <span class="team-role">${m.role}</span>
      <h3 class="team-name serif">${m.name}</h3>
      <p class="team-desc">${m.desc}</p>
    </div>
  `).join('');
    attachReveal();
}

// ── BLOG ──
function renderBlog() {
    const el = document.getElementById('blog-grid');
    el.innerHTML = blogPosts.map((p, i) => `
    <button class="blog-card reveal delay-${i % 3}" onclick="openArticle(${p.id})">
      <div class="blog-card-img">
        <img src="${p.img}" alt="${p.title}" loading="lazy"/>
        <span class="blog-card-tag">${p.tag}</span>
      </div>
      <div class="blog-card-body">
        <span class="blog-card-meta">${p.date} · ${p.readTime}</span>
        <h3 class="blog-card-title serif">${p.title}</h3>
        <p class="blog-card-excerpt">${p.excerpt}</p>
        <span class="blog-card-link">Ler artigo <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
      </div>
    </button>
  `).join('');
    attachReveal();
}

function openArticle(id) {
    const p = blogPosts.find(x => x.id === id);
    if (!p) return;
    document.getElementById('article-img').src = p.img;
    document.getElementById('article-img').alt = p.title;
    document.getElementById('article-meta').textContent = p.tag + ' · ' + p.date + ' · ' + p.readTime;
    document.getElementById('article-title').textContent = p.title;
    document.getElementById('article-body').innerHTML = '<div class="article-divider"></div>' +
        p.body.map(block => block.type === 'h2' ? `<h2>${block.text}</h2>` : `<p>${block.text}</p>`).join('');

    document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.page === 'blog'));

    const prev = document.getElementById('page-' + curPage);
    const next = document.getElementById('page-article');
    prev.classList.remove('active', 'visible');
    setTimeout(() => {
        next.classList.add('active');
        setTimeout(() => { next.classList.add('visible'); }, 20);
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, 100);
    curPage = 'article';
}

// ── CONTACT FORM ──
function submitForm(e) {
    e.preventDefault();
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('form-success').classList.add('show');
}
function resetForm() {
    document.getElementById('contact-form').reset();
    document.getElementById('contact-form').style.display = '';
    document.getElementById('form-success').classList.remove('show');
}

// ── HERO: CARROSSEL AUTOMÁTICO DE IMAGENS DE FUNDO ──
// Troca a imagem de fundo do hero sozinha a cada poucos segundos,
// com um fade suave. Sem setas, sem bolinhas — só a troca automática.
function startHeroCarousel() {
    const imgs = document.querySelectorAll('#hero-bg .hero-bg-img');
    if (imgs.length < 2) return;
    let idx = 0;
    heroCarouselTimer = setInterval(() => {
        imgs[idx].classList.remove('is-active');
        idx = (idx + 1) % imgs.length;
        imgs[idx].classList.add('is-active');
    }, 5000);
}

// leve parallax do conjunto de imagens do hero ao mover o mouse
(function () {
    const hero = document.getElementById('hero-sect');
    const bg = document.getElementById('hero-bg');
    hero.addEventListener('mousemove', e => {
        const r = hero.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - .5) * 14;
        const y = ((e.clientY - r.top) / r.height - .5) * 6;
        bg.style.transform = `translate(${x}px,${y}px)`;
    });
    hero.addEventListener('mouseleave', () => {
        bg.style.transform = 'translate(0,0)';
    });
})();

// ── INIT ──
renderHomeCatBar();
renderHomeFeatured();
setupHomeInfiniteScroll();
startHeroCarousel();
attachReveal();
document.getElementById('page-home').classList.add('visible');