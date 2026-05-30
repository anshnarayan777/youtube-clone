import {
  FaHome,
  FaFire,
  FaHistory,
  FaClock,
  FaThumbsUp,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen bg-zinc-900 text-white p-4">
      <ul className="space-y-6">

        <Link to="/">
          <li className="flex items-center gap-3 hover:text-red-500 cursor-pointer">
            <FaHome />
            Home
          </li>
        </Link>

        <li className="flex items-center gap-3 hover:text-red-500 cursor-pointer">
          <FaFire />
          Trending
        </li>

        <Link to="/history">
          <li className="flex items-center gap-3 hover:text-red-500 cursor-pointer">
            <FaHistory />
            History
          </li>
        </Link>

        <Link to="/watchlater">
          <li className="flex items-center gap-3 hover:text-red-500 cursor-pointer">
            <FaClock />
            Watch Later
          </li>
        </Link>

        <li className="flex items-center gap-3 hover:text-red-500 cursor-pointer">
          <FaThumbsUp />
          Liked Videos
        </li>

      </ul>
    </div>
  );
};
<Link to="/video">
  <li className="flex items-center gap-3 hover:text-red-500 cursor-pointer">
    🎥 Video Page
  </li>
</Link>

export default Sidebar;