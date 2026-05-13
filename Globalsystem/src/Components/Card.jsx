// Importa o hook useTheme para acessar o estado global do tema
import { useTheme } from '../Context/TheContext'

// Componente Card — recebe duas props: title (título) e text (descrição)
function Card({ title, text }) {
  // Acessa o darkMode do contexto global para estilizar o card
  const { darkMode } = useTheme()

  return (
    // div com classe condicional: se darkMode for true, adiciona "dark"
    // Isso faz o card mudar de cor junto com o tema
    <div className={darkMode ? 'card dark' : 'card'}>
      {/* Exibe o título passado via props */}
      <h2>{title}</h2>
      {/* Exibe o texto passado via props */}
      <p>{text}</p>
    </div>
  )
}

// Exporta o componente para ser usado no App
export default Card