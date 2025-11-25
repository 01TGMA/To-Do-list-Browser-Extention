import "../App.css";
let arr = [3];
function arrHandler() {
  arr.push(1);
  console.log(arr);
}
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
      </div>
    </>
  );
}

export default Display;
