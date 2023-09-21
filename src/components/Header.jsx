import headerStyles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'

export default function Header(){
    return (
        <header className={headerStyles.header}> 
        <img src={igniteLogo} alt="Logotipo do ignite" />
        <strong >Ignite Feed</strong>
        </header>
    );
}