import { NavLink } from 'react-router-dom'
import img from '../../image/ADMIN.BIKE-BOOKING.COM.svg'
import s from './Header.module.scss'

export default function Header() {
  return (
    <header className={s.app_header}>
      <nav>
        <NavLink to="/">
          <img
            className={s.img_header}
            src={img}
            alt="logo"
            width="313"
            height="38"
          />
        </NavLink>
      </nav>
    </header>
  )
}
