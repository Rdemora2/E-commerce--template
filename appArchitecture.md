# Arquitetura da aplicação

Este documento descreve a estrutura de pastas recomendada para um projeto Nuxt.js e fornece orientações sobre quando e como usar as tecnologias listadas nas dependências e devDependencies do arquivo `package.json`.

## Estrutura de Pastas

├── public/
├── server/
├── src/
│ ├── assets/
│ ├── components/
│ ├── layouts/
│ ├── pages/
│ ├── plugins/
│ ├── static/
│ └── store/
├── types/
├── nuxt.config.ts
├── tailwind.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── eslint.config.mjs

### Descrição dos principais Diretórios

- **`public/`**: Contém arquivos estáticos que serão servidos diretamente pelo servidor, como a favicon.ico.

- **`server/`**: Armazena lógicas relacionadas ao servidor, como por exemplo rotas de api.

- **`src/`**: Contém todo o código-fonte do aplicativo.

  - **`assets/`**: Arquivos estáticos como imagens, estilos, fontes, etc.

  - **`components/`**: Componentes Vue reutilizáveis.

  - **`layouts/`**: Layouts globais que podem ser compartilhados entre várias páginas.

  - **`pages/`**: Páginas Vue que compõem o site.

  - **`plugins/`**: Plugins do Nuxt.js, como Vue.js, Axios, etc.

  - **`static/`**: Arquivos estáticos que serão servidos diretamente.

  - **`store/`**: Armazena módulos Vuex, se aplicável.

- **`types/`**: Contém definições de tipos TypeScript personalizadas.

- **`.env`**: Armazena variáveis de ambiente sensíveis, como chaves de API, credenciais de banco de dados.

- **`.env.example`**: Exemplo de como o arquivo .env deve ser, já que o mesmo não é carregado no git(por motivos de segurança).

- **`nuxt.config.ts`**: Arquivo de configuração do Nuxt.js. Para maiores informações [clique aqui](https://nuxt.com/docs/guide/directory-structure/nuxt-config)

- **`tailwind.config.ts`**: Arquivo de configuração do tailwind css. Para maiores informações [clique aqui](https://tailwindcss.com/docs/configuration)

- **`tsconfig.json`**: Configurações do TypeScript para o projeto. Para maiores informações [clique aqui](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

- **`eslint.config.mjs`**: Configuração do ESLint para garantir a qualidade do código. Para maiores informações [clique aqui](https://eslint.org/docs/latest/use/configure/configuration-files)


## Uso de Tecnologias

A seguir estão as tecnologias utilizadas e suas finalidades:

### Dependências

- **`vue`**: Poderosa ferramenta para criar interfaces de usuário dinâmicas e interativas, oferecendo uma abordagem progressiva, reatividade, componentização, um ecossistema vibrante e desempenho otimizado.

- **`primevue`**: Simplifica o desenvolvimento de interfaces de usuário ao fornecer uma ampla gama de componentes pré-construídos, flexibilidade de customização, compatibilidade com Vue.js e uma documentação abrangente.

- **`nuxt`**: Framework Vue.js com suporte para SSR/SPA, roteamento automático, configurações pré-definidas e integração com um amplo ecossistema de plugins e ferramentas.

- **`@nuxt/image`**: Oferece uma solução completa para lidar com imagens na aplicação, proporcionando otimização automática, adaptação responsiva e outras funcionalidades úteis para melhorar o desempenho e a experiência do usuário.

- **`@nuxtjs/google-fonts`**: Simplifica a adição e o gerenciamento de fontes do Google na aplicação, melhorando a acessibilidade e o design do seu aplicativo ou site.

- **`@nuxtjs/seo`**: Implementa práticas recomendadas de SEO na aplicação, ajudando a melhorar a visibilidade e o ranking do seu site nos mecanismos de busca e nas redes sociais.

- **`nuxt-link-checker`**: Ferramenta para garantir a integridade dos links internos da aplicação, contribuindo para uma experiência de usuário melhorada e facilitando a manutenção contínua do site.

- **`nuxt-typed-router`**: Proporciona uma experiência de desenvolvimento mais robusta e segura ao adicionar tipagem estática para rotas em projetos Nuxt.js, reduzindo erros e melhorando a manutenção do código.

- **`@nuxtjs/tailwindcss`**: Integra o Tailwind CSS para estilização.

- **`@pinia/nuxt`**: Responsável pelo gerenciamento de estado, oferecendo uma solução robusta, reativa e fácil de usar, com suporte para tipagem forte e integração perfeita com o Vue.js e o Nuxt.js.

- **`@vee-validate/nuxt`**: Biblioteca de validação de formulários, oferecendo uma solução poderosa e flexível, com suporte para validação reativa, validação assíncrona e personalização de mensagens de erro.

## Conclusão

A estrutura de pastas e as tecnologias utilizadas fornecem uma base sólida para o desenvolvimento de aplicativos usando Vue 3 e Nuxt 3.
