import { IconCalendarWeek } from "@tabler/icons-react";

export const experiencePT = [
  {
    title: "Alstom",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek className="text-black dark:text-zinc-300 "/>
          <h4 className="text-base md:text-2xl text-center">2025 - Atual</h4>
        </div>
        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
          Estagiário na área de Verificação e Validação de Software, contribuindo para garantir a qualidade e segurança de sistemas embarcados utilizados em linhas de metrô no Brasil e no mundo.
        </p>
      </div>
    ),
  },

  {
    title: "Worklab Sistemas",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek className="text-black dark:text-zinc-300 " />
          <h4 className="text-base md:text-2xl text-center">2024 - 2025</h4>
        </div>

        <div className="flex flex-col g-1">
          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            Desenvolvi ferramentas personalizadas e novas funcionalidades com PHP, Laravel e MySQL, resultando em processos mais rápidos e confiáveis.
          </p>

          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            Implementei um novo layout de interface aplicando conceitos de UI e UX com JavaScript, React e Styled-components, melhorando significativamente a experiência do usuário.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="/filtersFeature.png"
            alt="Recurso de Filtros"
            className="h-28 w-full rounded-lg object-cover md:h-38 lg:h-50 hidden sm:block"
          />
          <img
            src="/dinamicTable.png"
            alt="Tabela Dinâmica"
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
          <IconCalendarWeek className="text-black dark:text-zinc-300 " />
          <h4 className="text-base md:text-2xl text-center">2022 - 2024</h4>
        </div>

        <div className="flex flex-col g-1">
          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            Colaborei na manutenção e customização da plataforma interna da empresa para atender às necessidades do negócio utilizando HTML, CSS, JavaScript e PHP.
          </p>

          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            Utilizei o Google Tag Manager (GTM) para implementar e configurar scripts, tags e eventos em sites, otimizando a análise de dados e estratégias online.
          </p>
        </div>
      </div>
    ),
  },
];

export const educationPT = [
  {
    title: "Explorer Bootcamp",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek className="text-black dark:text-zinc-300 " />
          <h4 className="text-base md:text-2xl text-center">2024 - 2025</h4>
        </div>

        <div className="flex flex-col g-1">
          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            Rocketseat
          </p>

          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            HTML5, CSS3, JavaScript, Node.js, Express.js, Knex.js, ReactJs, Git, SQL, Figma.
          </p>
        </div>
      </div>
    ),
  },

  {
    title: "Engenharia de Software",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek className="text-black dark:text-zinc-300 "/>
          <h4 className="text-base md:text-2xl text-center">2023 - 2027</h4>
        </div>
        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
          FIAP - Faculdade de Informática e Administração Paulista
        </p>
      </div>
    ),
  },

  {
    title: "Desenvolvimento Web Fullstack",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek className="text-black dark:text-zinc-300 "/>
          <h4 className="text-base md:text-2xl text-center">2020 - 2022</h4>
        </div>

        <div className="flex flex-col g-1">
          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            SENAI - Ricardo Lerner
          </p>

          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            HTML5, CSS3, JavaScript, Node.js, Java, Vraptor, Spring Boot, Git, MySQL, Oracle, Selenium, Redes.
          </p>
        </div>
      </div>
    ),
  },
];

export const certificationsPT = [
  {
    quote:
      "Fundamentos de HTML, CSS, JavaScript, Git, GitHub, React e Node.js, além de soft skills voltadas ao mercado de programação.",
    name: "Explorer",
    designation: "Rocketseat",
    src: "/explorer.png",
    href: "https://app.rocketseat.com.br/certificates/b593a829-4d40-4a9c-9d16-12cf906ee38e",
    date: "02/05/2025"
  },
  {
    quote:
      "Uso do PM2, deploy no Render, variáveis de ambiente, deploy na Netlify e testes automatizados com Jest.",
    name: "Deploy e Testes Automatizados",
    designation: "Rocketseat",
    src: "/deploy.png",
    href: "https://app.rocketseat.com.br/certificates/438c4935-f536-48ec-8a11-f2f2e923f6c8",
    date: "17/12/2024"
  },
  {
    quote:
      "Autenticação no back-end, upload de imagens, integração entre APIs Node.js e front-end React.js.",
    name: "API RESTful",
    designation: "Rocketseat",
    src: "/api.png",
    href: "https://app.rocketseat.com.br/certificates/17084d50-8cc3-4a38-b65d-a7ba7570215d",
    date: "14/11/2024"
  },
  {
    quote:
      "Fundamentos de ReactJS, Vite, styled-components, componentes, props, rotas, navegação e estruturação de pastas.",
    name: "React",
    designation: "Rocketseat",
    src: "/react.png",
    href: "https://app.rocketseat.com.br/certificates/42946ae9-61f0-47ed-a44e-5a981d6977a6",
    date: "11/10/2024"
  },
  {
    quote:
      "Criação de APIs com Node.js, Express, SQL, SQLite, criptografia, tratamento de erros e boas práticas com middlewares.",
    name: "Node.JS",
    designation: "Rocketseat",
    src: "/node.png",
    href: "https://app.rocketseat.com.br/certificates/6176e94f-94fb-40c8-93c0-4faa3b81f4da",
    date: "06/09/2024"
  },
  {
    quote:
      "Git básico e avançado, repositórios, branches, commits, git diff, amend, restore, clone e README.md.",
    name: "Git",
    designation: "Rocketseat",
    src: "/git.png",
    href: "https://app.rocketseat.com.br/certificates/01716307-c318-456a-be2f-20105cd163b8",
    date: "15/05/2024"
  },
  {
    quote:
      "Tipos, operadores, funções, DOM, callbacks, clean code, modularização, factory, API, POO, async e SPA.",
    name: "JavaScript",
    designation: "Rocketseat",
    src: "/js.png",
    href: "https://app.rocketseat.com.br/certificates/40642c14-734d-4908-92ce-36d69365809b",
    date: "28/05/2024"
  },
  {
    quote:
      "Estrutura da web, semântica HTML, acessibilidade, animações CSS, grid, flexbox, formulários e responsividade.",
    name: "HTML & CSS",
    designation: "Rocketseat",
    src: "/htmlcss.png",
    href: "https://app.rocketseat.com.br/certificates/137b9ce2-1ef5-4b52-8fc4-1deba22a00b4",
    date: "30/04/2024"
  },
  {
    quote:
      "Aplicação front-end em ReactJS com Vite e TailwindCSS, states, componentes, consumo de API e interface responsiva.",
    name: "NLW Unite - React",
    designation: "Rocketseat",
    src: "/nlwreact.png",
    href: "https://app.rocketseat.com.br/certificates/b8b3494f-130b-4fa3-b69c-0adc678c80c6",
    date: "05/04/2024"
  },
  {
    quote:
      "Aplicação back-end com Node.js, TypeScript, Fastify, Prisma ORM, Docker, Zod e WebSocket.",
    name: "NLW Unite - NodeJS",
    designation: "Rocketseat",
    src: "/nlwnode.png",
    href: "https://app.rocketseat.com.br/certificates/76e0fc19-5584-4beb-b309-12d90f4e91de",
    date: "09/02/2024"
  },
  {
    quote:
      "Fundamentos de redes de computadores, dispositivos, comunicação, recursos compartilhados e serviços.",
    name: "Redes de Computadores",
    designation: "FIAP",
    src: "/redes.png",
    href: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=464aaa4b276c4210dfd14fed5c2ae182&action=view",
    date: "28/04/2025"
  },
  {
    quote:
      "Conceitos de computação em nuvem, arquitetura, modelos de serviço, aplicações e implantação prática.",
    name: "Cloud Fundamentals",
    designation: "FIAP",
    src: "/cloud.png",
    href: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=91105a3ec279d18ad84d35b5e6a7cd85&action=view",
    date: "28/04/2025"
  },
  {
    quote:
      "Introdução ao Python, entrada de dados, estruturas de repetição, testes, aleatoriedade e comparação com C.",
    name: "Python",
    designation: "Alura",
    src: "/python.png",
    href: "https://cursos.alura.com.br/certificate/coderenzo/python-introducao-a-linguagem",
    date: "21/11/2022"
  }
];
