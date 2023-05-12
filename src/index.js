import React from "react";
import ReactDOM from "react-dom";

const name = "HEMANT CHEEMA";

const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

const d = new Date();
let t = d.getHours();
if (t >= 0 && t < 12) {
  time = "good morning ";
  mystyle.color = "Red";
}
if (t >= 12 && t < 18) {
  time = "good afternoon ";
  mystyle.color = "darkgreen";
  mystyle.backgroundColor = "skyblue";
} else {
  time = "good eveninng";
  mystyle.backgroundColor = "skyblue";
  mystyle.color = "blue";
}

ReactDOM.render(
  <div>
    <p style={mystyle}> {time}</p>
  </div>,
  document.getElementById("root")
);
