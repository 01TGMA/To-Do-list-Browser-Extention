import { useState } from "react";
import "../App.css";
const [arr, setArr] = useState<string[]>([]);
const [inputValue, setInputValue] = useState("");

function Input() {
  return (
    <>
      <input
        type="text"
        id="TaskInput"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
}
let display = "";
function arrHandler() {
  if (!inputValue.trim()) return;
  setArr((prev) => [...prev, inputValue]);
  setInputValue("");

  {
    // arr.map((task, i) => (display += ` ${i} ${task}`));

    console.log(display);
  }
}
function Show() {
  return (
    <>
      {arr.map((task, i) => (
        <div key={i}>
          {" "}
          {i} {task}
        </div>
      ))}
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
        <div>
          <Show />
        </div>
      </div>
    </>
  );
}

export default Display;
