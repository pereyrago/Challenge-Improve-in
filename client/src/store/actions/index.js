export const LOG_IN = (credentials) => {
  return { type: "LOG_IN", payload: credentials };
};
export const LOG_OUT = () => {
  return { type: "LOG_OUT" };
};
export const CREATE_USER = (data) => {
  return { type: "CREATE_USER", payload: data };
};
export const BANDS = (data) => {
  return { type: "BANDS", payload: data };
};
export const TOOGLEOPEN = () => {
  return { type: "TOOGLEOPEN" };
};
export const TOOGLECLOSE = () => {
  return { type: "TOOGLECLOSE" };
};
