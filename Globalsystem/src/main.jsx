// Importa a biblioteca React
import React from 'react'
// O ReactDOM é responsável por renderizar a aplicação React no navegador
import ReactDOM from 'react-dom/client'
// Importa o componente principal da aplicação
import App from './App'
// Importa o CSS global
import './Styles/Global.css'

// Importação do Provider (responsável por disponibilizar o contexto global)
import { ThemeProvider } from './Context/TheContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  // React procura uma div do HTML (div do arquivo index.html)
  // render -> Renderiza a aplicação na tela
  <React.StrictMode>
    {/* Modo de dev do React, encontra erros, código inseguro, práticas ruins */}
    <ThemeProvider>
      {/* Compartilhamento global do contexto — todos os componentes filhos acessam o estado global */}
      <App />
      {/* Componente principal da aplicação */}
    </ThemeProvider>
  </React.StrictMode>
)