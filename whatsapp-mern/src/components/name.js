import React, { useState } from "react";
import "../css/name.css";
function Name() {
  const [name, setName] = useState("");

  const useName = () => {
    if (name) {
      localStorage.setItem("name", name);
      setName("");
    }
  };

  return (
    <div>
      <div className="form">
        <div className="header">
          <img
            style={{ width: "150px", marginLeft: "auto", marginRight: "auto" }}
            src="https://lh3.googleusercontent.com/proxy/rqdJAtd6dnsH0qFLYQYZCHh1yunGH6rX4FyC8SR_ezDr9H723qWrjRU5dID-gV6f2YT0BsTF3x5i-LV6D1cjP5tpacPe-IaPbmiemPm7DCmqX06dRQs"
            alt="name"
          />
          <h2 style={{ marginTop: "50px", marginRight: "30px" }}>
            Whats App Clone
          </h2>
        </div>
        <div className="input">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter the Name"
          ></input>
          <button type="submit" onClick={useName}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Name;
