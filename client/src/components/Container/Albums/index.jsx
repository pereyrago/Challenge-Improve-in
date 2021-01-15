import React, { useState } from "react";
import data from "../../../db.json";
import { NavLink } from "react-router-dom";
import Band from "../Bands/Band";
import NavBar from "../../NavBar";

const Bands = () => {
  const [state, setState] = useState({});

  function setBand(id) {
    setState({ ...state, band: data.bands.find((banda) => banda.id === id) });
  }
  return (
    <>
      <div>
        <NavBar />
        <NavLink to="/home">
          <p>To Menu</p>
        </NavLink>
        {data.bands.map((band) => (
          <div onClick={() => setBand(band.id)} key={band.id}>
            {band.name}
          </div>
        ))}
      </div>
      {state.band && <Band state={state} setBand={setState} />}
    </>
  );
};
export default Bands;
