import "./App.css";
import { useForm } from "react-hook-form";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    toast.success("Account created!");
    reset();
  }

  return (
    <div className="root">
      <ToastContainer />
      <main className="container">
        <section className="intro-section">
          <h1 className="title">Learn to code by watching others</h1>

          <p className="description">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </section>

        <section className="form-section">
          <div className="banner shadow">
            <span>
              <strong>Try it free 7 days</strong> then
            </span>{" "}
            <span>$20/mo. thereafter</span>
          </div>

          <form className="form shadow" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                className={errors.firstName ? "error bg-error input" : "input"}
                {...register("firstName", { required: true })}
                placeholder="First Name"
              />
              {errors.firstName?.type === "required" && (
                <div className="validation-message-wrapper">
                  <p className="validation-message">
                    First Name cannot be empty
                  </p>
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
                  <p className="validation-message">
                    Last Name cannot be empty
                  </p>
                </div>
              )}
            </div>

            <div>
              <input
                className={errors.email ? "error bg-error input" : "input"}
                {...register("email", {required: true, pattern: /^[^@]+@[^@]+\.[^@]+$/})}
                placeholder="Email Address"
                /* how to make my custom validation work with type="email"? */
                type="text"
              />
                <div className="validation-message-wrapper">
                  {errors.email?.type === "required" && (
                    <p className="validation-message">
                      Email Address cannot be empty
                    </p>
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
                  {...register("password", {required: true})}
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
        </section>
      </main>

      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
