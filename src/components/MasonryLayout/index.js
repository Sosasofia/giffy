import React, { useState, useEffect } from "react";

export default function MasonryLayout ({ children, gap = 10 }) {
  const [columns, setColumns] = useState(1);

  const resize = () => {
    const masonryElement = window.document.querySelector(".masonry");
    const masonryWidth = masonryElement.offsetWidth;
    const newColumns = getColumns(masonryWidth);
    setColumns(newColumns);
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  });

  const getColumns = (innerWidth) => {
    if (innerWidth <= 400) return 1;
    if (innerWidth <= 800) return 2;
    if (innerWidth <= 1100) return 3;
    return 4;
  };

  const columnWrapper = {};
  const result = [];

  // create columns
  for (let i = 0; i < columns; i++) {
    columnWrapper[`column${i}`] = [];
  }
  
  // divide children into columns
  for (let i = 0; i < children.length; i++) {
    const columnIndex = i % columns;
    columnWrapper[`column${columnIndex}`].push(
      <div key={i} style={{marginBottom: `${gap}px`}}>
        {children[i]}
      </div>
    );
  }

  // wrap children in each column with a div
  for (let i = 0; i < columns; i++) {
    result.push(
      <div style={{ flex: 1 }} key={i}>
        {columnWrapper[`column${i}`]}
      </div>
    );
  }

  return (
    <div className="masonry" style={{ display: "flex", gap: `${gap}px`, flexFlow: "row wrap" }}>
      {result}
    </div>
  );
};
