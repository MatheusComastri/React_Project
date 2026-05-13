import ThemeButton from './TheButton' 
import { useTheme } from '../Context/TheContext'

function Header() {
    const { darkmode } = useTheme()

    return (
        <header className={darkMode ? 'header dark' : 'header'}>
            <h1>Context API App</h1>
            <ThemeButton/>
        </header>
    )
}

export default header