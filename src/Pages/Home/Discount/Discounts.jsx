const Discounts = () => {
  return (
    <div className="px-4 lg:px-28 bg-blue-50 py-10 mb-10">
      <div className="lg:flex justify-between items-center w-full">
        <div className="mb-3 lg:w-1/2 space-y-6">
          <h1 className="text-blue-600 font-bold text-xl">Grab it Facts</h1>
          <h1 className="text-4xl text-orange-500 font-sans font-bold">
            New summer sale Discount Up to 50%
          </h1>
          <p>
            Text normalization is the process of transforming text into a single
            canonical form that it might not have had before. Normalizing text
            before storing or processing it allows for separation of concerns,
            since input is guaranteed
          </p>
          <button className="btn btn-success text-white">Shop Now</button>
        </div>
        <div className="">
          <img
            className="w-54 h-96"
            src="https://i.ibb.co/TgDXGTz/38000.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Discounts;
