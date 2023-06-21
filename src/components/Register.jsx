import './register.css'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Register() {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    email: yup.string().email().required("Email is required"),
    age: yup.number("number").positive("+").required("Age is required"),
    password: yup.string().matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/
      ,
      'set strong password'
    ).required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
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
      <div className='registerpart'>
        <h6>Register</h6>
      </div>
        <div className="name">
          <input type="text" placeholder="Full name" {...register("fullName")} />
          <p>{errors.fullName?.message}</p>
        </div>
        <div className="emai">
          <input type="text" placeholder="Email..." {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>
        <div className="age">
          <input type="number" placeholder="Age..." {...register("age")} />
          <p>{errors.age?.message}</p>
        </div>
        <div className="password">
          <input type="password" placeholder="Password..." {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>
        <div className="ConfirmPassward">
          <input
            type="password" placeholder="Confirm Password..."  {...register("confirmPassword")} />
          <p>{errors.confirmPassword?.message}</p>
        </div>
        <input className='Register' type="submit" value="Register" style={{ width: "50%" }} />
      </form>
    </div>
  );
}

export default Register;
