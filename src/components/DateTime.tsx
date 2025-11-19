import "../App.css";
import { useEffect, useState } from "react";
function DateTime() {
  const [newDate, SetnewDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      SetnewDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const formatTime = (date: any) => {
    const hours = date.getHours().toString();
    const minutes = date.getMinutes().toString();
    const seconds = date.getSeconds().toString();
    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <>
      {" "}
      <h2 className="time">{formatTime(newDate)}</h2>
    </>
  );
}

export default DateTime;
