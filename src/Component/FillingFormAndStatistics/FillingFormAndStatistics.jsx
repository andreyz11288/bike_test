import s from './FillingFormAndStatistics.module.scss';
import { useState } from 'react';
import { addData } from '../../Redux/Operations';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { data } from '../../Redux/Selector';

function FillingFormAndStatistics() {
  const modelId = nanoid(13);
  const state = useSelector(data);
  console.log(state);
  const [stateType, setType] = useState('');
  const [stateName, setName] = useState('');
  const [stateColor, setColor] = useState('');
  const [stateWheel, setWheel] = useState('');
  const [statePrice, setPrice] = useState('');
  const [stateID, setID] = useState('');
  const [stateDescription, setDescription] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    setID(modelId);
  }, []);

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
  // const formId = e => {

  // };
  const formDescription = e => {
    setDescription(e.target.value);
  };

  const dataForm = {
    name: stateName,
    type: stateType,
    color: stateColor,
    Wheel: stateWheel,
    price: statePrice,
    id: stateID,
    Description: stateDescription,
  };
  const saveData = async e => {
    e.preventDefault();
    setID(modelId);
    dispatch(addData([dataForm, ...state]));
    setType('');
    setName('');
    setColor('');
    setWheel('');
    setPrice('');
    setDescription('');
  };

  return (
    <div className={s.form_section}>
      <form className={s.filling} onSubmit={e => saveData(e)}>
        <input
          value={stateName}
          onChange={e => formName(e)}
          type="text"
          placeholder="name"
          //   required
          //   minLength="5"
        />
        <input
          value={stateType}
          onChange={e => formType(e)}
          type="text"
          placeholder="Type"
          //   required
          //   minLength="5"
        />
        <input
          value={stateColor}
          onChange={e => formColor(e)}
          type="text"
          placeholder="Color"
          //   required
          //   minLength="5"
        />
        <input
          value={stateWheel}
          onChange={e => formWheel(e)}
          //   type="number"
          placeholder="Wheel size"
          //   required
          //   minLength="5"
        />
        <input
          value={statePrice}
          onChange={e => formPrice(e)}
          //   type="number"
          placeholder="Price"
          //   required
          //   minLength="5"
        />
        <input
          value={stateID}
          // onChange={e => formId(e)}
          //   type="number"

          placeholder="ID (slug): ХХХХХХХХХХХХХ"
          //   required
          //   minLength="5"
        />
        <input
          value={stateDescription}
          onChange={e => formDescription(e)}
          className={s.input_description}
          placeholder="Description"
          type="text"

          //   required
          //   minLength="5"
        />
        <button type="submit" className={s.button_save}>
          {' '}
          SAVE
        </button>
        <button
          type="reset"
          onClick={e => setID(modelId)}
          className={s.button_clear}
        >
          CLEAR
        </button>
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
