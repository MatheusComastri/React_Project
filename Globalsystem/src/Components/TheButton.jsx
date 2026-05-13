// Importa o hook useTheme para acessar o estado global do tema
import { useTheme } from '../Context/TheContext'

function ThemeButton() {
  // useTheme() retorna { darkMode, toggleTheme } do contexto ThemeContext
  // darkMode: boolean que indica se o tema escuro está ativo
  // toggleTheme: função que alterna o tema (inverte o valor de darkMode)
  const { darkMode, toggleTheme } = useTheme()

  return (
    // Botão que ao ser clicado chama toggleTheme (alterna entre claro e escuro)
    // O texto do botão muda dinamicamente baseado no estado atual:
    //   - Se darkMode for true → mostra "☀️ Modo Claro"
    //   - Se darkMode for false → mostra "🌙 Modo Escuro"
    <button className="theme-button" onClick={toggleTheme}>
      {darkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
    </button>
  )
}

// Exporta o componente para ser usado no Header
export default ThemeButton