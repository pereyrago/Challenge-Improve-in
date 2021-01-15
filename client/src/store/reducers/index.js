const initialState = {
  logged: false,
  users: [{ user: "demo", email: "demo@user.com", password: "GabrielP1" }],
  bands: {},
  toogle: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "LOG_IN": {
      return (state = {
        ...state,
        logged: true,
      });
    }
    case "CREATE_USER": {
      return (state = {
        ...state,
        users: [...state.users, action.payload],
      });
    }
    case "LOG_OUT": {
      return (state = {
        ...state,
        logged: false,
      });
    }
    case "BANDS": {
      return (state = {
        ...state,
        bands: action.payload,
      });
    }
    case "TOOGLEOPEN": {
      return (state = {
        ...state,
        toogle: true,
      });
    }
    case "TOOGLECLOSE": {
      return (state = {
        ...state,
        toogle: false,
      });
    }
    default:
      return state;
  }
}
