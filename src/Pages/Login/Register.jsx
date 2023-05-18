import { Link, useNavigate } from "react-router-dom";
import Social from "./Social/Social";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import useTittle from "../../useHooks/useTitle";

const Register = () => {
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { createdUser } = useContext(AuthContext);

  useTittle("singUp");

  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
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

    //console.log(name, email, password, photo);
    if (email && password.length >= 6) {
      createdUser(email, password)
        .then((result) => {
          const user = result.user;
          updateProfile(user, {
            displayName: name,
            photoURL: photo,
          });
          //console.log(user);
          form.reset();
          toast.success("Login Successfully");
          navigate("/");
        })
        .catch((error) => {
          const massage = error.message;
          if (massage) {
            setError("This Email Already Exit");
          }
          //console.log(error);
        });
    }
  };
  return (
    <div className="hero min-h-screen  px-4 lg:px-28 py-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img
            className="w-full  lg:w-3/4"
            src="https://i.ibb.co/Z62tW0t/340365-PAPUL8-568.jpg"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-sans font-bold text-center">
              Register First
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

            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  name="photo"
                  type="url"
                  placeholder="photo url"
                  className="input input-bordered"
                />
              </div>
              <label className="label">
                <p>
                  You have an account? Plz{" "}
                  <Link to="/login" className="text-blue-600">
                    Login
                  </Link>
                </p>
              </label>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Register"
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

export default Register;
