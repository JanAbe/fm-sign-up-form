import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit() {
    toast.success("Account created!");
    reset();
  }

  return (
    <form className="form shadow" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <input
          className={errors.firstName ? "error bg-error input" : "input"}
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />
        {errors.firstName?.type === "required" && (
          <div className="validation-message-wrapper">
            <p className="validation-message">First Name cannot be empty</p>
          </div>
        )}
      </div>

      <div>
        <input
          className={errors.lastName ? "error bg-error input" : "input"}
          {...register("lastName", { required: true })}
          placeholder="Last Name"
        />
        {errors.lastName?.type === "required" && (
          <div className="validation-message-wrapper">
            <p className="validation-message">Last Name cannot be empty</p>
          </div>
        )}
      </div>

      <div>
        <input
          className={errors.email ? "error bg-error input" : "input"}
          {...register("email", {
            required: true,
            pattern: /^[^@]+@[^@]+\.[^@]+$/,
          })}
          placeholder="Email Address"
          type="email"
        />
        <div className="validation-message-wrapper">
          {errors.email?.type === "required" && (
            <p className="validation-message">Email Address cannot be empty</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="validation-message">
              Looks like this is not an email
            </p>
          )}
        </div>
      </div>

      <div>
        <input
          className={errors.password ? "error bg-error input" : "input"}
          {...register("password", { required: true })}
          placeholder="Password"
          type="password"
        />
        {errors.password?.type === "required" && (
          <div className="validation-message-wrapper">
            <p className="validation-message">Password cannot be empty</p>
          </div>
        )}
      </div>

      <button className="free-trial-button">Claim your free trial</button>
      <p className="tos">
        By clicking the button, you are agreeing to our{" "}
        <a className="tos-link" href="#">
          Terms and Services
        </a>
      </p>
    </form>
  );
};
