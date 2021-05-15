import React from "react";

function Array({ array }) {
  const style = {
    display: "inline-block",
    height: "50px",
    width: "50px",
    background: "#ccc",
    border: "solid 1px black",
    textAlign: "center",
  };
  return (
    <div className="text-center mt-3">
      {array.map((num, index) => {
        if (index === 0) {
          return <h1 style={{ color: "#eee" }}>{num}</h1>;
        }
        return <div style={style}>{num}</div>;
      })}
    </div>
  );
}

export default Array;
