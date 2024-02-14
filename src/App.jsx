import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import Post from './components/Post.jsx'

import styles from './App.module.css'

import './global.css'

const posts =  [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/xthiagox.png',
      name: 'Thiago Araujo',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},      
      {type: 'link', content: 'https://github.com/XThiagoX'},
    ],
    publishedAt:  new Date ('2024-05-03 17:06:00') 
  },
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Desenvolvdor Roket'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},      
      {type: 'link', content: 'https://github.com/maykbrito'},
    ],
    publishedAt:  new Date ('2022-01-03 17:06:00') 
  }
]

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map( posts => {
            return (
              <Post
                key={posts.id}
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
              )
          })}
        </main>
      </div>

    </div>
  )
}
export default App