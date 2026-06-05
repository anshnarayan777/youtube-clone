import {
  FaYoutube,
  FaSearch,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    alert("Logged Out Successfully");

    navigate("/login");
  };

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

      <div className="flex items-center gap-4">

        <FaBell className="cursor-pointer text-xl" />

        <p className="text-sm text-gray-300">
          Welcome, {user?.name}
        </p>

        <FaUserCircle className="cursor-pointer text-3xl" />

        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>

      </div>

    </div>
  );
};

export default Navbar;