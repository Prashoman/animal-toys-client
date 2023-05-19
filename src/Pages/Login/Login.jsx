import { Link, useLocation, useNavigate } from "react-router-dom";
import Social from "./Social/Social";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import useTittle from "../../useHooks/useTitle";

const Login = () => {
  const [toastShow, setToastShow] = useState(false);
  const { logInUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useTittle("Login");

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // console.log(location.state?.from?.pathname);
  //console.log(from);
  useEffect(() => {
    if (location.state?.from) {
      setToastShow(true);
      // console.log("asi");
      // ;
    }
  }, []);

  if (toastShow) {
    console.log("ok");
    Swal.fire({
      icon: "warning",
      title: "You have to log in first to view details",
      text: "Something went wrong!",
    });
    // toast.warning("You have to log in first to view details");
    setToastShow(false);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    //console.log(email, password);
    setEmailError("");
    setPasswordError("");
    setError("");
    if (email == "") {
      setEmailError("Email field is empty");
    }

    if (password.length == 0) {
      setPasswordError("Password field is empty");
    } else if (password.length < 6) {
      setPasswordError(" Password at least 6 characters");
    }
    if (email && password.length >= 6) {
      logInUser(email, password)
        .then((result) => {
          const user = result.user;
          //console.log(user);
          form.reset();
          toast.success("Login Successfully");
          //setToastShow(false);
          navigate(from, { replace: true });
        })
        .catch((error) => {
          const massage = error.message;
          if (massage) {
            setError("User Email and password not match");
          }
          //console.log(error);
        });
    }
  };
  return (
    <div className="hero min-h-screen  px-4 lg:px-28 mt-20">
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
            <div className="px-12 mb-3 w-full h-auto">
              <p className="text-red-600 text-xl font-sans font-semibold">
                {error}
              </p>
              <p className="text-red-600 text-xl font-sans font-semibold">
                {emailError}
              </p>
              <p className="text-red-600 text-xl font-sans font-semibold">
                {passwordError}
              </p>
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
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
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
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
