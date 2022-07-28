import React from "react";

export default function Item({ producto }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px" }}>
      {JSON.stringify(producto)}
    </div>
  );
}
