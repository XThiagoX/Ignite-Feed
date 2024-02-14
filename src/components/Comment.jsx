import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import Avatar from './Avatar'
import { useState } from 'react'


export default function Comment({content, onDeleteComment}){
     const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content)
    }  

    function handleLikeComment(){
        console.log(likeCount)
        setLikeCount((likeCountState) => {
            return likeCountState + 1 
        });
    }
    
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/XThiagoX.png" alt="" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thiago Pereira</strong>
                            <time title='10 de outubro de 2023' dateTime=''>Publicado há 1 hora atrás</time>                                
                        </div>
                        <button onClick={handleDeleteComment} title='Deletat comentário'>
                            <Trash size={24}/>
                        </button>
                    </header> 
                    <p> {content} </p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span> {likeCount} </span>
                    </button>
                </footer>
            </div>
        </div>
    )
}