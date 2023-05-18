import { Link, useRouteError } from "react-router-dom";
import useTittle from "../../useHooks/useTitle";

const Error = () => {
  const { error } = useRouteError();
  //console.log(error);
  useTittle("error");
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img
          className="w-1/2 h-96 rounded"
          src="https://i.pinimg.com/736x/4e/19/c2/4e19c2d8da38136202aa53345057f601.jpg"
          alt=""
        />
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
