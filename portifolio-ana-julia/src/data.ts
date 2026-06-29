import { Translation, Project, SkillCategory, Experience } from './types';

export const translations: Record<'pt' | 'en', Translation> = {
  pt: {
    nav_projects: "Projetos",
    nav_skills: "Habilidades",
    nav_experience: "Experiência",
    nav_about: "Sobre",
    hire_me: "Contrate-me",
    hero_availability: "Disponível para Oportunidades Full Stack",
    hero_desc: "Desenvolvedora Full Stack graduada em Análise e Desenvolvimento de Sistemas, atualmente cursando Ciência da Computação. Apaixonada por criar soluções eficientes e evoluir através da excelência técnica.",
    hero_view_work: "Ver Meu Trabalho",
    hero_download_cv: "Baixar CV",
    hero_exp_label: "Experiência",
    hero_exp_value: "Foco Full Stack",
    stat_graduated: "Graduada",
    stat_graduated_sub: "Em ADS",
    stat_student: "Estudante CC",
    stat_student_sub: "Em curso",
    stat_projects_sub: "Projetos Base",
    stat_ai: "IA Ready",
    stat_ai_sub: "Prompt Expert",
    skills_title: "Proficiência Técnica",
    skills_subtitle: "Um conjunto diversificado de ferramentas, desde sistemas backend robustos com Java até frontends interativos com React.",
    skills_web: "Web & Mobile",
    skills_backend: "Backend & Infra",
    skills_integrations: "Integrações",
    skills_ai: "IA & Engenharia",
    projects_title: "Projetos em Destaque",
    projects_subtitle: "Uma seleção do meu melhor trabalho, desde plataformas comunitárias até extensões utilitárias.",
    projects_view_all: "Ver Todos Projetos",
    project_relivro_desc: "Uma plataforma comunitária para trocas sustentáveis de livros, promovendo a alfabetização e a economia circular.",
    project_todo_desc: "Gerenciamento de tarefas de alta performance com persistência local.",
    btn_source: "Código",
    btn_view: "Ver",
    journey_title: "Jornada",
    journey_present: "Presente",
    journey_ongoing: "Em curso",
    journey_completed: "Concluído",
    exp1_title: "Auxiliar de TI",
    exp1_subtitle: "Colégio Satélite",
    exp1_desc: "Atuo com suporte técnico na instituição e no desenvolvimento de ferramentas internas de forma autônoma para otimização e automação de fluxos de trabalho (como o sistema de agendamentos e a extensão de rastreamento de Chromebooks que estou desenvolvendo).",
    exp2_title: "Ciência da Computação",
    exp2_subtitle: "Universidade Cruzeiro do Sul",
    exp2_desc: "Cursando atualmente pela Universidade Cruzeiro do Sul. Aprofundamento em fundamentos teóricos, algoritmos, estruturas de dados e engenharia de software.",
    exp3_title: "Análise e Desenvolvimento de Sistemas (ADS)",
    exp3_subtitle: "UNINOVE (Universidade Nove de Julho)",
    exp3_desc: "Formada pela UNINOVE (Universidade Nove de Julho), com foco na aplicação prática do ciclo de vida de desenvolvimento de software e stacks tecnológicas modernas.",
    cta_title: "Vamos Construir o Futuro Juntos",
    cta_desc: "Estou sempre em busca de projetos inovadores e colaborações. Se você tiver uma dúvida ou apenas quiser dizer olá, minha caixa de entrada está aberta!",
    cta_btn: "Enviar Email",
    typewriter_roles: ["Ferreira", "Full Stack Dev", "Estudante CC", "Problem Solver"]
  },
  en: {
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_about: "About",
    hire_me: "Hire Me",
    hero_availability: "Available for Full Stack Opportunities",
    hero_desc: "Full Stack Developer graduated in Analysis and Systems Development, currently pursuing Computer Science. Passionate about creating efficient, scalable solutions and evolving through technical excellence.",
    hero_view_work: "View My Work",
    hero_download_cv: "Download CV",
    hero_exp_label: "Experience",
    hero_exp_value: "Full Stack Focus",
    stat_graduated: "Graduated",
    stat_graduated_sub: "In ADS",
    stat_student: "CS Student",
    stat_student_sub: "Ongoing",
    stat_projects_sub: "Core Projects",
    stat_ai: "AI Ready",
    stat_ai_sub: "Prompt Expert",
    skills_title: "Technical Proficiency",
    skills_subtitle: "A diverse toolkit ranging from robust backend systems with Java to interactive frontends with React.",
    skills_web: "Web & Mobile",
    skills_backend: "Backend & Infra",
    skills_integrations: "Integrations",
    skills_ai: "AI & Engineering",
    projects_title: "Featured Projects",
    projects_subtitle: "A selection of my best work, spanning from community platforms to utility extensions.",
    projects_view_all: "View All Projects",
    project_relivro_desc: "A community platform for sustainable book exchanges, promoting literacy and circular economy.",
    project_todo_desc: "High-performance task management with local persistence.",
    btn_source: "Source",
    btn_view: "View",
    journey_title: "Journey",
    journey_present: "Present",
    journey_ongoing: "In Progress",
    journey_completed: "Completed",
    exp1_title: "IT Support Assistant",
    exp1_subtitle: "Colégio Satélite",
    exp1_desc: "I work with technical support in the institution and in the autonomous development of internal tools for workflow optimization and automation (such as the scheduling system and the Chromebook tracking extension that I am developing).",
    exp2_title: "Computer Science",
    exp2_subtitle: "Cruzeiro do Sul University",
    exp2_desc: "Currently pursuing Computer Science at Cruzeiro do Sul University. Deepening theoretical foundations in algorithms, data structures, and software engineering.",
    exp3_title: "Analysis and Systems Development (ADS)",
    exp3_subtitle: "UNINOVE (Nove de Julho University)",
    exp3_desc: "Graduated from UNINOVE (Nove de Julho University), with a focus on practical application of software development lifecycle and modern tech stacks.",
    cta_title: "Let's Build the Future Together",
    cta_desc: "I'm always looking for innovative projects and collaborations. Whether you have a question or just want to say hi, my inbox is open!",
    cta_btn: "Send an Email",
    typewriter_roles: ["Ferreira", "Full Stack Dev", "CS Student", "Problem Solver"]
  }
};

export const projects: Project[] = [
  {
    id: "aliceapp",
    title: "AliceApp",
    descPt: "Sistema inteligente de agendamentos desenvolvido para otimizar fluxos de trabalho internos no Colégio Satélite.",
    descEn: "Intelligent scheduling system developed to optimize internal workflows at Colégio Satélite.",
    image: "assets/imgs/sat-agendamentos.png",
    tags: ["TypeScript", "React", "Tailwind CSS", "REST APIs"],
    demoUrl: "https://aliceapp.ia.br/",
    codeUrl: "https://github.com/Ana-Juhh/sat-agendamentos",
    techDetails: [
      "Sistema de alta performance para controle de agendamentos escolares.",
      "Arquitetura modular focada em escalabilidade e UX fluida.",
      "Integrações robustas com serviços internos e fluxos automatizados."
    ]
  },
  {
    id: "mahgi-imoveis",
    title: "Mahgi Imóveis",
    descPt: "Landing Page profissional de alta conversão desenvolvida para um corretor de imóveis parceiro. Totalmente responsiva e otimizada para SEO.",
    descEn: "High-conversion professional landing page developed for a partner real estate broker. Fully responsive and SEO optimized.",
    image: "assets/imgs/site-imobiliario.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://apartamentosmahgi.com.br/",
    codeUrl: "https://github.com/Ana-Juhh/landingpageGian",
    techDetails: [
      "Design de altíssimo padrão visual e chamadas para ação estratégicas.",
      "Performance impecável em dispositivos móveis e técnicas avançadas de SEO.",
      "Estrutura semântica para indexação otimizada nos buscadores."
    ]
  },
  {
    id: "relivro",
    title: "ReLivro",
    descPt: "Plataforma de e-commerce focada na compra e venda de livros novos e usados, com foco em design responsivo.",
    descEn: "E-commerce platform focused on buying and selling new and used books, with a focus on responsive design.",
    image: "assets/imgs/relivro.jpg",
    tags: ["HTML5", "CSS3", "Bootstrap"],
    demoUrl: "https://relivro.netlify.app/",
    codeUrl: "https://github.com/Ana-Juhh/ReLivro",
    techDetails: [
      "Interface amigável e limpa com foco na usabilidade do leitor.",
      "Grade responsiva construída com Bootstrap para adaptação em qualquer tela.",
      "Fluxo intuitivo de compra, venda e busca de títulos de livros."
    ]
  },
  {
    id: "todo-list",
    title: "To-do List",
    descPt: "Gerenciador de tarefas interativo com recurso de arrastar e soltar (drag and drop) e persistência de dados local (LocalStorage).",
    descEn: "Interactive task manager featuring drag-and-drop and local data persistence (LocalStorage).",
    image: "assets/imgs/to-do list.jpg",
    tags: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://ana-juhh.github.io/To-do-list/",
    codeUrl: "https://github.com/Ana-Juhh/To-do-list",
    techDetails: [
      "Interface de usuário altamente responsiva e intuitiva.",
      "Suporte nativo a Drag and Drop para reordenação manual de prioridades.",
      "Persistência robusta via LocalStorage garantindo permanência das tarefas."
    ]
  },
  {
    id: "smartliving",
    title: "SmartLiving",
    descPt: "E-commerce conceitual para soluções, automações e dispositivos eletrônicos voltados para casas inteligentes.",
    descEn: "Conceptual e-commerce for smart home solutions, automations, and electronic devices.",
    image: "assets/imgs/smartliving.jpg",
    tags: ["HTML5", "CSS3", "Bootstrap"],
    demoUrl: "https://ana-juhh.github.io/SmartLiving/",
    codeUrl: "https://github.com/Ana-Juhh/SmartLiving",
    techDetails: [
      "Exibição elegante de produtos e categorias de automação residencial.",
      "Layout totalmente adaptivo utilizando o framework Bootstrap.",
      "Estruturação moderna e voltada para a melhor conversão de vendas."
    ]
  },
  {
    id: "urbanrush",
    title: "UrbanRush",
    descPt: "Jogo de corrida infinita (Endless Runner) desenvolvido na Unity, com mecânicas de coleta e desvios, otimizado para PC e Mobile.",
    descEn: "Endless runner game developed in Unity, with collecting and dodging mechanics, optimized for PC and Mobile.",
    image: "assets/imgs/urbanrush.jpeg",
    tags: ["C#", "Unity", "Game Dev"],
    demoUrl: "https://1drv.ms/u/c/99462ae255983774/EXOCVOpu6YFDjR2o-uWG2WcBZj4rbSdeFwbwltFjUhUAXA?e=hvwyoq",
    codeUrl: "https://github.com/Ana-Juhh/UrbanRush",
    techDetails: [
      "Desenvolvido com a engine Unity e linguagem C#.",
      "Sistemas de colisões precisas, geração procedural de obstáculos e coleta.",
      "Otimização de performance para jogabilidade ultra-fluida em mobile e PC."
    ]
  },
  {
    id: "taskease",
    title: "TaskEase",
    descPt: "Aplicação de gerenciamento corporativo de tarefas desenvolvida como projeto acadêmico integrado com banco de dados.",
    descEn: "Corporate task management application developed as an academic project integrated with a database.",
    image: "assets/imgs/taskease.png",
    tags: ["PHP", "SQL", "HTML/CSS"],
    codeUrl: "https://github.com/Ana-Juhh/TaskEase",
    techDetails: [
      "Desenvolvimento em PHP estruturado e integração direta com banco de dados SQL.",
      "Sistema de login, atribuição de tarefas e controle de prazos por usuário.",
      "Arquitetura de software voltada para necessidades reais de projetos corporativos."
    ]
  },
  {
    id: "educalink",
    title: "EducaLink",
    descPt: "Landing page institucional projetada para servir como o portal digital de entrada de uma escola de forma fluida.",
    descEn: "Institutional landing page designed to serve as a school's smooth digital entry portal.",
    image: "assets/imgs/educalink.jpg",
    tags: ["HTML5", "CSS3", "Layout Responsivo"],
    demoUrl: "https://educaalink.netlify.app/",
    codeUrl: "https://github.com/Ana-Juhh/EducaLink",
    techDetails: [
      "Design amigável e cores selecionadas para aproximar a comunidade escolar.",
      "Seções interativas de informações sobre cursos, eventos e matrículas.",
      "Código limpo, estruturado e focado em carregamento ultrarrápido."
    ]
  },
  {
    id: "pesqueshop",
    title: "PesqueShop",
    descPt: "E-commerce especializado em artigos e equipamentos de pesca esportiva e profissional, focado em uma experiência de navegação fluida e fechamento de pedidos otimizado (Em desenvolvimento).",
    descEn: "E-commerce specialized in sports and professional fishing gear, focused on a smooth browsing experience and optimized checkout (Under development).",
    image: "assets/imgs/PesqueShop.png",
    tags: ["TypeScript", "React", "Vite", "REST APIs"],
    demoUrl: "#",
    codeUrl: "#",
    techDetails: [
      "E-commerce voltado para artigos e equipamentos de pesca esportiva e profissional.",
      "Navegação por categorias de produtos com foco em performance e usabilidade.",
      "Fluxo de fechamento de pedidos otimizado (projeto em desenvolvimento)."
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "web-mobile",
    titleKey: "skills_web",
    icon: "Code2",
    colorClass: "text-candy-primary border-candy-primary/20",
    badgeBg: "bg-candy-primary/10 hover:bg-candy-primary hover:text-white",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "React Native", "TypeScript", "Vite", "Tailwind CSS"]
  },
  {
    id: "backend-infra",
    titleKey: "skills_backend",
    icon: "Database",
    colorClass: "text-candy-secondary border-candy-secondary/20",
    badgeBg: "bg-candy-secondary/10 hover:bg-candy-secondary hover:text-white",
    skills: ["Java", "Spring Boot", "SQL", "Docker", "Python", "Node.js", "Express", "RESTful APIs"]
  },
  {
    id: "integrations",
    titleKey: "skills_integrations",
    icon: "Layers",
    colorClass: "text-candy-tertiary border-candy-tertiary/20",
    badgeBg: "bg-candy-tertiary/10 hover:bg-candy-tertiary hover:text-white",
    skills: ["API Consumption", "REST Services", "PocketBase", "Figma", "Git & GitHub", "OAuth Flows"]
  },
  {
    id: "ai-engineering",
    titleKey: "skills_ai",
    icon: "BrainCircuit",
    colorClass: "text-candy-primary border-candy-primary/20",
    badgeBg: "bg-candy-primary/10 hover:bg-candy-primary hover:text-white",
    skills: ["Antigravity", "Claude", "Codex", "OpenAI", "Prompt Eng.", "LLMs", "AI Assistants"]
  }
];

export const experiences: Experience[] = [
  {
    id: "exp1",
    titleKey: "exp1_title",
    subKey: "exp1_subtitle",
    descKey: "exp1_desc",
    statusKey: "journey_present",
    statusColor: "bg-candy-primary text-white border-candy-dark",
    dotColor: "bg-candy-primary"
  },
  {
    id: "exp2",
    titleKey: "exp2_title",
    subKey: "exp2_subtitle",
    descKey: "exp2_desc",
    statusKey: "journey_ongoing",
    statusColor: "bg-candy-secondary text-white border-candy-dark",
    dotColor: "bg-candy-secondary"
  },
  {
    id: "exp3",
    titleKey: "exp3_title",
    subKey: "exp3_subtitle",
    descKey: "exp3_desc",
    statusKey: "journey_completed",
    statusColor: "bg-candy-tertiary text-candy-dark border-candy-dark",
    dotColor: "bg-candy-tertiary"
  }
];
