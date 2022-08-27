import Styles from "./../styles/register.module.css";
import { motion } from "framer-motion";
import { useReducer, useState } from "react";
import { loginReducer, initialState } from "./../reducers/login";
import { NAME, LAST_NAME, EMAIL, PASSWORD } from "./../reducers/actions/login";

const Register = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  console.log(state);
  const register = async (state, dispatch) => {
    try {
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={`${Styles.formContainer} container`}>
      <form>
        <div className="row">
          <div className="col">
            <motion.label
              animate={{
                y: state.name.state ? "0rem" : "2.5rem",
              }}
              htmlFor="nombre"
              className={`${Styles.inputLabel} col-form-label `}
            >
              Name
            </motion.label>
            <input
              type="text"
              id="nombre"
              className={`${Styles.inputRegister} form-control text-white `}
              onFocus={(e) => dispatch({ type: NAME, payload: e.target.value })}
            />
          </div>
          <div className="col">
            <motion.label
              animate={{ y: state.lastName.state ? "0rem" : "2.5rem" }}
              htmlFor="lastName"
              className={`${Styles.inputLabel} col-form-label`}
            >
              Last Name
            </motion.label>
            <input
              type="text"
              id="lastName"
              className={`${Styles.inputRegister} form-control text-white `}
              onFocus={(e) =>
                dispatch({ type: LAST_NAME, payload: e.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <motion.label
              animate={{ y: state.email.state ? "0rem" : "2.5rem" }}
              htmlFor="email"
              className={`${Styles.inputLabel} col-form-label`}
            >
              Email
            </motion.label>
            <input
              type="email"
              id="email"
              className={`${Styles.inputRegister} form-control text-white `}
              onFocus={(e) =>
                dispatch({ type: EMAIL, payload: e.target.value })
              }
            />
            <motion.label
              animate={{ y: state.password.state ? "0rem" : "2.5rem" }}
              htmlFor="password"
              className={`${Styles.inputLabel} col-form-label`}
            >
              Password
            </motion.label>
            <input
              type="password"
              id="password"
              className={`${Styles.inputRegister} form-control text-white `}
              onFocus={(e) =>
                dispatch({ type: PASSWORD, payload: e.target.value })
              }
            />
          </div>
        </div>
        <button className="btn  btn-primary text-white mt-3">
          Crear Cuenta
        </button>
      </form>
    </div>
  );
};

export default Register;
