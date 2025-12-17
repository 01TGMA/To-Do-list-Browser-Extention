import "./App.css";
import Menu from "./components/HamburgerMenu";
import Date from "./components/DateTime";
import Display from "./components/Display";
function App() {
  return (
    <>
      <div id="header">
        <Menu />
        <Date />
      </div>
      <Display />
    </>
  );
}

export default App;
