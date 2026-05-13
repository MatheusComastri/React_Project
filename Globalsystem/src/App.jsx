// Importa o componente Header (título, botão de navegação/darkmode)
import Header from './Components/Header'
// Importa o componente Card
import Card from './Components/Card'
// Importa o hook useTheme para acessar o estado global do tema
import { useTheme } from './Context/TheContext'

function App() {
  // Cria o componente principal da aplicação
  // useTheme() dá acesso ao darkMode e toggleTheme do contexto global
  const { darkMode } = useTheme()

  return (
    // O componente vai retornar JSX (HTML dentro do JS)
    // Se darkMode for true, a classe "dark" é adicionada à div principal
    // Isso faz o CSS aplicar as variáveis de cor do tema escuro
    <div className={darkMode ? 'app dark' : 'app'}>
      <Header />
      {/* Renderiza o componente Header */}

      <main className='container'>
        {/* main representa o conteúdo principal da página */}
        {/* className aplica uma classe CSS */}

        <Card
          title="React Context API"
          text="Gerenciamento global de estados utilizando useContext."
        />
        <Card
          title="Tema Claro/Escuro"
          text="Exemplo de compartilhamento de estado global com Context API"
        />

        {/* Componente Card utilizado duas vezes */}
        {/* São passadas duas props (title e text) */}
        {/* O Card consegue diferenciar ambos, pois são o mesmo componente com props diferentes */}
      </main>
    </div>
  )
}

export default App
// Permite importar o componente App em outros arquivos