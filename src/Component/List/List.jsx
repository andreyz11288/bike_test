import { useState } from 'react'
import s from './List.module.scss'

export default function List() {
  const [list, setList] = useState([
    {
      id: 1,
      name: 'bike',
      type: 'easy',
      color: 'red',
      status: 'Busy',
      price: 450,
    },
  ])

  return (
    <ul className={s.list}>
      {list.map((e) => (
        <li className={s.item_list} key={e.id}>
          <div>
            <span>
              {e.name}-{e.type}({e.color})
            </span>
            <br />
            <span>id:{e.id}</span>
            <br />
            <span>{e.status}</span>
          </div>
          <span className={s.price_list}>{e.price}uah/hr</span>
        </li>
      ))}
    </ul>
  )
}
