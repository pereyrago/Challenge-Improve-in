import React, { useState } from "react";
import Band from "./Band";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Bands = () => {
  const [state, setState] = useState({});

  const bands = useSelector((store) => store.bands);

  function setBand(id) {
    setState({ ...state, band: bands.find((banda) => banda.id === id) });
  }
  return (
    <BandsCont>
      {bands[0] &&
        bands.map((band) => (
          <Card onClick={() => setBand(band.id)} key={band.id}>
            {band.name}
          </Card>
        ))}
      {state.band && <Band state={state} setBand={setState} />}
    </BandsCont>
  );
};
export default Bands;

const BandsCont = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  height: 90%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: auto;
`;
const Card = styled.div`
  height: 150px;
  width: 300px;
  min-width: 200px;
  background-color: #403f3c;
  margin: 20px;
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: white;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px 8px;
  transition: 0.5s;
  overflow: auto;
  &:hover {
    background-color: grey;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin: 10px;
  }
`;
