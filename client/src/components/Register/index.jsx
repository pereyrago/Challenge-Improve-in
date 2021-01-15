import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import IconButton from "@material-ui/core/IconButton";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useDispatch } from "react-redux";
import { CREATE_USER } from "../../store/actions";
import { NavLink, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const LogIn = () => {
  const [state, setState] = useState({
    confirmPassword: "",
    user: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

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
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
        state.password
      )
    )
      return alert("Fill in the fields following the guides");

    dispatch(
      CREATE_USER({
        user: state.user,
        email: state.email,
        password: state.password,
      })
    );

    alert("User created, try to login!");
    return setState({ ...state, redirect: true });
  };
  return (
    <Container>
      {state.redirect && <Redirect to="/" />}
      <Form onSubmit={handleSubmit}>
        <Title>REGISTER</Title>
        <TextField
          error={
            !!state.email && !/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(state.email)
          }
          id="email"
          style={{ marginTop: 15 }}
          label="Enter your email"
          name="email"
          type="email"
          value={state.email}
          onChange={handleChange}
          helperText={
            !!state.email &&
            !/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(state.email) &&
            "Incorrect entry."
          }
        />
        <TextField
          style={{ marginTop: 15 }}
          id="user"
          label="Username"
          name="user"
          value={state.user}
          onChange={handleChange}
        />
        <TextField
          error={
            !!state.password &&
            !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
              state.password
            )
          }
          style={{ marginTop: 15 }}
          id="password"
          label="Password"
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
          helperText={
            !!state.password &&
            !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
              state.password
            ) &&
            "The password must be at least 8 characters, numbers, uppercase and lowercase letters"
          }
        />
        <TextField
          style={{ marginTop: 15 }}
          id="confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          value={state.confirmPassword}
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
          error={
            !!state.confirmPassword && state.confirmPassword !== state.password
          }
          helperText={
            !!state.confirmPassword &&
            state.confirmPassword !== state.password &&
            "Those passwords doesn't match!."
          }
        />
        <ButtonCont>
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            type="submit"
          >
            REGISTER
          </Button>
          <NavLink to="/">
            <Button className={classes.btn} variant="contained" color="primary">
              LOG IN
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
