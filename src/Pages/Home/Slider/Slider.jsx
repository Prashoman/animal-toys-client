const Slider = () => {
  return (
    <div className="px-4 lg:px-28 py-10 mt-20">
      <div className="lg:flex justify-between items-center w-full">
        <div className="lg:w-1/2 px-4 space-y-6">
          <h1 className="text-4xl font-sans font-bold">
            The ToysDiscover the entire Terra
          </h1>
          <p>
            Dive in to Terra by Battats fun wild animals! The longhorn bull is a
            breed of cattle known for its characteristic horns. This realistic
            longhorn bull toy makes a great gift and an ideal goodie bag stuffer
            addition for an animal-themed party.
          </p>
          <button className="btn btn-success text-white">Read More</button>
        </div>
        <div className="lg:w-1/2 py-5">
          {/* <img
            src="https://i.ibb.co/FwmqL2y/play-dough-background-with-octopus.jpg"
            alt=""
          /> */}
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
              <img
                src="https://i.ibb.co/FwmqL2y/play-dough-background-with-octopus.jpg"
                className="w-full rounded-xl"
              />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src="https://i.ibb.co/6vQyqN8/play-dough-background-with-cute-octopus.jpg"
                className="w-full rounded-xl"
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src="https://i.ibb.co/yNnMn8c/flat-lay-underwater-play-dough-background.jpg"
                className="w-full rounded-xl"
              />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
