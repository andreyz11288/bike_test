import dev from '../../image/Dev.svg'
import first from '../../image/First.svg'
import s from './Footer.module.scss'

function Footer(props) {
    return (
        <footer className={s.footer_section}>
            <img src={dev} alt="dev" width='98' height='31'/>
            <img src={first} alt="first" width='195' height='31' />
        </footer>
    );
}

export default Footer;