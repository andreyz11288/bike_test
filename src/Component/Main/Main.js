import s from './Main.module.scss'
import List from '../List/List.jsx'
import FillingFormAndStatistics from '../FillingFormAndStatistics/FillingFormAndStatistics.jsx'

function Main() {
  return (
    <main className={s.main}>
      <List />
      <FillingFormAndStatistics />
    </main>
  )
}

export default Main
