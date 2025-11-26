import "../App.css";
let arr = [3];

function Input() {
  return (
    <>
      <input type="text" id="TaskInput" />
    </>
  );
}

function arrHandler() {
  let inputValue: any;
  inputValue = document.getElementById("TaskInput");
  arr.push(inputValue.value);

  console.log(arr);
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
