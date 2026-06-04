import {
  FaYoutube,
  FaSearch,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="bg-black text-white p-4 flex justify-between items-center border-b border-zinc-800">

      <div className="flex items-center gap-2">
        <FaYoutube className="text-red-600 text-3xl" />

        <h1 className="text-2xl font-bold">
          YouTube
        </h1>
      </div>

      <div className="flex items-center bg-zinc-900 rounded-full overflow-hidden">

        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="bg-zinc-900 px-4 py-2 w-96 outline-none"
        />

        <button className="px-4">
          <FaSearch />
        </button>

      </div>

      <div className="flex items-center gap-6 text-xl">
        <FaBell className="cursor-pointer" />
        <FaUserCircle className="cursor-pointer text-3xl" />
      </div>

    </div>
  );
};

export default Navbar;