import { useEffect, useState } from 'react';
import { data, idData } from '../../Redux/Selector';
import { useSelector } from 'react-redux';
import s from './Descriptions.module.scss';
import '../List/List.scss';

export default function Descriptions() {
  const stateId = useSelector(idData);
  const state = useSelector(data);

  const [stateIdDes, setIdDes] = useState('');

  useEffect(() => {
    if (stateId) {
      const idDescript = state.filter(e => e.id === stateId);
      if (idDescript[0] === undefined) {
        return;
      } else {
        setIdDes(idDescript[0].Description);
      }
    }
  }, [state, stateId]);

  return (
    <div id="form_description" className="form_description">
      <p>Description</p>
      <div className={s.container_text}>
        <p className={s.text_description}>{stateIdDes}</p>
      </div>
    </div>
  );
}
