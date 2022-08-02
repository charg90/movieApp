import React from "react";
import axios from "axios";
import swal from "sweetalert";

const Login = () => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "" || password === "") {
      swal("falta rellenar los campos");
      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      console.log("rellanar bien el campo emails");
      return;
    }
    if (email !== "challenge@alkemy.org" || password !== "react") {
      console.log("credenciales invalidas");
      return;
    }

    axios
      .post("http://challange-react.alkemy.org", { email, password })
      .then((res) => {
        console.log(res.data);
        const token = res.data;
        localStorage.setItem("token", token);
      })
      .catch((e) => {
        swal("error");
      });
  };

  return (
    <div className="App">
      <h1>Formulario</h1>
      <form onSubmit={handlerSubmit}>
        <input type="text" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <button type="submit">enviar</button>
      </form>
    </div>
  );
};

export default Login;
