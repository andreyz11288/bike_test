import s from './FillingFormAndStatistics.module.scss';
import '../List/List.scss';
import { useState } from 'react';
import { addData } from '../../Redux/Operations';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { data, idData } from '../../Redux/Selector';

function FillingFormAndStatistics() {
  const modelId = nanoid(13);

  const state = useSelector(data);
  const dispatch = useDispatch();

  const stateId = useSelector(idData);
  const [stateType, setType] = useState('');
  const [stateName, setName] = useState('');
  const [stateColor, setColor] = useState('');
  const [stateWheel, setWheel] = useState('');
  const [statePrice, setPrice] = useState('');
  const [stateID, setID] = useState('');
  const [stateDescription, setDescription] = useState('');
  const [stateAve, setAve] = useState(null);
  const [stateAvailable, setAvailable] = useState(null);
  const [stateBooked, setBooked] = useState(null);
  const [stateIdDes, setIdDes] = useState('');

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

  useEffect(() => {
    if (state.length > 0) {
      const available = state.map(e => e.status === 'available');
      const ava = available.reduce((total, amount) => total + amount);
      ava === true ? setAvailable(1) : setAvailable(ava);
      !ava && setAvailable(0);
      const booked = state.map(e => e.status === 'busy');
      const bookedBikes = booked.reduce((total, amount) => total + amount);
      bookedBikes === true ? setBooked(1) : setBooked(bookedBikes);
      !bookedBikes && setBooked(0);

      const average = state.map(e => {
        const price = Number(e.price);
        return price;
      });
      const ave =
        average.reduce((total, amount) => total + amount) / state.length;
      setAve(Math.round(ave * 100.0) / 100.0);
    }
  }, [state]);

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

  const setIDFunc = e => {
    e.preventDefault();
    setID(modelId);
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
          required
          minLength="5"
        />
        <input
          value={stateType}
          onChange={e => formType(e)}
          type="text"
          placeholder="Type"
          required
          minLength="5"
        />
        <input
          value={stateColor}
          onChange={e => formColor(e)}
          type="text"
          placeholder="Color"
          required
          minLength="5"
        />
        <input
          value={stateWheel}
          onChange={e => formWheel(e)}
          type="number"
          placeholder="Wheel size"
          required
        />
        <input
          value={statePrice}
          onChange={e => formPrice(e)}
          type="number"
          placeholder="Price"
          required
          // min="00.00"
        />
        <input value={`ID (slug): ${stateID}`} disabled />
        <textarea
          value={stateDescription}
          onChange={e => formDescription(e)}
          className={s.input_description}
          placeholder="Description"
          type="text"
          required
          minLength="5"
        />
        <button type="submit" className={s.button_save}>
          SAVE
        </button>
        <button
          type="reset"
          onClick={e => setIDFunc(e)}
          className={s.button_clear}
        >
          CLEAR
        </button>
      </form>
      <div>
        <p className={s.statistic_text}>STATISTICS</p>
        <p>
          Total Bikes: <span>{state.length}</span>
        </p>
        <p>
          Available Bikes: <span>{stateAvailable}</span>
        </p>
        <p>
          Booked Bikes: <span>{stateBooked}</span>
        </p>
        <p>
          Average bike cost: <span>{stateAve}</span> UAH/hr.
        </p>
      </div>
      <div id="form_description" className="form_description">
        <p>Description</p>
        <div className={s.container_text}>
          <p className={s.text_description}>{stateIdDes}</p>
        </div>
      </div>
    </div>
  );
}

export default FillingFormAndStatistics;
