import bfc from "./assets/bfc.png";
import qtc from "./assets/qtc.png";
import hyupp from "./assets/hyupp.png";
import justa from "./assets/justa.png";
import speed from "./assets/speed.png";
import universal from "./assets/universal.png";
import ilist from "./assets/ilist.jpg";

export const projects = [
  {
    id: 1,
    name: "Bíblia Fiel Comentada",
    img: bfc,
    link: "https://play.google.com/store/apps/details?id=org.universal.bibliafiel_comentada&hl=pt_BR&gl=US",
    description: "Esta versão é comentada pelo Bispo Edir Macedo, exemplo de homem de fé e de conhecimento da palavra de Deus. Tenha todo o conteúdo da Bíblia para ler quando e onde quiser, direto do seu celular.",
    activities: "Trabalhei na criação e correções de endpoints para o App, criação e correções de módulos no painel administrativo, criação e modelagem de dados conforme as necessidades do modulo, versionamento de códigos com GIT e criação de documentação.",
    technologies: [
      { name: "PHP", color: "bg-[#777BB3]" },
      { name: "LARAVEL", color: "bg-[#EF3B2D]" },
      { name: "MYSQL", color: "bg-[#E58E00]" },
      { name: "HTML5", color: "bg-[#E44D26]" },
      { name: "CSS3", color: "bg-[#264DE4]" },
      { name: "JAVASCRIPT", color: "bg-[#F7DF1E]" },
    ],
  },
  {
    id: 2,
    name: "Quero te conhecer",
    img: qtc,
    link: "https://play.google.com/store/apps/details?id=org.universal.queroteconhecer&hl=pt_BR&gl=US",
    description: "Encontre alguém que tenha a fé e os objetivos iguais aos seus. Baixe agora! Não consigo encontrar ninguém na minha igreja! Se essa tem sido a sua reclamação, o nosso app vai ajudar você nessa busca para encontrar alguém que tenha a mesma fé e objetivos que os seus. Faça buscas por idade, lugar, afinidades e, ainda, veja fotos reais, previamente verificadas pela nossa equipe. Não perca a chance de viver o amor inteligente!",
    activities: "Trabalhei na criação e correções de endpoints para o App, criação e correções de módulos no painel administrativo, criação e modelagem de dados conforme as necessidades do modulo, versionamento de códigos com GIT e criação de documentação.",
    technologies: [
      { name: "PHP", color: "bg-[#777BB3]" },
      { name: "LARAVEL", color: "bg-[#EF3B2D]" },
      { name: "MYSQL", color: "bg-[#E58E00]" },
      { name: "HTML5", color: "bg-[#E44D26]" },
      { name: "CSS3", color: "bg-[#264DE4]" },
      { name: "JAVASCRIPT", color: "bg-[#F7DF1E]" },
    ],
  },
  {
    id: 3,
    name: "Hyupp",
    img: hyupp,
    link: "https://play.google.com/store/apps/details?id=com.juhui.hyupp201123&hl=pt_BR&gl=US",
    description: "A Hyupp é a CARGA EXTRA que vai salvar seu dia quando acabar a bateria do seu celular ou tablet. São viárias estações de locação de BATERIAS PORTÁTEIS (power banks) espalhadas pela cidade.",
    activities: "Trabalhei no desenvolvimento do front-end deste projeto.",
    technologies: [
      { name: "SCSS", color: "bg-[#D56EA3]" },
      { name: "HTML5", color: "bg-[#E44D26]" },
      { name: "IONIC5", color: "bg-[#478AFF]" },
      { name: "ANGULAR", color: "bg-[#C3002F]" },
      { name: "TYPESCRIPT", color: "bg-[#3178C6]" },
    ],
  },
  {
    id: 4,
    name: "Portal Universal",
    img: universal,
    link: "",
    description: "Com o aplicativo da Igreja Universal do Reino de Deus você vai se aproximar de Deus, através da leitura da Bíblia, mensagens de fé e muito mais! Além disso, fique por dentro de tudo o que acontece na Universal e acesse de forma interativa fotos, vídeos e podcasts. E você ainda pode deixar comentários e compartilhar a Palavra de Fé com seus amigos em suas redes sociais.",
    activities: "Trabalhei na criação e correções de endpoints para o App, criação e correções de módulos no painel administrativo, criação e modelagem de dados conforme as necessidades do modulo, versionamento de códigos com GIT e criação de documentação.",
    technologies: [
      { name: "PHP", color: "bg-[#777BB3]" },
      { name: "LARAVEL", color: "bg-[#EF3B2D]" },
      { name: "MYSQL", color: "bg-[#E58E00]" },
      { name: "HTML5", color: "bg-[#E44D26]" },
      { name: "CSS3", color: "bg-[#264DE4]" },
      { name: "JAVASCRIPT", color: "bg-[#F7DF1E]" },
    ],
  },
  {
    id: 5,
    name: "Justa Troca",
    img: justa,
    link: "https://play.google.com/store/apps/details?id=br.woobe.justatroca",
    description:
      "O aplicativo justa troca tem como objetivo facilitar a troca de bens materiais ou serviços.",
    activities:
      "Trabalhei na criação do front-end deste projeto, fiz toda a integração com o back-end e a disponibilização do aplicativo na loja Play Store.",
    technologies: [
      { name: "SCSS", color: "bg-[#D56EA3]" },
      { name: "HTML5", color: "bg-[#E44D26]" },
      { name: "IONIC5", color: "bg-[#478AFF]" },
      { name: "ANGULAR", color: "bg-[#C3002F]" },
      { name: "TYPESCRIPT", color: "bg-[#3178C6]" },
    ],
  },
  {
    id: 6,
    name: "Speed Now EAD",
    img: speed,
    link: "https://speednow.com.br/",
    description: "Construa a sua empresa de educação com apenas um clique e entre para o digital.",
    activities: "Trabalhei no desenvolvimento do front-end, no back-end, na modelagem de dados, criação de documentação e versionamento de códigos.",
    technologies: [
      { name: "PHP", color: "bg-[#777BB3]" },
      { name: "HTML5", color: "bg-[#E44D26]" },
      { name: "SCSS", color: "bg-[#D56EA3]" },
      { name: "JAVASCRIPT", color: "bg-[#F7DF1E]" },
      { name: "CODEIGNITER", color: "bg-[#EE4323]" },
    ],
  },
  {
    id: 7,
    name: "iList",
    img: ilist,
    link: "https://play.google.com/store/apps/details?id=com.ilist",
    description: "Um sistema de listar compras offline é um aplicativo ou programa de computador que permite aos usuários criar listas de compras sem a necessidade de uma conexão ativa com a internet. Ele é projetado para ser utilizado em dispositivos móveis, como smartphones e tablets, ou em computadores pessoais, e oferece recursos para ajudar os usuários a organizar e gerenciar suas compras.",
    activities: "Projeto desenvolvido do total zero até a publicação.",
    technologies: [
      { name: "TYPESCRIPT", color: "bg-[#3178C6]" },
      { name: "REACT NATIVE", color: "bg-[#61DAFB]" },
      { name: "CSS3", color: "bg-[#264DE4]" },
      { name: "HTML5", color: "bg-[#E44D26]" },
      { name: "SQLITE", color: "bg-[#E58E00]" },
    ],
  },
];
