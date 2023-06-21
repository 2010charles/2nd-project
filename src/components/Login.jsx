import React from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Login() {
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/
      ,
      'set strong password'
    ).required("Password is required"),
    
  });
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="form">
      <form className="formElement"
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
      <div className='registerpart loginpart'>
        <h6>Login</h6>
      </div>
        <div className="emai">
          <input type="text" placeholder="Email..." {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>
        <div className="password">
          <input type="password" placeholder="Password..." {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>

        <input className='Register Login' type="submit" value="Login" style={{ width: "50%" }} />
      </form>
    </div>
  );
}

export default Login
