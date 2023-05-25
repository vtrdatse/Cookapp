import React from "react";

const Ingerdient = () => {
  const renderSpans = () => {
    const spans = [];
    for (let i = 0; i < 8; i++) {
      spans.push(<span key={i}>Lorem Ipsum</span>);
    }
    return spans;
  };
  return (
    <div style={{ background: " #c9bdad", padding: "30px 10%" }}>
      <h3 style={{ textAlign: "center" }}>INGERDIENT</h3>
      <div className="flex-inger">{renderSpans()} </div>
    </div>
  );
};

export default Ingerdient;
