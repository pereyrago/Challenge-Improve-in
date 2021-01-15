import React, { useState } from "react";
import data from "../../../db.json";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { BANDS, TOOGLECLOSE } from "../../../store/actions";
import "../index.css";

const Genres = () => {
  const [selected, setSelected] = useState(false);

  const dispatch = useDispatch();

  function setGenre(gen) {
    dispatch(TOOGLECLOSE());
    setSelected(gen);
    if (gen === "all") return dispatch(BANDS(data.bands));
    else
      return dispatch(
        BANDS(data.bands.filter((banda) => banda.genreCode === gen))
      );
  }

  return (
    <List>
      <ListItem
        className={selected === "all" ? "uno" : "otro"}
        onClick={() => setGenre("all")}
      >
        All genres
      </ListItem>
      {data.genre.map((gen) => (
        <ListItem
          className={selected === gen.code ? "uno" : "otro"}
          onClick={() => setGenre(gen.code)}
          key={gen.code}
        >
          {gen.name}
        </ListItem>
      ))}
    </List>
  );
};
export default Genres;

const List = styled.ol`
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;
const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    background-color: grey;
  }
`;
