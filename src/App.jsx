import Post from './Post.jsx'
import Header from './components/Header.jsx'

function App() {
  return (
    <div>
      <Header/>
      <Post 
      author="Thiago Araujo"
      content="Minhas novas habilidades"
      />     
      <Post 
      author="Felipe Flanderz"
      content="Novas Feramentas e Skills"
      /> 
    </div>
  )
}
export default App