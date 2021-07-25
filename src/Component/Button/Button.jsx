import './Button.scss';

export default function Button({ type, title, className, setIDFunc }) {
  return (
    <button
      type={type}
      onClick={e => setIDFunc && setIDFunc(e)}
      className={className}
    >
      {title}
    </button>
  );
}
