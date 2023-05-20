import useTittle from "../../useHooks/useTitle";

const Blogs = () => {
  useTittle("Blogs");
  return (
    <div className="px-4 lg:px-28 py-10">
      <h1 className="text-4xl font-bold text-center text-orange-500 mb-7">
        Blogs
      </h1>
      <p className="text-xl font-bold text-center mb-6">
        Ours Assignments Questions
      </p>
      <div className="space-y-5">
        <div
          tabIndex={0}
          className="collapse collapse-plus border-2 border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            1. What is MongoDB aggregate and how does it work ?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              Aggregation is a way of processing a large number of documents in
              a collection by means of passing them through different stages.The
              aggregate operation takes an array of stages as input, where each
              stage represents a specific operation or transformation to be
              applied to the documents.
            </p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse collapse-plus border-2 border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            2. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </div>
          <div className="collapse-content">
            <p>
              Basically, A refresh token just helps you re-validate a user
              without them having to re-enter their login credentials multiple
              times. The access token The access token is re-issued, provided
              the refresh token is a valid one requesting permission to access
              confidential resources.A refresh token is also issued by the
              authorization server along with the access token.And stored the
              two place localStorage and HTTP-only cookies.better option is
              HTTP-Only cookies.
            </p>
          </div>
        </div>
        <div
          tabIndex={2}
          className="collapse collapse-plus border-2 border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            3. Compare SQL and NoSQL databases?
          </div>
          <div className="collapse-content">
            <p>
              SQL means structured Query Language and its store the data table
              format looks row and columns format and its Relational
              Databases.And NoSQL databases are document and all data json
              format collection wish stored.
            </p>
          </div>
        </div>
        <div
          tabIndex={3}
          className="collapse collapse-plus border-2 border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            4. What is express js? What is Nest JS?
          </div>
          <div className="collapse-content">
            <p>
              Express is a minimalist and flexible framework that is easy to use
              and has a large community of developers its uses node js etc.
              NestJS, on the other hand, is a newer framework that provides
              additional features such as dependency injection, a modular
              architecture, and an intuitive CLI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
