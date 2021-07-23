import s from './App.module.scss'
import Header from './Component/Header/Header.jsx'
import Main from './Component/Main/Main.js'
import Footer from './Component/Footer/Footer'

function App() {
  return (
    <div className={s.container}>
      <Header />
      <Main />
      <Footer/>
    </div>
  )
}

export default App
