import s from './App.module.scss'
import Header from './Component/Header/Header.jsx'
import List from './Component/List/List.jsx'

function App() {
  return (
    <div className={s.container}>
      <Header />
      <List />
    </div>
  )
}

export default App
