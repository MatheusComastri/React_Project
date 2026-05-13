import { createContext, useContext, useState } from "react";
// Importação de 3 funções do React
    //  createContext: cria o contexto global (vários componentes acessam a mesma informação)
    //  useContext: Permite acessar o contexto (acessa os dados globais)
    //  useState: Hook usado para criar estados ***

const ThemeContext = createContext()
// Criação do contexto (createcontext) -> ThemeContext será o canal global da aplicação

export function ThemeProvider({ children }) {
// Criação do componente React *** 
// export permite usar esse componente em outros arquivo
// ThemeProvider é o componente responsável por disponibiliar o contexto ***
// children representa tudo que estiver dentro do provider
    const [darkMode, setDarkMode] = useState(false)
    // Criação do estado global
    // darkmode: Guarda o estado atual (pode ser true/false)
    // setDarkmode: função que altera o estado
    // use state(false): começa no modo claro -> darkmode = false

    function toggleTheme() {
    // função criada para alternar o tema
    setDarkMode(!darkMode)
    // operador '!' inverte, true=false, false=true ***
  }

    return (
    // Componente retorna JSX
        <ThemeContext.Provider
        // Provider do contexto -> compartilha dados com toda a aplicação
            value={{ darkMode, toggleTheme }}
            // Define o que será compartilhado globalmente (darkmode, toogletheme é compartilhado)
                // Qualquer componente consegue acessar
        >
            {children} {/* Renderiza os componentes filhos */}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
    // retorno dos dados ThemeContext
}
