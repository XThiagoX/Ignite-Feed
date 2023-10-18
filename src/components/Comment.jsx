import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export default function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/XThiagoX.png" alt="" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thiago Pereira</strong>
                            <time title='10 de outubro de 2023' dateTime=''>Publicado há 1 hora atrás</time>                                
                        </div>
                        <button title='Deletat comentário'>
                            <Trash size={20}/>
                        </button>
                    </header> 
                    <p>Muito bom thiago, parabéns seu lindo</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}