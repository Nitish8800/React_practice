import React from "react";

const MainInput = ({ set }) => {
  return (
    <div>
      <input
        style={{ padding: 10 }}
        placeholder="Enter your name"
        onChange={(e) => set(e.target.value)}
      />
    </div>
  );
};

export default MainInput;
