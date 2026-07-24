// ============================================
// REVISTA ÁPICE — Base de matérias (placeholder)
// Edite este arquivo para adicionar/trocar profissionais.
// Troque as imagens (campo "img") por fotos reais quando tiver.
// ============================================

const ARTICLES = [
  {
    slug: "beatriz-kanashiro",
    name: "Dra. Beatriz Kanashiro",
    role: "Médica Dermatologista",
    category: "Dermatologia",
    vol: "Vol. 01",
    date: "Julho 2026",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=90&w=1800&auto=format&fit=crop",
    excerpt: "Referência em dermatologia clínica, une rigor técnico e escuta atenta para tratar cada pele como única.",
    body: [
      "A atuação da Dra. Beatriz Kanashiro é marcada pela combinação entre precisão diagnóstica e um olhar atento às particularidades de cada paciente. Formada com foco em dermatologia clínica e estética, ela construiu uma trajetória pautada na atualização constante e na escuta cuidadosa antes de qualquer indicação de tratamento.",
      "Ao longo dos últimos anos, sua prática se consolidou em torno de um princípio simples: tratamento eficaz começa com diagnóstico correto, não com pressa. Essa filosofia se reflete diretamente na relação de confiança construída com pacientes que, muitas vezes, chegam após ciclos frustrados de tentativa e erro em outros consultórios.",
      "Mais do que tratar sintomas, a Dra. Beatriz busca entender a rotina, o histórico e as expectativas reais de cada pessoa — reconhecendo que pele saudável está diretamente ligada a hábitos sustentáveis, não a soluções milagrosas."
    ],
    quote: "Pele saudável não é sobre perfeição, é sobre consistência e cuidado real ao longo do tempo."
  },
  {
    slug: "rafael-tavares",
    name: "Dr. Rafael Tavares",
    role: "Ortopedista Esportivo",
    category: "Saúde",
    vol: "Vol. 01",
    date: "Julho 2026",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=90&w=1800&auto=format&fit=crop",
    excerpt: "Especialista em recuperação de lesões esportivas, alia tecnologia de ponta a um plano de reabilitação humano.",
    body: [
      "O trabalho do Dr. Rafael Tavares nasce de uma constatação simples: atletas amadores costumam receber cuidado ortopédico menos criterioso do que profissionais, mesmo enfrentando lesões igualmente sérias. Foi para corrigir essa lacuna que ele estruturou sua prática em torno de protocolos de reabilitação individualizados.",
      "Cada caso passa por avaliação funcional completa antes de qualquer intervenção — sejam corredores amadores, jogadores de fim de semana ou pacientes voltando de cirurgia. A meta não é apenas eliminar a dor, mas devolver confiança de movimento a quem já pensou em desistir do esporte.",
      "Essa abordagem, construída ao longo de anos acompanhando equipes e atletas individuais, hoje é reconhecida por unir ciência do movimento a um acompanhamento próximo e realista sobre prazos de recuperação."
    ],
    quote: "Recuperação de verdade respeita o tempo do corpo — e o tempo da pessoa."
  },
  {
    slug: "camila-nogueira",
    name: "Camila Nogueira",
    role: "Nutricionista Esportiva",
    category: "Nutrição",
    vol: "Vol. 01",
    date: "Julho 2026",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=90&w=1800&auto=format&fit=crop",
    excerpt: "Traduz ciência da nutrição em rotinas reais, sem dietas restritivas ou promessas vazias.",
    body: [
      "Camila Nogueira construiu sua reputação recusando um dos maiores clichês da nutrição esportiva: a dieta genérica. Cada plano alimentar que ela desenvolve nasce de uma pergunta central — o que essa pessoa consegue sustentar na vida real, não apenas na teoria?",
      "Trabalhando com atletas amadores, praticantes de musculação e pessoas em transição para hábitos mais saudáveis, sua metodologia prioriza ajustes graduais e mensuráveis, evitando promessas de resultado imediato que raramente se sustentam a longo prazo.",
      "Essa postura, incomum em um mercado saturado de fórmulas prontas, é o que tem consolidado seu nome entre profissionais que valorizam consistência acima de tudo."
    ],
    quote: "Nutrição que funciona é a que cabe na vida da pessoa, não a que exige uma vida perfeita."
  },
  {
    slug: "fernando-botelho",
    name: "Fernando Botelho",
    role: "Consultor Financeiro",
    category: "Empresarial",
    vol: "Vol. 01",
    date: "Julho 2026",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=90&w=1800&auto=format&fit=crop",
    excerpt: "Ajuda pequenos empresários a organizar finanças com clareza, sem jargão desnecessário.",
    body: [
      "Fernando Botelho atua há anos ajudando pequenos e médios empresários a enxergar com clareza o que realmente acontece dentro do caixa de seus negócios. Sua missão, como ele mesmo descreve, é 'tirar a contabilidade do campo abstrato e trazer para decisões do dia a dia'.",
      "Ao invés de relatórios genéricos, sua consultoria é construída em cima de reuniões frequentes e linguagem acessível — traduzindo indicadores financeiros complexos em decisões práticas sobre precificação, fluxo de caixa e planejamento de crescimento.",
      "Esse cuidado em democratizar a educação financeira empresarial é o que tem tornado seu trabalho referência entre empreendedores que nunca tiveram formação formal em finanças."
    ],
    quote: "Todo empresário deveria entender o próprio caixa tão bem quanto entende o próprio produto."
  },
  {
    slug: "juliana-prado-lima",
    name: "Juliana Prado Lima",
    role: "Arquiteta de Interiores",
    category: "Arquitetura",
    vol: "Vol. 01",
    date: "Julho 2026",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=90&w=1800&auto=format&fit=crop",
    excerpt: "Projeta ambientes que equilibram estética contemporânea e funcionalidade real do dia a dia.",
    body: [
      "A trajetória de Juliana Prado Lima é marcada por um compromisso: cada projeto deve refletir como a pessoa realmente vive, não como uma revista de decoração sugere que ela deveria viver. Essa filosofia guia desde o primeiro briefing até o acompanhamento final de obra.",
      "Com atuação voltada a residências e pequenos comércios, Juliana desenvolve projetos que equilibram identidade visual marcante com praticidade de manutenção e custo — evitando tendências passageiras em favor de soluções duradouras.",
      "Seu método de trabalho, que envolve entrevistas detalhadas sobre rotina antes de qualquer esboço, tem atraído clientes que já se frustraram com projetos bonitos, porém pouco funcionais."
    ],
    quote: "Um ambiente bem projetado se nota no primeiro olhar, mas se prova no dia a dia."
  },
  {
    slug: "rodrigo-vasconcelos",
    name: "Rodrigo Vasconcelos",
    role: "Corretor de Imóveis",
    category: "Imóveis",
    vol: "Vol. 01",
    date: "Julho 2026",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=90&w=1800&auto=format&fit=crop",
    excerpt: "Especialista em primeira compra, guia famílias por um dos processos mais decisivos da vida financeira.",
    body: [
      "Rodrigo Vasconcelos se especializou em um público específico: famílias comprando seu primeiro imóvel. Ele identificou, ao longo da carreira, que esse grupo costuma receber menos atenção qualificada do que investidores experientes — apesar de estar tomando uma das decisões financeiras mais importantes da vida.",
      "Seu diferencial está em explicar, com paciência e sem jargão, cada etapa do processo — desde documentação até financiamento — reduzindo a ansiedade natural de quem nunca passou por essa jornada antes.",
      "Essa abordagem consultiva, mais próxima de uma orientação financeira do que de uma venda tradicional, é o que tem construído sua reputação entre famílias da região."
    ],
    quote: "Comprar a primeira casa não devia ser um processo assustador — devia ser guiado com cuidado."
  }
];

const CATEGORIES = ["Todos", ...new Set(ARTICLES.map(a => a.category))];
