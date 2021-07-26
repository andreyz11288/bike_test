import { data } from '../../Redux/Selector';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import s from './Statistic.module.scss';

export default function Statistic() {
  const state = useSelector(data);
  const [stateAve, setAve] = useState(null);
  const [stateAvailable, setAvailable] = useState(null);
  const [stateBooked, setBooked] = useState(null);


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

  console.log(state);
  return (
    <div>
      <p className={s.statistic_text}>STATISTICS</p>
      <p>Total Bikes: {state ? <span>{state.length}</span> : <span>0</span>}</p>
      <p>
        Available Bikes: {state.length > 0 ? <span>{stateAvailable}</span> : <span>0</span>}
      </p>
      <p>
        Booked Bikes: {state.length > 0 ? <span>{stateBooked}</span>: <span>0</span> }
      </p>
      <p>
        Average bike cost: {state.length > 0  ? <span>{stateAve}</span>: <span>0</span>} UAH/hr.
      </p>
    </div>
  );
}
