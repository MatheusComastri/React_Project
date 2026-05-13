// Importa o componente ThemeButton (botão que alterna o tema claro/escuro)
import ThemeButton from './TheButton'
// Importa o hook useTheme para acessar os dados do contexto global
import { useTheme } from '../Context/TheContext'

function Header() {
  // useTheme() retorna o objeto { darkMode, toggleTheme } do contexto
  // Aqui pegamos apenas o darkMode para aplicar a classe condicional
  const { darkMode } = useTheme()

  return (
    // Se darkMode for true, adiciona a classe "dark" ao header
    // Isso permite estilizar o header de forma diferente no tema escuro
    <header className={darkMode ? 'header dark' : 'header'}>
      <h1>Context API App</h1>
      <ThemeButton />
      {/* Renderiza o botão de alternar tema */}
    </header>
  )
}

// Exporta o componente para ser usado em outros arquivos
export default Header