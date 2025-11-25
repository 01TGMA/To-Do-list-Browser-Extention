import "../App.css";

function Input() {
  return (
    <>
      <input type="text" id="TaskInput" />
    </>
  );
}

function Display() {
  return (
    <>
      <div className="CreateTask">
        <Input />
      </div>
    </>
  );
}

export default Display;
