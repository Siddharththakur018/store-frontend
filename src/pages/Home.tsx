import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <h3 className="border rounded-full text-white p-4 mb-12">
            Welcome to Your Next Favorite Store
          </h3>
        </div>
        <div>
          <h1 className="text-7xl font-extrabold text-white text-center mb-10">
            Discover products that make <br /> your life easier and more fun.
          </h1>
        </div>
        <div>
          <p className="text-white text-lg text-center mb-14">
            Browse our curated selection of items crafted for quality, style,
            and convenience. <br />
            From everyday essentials to unique finds, we have something for
            everyone.
          </p>
        </div>
        <div className="flex justify-between items-center text-white w-64">
          <button
            className="flex justify-center items-center gap-2 bg-violet-600 p-3 rounded-xl cursor-pointer"
          >
            Explore now <FaArrowRight />
          </button>
          <button className="flex justify-center gap-2 cursor-pointer items-center">
            Learn more <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
