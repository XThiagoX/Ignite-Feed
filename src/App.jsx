import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import Post from './components/Post.jsx'

import styles from './App.module.css'

import './global.css'

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Thiago Araujo"
          content="Minhas novas habilidades"
          />     
          <Post 
          author="Felipe Flanderz"
          content="Novas Feramentas e Skills"
          /> 
        </main>
      </div>

    </div>
  )
}
export default App