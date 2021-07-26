import s from './List.module.scss';
import './List.scss';
import img from '../../image/Vector.svg';
import { data } from '../../Redux/Selector';
import { getData, deleteData, upData, idData } from '../../Redux/Operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function List() {
  const state = useSelector(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData('data'));
  }, []);

  const clickDelete = e => {
    dispatch(deleteData(e, state));
    const finsDescr = document.getElementById('form_description');
    if (finsDescr.className.includes(`${e}`)) {
      finsDescr.classList.remove(`vision`);
    }
  };

  const statusForm = eve => {
    const litleName =
      eve.target.parentElement.parentElement.parentElement.parentElement
        .parentElement.id;

    dispatch(upData(litleName, eve.target.value, state));
  };

  const descrip = id => {
    dispatch(idData(id));
    const finsDescr = document.getElementById('form_description');
    const liColor = document.getElementById(`${id}`);
    const allLiColor = document.getElementsByClassName(`${s.item_list}`);

    if (finsDescr.className.includes(`${id}`)) {
      finsDescr.classList.remove(`vision`);
      finsDescr.classList.remove(`${id}`);

      liColor.classList.remove(`color`);
      liColor.classList.remove(`${id}`);
      return;
    }
    if (!finsDescr.className.includes(`${id}`)) {
      finsDescr.className = `form_description`;

      finsDescr.classList.add(`${id}`);
      finsDescr.classList.add(`vision`);

      for (let index = 0; index < allLiColor.length; index++) {
        allLiColor[index].classList.remove('color');
        allLiColor[index].classList.remove(`${id}`);
      }

      liColor.classList.add(`${id}`);
      liColor.classList.add(`color`);
    }
  };

  return (
    <ul className={s.list}>
      {state &&
        state.map(e => (
          <li id={e.id} className={s.item_list} key={e.id}>
            <div className={e.status}>
              <div className={s.rigth_list}>
                <span>
                  <span className={s.name_list}>{e.name}</span> - {e.type} (
                  {e.color})
                </span>
                <span className={s.id_list}>id:{e.id}</span>
                <span className={s.form_list}>
                  STATUS:
                  <form
                    className={s.form_select}
                    id="arrow"
                    onChange={e => {
                      statusForm(e);
                    }}
                  >
                    <select
                      className={s.select_list}
                      defaultValue={e.status}
                      name="STATUS"
                    >
                      <option value="available">available </option>
                      <option value="busy">busy </option>
                      <option value="unavailable">unavailable </option>
                    </select>
                  </form>
                </span>
              </div>
              <div className={s.div_price_list}>
                <img
                  onClick={e => clickDelete(e.target.alt)}
                  src={img}
                  alt={e.id}
                  width="8"
                  height="8"
                />
                <span className={s.price_list}>{e.price} uah/hr</span>
              </div>
            </div>
            <div onClick={() => descrip(e.id)} className={s.clickDescr}></div>
          </li>
        ))}
    </ul>
  );
}
