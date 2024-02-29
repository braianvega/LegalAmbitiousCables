import "./App.css";
import HeaderComponent from "./HeaderComponent";
import AsideComponent from "./AsideComponent";

export default function App() {
  return (
    <div className="PrincipalContent">
      <AsideComponent/>
      <HeaderComponent />
    </div>
  );
}
