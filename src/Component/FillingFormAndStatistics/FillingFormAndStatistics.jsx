import s from './FillingFormAndStatistics.module.scss';
import '../List/List.scss';
import { addData } from '../../Redux/Operations';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { data } from '../../Redux/Selector';
import Button from '../Button/Button';
import Statistic from '../Statistic/Statistic';
import Descriptions from '../Descriptions/Descriptions';
import Input from '../Input/Input';

function FillingFormAndStatistics() {
  const modelId = nanoid(13);

  const state = useSelector(data);
  const dispatch = useDispatch();

  const [stateType, setType] = useState('');
  const [stateName, setName] = useState('');
  const [stateColor, setColor] = useState('');
  const [stateWheel, setWheel] = useState('');
  const [statePrice, setPrice] = useState('');
  const [stateID, setID] = useState(modelId);
  const [stateDescription, setDescription] = useState('');

  const formType = e => {
    setType(e.target.value);
  };
  const formName = e => {
    setName(e.target.value);
  };
  const formColor = e => {
    setColor(e.target.value);
  };
  const formWheel = e => {
    setWheel(e.target.value);
  };
  const formPrice = e => {
    setPrice(e.target.value);
  };

  const formDescription = e => {
    setDescription(e.target.value);
  };

  const dataForm = {
    name: `${stateName}`.toUpperCase(),
    type: `${stateType}`.toUpperCase(),
    color: `${stateColor}`.toUpperCase(),
    Wheel: stateWheel,
    price: Math.round(statePrice * 100.0) / 100.0,
    id: stateID,
    Description: stateDescription,
    status: 'available',
  };

  const setAdd = () => {
    setID(modelId);
    setType('');
    setName('');
    setColor('');
    setWheel('');
    setPrice('');
    setDescription('');
  };

  const saveData = e => {
      e.preventDefault();
!state && dispatch(addData([dataForm]));
    state && dispatch(addData([dataForm, ...state]));
    setAdd();
  };

  const setIDFunc = e => {
    e.preventDefault();
    setAdd();
  };

  return (
    <section className={s.form_section}>
      <form className={s.filling} onSubmit={e => saveData(e)}>
        <Input
          value={stateName}
          onChange={e => formName(e)}
          type="text"
          placeholder="name"
          minLength="5"
          required={true}
        />

        <Input
          value={stateType}
          onChange={e => formType(e)}
          type="text"
          placeholder="Type"
          minLength="5"
          required={true}
        />

        <Input
          value={stateColor}
          onChange={e => formColor(e)}
          type="text"
          placeholder="Color"
          minLength="5"
          required={true}
        />

        <Input
          value={stateWheel}
          onChange={e => formWheel(e)}
          type="number"
          placeholder="Wheel size"
          required={true}
        />

        <Input
          value={statePrice}
          onChange={e => formPrice(e)}
          type="number"
          placeholder="Price"
          required={true}
        />

        <Input value={`ID (slug): ${stateID}`} disabled={true} />

        <textarea
          value={stateDescription}
          onChange={e => formDescription(e)}
          className={s.input_description}
          placeholder="Description"
          type="text"
          required
          minLength="5"
        />
        <Button type={'submit'} title={'SAVE'} className={'button_save'} />
        <Button
          type={'reset'}
          title={'CLEAR'}
          setIDFunc={setIDFunc}
          className={'button_clear'}
        />
      </form>
      <Statistic />
      <Descriptions />
    </section>
  );
}

export default FillingFormAndStatistics;
