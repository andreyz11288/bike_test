
import s from './FillingFormAndStatistics.module.scss'


function FillingFormAndStatistics(props) {
    return (
        <div className={s.form_section }>
            <form className={s.filling}>
                <input type="text" placeholder='Name' required minLength='5' />
                <input type="text" placeholder='Type' required minLength='5' />
                <input type="text" placeholder='Color' required minLength='5' />
                <input type="number" placeholder='Wheel size' required minLength='5' />
                <input type="number" placeholder='Price' required minLength='5' />
                <input type='number' placeholder='ID (slug): ХХХХХХХХХХХХХ' required minLength='5' />
                <input className={s.input_description} placeholder='Description' type="text" required minLength='5' />
                <button type='submit' className={s.button_save}> SAVE</button><button type='reset' className={s.button_clear}>CLEAR</button>
            </form>
            <div>
                <p>STATISTICS</p>
                <p>Total Bikes: 0</p>
                <p>Booked Bikes: 0</p>
                <p>Average bike cost: 0.00 UAH/hr.</p>
            </div>
        </div>
    );
}

export default FillingFormAndStatistics;