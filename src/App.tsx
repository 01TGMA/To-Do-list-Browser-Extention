import "./App.css";
import Menu from "./components/HamburgerMenu";
import Date from "./components/DateTime";
function App() {
  return (
    <>
      <div id="header">
        <Menu />
        <Date />
      </div>
    </>
  );
}

export default App;
