import React, { useEffect } from "react";
import styled from "styled-components";
import "./index.css";
import { BANDS } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar";
import Genres from "./Genres";
import Bands from "./Bands";
import data from "../../db.json";

const Container = () => {
  const dispatch = useDispatch();
  const toogle = useSelector((store) => store.toogle);
  useEffect(() => {
    dispatch(BANDS(data.bands.map((band) => band)));
  }, [dispatch]);
  return (
    <Cont>
      <NavBar />
      <Body>
        <GenCont>
          <Genres />
        </GenCont>
        <Bands />
      </Body>
      <GenContMobile className={toogle ? "open" : "close"}>
        <Genres />
      </GenContMobile>
    </Cont>
  );
};

export default Container;

const Body = styled.div`
  background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fep01.epimg.net%2Fcultura%2Fimagenes%2F2016%2F12%2F01%2Factualidad%2F1480576411_932413_1480578681_noticia_normal.jpg&f=1&nofb=1");
  background-repeat: repeat;
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  display: grid;
  margin: 0;
  padding: 0;
  grid-template-columns: 1fr 5fr;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    display: flex;
  }
`;
const GenCont = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  @media (max-width: 600px) {
    display: none;
  }
`;
const Cont = styled.div`
  height: 92%;
  margin: 0;
  padding: 0;
`;
const GenContMobile = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #afb3ba;
  transition: 0.4s;
`;
