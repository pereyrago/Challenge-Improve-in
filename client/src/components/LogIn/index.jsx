import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import IconButton from "@material-ui/core/IconButton";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { LOG_IN } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const LogIn = () => {
  const [state, setState] = useState({
    user: "",
    password: "",
    showPassword: false,
  });

  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const classes = useStyles();

  const handleChange = (event) => {
    return setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleClickShowPassword = () => {
    return setState({ ...state, showPassword: !state.showPassword });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      users.find(
        (user) => user.user === state.user && user.password === state.password
      )
    )
      return dispatch(LOG_IN({ user: state.user, password: state.password }));
    else return alert("username or password are invalid ");
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>LOG IN</Title>
        <TextField
          id="user"
          label="user"
          name="user"
          value={state.user}
          onChange={handleChange}
        />
        <TextField
          style={{ marginTop: 15 }}
          id="password"
          label="password"
          name="password"
          value={state.password}
          type={state.showPassword ? "text" : "password"}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <ButtonCont>
          <Button
            type="submit"
            className={classes.btn}
            variant="contained"
            color="primary"
          >
            Log in
          </Button>
          <NavLink to="/register">
            <Button className={classes.btn} variant="contained" color="primary">
              Register
            </Button>
          </NavLink>
        </ButtonCont>
      </Form>
    </Container>
  );
};
export default LogIn;

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "#403f3c",
    "&:hover": {
      backgroundColor: "#807e79",
    },
  },
}));

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("https://p4.wallpaperbetter.com/wallpaper/842/789/68/audio-cassettes-cds-wallpaper-preview.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    background-color: white;
  }
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: auto;
  min-height: 100%;
  width: 30%;
  min-width: 400px;
  background-color: white;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 5px;
  @media (max-width: 600px) {
    height: 100%;
    width: 100%;
    justify-content: center;
    min-width: 300px;
    padding-left: 10%;
    padding-right: 10%;
  }
`;
const Title = styled.p`
  font-size: 26px;
  font-weight: 600;
  text-align: center;
`;
const ButtonCont = styled.div`
  display: flex;
  padding: 30px;
  justify-content: space-around;
  flex-direction: row;
`;
