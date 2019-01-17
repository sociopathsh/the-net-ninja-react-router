import React from "react";

const Rainbow = WrappedConponent => {
  const colors = ["red", "green", "blue", "pink", "orange", "yellow"];
  const randomColor = colors[Math.floor(Math.random() * 5)];
  const className = randomColor + "-text";

  return props => {
    return (
      <div className={className}>
        <WrappedConponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
