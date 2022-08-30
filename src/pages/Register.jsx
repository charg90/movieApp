import Styles from "./../styles/register.module.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./../DB/fireBase";
import { motion } from "framer-motion";
import { useReducer } from "react";
import { useForm } from "react-hook-form";
import { loginReducer, initialState } from "./../reducers/login";
import { NAME, LAST_NAME, EMAIL, PASSWORD } from "./../reducers/actions/login";

const Register = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data.email, data.password);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
    } catch (err) {
      console.log(err);
    }
  };
  console.log(state.name.value);

  return (
    <div className={`${Styles.formContainer} container`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col">
            <motion.label
              animate={{
                y:
                  state.name.state || state.name.value !== ""
                    ? "0rem"
                    : "2.5rem",
              }}
              htmlFor="nombre"
              className={`${Styles.inputLabel} col-form-label `}
            >
              Name
            </motion.label>
            <input
              type="text"
              id="firsName"
              className={`${Styles.inputRegister} form-control text-white `}
              {...register("firstName")}
              onFocus={(e) => dispatch({ type: NAME, payload: e.target.value })}
              onBlur={(e) => dispatch({ type: NAME, payload: e.target.value })}
            />
          </div>
          <div className="col">
            <motion.label
              animate={{
                y:
                  state.lastName.state || state.lastName.value !== ""
                    ? "0rem"
                    : "2.5rem",
              }}
              htmlFor="lastName"
              className={`${Styles.inputLabel} col-form-label`}
            >
              Last Name
            </motion.label>
            <input
              type="text"
              id="lastName"
              className={`${Styles.inputRegister} form-control text-white `}
              {...register("lastName")}
              onFocus={(e) =>
                dispatch({ type: LAST_NAME, payload: e.target.value })
              }
              onBlur={(e) =>
                dispatch({ type: LAST_NAME, payload: e.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <motion.label
              animate={{
                y:
                  state.email.state || state.email.value !== ""
                    ? "0rem"
                    : "2.5rem",
              }}
              htmlFor="email"
              className={`${Styles.inputLabel} col-form-label`}
            >
              Email
            </motion.label>
            <input
              type="email"
              id="email"
              className={`${Styles.inputRegister} form-control text-white `}
              {...register("email")}
              onFocus={(e) =>
                dispatch({ type: EMAIL, payload: e.target.value })
              }
              onBlur={(e) => dispatch({ type: EMAIL, payload: e.target.value })}
            />
            <motion.label
              animate={{
                y:
                  state.password.state || state.password.value !== ""
                    ? "0rem"
                    : "2.5rem",
              }}
              htmlFor="password"
              className={`${Styles.inputLabel} col-form-label`}
            >
              Password
            </motion.label>
            <input
              type="password"
              id="password"
              className={`${Styles.inputRegister} form-control text-white `}
              {...register("password")}
              onFocus={(e) =>
                dispatch({ type: PASSWORD, payload: e.target.value })
              }
              onBlur={(e) =>
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
