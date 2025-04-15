import './App.css'
import Header from './assets/Components/Header'
import Main from './assets/Components/Main'
import Footer from './assets/Components/Footer'
import NavBar from './assets/Components/NavBar'

const App: React.FC = () => {
  return (
    <>
      <div className='nav'>
        <NavBar />
        <Header />
      </div>
      <Main />
      <Footer />
    </>
  )
}

export default App
