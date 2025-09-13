# 🗺️ Roadmap do Gênese CMS

Este documento descreve o plano de desenvolvimento e as metas para as futuras versões do OctoPress CMS. Nossa estratégia é baseada em lançamentos incrementais, focando em entregar um conjunto coeso de funcionalidades a cada versão.

---

### ✅ v1.0 - A Fábrica de Blogs (MVP)

**Meta: Permitir que um novo usuário crie um blog Jekyll funcional em sua conta do GitHub sem esforço.**

- [x] **Arquitetura Base:** Estruturar o projeto em módulos de serviços (Auth, UI, API).
- [ ] **Autenticação:** Implementar o fluxo de login seguro com GitHub OAuth (PKCE).
- [ ] **Criação de Blog:** Orquestrar a criação de um novo repositório a partir de um template pré-definido.
- [ ] **Publicação Automática:** Configurar o template para que o GitHub Pages seja ativado automaticamente no novo repositório.
- [ ] **Interface de Onboarding:** Desenvolver a interface de usuário para todo o fluxo de criação do blog.

---

### 📝 v1.1 - O Primeiro Post

**Meta: Permitir que o usuário crie e publique seu primeiro conteúdo no blog recém-criado.**

- [ ] **Gerenciador de Conteúdo (`ContentService`):** Implementar a lógica para gerenciar arquivos no repositório.
- [ ] **Sistema de Rascunhos:** Criar e salvar rascunhos como arquivos JSON na pasta `_cms_drafts/`.
- [ ] **Fluxo de Publicação:** Implementar a lógica para converter um rascunho JSON em um post Markdown (`.md`) na pasta `_posts/`.
- [ ] **Interface do Dashboard:** Criar uma tela principal onde o usuário possa ver seus posts e rascunhos.
- [ ] **Editor de Texto Básico:** Integrar um editor de texto simples (`<textarea>`) para escrita.

---

### ✨ v1.2 - Experiência de Edição Aprimorada

**Meta: Tornar a escrita de conteúdo mais rica e intuitiva.**

- [ ] **Editor WYSIWYG:** Substituir o editor básico por uma biblioteca avançada (ex: Toast UI Editor).
- [ ] **Gerenciador de Mídia:** Permitir o upload de imagens para uma pasta `assets/images/` no repositório do usuário.
- [ ] **Edição de Posts:** Implementar a funcionalidade de editar e salvar posts já publicados.

---

### ⚙️ v2.0 - Nível WordPress

**Meta: Oferecer funcionalidades de gerenciamento e personalização avançadas.**

- [ ] **Gerenciador de Páginas:** Adicionar suporte para criar e editar páginas estáticas (ex: "Sobre", "Contato").
- [ ] **Configurações do Site:** Criar uma interface para que o usuário possa editar o arquivo `_config.yml` (título do site, descrição, etc.) sem tocar no código.
- [ ] **Gerenciador de Temas:** Explorar a possibilidade de permitir que o usuário troque o tema do seu blog Jekyll.
