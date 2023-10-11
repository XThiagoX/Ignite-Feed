import styles from './Post.module.css'

export default function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/59093773?v=4" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Thiago Pereira</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='10 de outubro de 2023' dateTime=''>Publicado há 1 hora</time>                                
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{" "}<a href="">jane.design/doctorcare</a></p>
                <p>
                <a href="">#novoprojeto </a>
                <a href="">#nlw </a>
                <a href="">#rocketseat </a>
                </p>
            </div>
            <hr/>
        </article>
    )
}