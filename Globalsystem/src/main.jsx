import React from 'react' // Importa a biblioteca React
import ReactDOM from 'react-dom/client' // O ReactDOM é responsável por renderizar a aplicação React no navegador
import App from './App' // Importa o componente principal da aplicação 
import './styles/global.css' // Importa o CSS global 

import { ThemeProvider } from './context/ThemeContext' // Importação do Provider (responsável por disponibilizar o contexto global )

ReactDOM.createRoot(document.getElementById('root')).render( 
// React procura uma div do HTML (div do arquivo index.HTML)
// render -> Renderiza a aplicação na tela
  <React.StrictMode> {/* Modo de dev do react, encontra erros código inseguro práticas ruins -> Procura dentro desses arquivos*/}
    <ThemeProvider> {/* Compartilhamento global do contexto */}
      <App /> {/* Componente principal da aplicação */}
    </ThemeProvider>
  </React.StrictMode>
)