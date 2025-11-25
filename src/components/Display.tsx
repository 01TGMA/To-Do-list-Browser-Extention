import "../App.css";

function Input() {
  return (
    <>
      <input type="text" id="TaskInput" />
    </>
  );
}

function Buttons({ name, type }: { name: string; type: string }) {
  return (
    <>
      <button>
        {" "}
        className={type} {name}{" "}
      </button>
    </>
  );
}

function Display() {
  return (
    <>
      <div className="CreateTask">
        <Input />
        <Buttons type="addTask" name="Add" />
        <Buttons type="deleteTask" name="Delete" />
      </div>
    </>
  );
}

export default Display;
