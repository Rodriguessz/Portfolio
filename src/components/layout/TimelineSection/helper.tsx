import { AnimatedCertifications } from "@/components/ui/AnimatedCertifications";
import { AnimatedProjects } from "@/components/ui/AnimatedProjects";
import { Timeline } from "@/components/ui/Timeline";
import { IconCalendarWeek } from "@tabler/icons-react";


export const experience = [
  {
    title: "Alstom",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek />
          <h4 className="text-base md:text-2xl text-center">2025 - Current</h4>

        </div>
        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
          -
        </p>
      </div>
    ),
  },

  {
    title: "Worklab Sistemas",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek />
          <h4 className="text-base md:text-2xl text-center">2024 - 2025</h4>

        </div>

        <div className="flex flex-col g-1">
          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            Developed custom tools and new features using PHP, Laravel, and MySQL, resulting in faster and more reliable processes.
          </p>

          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            - Implemented a new interface layout, applying UI and UX concepts, using JavaScript, React, and Styled-components, significantly improving the end-user experience.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="/filtersFeature.png"
            alt="Filters Feature project"
            className="h-28 w-full rounded-lg object-cover md:h-38 lg:h-50 hidden sm:block"
          />
          <img
            src="/dinamicTable.png"
            alt="Dinamic Table Project"
            className="h-28 w-full rounded-lg object-cover md:h-38 lg:h-50 hidden sm:block"
          />


        </div>
      </div>
    ),
  },
  {
    title: "Ybox",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek />
          <h4 className="text-base md:text-2xl text-center">2022 - 2024</h4>

        </div>

        <div className="flex flex-col g-1">
          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            - Collaborated on supporting and customizing the company's internal platform to align with business needs using HTML, CSS ,Javascript and PHP.
          </p>

          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            - Utilized Google Tag Manager (GTM) to implement and configure scripts, tags, and events on websites, enhancing data analysis and optimizing online strategies.
          </p>
        </div>
      </div>
    ),
  },
];

export const education = [
  
  {
    title: "Explorer Bootcamp",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek />
          <h4 className="text-base md:text-2xl text-center">2024 - 2025</h4>

        </div>

        <div className="flex flex-col g-1">
          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            Rockeatseat
          </p>

          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            - HTML5, CSS3, JavaScript, Nodejs, Express.js, Knex.js, ReactJs, git, SQL, figma. 
          </p>
        </div>

        {/* <div className="grid grid-cols-2 gap-4">
          <img
            src="/filtersFeature.png"
            alt="Filters Feature project"
            className="h-28 w-full rounded-lg object-cover md:h-38 lg:h-50 hidden sm:block"
          />
          <img
            src="/dinamicTable.png"
            alt="Dinamic Table Project"
            className="h-28 w-full rounded-lg object-cover md:h-38 lg:h-50 hidden sm:block"
          />


        </div> */}
      </div>
    ),
  },

  {
    title: "Software Engineering",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek />
          <h4 className="text-base md:text-2xl text-center">2023 - 2027</h4>

        </div>
        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
          FIAP - Faculdade de Informática e Admnistração Paulista
        </p>
      </div>
    ),
  },

  {
    title: "Fullstack Web Development",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek />
          <h4 className="text-base md:text-2xl text-center">2020 - 2022</h4>

        </div>

        <div className="flex flex-col g-1">
          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            Senai - Ricardo Lerner
          </p>

          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            - HTML5, CSS3, JavaScript, Nodejs, Java, Vraptor, Springboot, git, MySQL, Oracle, Selenium, Networks.
          </p>
        </div>

        {/* <div className="grid grid-cols-2 gap-4">
          <img
            src="/filtersFeature.png"
            alt="Filters Feature project"
            className="h-28 w-full rounded-lg object-cover md:h-38 lg:h-50 hidden sm:block"
          />
          <img
            src="/dinamicTable.png"
            alt="Dinamic Table Project"
            className="h-28 w-full rounded-lg object-cover md:h-38 lg:h-50 hidden sm:block"
          />


        </div> */}
      </div>
    ),
  },
  

];

const certifications = [
  {
    quote:
      "Fundamentos de HTML, CSS, JavaScript, Git, GitHub, React e Node.js além de soft skills voltadas para o mercado de programação.",
    name: "Explorer",
    designation: "Rocketseat",
    src: "/explorer.png",
    href: "https://app.rocketseat.com.br/certificates/b593a829-4d40-4a9c-9d16-12cf906ee38e",
    date: "02/05/2025"
  },

  {
    quote:
      "Utilização do PM2; Deploy e utilização do Render; Variáveis de ambiente; Deploy e utilização da Netlify; Testes automatizados; Jest",
    name: "Deploy e Testes automatizados",
    designation: "Rocketseat",
    src: "/deploy.png",
    href: "https://app.rocketseat.com.br/certificates/438c4935-f536-48ec-8a11-f2f2e923f6c8",
    date: "17/12/2024"
  },

  {
    quote:
      "Autenticação no back-end, Upload de imagens, Integração de API em Node.js com front-end em React.js",
    name: "API restful",
    designation: "Rocketseat",
    src: "/api.png",
    href: "https://app.rocketseat.com.br/certificates/17084d50-8cc3-4a38-b65d-a7ba7570215d",
    date: "14/11/2024"
  },

  {
    quote:
      "Fundamentos de ReactJS; Vite; styled-components; Fragment; Adicionar fontes personalizadas; Components; Props; Rotas; Navegação; Estruturar pastas e arquivos no ReactJS; Executar um projeto ReactJS.",
    name: "React",
    designation: "Rocketseat",
    src: "/react.png",
    href: "https://app.rocketseat.com.br/certificates/42946ae9-61f0-47ed-a44e-5a981d6977a6",
    date: "11/10/2024"
  },

  {
    quote:
      "Criação de APIs; Node.js; Express; rotas; métodos HTTP; Middlewares; bancos de dados relacionais; comandos SQL; SQLite; comandos DML; comandos DDL; gerenciadores de dependências; criptografia de dados; tratamento de erros.",
    name: "Node.JS",
    designation: "Rocketseat",
    src: "/node.png",
    href: "https://app.rocketseat.com.br/certificates/6176e94f-94fb-40c8-93c0-4faa3b81f4da",
    date: "06/09/2024"
  },
  
  {
    quote:
      "Introdução ao Git; sistemas de controle de versão; HEAD no git; comandos git básicos; git diff; git —amend; git restore; GitHub; repositórios no GitHub; .gitignore e .gitkeep; git clone; git pull; criação e atualização de README.md.",
    name: "Git",
    designation: "Rocketseat",
    src: "/git.png",
    href: "https://app.rocketseat.com.br/certificates/01716307-c318-456a-be2f-20105cd163b8",
    date: "15/05/2024"
  },

  {
    quote:
      "Tipos de dados, operadores, estruturas de repetição, condicionais, funções, DOM, callback, princípios de Clean Code, modularização, escopo, padrão factory, injeção de dependências, manipulação de arquivos, SPA, eventos, rotas, assincronismo, conceitos da POO, desestruturação, chamado de API, imutabilidade.",
    name: "Javascript",
    designation: "Rocketseat",
    src: "/js.png",
    href: "https://app.rocketseat.com.br/certificates/40642c14-734d-4908-92ce-36d69365809b",
    date: "28/05/2024"
  },

  {
    quote:
      "Estrutura da web, estrutura do HTML, tags HTML, semântica, acessibilidade, conceitos de CSS, seletores CSS, animações em CSS, grid e flexbox, formulários, inputs, variáveis em CSS, responsividade.",
    name: "HTML & CSS",
    designation: "Rocketseat",
    src: "/htmlcss.png",
    href: "https://app.rocketseat.com.br/certificates/137b9ce2-1ef5-4b52-8fc4-1deba22a00b4",
    date: "30/04/2024"
  },

  {
    quote:
      "Desenvolvimento de uma aplicação front-end em ReactJS, aplicação dos conceitos de Propriedades, Estados e Componentes, tipagem com Typescript, tooling com Vite, interface responsiva com TailwindCSS, consumo de API Node.js, uso de URL states.",
    name: "NLW Unite - React",
    designation: "Rocketseat",
    src: "/nlwreact.png",
    href: "https://app.rocketseat.com.br/certificates/b8b3494f-130b-4fa3-b69c-0adc678c80c6",
    date: "05/04/2024"
  },

  {
    quote:
      "Desenvolvimento de uma aplicação back-end em Node.js, aplicação dos conceitos de API REST, utilizando TypeScript, Fastify como framework, integração do Prisma ORM, Docker para lidar com serviços de PostgreSQL e Redis, Zod para validação de dados e WebSocket para comunicação real-time.",
    name: "NLW Unite - NodeJS",
    designation: "Rocketseat",
    src: "/nlwnode.png",
    href: "https://app.rocketseat.com.br/certificates/76e0fc19-5584-4beb-b309-12d90f4e91de",
    date: "09/02/2024"
  },

  {
    quote:
      "Rede de computadores é um conjunto de dispositivos interconectados que compartilham recursos, informações e serviços, permitindo a comunicação entre si.",
    name: "Redes de Computadores",
    designation: "FIAP",
    src: "/redes.png",
    href: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=464aaa4b276c4210dfd14fed5c2ae182&action=view",
    date: "28/04/2025"
  },

  {
    quote:
      "Este curso oferece a possibilidade de conhecer cloud computing, desde sua arquitetura e aplicações até sua implantação e modelos de serviços.",
    name: "Cloud Fundamentals",
    designation: "FIAP",
    src: "/cloud.png",
    href: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=91105a3ec279d18ad84d35b5e6a7cd85&action=view",
    date: "28/04/2025"
  },

  {
    quote:
      "Instalação do Python 3; Lidando com a entrada do usuário; Testando valores; A sequência do jogo; Iterando de maneira diferente; Gerando números aleatórios; Nível e Pontuação; Organizando ainda melhor o nosso código; Comparando Python com C",
    name: "Python",
    designation: "Alura",
    src: "/python.png",
    href: "https://cursos.alura.com.br/certificate/coderenzo/python-introducao-a-linguagem",
    date: "21/11/2022"
  },



]

export const tabs = [
  {
    title: "Experiência",
    value: "experiencia",
    component: (
      <div>
        <Timeline data={experience} />
      </div>
    ),
  },

  {
    title: "Educação",
    value: "educacao",
    component: (
      <div>
        <Timeline data={education} />
      </div>
    ),
  },

  {
    title: "Certificações",
    value: "certificacoes",
    component: (
      <div className="flex justify-center">
        <AnimatedCertifications certification={certifications}/>
      </div>
    ),
  },
  
  

];