import { Link } from "react-router-dom";
import Social from "./Social/Social";

const Login = () => {
  return (
    <div className="hero min-h-screen  px-4 lg:px-28">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img
            className="w-full  lg:w-3/4"
            src="https://i.ibb.co/5GvKbM8/2769533.jpg"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-sans font-bold text-center">
              Login First
            </h1>
            <hr />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <label className="label">
              <p>
                You have do not account? Plz{" "}
                <Link to="/register" className="text-blue-600">
                  Register
                </Link>
              </p>
            </label>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="divider">OR</div>
            <div className="text-center">
              <Social></Social>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
