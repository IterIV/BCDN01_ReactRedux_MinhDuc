import React from "react";
import FilmLeftSide from "../../components/DatVePhim/FilmLeftSide";
import FilmRightSide from "../../components/DatVePhim/FilmRightSide";

export default function DatVePhim() {
  return (
    <div className="container mt-4" style={{ position: "relative" }}>
      <FilmLeftSide />
      <FilmRightSide />
    </div>
  );
}
