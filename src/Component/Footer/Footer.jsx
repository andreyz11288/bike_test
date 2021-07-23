import dev from '../../image/Dev.svg'
import first from '../../image/First.svg'
import s from './Footer.module.scss'

function Footer(props) {
    return (
        <footer className={s.footer_section}>
            <img src={dev} alt=""  />
            <img src={first} alt=""  />
        </footer>
    );
}

export default Footer;