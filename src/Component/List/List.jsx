import s from './List.module.scss';
import img from '../../image/Vector.svg';
import { data } from '../../Redux/Selector';
import { getData, deleteData } from '../../Redux/Operations';
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

  return (
    <ul className={s.list}>
      {state.map(e => (
        <li className={s.item_list} key={e.id}>
          <div className={s.rigth_list}>
            <span>
              <span className={s.name_list}>{e.name}</span>-{e.type}({e.color})
            </span>
            <br />
            <span className={s.id_list}>id:{e.id}</span>
            <br />
            <span>
              STATUS:
              <select className={s.select_list} name="STATUS">
                <option>available</option>
                <option>busy</option>
                <option>unavailable</option>
              </select>
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
        </li>
      ))}
    </ul>
  );
}
