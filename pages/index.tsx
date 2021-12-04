import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="my-10 mx-40 md:mx-2 flex flex-col">
      <Head>
        <title>Me</title>
      </Head>
      <div className="flex flex-col md:flex-col p-4 items-center justify-center">
        <img
          className="h-96 md:h-52 w-full object-cover rounded-b-md shadow-lg"
          src="/profile-bg.jpg"
          alt="Profile"
        />

        <div className="w-full p-5 flex flex-row md:flex-col items-center justify-start">
          <img
            className="h-32 md:-mt-20 object-cover rounded-full md:border-4 md:border-blue-900 "
            src="https://pfs1107.z23.web.core.windows.net/images/me-fb"
            alt="Profile"
          />

          <h1 className="my-5 mx-10 md:mx-4 font-bold text-3xl md:text-2xl md:text-center">
            Joshua Ven Honoridez
          </h1>
        </div>

        <hr className="w-full mx-10 rounded-full border-2 border-blue-300" />

        <div className="mx-3">
          <p className="my-2 md:my-5 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis magnam odio cum
            consequatur sequi deserunt, placeat consequuntur eaque aspernatur veniam nemo, molestias
            atque debitis cupiditate, velit ipsa. Vel, maiores fuga.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
