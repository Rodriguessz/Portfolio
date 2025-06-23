import { IconCalendarWeek, IconBriefcase, IconSchool, IconExternalLink } from "@tabler/icons-react";

import { LinkPreview } from "@/components/ui/LinkPreview";



export const experiencePT = [

  {

    title: "Alstom",

    content: (

      <div className="flex flex-col gap-5">

        <div className="w-full flex gap-5 items-center">

          <IconCalendarWeek className="text-black dark:text-zinc-300 " />

          <h4 className="text-base md:text-2xl text-center">2025 - Atual</h4>

        </div>



        <div className="w-full flex gap-3 items-center mt-2">

          <IconBriefcase className="text-black dark:text-zinc-500 " />

          <h5 className="text-sm md:text-base text-black dark:text-zinc-500 ">Estagiário de Verificação e Validação de Software</h5>

        </div>



        <ul className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl flex flex-col gap-2">

          <strong>

            - Redução de 50% no tempo de sincronização entre planilhas e CAD:

          </strong>



          <li className="pl-6">

            ● Desenvolvi uma API interna em Flask para automatizar o preenchimento de planilhas com base em alterações detectadas em arquivos CAD.

          </li>

          <li className="pl-6">

            ● Implementei uma interface gráfica personalizada, melhorando a experiência do usuário e reduzindo erros operacionais

          </li>

        </ul>



        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">

          - Auxílio na configuração de plataformas e ambientes de rede para execução de testes em

          sistemas embarcados.

        </p>



        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">

          - Realizo verificação e validação de softwares embarcados para sistemas ferroviários,

          assegurando conformidade com normas técnicas e requisitos de segurança.

        </p>



        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">

          <strong>Tags:</strong> Python, Flask, Express.js, React.js, REST API, Git, GitLab, Linux, SQL, Azure, Mysql, SQL.

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




        <div className="w-full flex gap-3 items-center mt-2">

          <IconBriefcase className="text-black dark:text-zinc-500 " />

          <h5 className="text-sm md:text-base text-black dark:text-zinc-500 ">Engenheiro de Software Jr</h5>

        </div>




        <div className="flex flex-col g-1">

          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">

            - Implementei e mantive <strong>funcionalidades críticas</strong> no sistema da empresa, atuando com

            <strong> Laravel, Node.js e React.js</strong>, garantindo performance, manutenibilidade e boa

            experiência do usuário.

          </p>

          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">



            - Versionamento e colaboração com <strong>Git</strong>, utilizando fluxos baseados em <strong>Gitflow</strong>, ramificações específicas por tarefa e <strong>pull requests</strong> para revisão e integração contínua em equipe.



          </p>



          <ul className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl flex flex-col gap-2">

            <strong>

              - Redução de 30% no tempo de resposta de relatórios estatísticos:

            </strong>



            <li className="pl-6">

              ● Reestruturei toda a lógica dos relatórios em uma nova API utilizando Laravel.

            </li>

            <li className="pl-6">

              ● Eliminei queries redundantes, consultas dentro de loops e gargalos de banco de

              dados.

            </li>

            <li className="pl-6">

              ● Modelei a arquitetura em camadas (controllers, services, repositories).

            </li>

          </ul>



          <ul className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl flex flex-col gap-2">

            <strong>

              - Redução de 25% nas reclamações de bugs pelo suporte ao refatorar a interface do sistema com React.js e Tailwind CSS, implementando design responsivo e validações de entrada.

            </strong>



            <li className="pl-6">

              ● Refatorei a interface com React.js e Tailwind CSS, adotando componentização e boas práticas de organização visual.

            </li>

            <li className="pl-6">

              ● Implementei responsividade e validações de entrada no front-end, reduzindo falhas de uso e melhorando a experiência do usuário.

            </li>

          </ul>



          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">

            <strong>Tags:</strong> PHP, Laravel, Node.js (Express, Fastify), React.js, Vue.js, Tailwind CSS, Git, GitHub, SQL,

            Docker, REST APIs, AWS.

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



        <div className="w-full flex gap-3 items-center mt-2">

          <IconBriefcase className="text-black dark:text-zinc-500 " />

          <h5 className="text-sm md:text-base text-black dark:text-zinc-500 ">Estagiário de Desenolvimento de Software</h5>

        </div>



        <div className="flex flex-col g-1">

          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">

            - Desenvolvimento de landing pages com fluxos personalizados para campanhas de clientes, utilizando <strong>

              PHP no back-end e HTML, CSS, Bootstrap e JavaScript no front-end.

            </strong>

          </p>



          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">

            - Automatização de processos internos de configuração e testes de campanhas, reduzindo significativamente o tempo entre criação e ativação.

          </p>



          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">

            - Criação de scripts em <strong>JavaScript</strong> para captação de leads e integração via Google Tag Manager, garantindo rastreamento completo e preciso das interações.

          </p>

        </div>

      </div>

    ),

  },

];



export const educationPT = [

  {

    title: "Engenharia de Software",

    content: (

      <div className="flex flex-col gap-5">

        <div className="w-full flex gap-5 items-center">

          <IconCalendarWeek className="text-black dark:text-zinc-300 " />

          <h4 className="text-base md:text-2xl text-center">2023 - 2027</h4>

        </div>



        <div className="w-full flex gap-3 items-center mt-2">

          <IconSchool className="text-black dark:text-zinc-500 " />

          <h5 className="text-sm md:text-base text-black dark:text-zinc-500">FIAP - Faculdade de Informática e Administração Paulista</h5>

        </div>




        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">

          - Desenvolvimento de aplicações completas utilizando Java (Spring + Spring Security), com foco em boas práticas de orientação a objetos, princípios SOLID e arquitetura DDD.

        </p>



        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">

          - Construção de interfaces responsivas com HTML, CSS, JavaScript, React Native, Next.js e TailwindCSS, aplicando conceitos de UX/UI.

        </p>

        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">

          - Implementação de algoritmos clássicos de estrutura de dados como pilhas, filas, listas ligadas, árvores binárias e grafos, utilizando Python.

        </p>

        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">

          - Criação e modelagem de bancos de dados relacionais com Oracle, desenvolvendo desde os modelos conceitual, lógico e físico até a aplicação prática em sistemas integrados.

        </p>

        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">

          - Desenvolvimento de projetos de Internet das Coisas (IoT) com Arduino e linguagem C++, focando em automação e integração com sensores e atuadores.

        </p>

        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">

          - Estudo aprofundado de redes de computadores, incluindo os modelos OSI, TCP/IP, UDP, e uso de ferramentas como Cisco Packet Tracer para simulação e análise de infraestrutura de rede.

        </p>



        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">

          - Participação em projetos multidisciplinares com foco em aprendizado prático, integração entre áreas e resolução de problemas reais.

        </p>



        <LinkPreview className="font-bold flex mb-4 gap-1 items-center" url="https://github.com/FI4P/">

          Visite o repositório

          <IconExternalLink size={18} />

        </LinkPreview>



      </div>

    ),

  },



  {

    title: "Desenvolvimento Web Fullstack",

    content: (

      <div className="flex flex-col gap-5">

        <div className="w-full flex gap-5 items-center">



          <IconCalendarWeek className="text-black dark:text-zinc-300 " />

          <h4 className="text-base md:text-2xl text-center">2020 - 2022</h4>

        </div>




        <div className="w-full flex gap-3 items-center mt-2">

          <IconSchool className="text-black dark:text-zinc-500 " />

          <h5 className="text-sm md:text-base text-black dark:text-zinc-500">Escola SENAI de Informática</h5>

        </div>





        <div className="flex flex-col g-1">

          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">

            - Implementação de interfaces de usuário com <strong>React.js, utilizando Tailwind CSS e Bootstrap.</strong>

          </p>

          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">

            - Desenvolvimento de APIs utilizando Node.js e Express.js, Java e Spring Boot.

          </p>



          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">

            - Integrações com bancos de dados Oracle e MySQL.

          </p>



          <LinkPreview className="font-bold flex mb-4 gap-1 items-center" url="https://github.com/Senai-FullStack">

            Visite o repositório

            <IconExternalLink size={18} />

          </LinkPreview>



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