import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
}

const ToysBlogs = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-10 lg:px-28 bg-slate-50 py-8 mb-10">
      <div>
        <h1 className="text-center text-4xl font-sans font-bold mb-7 text-orange-500">
          Our Toys Blogs
        </h1>
      </div>

      <Slider {...settings}>
        <div className="card card-compact w-full py-5  bg-base-100 shadow-xl me-8">
          <figure>
            <img
              className="w-48 h-40 rounded-full"
              src="https://i.ibb.co/YPVgpcX/happy-little-boy-playing.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center space-y-3">
            <h2 className="text-3xl ">Mr Jonson</h2>
            <p>Your task is to decide at what point</p>
            <div className="flex items-center justify-center space-x-5">
              <FaFacebook className="w-10 h-8 cursor-pointer"></FaFacebook>
              <FaGithub className="w-10 h-8 cursor-pointer"></FaGithub>
              <FaLinkedinIn className="w-10 h-8 cursor-pointer"></FaLinkedinIn>
              <FaTwitter className="w-10 h-8 cursor-pointer"></FaTwitter>
            </div>

            <div>
              <button className="btn btn-success text-white">Read More</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-full py-5  bg-base-100 shadow-xl me-8">
          <figure>
            <img
              className="w-48 h-40 rounded-full"
              src="https://i.ibb.co/68QHLtY/crazy-man-sad-expression.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center space-y-3">
            <h2 className="text-3xl ">Mr Animals Doctors</h2>
            <p>Your task is to decide at what point</p>
            <div className="flex items-center justify-center space-x-5">
              <FaFacebook className="w-10 h-8 cursor-pointer"></FaFacebook>
              <FaGithub className="w-10 h-8 cursor-pointer"></FaGithub>
              <FaLinkedinIn className="w-10 h-8 cursor-pointer"></FaLinkedinIn>
              <FaTwitter className="w-10 h-8 cursor-pointer"></FaTwitter>
            </div>

            <div>
              <button className="btn btn-success text-white">Read More</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-full py-5  bg-base-100 shadow-xl me-8">
          <figure>
            <img
              className="w-48 h-40 rounded-full"
              src="https://i.ibb.co/HK1xHPr/fun-baby-clothes-casual-teddy.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center space-y-3">
            <h2 className="text-3xl ">Mr Ankush</h2>
            <p>Your task is to decide at what point</p>
            <div className="flex items-center justify-center space-x-5">
              <FaFacebook className="w-10 h-8 cursor-pointer"></FaFacebook>
              <FaGithub className="w-10 h-8 cursor-pointer"></FaGithub>
              <FaLinkedinIn className="w-10 h-8 cursor-pointer"></FaLinkedinIn>
              <FaTwitter className="w-10 h-8 cursor-pointer"></FaTwitter>
            </div>

            <div>
              <button className="btn btn-success text-white">Read More</button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ToysBlogs;
