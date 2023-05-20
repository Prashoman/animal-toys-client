import { FaFacebook, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content px-4 lg:px-28">
      <div>
        <img
          className="w-24 h-14"
          src="https://i.ibb.co/vHZdfcz/d9gq-oo09-151115.jpg"
          alt=""
        />
        <p>
          This is the Animal Toys LTD.
          <br />
          Providing reliable tech since 2020
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Tedey Toys</a>
        <a className="link link-hover">Cat toys</a>
        <a className="link link-hover">Dog Toys</a>
        <a className="link link-hover">Horse Toy</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to="/blogs" className="link link-hover">
          Blogs{" "}
        </Link>
        <a className="link link-hover">Contact</a>
        <Link to="/allToys" className="link link-hover">
          All Toys
        </Link>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <h1 className="footer-title">Contact Us</h1>
        <div className="flex space-x-5">
          <a href="https://www.facebook.com/prashmon.chakroborty">
            <FaFacebook className="w-10 h-8 cursor-pointer"></FaFacebook>
          </a>
          <a href="https://github.com/Prashoman">
            <FaGithub className="w-10 h-8 cursor-pointer"></FaGithub>
          </a>
          <a href="https://www.linkedin.com/in/prashoman-chakrabarti-2b827423b/">
            <FaLinkedinIn className="w-10 h-8 cursor-pointer"></FaLinkedinIn>
          </a>
          <a href="https://twitter.com/prashoman">
            <FaTwitter className="w-10 h-8 cursor-pointer"></FaTwitter>
          </a>
        </div>

        <div>
          <input
            className="border-2 border-blue-300 w-54 h-12 px-3 rounded-lg"
            type="text"
            placeholder="Please Subscribe"
          />
          <button className="btn btn-success">Subscribe</button>
        </div>

        <div className="text-center mt-2">
          <p>Copyright © 2023 - All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
