import styleSidebar from './Sidebar.module.css'
import { PencilLine } from "phosphor-react";

export default function Sidebar(){
    return(
    <aside className={styleSidebar.sidebar}>
        
        <img 
            className={styleSidebar.cover}
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2ZWxvcG1lbnQlMjB3ZWJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=50"
         />
        <div className={styleSidebar.profile}>
            <img className={styleSidebar.avatar} src="https://avatars.githubusercontent.com/u/59093773?v=4" alt="" />
            <strong>Thiago Araujo</strong>
            <span>Web Developer</span>
            
        </div>

        

        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar seu perfil
            </a>
        </footer>
    </aside>
    )
}