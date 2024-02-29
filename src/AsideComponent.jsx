import "./App.css";
import ButtonComponent from "./ButtonComponent";

export default function AsideComponent() {
  return (
      <aside className="shadow-sm p-3 mb-5 bg-white">
        <center>
          <i className="navbar-brand d-block"></i>
          <ButtonComponent text="Dashboard" icon="bi bi-house-door"/>
          <ButtonComponent text="Nuevo" icon="bi bi-plus-circle"/>
          <ButtonComponent text="Consulta" icon="bi bi-search"/>
        </center>   
      </aside>
  );
}
 