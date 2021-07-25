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
  }, [dispatch]);

  const clickDelete = e => {
    dispatch(deleteData(e, state));
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
    if (finsDescr.className.includes(`${id}`)) {
      finsDescr.className = 'form_description';
    } else {
      finsDescr.classList.add(`${id}`);
      finsDescr.classList.add(`vision`);
    }
  };

  return (
    <ul className={s.list}>
      {state.map(e => (
        <li
          onClick={() => descrip(e.id)}
          id={e.id}
          className={s.item_list}
          key={e.id}
        >
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
        </li>
      ))}
    </ul>
  );
}
