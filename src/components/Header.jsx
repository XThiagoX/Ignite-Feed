import headerStyles from './Header.module.css'

export default function Header(){
    return (
        <header className={headerStyles.header}> 
        <strong >Ignite Feed</strong>
        </header>
    );
}