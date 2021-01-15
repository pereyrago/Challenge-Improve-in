import React from "react";
import data from "../../../../db.json";
import styled from "styled-components";

export default function Band({ state, setBand }) {
  function close() {
    return setBand({ ...state, band: "" });
  }
  return (
    <Cont>
      <Card>
        <BtnCont>
          <Btn onClick={close}>X</Btn>
        </BtnCont>
        <TitleCont>
          <Title>{state.band.name}</Title>
        </TitleCont>
        <TitleCont>
          <Details>DETAILS</Details>
        </TitleCont>
        <DetailsList>
          <Center>
            <DetailsFields>{`Genre: ${
              data.genre.find((gen) => gen.code === state.band.genreCode).name
            }`}</DetailsFields>
            <DetailsFields>{`Country: ${state.band.country}`}</DetailsFields>
            <DetailsFields>{`Year: ${state.band.year}`}</DetailsFields>
          </Center>
        </DetailsList>
        <Grid>
          <DetailsList>
            <Details>ALBUMS</Details>
            {data &&
              data.albums.map(
                (album) =>
                  album.bandId === state.band.id && (
                    <div key={`${album.name}${album.year}`}>
                      <DetailsAlbums>{`${album.name} year ${album.year}`}</DetailsAlbums>
                    </div>
                  )
              )}
          </DetailsList>
          <DetailsList>
            <Details>MEMBERS</Details>
            {state.band.members.map((member) => (
              <div key={member.name}>
                <DetailsFields>{member.name}</DetailsFields>
              </div>
            ))}
          </DetailsList>
        </Grid>
      </Card>
    </Cont>
  );
}

const Cont = styled.div`
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;
const Card = styled.div`
  width: 500px;
  padding: 30px;
  border-radius: 20px;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 100%;
    height: 100vh;
    border-radius: 0px;
  }
`;
const TitleCont = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  flex-direction: row;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
`;
const BtnCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 10%;
`;
const Center = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 25%;
`;
const Btn = styled.button`
  height: 40px;
  width: 40px;
  background-color: black;
  border-radius: 5px;
  color: white;
  font-size: bolder;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  &:hover {
    background-color: grey;
  }
`;
const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 50px;
`;
const Details = styled.div`
  font-size: 24;
  font-weight: bold;
  margin-bottom: 20px;
`;
const DetailsList = styled.ul`
  display: flex;
  height: auto;
  width: 100%;
  margin-top: 0px;
  padding-top: 0px;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  margin: 0;
`;
const DetailsFields = styled.li`
  font-size: 20;
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 20px;
`;
const DetailsAlbums = styled.li`
  font-size: 20;
  font-weight: bold;
  margin-bottom: 20px;
  width: 80%;
`;
