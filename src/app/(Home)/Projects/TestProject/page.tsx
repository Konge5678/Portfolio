import React from "react";

const TestProject: React.FC = () => {
  return (
    <div className="flex flex-col bg-indigo-950 text-white rounded-lg m-10 lg:mx-40 lg:mt-20">
      <a
        href="/Projects"
        className="text-purple-400 hover:text-yellow-400 transition-colors duration-200 mb-4 p-6">
        ← Back to ProjectArchive
      </a>

      <h1 className="text-4xl font-bold mb-4 text-center text-yellow-400">
        Cool Project
      </h1>

      <div className="bg-gray-700 mx-10 lg:mx-40 h-64 lg:h-auto lg:max-h-[600px] flex items-center justify-center mb-6 rounded overflow-hidden">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240202114016/Web-Development-Project-Ideas.webp"
          alt="Project Image"
          className=" object-fill w-full h-full"
        />
      </div>

      <div className="flex justify-center mb-6">
        <button className="bg-purple-700 text-white font-semibold py-2 px-4 rounded hover:bg-purple-600 transition-colors duration-200">
          Check it out
        </button>
      </div>
      <div>
        <p className="text-gray-300 text-center mb-6 px-4 lg:mx-20">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis
          iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
          quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>

        <p className="text-gray-300 text-center px-4 lg:mx-20 mb-10">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Neque
          porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus
          error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
      </div>
    </div>
  );
};

export default TestProject;
