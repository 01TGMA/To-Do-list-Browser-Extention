import "../App.css";

function Input() {
  return (
    <>
      <input type="text" id="TaskInput" />
    </>
  );
}

function Buttons({ name }: { name: string }) {
  return (
    <>
      <button> {name} </button>
    </>
  );
}

function Display() {
  return (
    <>
      <div className="CreateTask">
        <Input />
        <Buttons name="Add" />
        <Buttons name="Delete" />
      </div>
    </>
  );
}

export default Display;
