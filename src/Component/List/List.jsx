import { useState } from 'react'
import s from './List.module.scss'
import img from '../../image/Vector.svg'

export default function List() {
  const [list, setList] = useState([
    {
      id: 1111111111,
      name: 'bike',
      type: 'easy',
      color: 'red',
      status: 'Busy',
      price: '450.00',
    },
    {
      id: 122222221,
      name: 'bike2',
      type: 'easy',
      color: 'green',
      status: 'Busy',
      price: '1450.00',
    },
  ])

  return (
    <ul className={s.list}>
      {list.map((e) => (
        <li className={s.item_list} key={e.id}>
          <div className={s.rigth_list}>
            <span>
             <span className={s.name_list}>{e.name}</span>-{e.type}({e.color})
            </span>
            <br />
            <span className={s.id_list}>id:{e.id}</span>
            <br />
            <span>{e.status}</span>
          </div>
          <div className={s.div_price_list}>
            <img src={img} alt="vector" width='8' height='8'/>
            <span className={s.price_list}>{e.price}{' '}uah/hr</span>
          </div>
        </li>
      ))}
    </ul>
  )
}
