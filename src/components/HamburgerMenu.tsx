import { useState } from "react";

function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`menuSpans  ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
export default Menu;
