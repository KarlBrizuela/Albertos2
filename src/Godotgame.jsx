import React from "react";

const GodotGame = () => {
  return (
    <div style={{ width: "100%", height: "600px" }}>
      <iframe
  src={`${process.env.PUBLIC_URL}/WebglBuilds/index.html`}
  title="Godot Game"
  width="100%"
  height="100%"
  style={{ border: "none" }}
></iframe>
    </div>
  );
};

export default GodotGame;
