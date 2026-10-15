export type ProjectCategory =
  | "produtos-digitais"
  | "sites-ecommerce"
  | "cultura-comunicacao"
  | "portfolios"
  | "projetos-conceituais"
  | "inteligencia-artificial";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectTheme {
  accent: string;
  background: string;
}

export type ProjectClassification =
  | "projeto-autoral"
  | "trabalho-profissional"
  | "projeto-academico"
  | "projeto-comunitario";

export type ProjectState = "em-desenvolvimento" | "concluido";

export interface Project {
  slug: string;
  titulo: string;
  descricao?: string;
  categoria: ProjectCategory;
  categoriaLabel: string;
  ano?: string;
  status?: string;
  papel?: string;
  minhaParticipacao?: string;
  contexto?: string;
  problema?: string;
  objetivo?: string;
  processo?: string[];
  principaisDecisoes?: string[];
  entregas?: string[];
  ferramentas?: string[];
  competencias?: string[];
  resultadosComprovados?: string[];
  aprendizados?: string[];
  imagens: ProjectImage[];
  textoAposGaleria?: string[];
  pdfPages?: ProjectImage[];
  pdf?: string | null;
  showCoverBeforePdf?: boolean;
  linkExterno?: string | null;
  destaque: boolean;
  classificacoes?: ProjectClassification[];
  estado?: ProjectState;
  prontoParaDestaque?: boolean;
  tema?: ProjectTheme;
}

export const projects: Project[] = [
  {
    slug: "equilibre-se",
    titulo: "Equilibre-se",
    descricao: "Plataforma de terapia online com onboarding acolhedor, cadastro de baixo atrito e jornada mobile planejada para cuidado em saúde mental.",
    categoria: "produtos-digitais",
    categoriaLabel: "Produtos digitais",
    ano: "2025",
    status: "Concluído",
    papel: "Product Designer e UI/UX Designer",
    minhaParticipacao: "Desenvolvi a leitura de jornada, os wireframes, a direção visual e o protótipo em Figma, priorizando clareza, segurança emocional e navegação simples.",
    contexto: "O Equilibre-se é uma plataforma de saúde mental pensada para conectar pacientes a terapeutas certificados em um ambiente online seguro, empático e acessível.",
    problema: "Pedir ajuda em saúde mental pode ser emocionalmente difícil; por isso, a experiência precisava reduzir atrito, explicar o propósito da plataforma e conduzir o usuário com delicadeza.",
    objetivo: "Criar uma jornada mobile clara e acolhedora, do onboarding ao cadastro, facilitando o primeiro passo do usuário até o agendamento de uma sessão.",
    processo: ["Definição da proposta de valor", "Planejamento do onboarding", "Wireframes de fluxo mobile", "Interface de alta fidelidade", "Protótipo navegável no Figma"],
    principaisDecisoes: ["Mensagens curtas para transmitir acolhimento sem sobrecarregar", "Hierarquia visual leve para reforçar calma e confiança", "Cadastro/login desenhado para diminuir atrito emocional", "Wireframes usados para validar ordem, clareza e fluxo antes da camada visual"],
    entregas: ["Onboarding mobile", "Tela de cadastro/login", "Wireframes", "Protótipo de alta fidelidade", "PDF de apresentação do projeto"],
    ferramentas: ["Figma", "Canva"],
    competencias: ["UX Research", "UI Design", "Arquitetura da informação", "Prototipação", "Design emocional"],
    resultadosComprovados: ["Material visual organizado em 2 páginas de apresentação", "Protótipo disponível no Figma para consulta e navegação"],
    aprendizados: ["Projetos de saúde mental exigem linguagem cuidadosa, baixa fricção e decisões visuais que transmitam segurança."],
    imagens: [
      { src: "assets/images/covers/equilibre-se-cover.png", alt: "Celular com a interface do Equilibre-se nas mãos de uma pessoa" },
      { src: "assets/images/pdf-pages/equilibre-se-02.webp", alt: "Wireframes do projeto Equilibre-se" }
    ],
    pdfPages: [
      { src: "assets/images/pdf-pages/equilibre-se-01.webp", alt: "Página 1 do PDF do projeto Equilibre-se" },
      { src: "assets/images/pdf-pages/equilibre-se-02.webp", alt: "Página 2 do PDF do projeto Equilibre-se" }
    ],
    pdf: "assets/pdfs/equilibre-se.pdf",
    showCoverBeforePdf: true,
    linkExterno: null,
    destaque: true,
    classificacoes: ["projeto-autoral"],
    estado: "concluido",
    prontoParaDestaque: true,
    tema: { accent: "#c9ff5a", background: "#10140d" }
  },
  {
    slug: "macucultura",
    titulo: "MacuCultura",
    descricao: "Plataforma digital desenvolvida para fortalecer o acesso à cultura, reunindo informações, oportunidades e iniciativas culturais em uma experiência intuitiva.",
    categoria: "cultura-comunicacao",
    categoriaLabel: "Cultura e comunicação",
    ano: "2025",
    status: "Publicado",
    papel: "Idealização, estratégia de conteúdo, UI/UX Design e Web Design",
    contexto: "Site desenvolvido para apresentar a trajetória do MacuCultura, reunindo memórias, programação, registros e conteúdos culturais em uma experiência digital acolhedora.",
    problema: "O projeto precisava organizar uma história coletiva e muitas informações culturais em um site claro, afetivo e fácil de navegar.",
    objetivo: "Criar uma presença digital para valorizar a cultura popular, aproximar público e comunidade e tornar a história do projeto mais acessível.",
    processo: ["Definição de narrativa", "Organização de conteúdo", "Direção visual", "Arquitetura da informação", "Publicação do site"],
    entregas: ["Site publicado", "Estrutura de navegação", "Página inicial", "Conteúdo editorial", "Experiência responsiva"],
    competencias: ["Comunicação", "Cultura", "Estratégia", "UX Writing", "UI/UX Design", "Web Design"],
    imagens: [
      { src: "assets/images/covers/macucultura-cover.png", alt: "Capa do MacuCultura com o site exibido em um notebook" },
      { src: "assets/images/macucultura/macucultura-01.webp", alt: "Tela inicial do site MacuCultura com destaque para crianças construindo o festival" },
      { src: "assets/images/macucultura/macucultura-02.webp", alt: "Seção de notícias e chamada do MacuCultura 2026" },
      { src: "assets/images/macucultura/macucultura-04.webp", alt: "Seção Quem somos do site MacuCultura" },
      { src: "assets/images/macucultura/macucultura-05.webp", alt: "Grade de conteúdos sobre comunidade, coletividade e memória no MacuCultura" },
      { src: "assets/images/macucultura/macucultura-06.webp", alt: "Página de notícias do site MacuCultura" }
    ],
    textoAposGaleria: [
      "O MacuCultura é uma plataforma digital desenvolvida para fortalecer o acesso à cultura, reunindo informações, oportunidades e iniciativas voltadas ao setor cultural em um ambiente intuitivo e acessível. O projeto foi concebido para aproximar artistas, produtores culturais, coletivos, instituições e a comunidade, facilitando a divulgação de ações, editais, eventos e conteúdos relevantes.",
      "Durante o desenvolvimento, o foco esteve na criação de uma experiência de navegação simples, moderna e responsiva, priorizando a organização da informação, a acessibilidade e a facilidade de uso em diferentes dispositivos. Cada elemento da interface foi pensado para valorizar o conteúdo e reduzir barreiras de acesso, tornando a plataforma acolhedora para públicos com diferentes níveis de familiaridade com tecnologia.",
      "Além do aspecto visual, o projeto buscou unir design e tecnologia para oferecer uma solução escalável, preparada para evoluir conforme as necessidades da comunidade cultural. O resultado é uma plataforma que fortalece a presença digital de iniciativas culturais e contribui para ampliar a conexão entre pessoas, projetos e oportunidades."
    ],
    pdf: null,
    linkExterno: "https://macucultura.com/",
    destaque: true,
    classificacoes: ["projeto-autoral"],
    estado: "concluido",
    prontoParaDestaque: true,
    tema: { accent: "#ffb36b", background: "#17100d" }
  },



  {
    slug: "raiz",
    titulo: "Raiz",
    descricao: "Aplicativo para ajudar pessoas com cabelos crespos e cacheados a conhecer, organizar e acompanhar seus cuidados capilares.",
    categoria: "produtos-digitais",
    categoriaLabel: "Produtos digitais",
    contexto: "O Raiz nasceu da dificuldade de conciliar os cuidados com o cabelo natural e as demandas do dia a dia. A proposta transforma uma necessidade pessoal em uma experiência prática e acessível para outras pessoas.",
    objetivo: "Ajudar cada pessoa a entender as necessidades do próprio cabelo e construir uma rotina de cuidado possível, valorizando diversidade, autoestima e identidade.",
    imagens: [{ src: "assets/images/covers/raiz-cover.jpg", alt: "Fotografia de cuidado capilar com a identidade visual do Raiz" }],
    pdfPages: Array.from({ length: 24 }, (_, index) => ({
      src: `assets/images/pdf-pages/raiz-${String(index + 1).padStart(2, "0")}.webp`,
      alt: `Página ${index + 1} da apresentação do projeto Raiz`
    })),
    pdf: "assets/pdfs/raiz.pdf",
    linkExterno: "https://play.google.com/store/apps/details?id=com.angolabs.raiz",
    destaque: false
  },
  {
    slug: "minigest",
    titulo: "MiniGest",
    descricao: "Aplicativo mobile-first de gestão financeira e estoque para microempreendedores que precisam registrar vendas, clientes e resultados com simplicidade.",
    categoria: "produtos-digitais",
    categoriaLabel: "Produtos digitais",
    ano: "2026",
    status: "Em desenvolvimento",
    papel: "Designer UI/UX",
    minhaParticipacao: "Estruturei a proposta de produto, os fluxos e a apresentação visual do aplicativo, em parceria com desenvolvimento web e expansão do sistema.",
    contexto: "O MiniGest nasce para apoiar microempreendedores que fazem controle de vendas, clientes e estoque de forma improvisada no caderno, nas notas do celular ou pelo WhatsApp.",
    problema: "Registros espalhados dificultam saber o que foi vendido, entregue, lucrativo ou pendente, gerando insegurança na rotina de gestão.",
    objetivo: "Unir agilidade e organização em um aplicativo simples, permitindo registrar vendas, acompanhar estoque e visualizar resultados sem depender de planilhas complexas.",
    processo: ["Mapeamento da rotina de microempreendedores", "Definição do problema central", "Estruturação da solução mobile-first", "Planejamento de módulos de venda, estoque e resultado", "Apresentação visual do conceito"],
    principaisDecisoes: ["Priorizar linguagem simples para uso diário", "Organizar dados essenciais sem excesso de telas", "Criar uma solução sob medida para quem empreende sozinho", "Manter registro rápido como eixo principal da experiência"],
    entregas: ["Conceito do aplicativo", "Fluxo de registro rápido", "Estrutura de gestão financeira", "Estrutura de controle de estoque", "PDF de apresentação"],
    ferramentas: ["Figma", "Canva", "ClickUp"],
    competencias: ["Product Design", "UI/UX Design", "Design mobile-first", "Gestão de produto", "Arquitetura da informação"],
    resultadosComprovados: ["Material de produto consolidado em página visual", "Projeto em desenvolvimento web e expansão"],
    aprendizados: ["Para pequenos negócios, uma boa interface precisa respeitar tempo, repertório digital e rotina real de quem usa."],
    imagens: [{ src: "assets/images/covers/minigest-cover.png", alt: "Celular com a interface do MiniGest nas mãos de uma pessoa" }],
    pdfPages: [
      { src: "assets/images/pdf-pages/minigest-01.webp", alt: "Primeira parte do PDF do projeto MiniGest" },
      { src: "assets/images/pdf-pages/minigest-02.webp", alt: "Segunda parte do PDF do projeto MiniGest" }
    ],
    pdf: "assets/pdfs/minigest.pdf",
    showCoverBeforePdf: true,
    linkExterno: null,
    destaque: true,
    classificacoes: ["projeto-autoral", "trabalho-profissional"],
    estado: "em-desenvolvimento",
    prontoParaDestaque: true,
    tema: { accent: "#72e0ff", background: "#07151b" }
  },
  {
    slug: "afro-bela",
    titulo: "Afro Bela",
    descricao: "Site de catálogo e e-commerce para moda, tecidos, acessórios e coleções que valorizam identidade, cultura e expressão.",
    categoria: "sites-ecommerce",
    categoriaLabel: "Sites e e-commerce",
    ano: "2026",
    status: "Em desenvolvimento",
    papel: "Web Designer e UI/UX Designer",
    minhaParticipacao: "Organizei a experiência do catálogo, páginas de produto, kits, destaques e estrutura de coleções para facilitar navegação, descoberta e compra.",
    contexto: "A Afro Bela reúne produtos diversos ligados à moda e expressão cultural, exigindo um site capaz de organizar variedade sem perder personalidade de marca.",
    problema: "A diversidade de peças, tecidos, composições e coleções precisava ser apresentada de forma clara para facilitar escolha, controle e compra.",
    objetivo: "Criar uma experiência de catálogo limpa e comercial, destacando produtos estratégicos, informações de compra e combinações em kits.",
    processo: ["Leitura da diversidade de produtos", "Organização de catálogo e coleções", "Estruturação da página de produto", "Planejamento de kits e destaques", "Apresentação visual do site"],
    principaisDecisoes: ["Página de produto com preço, parcelamento e disponibilidade", "Código de identificação para gestão e controle", "Descrição completa com tecido e composição", "Kits para facilitar descoberta de produtos complementares", "Produtos em evidência para lançamentos e campanhas"],
    entregas: ["Estrutura de catálogo", "Página de produto", "Área de kits", "Destaques de peças", "PDF de apresentação"],
    ferramentas: ["Figma", "Canva"],
    competencias: ["UI Design", "E-commerce", "Arquitetura da informação", "Design responsivo", "Estratégia de catálogo"],
    resultadosComprovados: ["Material visual consolidado para apresentação do site", "Estrutura preparada para linhas de produtos e coleções"],
    aprendizados: ["Em e-commerce de moda, clareza comercial e expressão de marca precisam caminhar juntas."],
    imagens: [{ src: "assets/images/covers/afro-bela-cover.png", alt: "Capa da Afro Bela com a página inicial do site exibida em um notebook" }],
    pdfPages: Array.from({ length: 9 }, (_, index) => ({
      src: `assets/images/pdf-pages/afro-bela-${String(index + 1).padStart(2, "0")}.webp`,
      alt: `Página ${index + 1} da apresentação do projeto Afro Bela`
    })),
    pdf: "assets/pdfs/afro-bela.pdf",
    showCoverBeforePdf: true,
    linkExterno: "https://afrobela.online/",
    destaque: true,
    classificacoes: ["trabalho-profissional"],
    estado: "em-desenvolvimento",
    prontoParaDestaque: true,
    tema: { accent: "#f2a950", background: "#1a1008" }
  },

  {
    slug: "melhor-rastreio",
    titulo: "Melhor Rastreio",
    descricao: "Proposta de redesign da experiência de rastreio, com foco em linguagem simples, previsibilidade, mapas e orientação para o usuário final.",
    categoria: "projetos-conceituais",
    categoriaLabel: "Projetos conceituais",
    ano: "2026",
    status: "Concluído",
    papel: "UX Designer",
    minhaParticipacao: "Analisei a experiência atual, apliquei a técnica dos 5 porquês e propus melhorias de interface, conteúdo e fluxo para uma jornada de rastreio mais compreensível.",
    contexto: "O projeto parte da observação de que sites de rastreio costumam priorizar códigos e etapas logísticas, enquanto o usuário quer entender onde está a encomenda e quando ela chega.",
    problema: "A linguagem técnica, a poluição visual por anúncios, a ausência de previsão clara e a falta de suporte visível aumentam insegurança, dúvidas e frustração.",
    objetivo: "Propor uma nova experiência de rastreio centrada no usuário, mais clara, acessível e orientada à tomada de decisão.",
    processo: ["Análise da experiência atual", "Interpretação das dores do usuário", "Aplicação dos 5 porquês", "Definição da raiz do problema", "Proposta de melhorias de interface e conteúdo"],
    principaisDecisoes: ["Trocar linguagem logística técnica por explicações simples", "Priorizar localização atual e previsão de chegada", "Adicionar dados contextuais como previsão de saída e mapas", "Simplificar visualmente a interface", "Evidenciar suporte em casos de erro ou atraso"],
    entregas: ["Diagnóstico de UX", "Análise dos 5 porquês", "Proposta de redesign", "Diretrizes de linguagem", "PDF de apresentação"],
    ferramentas: ["Figma", "Canva"],
    competencias: ["UX Research", "Análise heurística", "UX Writing", "Arquitetura da informação", "Design centrado no usuário"],
    resultadosComprovados: ["Problema raiz identificado como ausência de abordagem centrada no usuário", "Proposta visual consolidada para comparação e evolução"],
    aprendizados: ["Interfaces logísticas precisam traduzir operação em clareza, confiança e orientação prática para pessoas comuns."],
    imagens: [{ src: "assets/images/covers/melhor-rastreio-cover.png", alt: "Capa do redesign Melhor Rastreio com o nome e símbolo do projeto" }],
    pdfPages: [{ src: "assets/images/pdf-pages/melhor-rastreio-01.webp", alt: "Página do PDF do projeto Melhor Rastreio" }],
    pdf: "assets/pdfs/melhor-rastreio.pdf",
    showCoverBeforePdf: true,
    linkExterno: null,
    destaque: true,
    classificacoes: ["projeto-autoral", "projeto-academico"],
    estado: "concluido",
    prontoParaDestaque: true,
    tema: { accent: "#9cff8a", background: "#0d160e" }
  },
  {
    slug: "lp-jussara-do-macuco",
    titulo: "LP - Jussara do Macuco",
    descricao: "Landing page profissional criada para apresentar a trajetória, projetos, vivências e presença cultural de Jussara do Macuco em uma experiência digital direta e responsiva.",
    categoria: "sites-ecommerce",
    categoriaLabel: "Sites e e-commerce",
    ano: "2026",
    status: "Concluído",
    papel: "Web Designer e UI/UX Designer",
    minhaParticipacao: "Desenvolvi a direção visual e a organização da landing page, estruturando navegação, seções de trajetória, projetos, vivências e contato para valorizar a presença profissional de Jussara do Macuco.",
    contexto: "O projeto nasce da necessidade de reunir, em um único endereço digital, a atuação profissional, cultural e comunitária de Jussara do Macuco, facilitando apresentação, consulta e divulgação.",
    problema: "A trajetória e os projetos estavam distribuídos em diferentes contextos, dificultando uma leitura rápida e organizada para quem queria conhecer seu trabalho.",
    objetivo: "Criar uma landing page clara, visualmente acolhedora e responsiva, capaz de apresentar história, projetos e registros de atuação com navegação simples.",
    processo: ["Organização da narrativa da página", "Definição das seções principais", "Criação da identidade visual da interface", "Adaptação do layout para diferentes telas", "Estruturação da galeria e áreas de conteúdo"],
    principaisDecisoes: ["Priorizar navegação direta em página única", "Usar imagens de vivência como eixo de credibilidade", "Manter linguagem visual conectada ao território e à cultura", "Destacar trajetória, propósito, projetos e contato sem excesso de etapas"],
    entregas: ["Landing page responsiva", "Estrutura de navegação", "Galeria de imagens", "Seções institucionais", "Capa visual para portfólio"],
    ferramentas: ["Figma", "Canva", "HTML", "CSS"],
    competencias: ["UI Design", "UX Design", "Landing page", "Design responsivo", "Comunicação visual"],
    resultadosComprovados: ["Projeto visual consolidado para apresentação no portfólio", "Página organizada para divulgar trajetória, vivências e projetos"],
    aprendizados: ["Uma landing page pessoal precisa equilibrar objetividade, presença visual e respeito à história que está sendo apresentada."],
    imagens: [{ src: "assets/images/covers/lp-jussara-do-macuco-cover.webp", alt: "Capa do projeto LP - Jussara do Macuco com telas da landing page" }],
    linkExterno: null,
    destaque: true,
    classificacoes: ["trabalho-profissional"],
    estado: "concluido",
    prontoParaDestaque: true,
    tema: { accent: "#a7c66f", background: "#11170c" }
  },
  {
    slug: "portfolio-leninha",
    titulo: "Portfólio de Juscilene Costa",
    descricao: "Portfólio visual desenvolvido para Juscilene Costa, a Leninha do Macuco, apresentando sua trajetória como pedagoga, lavradora, liderança quilombola e produtora cultural.",
    categoria: "portfolios",
    categoriaLabel: "Portfólios",
    ano: "2026",
    status: "Concluído",
    papel: "Direção visual e design editorial",
    ferramentas: ["Canva", "Design editorial"],
    competencias: ["Portfólio profissional", "Comunicação visual", "Organização de trajetória", "Design de apresentação"],
    imagens: [{ src: "assets/images/pdf-pages/portfolio-juscilene-01.webp", alt: "Capa do portfólio de Juscilene Costa, Leninha do Macuco" }],
    pdfPages: [
      { src: "assets/images/pdf-pages/portfolio-juscilene-01.webp", alt: "Página 1 do portfólio de Juscilene Costa" },
      { src: "assets/images/pdf-pages/portfolio-juscilene-02.webp", alt: "Página 2 do portfólio de Juscilene Costa" },
      { src: "assets/images/pdf-pages/portfolio-juscilene-03.webp", alt: "Página 3 do portfólio de Juscilene Costa" },
      { src: "assets/images/pdf-pages/portfolio-juscilene-04.webp", alt: "Página 4 do portfólio de Juscilene Costa" },
      { src: "assets/images/pdf-pages/portfolio-juscilene-05.webp", alt: "Página 5 do portfólio de Juscilene Costa" },
      { src: "assets/images/pdf-pages/portfolio-juscilene-06.webp", alt: "Página 6 do portfólio de Juscilene Costa" },
      { src: "assets/images/pdf-pages/portfolio-juscilene-07.webp", alt: "Página 7 do portfólio de Juscilene Costa" },
      { src: "assets/images/pdf-pages/portfolio-juscilene-08.webp", alt: "Página 8 do portfólio de Juscilene Costa" },
      { src: "assets/images/pdf-pages/portfolio-juscilene-09.webp", alt: "Página 9 do portfólio de Juscilene Costa" },
      { src: "assets/images/pdf-pages/portfolio-juscilene-10.webp", alt: "Página 10 do portfólio de Juscilene Costa" }
    ],
    pdf: "assets/pdfs/portfolio-juscilene-costa.pdf",
    classificacoes: ["trabalho-profissional"],
    estado: "concluido",
    destaque: true,
    prontoParaDestaque: true,
    tema: { accent: "#d3a36a", background: "#17110c" }
  },
  {
    slug: "portfolio-irene",
    titulo: "Portfólio de Irenilce Fernandes",
    descricao: "Portfólio visual desenvolvido para Irenilce Fernandes, reunindo sua atuação como produtora rural, quitandeira, cozinheira e integrante da cultura do Quilombo do Macuco.",
    categoria: "portfolios",
    categoriaLabel: "Portfólios",
    ano: "2026",
    status: "Concluído",
    papel: "Direção visual e design editorial",
    ferramentas: ["Canva", "Design editorial"],
    competencias: ["Portfólio profissional", "Comunicação visual", "Organização de trajetória", "Design de apresentação"],
    imagens: [{ src: "assets/images/pdf-pages/portfolio-irenilce-01.webp", alt: "Capa do portfólio de Irenilce Fernandes" }],
    pdfPages: [
      { src: "assets/images/pdf-pages/portfolio-irenilce-01.webp", alt: "Página 1 do portfólio de Irenilce Fernandes" },
      { src: "assets/images/pdf-pages/portfolio-irenilce-02.webp", alt: "Página 2 do portfólio de Irenilce Fernandes" },
      { src: "assets/images/pdf-pages/portfolio-irenilce-03.webp", alt: "Página 3 do portfólio de Irenilce Fernandes" },
      { src: "assets/images/pdf-pages/portfolio-irenilce-04.webp", alt: "Página 4 do portfólio de Irenilce Fernandes" },
      { src: "assets/images/pdf-pages/portfolio-irenilce-05.webp", alt: "Página 5 do portfólio de Irenilce Fernandes" },
      { src: "assets/images/pdf-pages/portfolio-irenilce-06.webp", alt: "Página 6 do portfólio de Irenilce Fernandes" },
      { src: "assets/images/pdf-pages/portfolio-irenilce-07.webp", alt: "Página 7 do portfólio de Irenilce Fernandes" },
      { src: "assets/images/pdf-pages/portfolio-irenilce-08.webp", alt: "Página 8 do portfólio de Irenilce Fernandes" },
      { src: "assets/images/pdf-pages/portfolio-irenilce-09.webp", alt: "Página 9 do portfólio de Irenilce Fernandes" }
    ],
    pdf: "assets/pdfs/portfolio-irenilce-fernandes.pdf",
    classificacoes: ["trabalho-profissional"],
    estado: "concluido",
    destaque: true,
    prontoParaDestaque: true,
    tema: { accent: "#9ccf8a", background: "#10160d" }
  }
];
