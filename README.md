# 📚 EstudAI

> ### Estude com quem vive a mesma jornada que você.

<div align="center">

![Badge de Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Badge da Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-blue)
![Badge do React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Badge do Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?logo=vite)
![Badge do Firebase](https://img.shields.io/badge/Firebase-10.12.2-FFCA28?logo=firebase)

</div>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-tecnologias-utilizadas">Tecnologias</a> •
  <a href="#-como-executar">Como Executar</a> •
  <a href="#-nossa-equipe">Equipe</a> •
  <a href="#-como-contribuir">Como Contribuir</a>
</p>

## 🚀 Sobre o Projeto

**EstudAI** nasceu da visão de que o aprendizado não precisa ser uma jornada solitária. E se pudéssemos criar um espaço onde estudantes, criadores de conteúdo e entusiastas da educação pudessem se conectar, compartilhar conhecimento e crescer juntos?

Inspirado no dinamismo e na conectividade de redes sociais como o Instagram, o EstudAI é uma plataforma totalmente voltada para a **educação**. Aqui, cada post é uma lição, cada comentário é uma discussão produtiva e cada perfil é um portfólio de conhecimento. Este projeto também se destaca por ser parte dos **Projetos Interdisciplinares da Faculdade de Tecnologia de Matão (FATEC - Matão)**, aplicando conceitos acadêmicos para solucionar desafios do mundo real.

Nossa missão é transformar a maneira como as pessoas estudam, tornando o processo mais **colaborativo, interativo e divertido**. Com elementos de gamificação para motivar e a futura integração de Inteligência Artificial (**AI**) para personalizar a experiência, queremos ser a maior comunidade de estudantes da internet.

## ✨ Funcionalidades

O projeto está em desenvolvimento, mas aqui estão as funcionalidades planejadas e em implementação:

-   [x] **Criação de Perfis:** Perfis personalizáveis para os usuários.
-   [x] **Feed de Conteúdo:** Poste e consuma conteúdo educacional em diversos formatos (resumos, anotações, flashcards, etc.).
-   [ ] **Interações:** Curta e comente nos posts para iniciar discussões.
-   [ ] **Sistema de Seguir:** Conecte-se com perfis que te inspiram.
-   [ ] **Gamificação:** Ganhe medalhas, troféus e suba em rankings por suas contribuições.
-   [ ] **Inteligência Artificial (Futuro):**
    -   Feed personalizado com sugestões de conteúdo.
    -   Geração de quizzes a partir de posts.
    -   Chatbot para tirar dúvidas.
-   [ ] **Grupos de Estudo:** Crie ou participe de comunidades focadas em temas específicos.

## 🛠️ Tecnologias Utilizadas

Este projeto está sendo construído com as mais modernas tecnologias do mercado, visando performance, escalabilidade e uma ótima experiência de desenvolvimento.

| Frontend                                                                 | Backend (BaaS)                                                                   | Ferramentas                                                                   |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black) | ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black) | ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)     |
|                                                                          |                                                                                  | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white) |

-   **React:** Biblioteca para construir interfaces de usuário ricas e reativas.
-   **Vite:** Ferramenta de build extremamente rápida que oferece uma experiência de desenvolvimento ágil.
-   **Firebase:** Plataforma do Google que serve como nosso backend, gerenciando:
    -   **Authentication:** Para login e segurança dos usuários.
    -   **Firestore:** Como nosso banco de dados NoSQL em tempo real.
    -   **Storage:** Para armazenamento de imagens e arquivos.

## ⚙️ Como Executar

Siga os passos abaixo para rodar o EstudAI em seu ambiente local.

**Pré-requisitos:**
* Node.js (versão 18 ou superior)
* npm ou yarn
* Uma conta no [Firebase](https://firebase.google.com/) para criar seu próprio projeto backend.

```bash
# 1. Clone o repositório
$ git clone [https://github.com/ihugow/estudAI.git](https://github.com/ihugow/estudAI.git)

# 2. Acesse a pasta do projeto
$ cd estudAI

# 3. Instale as dependências
$ npm install
# ou
$ yarn install

# 4. Crie um arquivo .env na raiz do projeto
# Copie as variáveis de ambiente do arquivo .env.example e preencha com suas credenciais do Firebase
$ cp .env.example .env

# 5. Inicie o servidor de desenvolvimento
$ npm run dev
# ou
$ yarn dev
```

Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no seu terminal).

## 💡 Nossa Equipe

Este projeto é o resultado da paixão e do trabalho colaborativo de uma equipe dedicada a revolucionar a educação.

| Foto                                                                 | Nome                                                                   | Função                               | GitHub                                                                    |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/134406818?s=400&u=6952d3850a30b0f2d4d2d039190158bda0340c86&v=4" width="100"> | **Hugo Oliveira** | Desenvolvedor FullStack e Idealizador | [Link para o GitHub](https://github.com/ihugow) |

*Substitua as imagens e os links pelos perfis reais do GitHub.*

## 🤝 Como Contribuir

Ficamos felizes com o seu interesse em contribuir com o EstudAI! Toda ajuda é bem-vinda para tornar esta plataforma ainda melhor.

1.  **Faça um Fork** do projeto.
2.  Crie uma nova branch para sua funcionalidade: `git checkout -b feature/sua-feature-incrivel`.
3.  Faça o commit de suas mudanças: `git commit -m 'feat: Adiciona sua feature incrível'`.
4.  Envie suas mudanças para a sua branch: `git push origin feature/sua-feature-incrivel`.
5.  Abra um **Pull Request**.

## 📄 Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Feito com ❤️ por Hugo, Érica e Luan.
</p>
