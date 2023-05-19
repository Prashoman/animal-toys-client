import { FaFacebook, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
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
        <a className="link link-hover">Blogs </a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">All Toys</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <h1 className="footer-title">Contact Us</h1>
        <div className="flex space-x-5">
          <FaFacebook className="w-10 h-8 cursor-pointer"></FaFacebook>
          <FaGithub className="w-10 h-8 cursor-pointer"></FaGithub>
          <FaLinkedinIn className="w-10 h-8 cursor-pointer"></FaLinkedinIn>
          <FaTwitter className="w-10 h-8 cursor-pointer"></FaTwitter>
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
