import { HiArrowSmRight } from "react-icons/hi";

const Gallery = () => {
  return (
    <div className="px-4 lg:px-28 py-10">
      <div className="text-5xl font-sans font-bold text-orange-500 text-center mb-10">
        Our Gallery
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        <div>
          <img
            className="w-full h-64 border-8 border-gray-400 transition duration-300 transform hover:scale-90"
            src="https://img.freepik.com/free-psd/3d-rendering-wild-animal_23-2149962421.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-64 border-8 border-gray-400 transition duration-300 transform hover:scale-90"
            src="https://img.lovepik.com/free-png/20211207/lovepik-clockwork-animal-car-toy-png-image_401380831_wh1200.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-64 border-8 border-gray-400 transition duration-300 transform hover:scale-90"
            src="https://freepngimg.com/thumb/toy/33908-7-plush-toy-file.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-64 border-8 border-gray-400 transition duration-300 transform hover:scale-90"
            src="https://i.ibb.co/q5tvQ43/33908-7-plush-toy-file.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-64 border-8 border-gray-400 transition duration-300 transform hover:scale-90"
            src="https://i.ibb.co/gzfDt0t/istockphoto-178893038-612x612.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-64 border-8 border-gray-400 transition duration-300 transform hover:scale-90"
            src="https://i.ibb.co/r7NrxH7/2201-w030-n002-266b-p1-266.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="btn btn-success text-white">
          Read More <HiArrowSmRight className=" w-10 h-5"></HiArrowSmRight>{" "}
        </button>
      </div>
    </div>
  );
};

export default Gallery;
