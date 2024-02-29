import "./App.css";

export default function ButtonComponent(props) {
  return (
    <button className="buttonContent TextButton" type="button">
      <div>
        <i className={props.icon}></i>
      </div>
      <div>
        {props.text}
      </div>
    </button>
  );
}
