import Header from './Components/Header' // importa o componente header (título botão, navegação)
import Carde from './Components/Card' // importa o componente card


function App () {
// cria o componenente principal da aplicação
  return (
  // O componente vai retornar JSX (HTML dentro do JS)
    <div>
      <Header /> {/* Renderiza o componente Header */}

      <main className='container'> {/*Main representa o conteúdo principal da página  -> className aplica uma classe CSS*/}
        <Card
          title="React Context API"
          text="Gerenciamento global de estados utiliazndo useContext."
        />
        <Card
          title="Tema Claro/Escuro"
          text="Exemplo de compartilhamento de estado global"
        />
        {/*Componente card utilizado duas vezes -> e as props são passadas duas props (title e text)*/}
        {/* O arquivo card consegue diferenciar ambos componentes, pois eles sao os mesmo componentes, porém, com props diferentes*/}
      </main>
    </div>
  )
}

export default App
// Permite importar o componente App em outros arquivos.

