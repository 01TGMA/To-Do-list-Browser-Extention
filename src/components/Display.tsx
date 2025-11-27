import "../App.css";
let arr = [3];

function Input() {
  return (
    <>
      <input type="text" id="TaskInput" />
    </>
  );
}
let display = "";
function arrHandler() {
  let inputValue: any;
  inputValue = document.getElementById("TaskInput");
  arr.push(inputValue.value);

  {
    arr.map((task, i) => (display += ` ${i} ${task}`));

    console.log(display);
  }
}
function Show() {
  return <>{display}</>;
}

function Buttons({ name, type }: { name: string; type: string }) {
  return (
    <>
      <button className={type} onClick={arrHandler}>
        {" "}
        {name}
      </button>
    </>
  );
}

function Display() {
  return (
    <>
      <div className="CreateTask">
        <Input />
        <div className="TaskButtons">
          {" "}
          <Buttons type="addTask" name="Add Task" />
          <Buttons type="deleteTask" name="Delete" />
        </div>
        <div>
          <Show />
        </div>
      </div>
    </>
  );
}

export default Display;
