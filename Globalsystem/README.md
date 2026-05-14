# 🌗 Context API App — Tema Claro/Escuro

Projeto React desenvolvido para a faculdade, utilizando **Context API** para gerenciamento global de estado.

## 🚀 Como iniciar

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar o servidor de desenvolvimento
npm run dev
```

O projeto abre em `http://localhost:5173`.

## 📦 O que o projeto tem

| Item | Descrição |
|------|-----------|
| **Context API** | Estado global `darkMode` compartilhado entre todos os componentes |
| **Provider** | `ThemeProvider` encapsula a aplicação e disponibiliza o contexto |
| **3 componentes consumindo** | `App`, `Header`, `Card` e `ThemeButton` usam `useTheme()` |
| **Tema Claro/Escuro** | Botão no header alterna entre os dois temas |
| **CSS com variáveis** | Tema usa `:root` (claro) e `.dark` (escuro) com `transition` suave |
| **Responsivo** | Layout adaptável para telas menores |

## 🧠 Como funciona

1. `TheContext.jsx` cria o contexto com `createContext()` e exporta `ThemeProvider` + `useTheme`
2. `main.jsx` envolve o `<App>` com `<ThemeProvider>`
3. Qualquer componente chama `useTheme()` para acessar `darkMode` e `toggleTheme`
4. O botão no header chama `toggleTheme()` e o CSS aplica as cores do tema automaticamente

## 📁 Estrutura

```
src/
├── main.jsx                  ← Entrada, renderiza com ThemeProvider
├── App.jsx                   ← Componente principal
├── Context/TheContext.jsx    ← Context API (createContext, Provider, hook)
├── Components/
│   ├── Header.jsx            ← Título + botão de tema
│   ├── Card.jsx              ← Card reutilizável
│   └── TheButton.jsx         ← Botão de alternar tema
└── Styles/Global.css         ← CSS com tema claro ✨ escuro
```