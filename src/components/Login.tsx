import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}
const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

type LoginPayload = {
  username: string;
  nombre: string;
};
//las acciones no se van a expandir. No van a crecer por lo tanto, se crea un type
type AuthAction =
  | { type: "logout" }
  //payload es porque necesita que le pasen mas informacion
  | { type: "login"; payload: LoginPayload };

//action es la que cambia el state
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        nombre: "",
        username: "",
      };
    case "login":
      return {
        validando: false,
        token: "ABC",
        nombre: action.payload.nombre,
        username: action.payload.username,
      };

    default:
      return state;
  }
};
export const Login = () => {
  const [{ validando, token, nombre, username }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  //al poner el [] significa que solo se lanzará la primera vez que se lance la aplicacion,
  // si por ejemplo se quisiera lanzar cuando cambiara el state,
  //substituiriamos el [] por state.
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: {
        nombre: "Toni Aguilera",
        username: "GuardianAngel",
      },
    });
  };
  const logout = () => {
    dispatch({ type: "logout" });
  };

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }
  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className="alert alert-success">
          <div className="d-flex flex-column">
            <span>Autenticado como: {username} </span>
            <span>Nombre: {nombre}</span>
          </div>
        </div>
      ) : (
        <div className="alert alert-danger">No autenticado.</div>
      )}

      {token ? (
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  );
};
