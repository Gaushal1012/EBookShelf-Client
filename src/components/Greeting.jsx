import React, { useEffect, useState } from "react";

export const Greeting = () => {
  const [grertingMsg, SetGreetingMsg] = useState("");
  useEffect(() => {
    // Function to update current time every second
    const updateTime = () => {
      const date = new Date();
      let hours = String(date.getHours()).padStart(2, "0");
      if (hours >= 5 && hours < 12) {
        SetGreetingMsg("Good Morning");
      } else if (hours >= 12 && hours < 18) {
        SetGreetingMsg("Good Afternoon");
      } else if (hours >= 18 && hours < 24) {
        SetGreetingMsg("Good Evening");
      } else {
        SetGreetingMsg("Good Night");
      }
    };

    // Update time initially
    updateTime();

    // Update time every second
    const intervalId = setInterval(updateTime, 3600000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="greetingMsg">{grertingMsg}</div>
    </>
  );
};
