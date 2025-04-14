import { NavLink } from "react-router-dom";
import { Home, Folder, Users, BarChart, MessageSquare, Settings } from "lucide-react";
import logo from "../assets/Image 1858.png";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white min-h-screen p-4 border-r">
      <div className="flex items-center space-x-2 mb-8">
        <img src={logo} alt="Logo" />
        
      </div>
      <nav className="space-y-2">
        <NavLink to="/" className={({ isActive }) => `flex items-center space-x-2 p-2 rounded-md ${isActive ? 'bg-pink-100 text-pink-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}>
          <Home size={18} /> <span>Dashboard</span>
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => `flex items-center space-x-2 p-2 rounded-md ${isActive ? 'bg-pink-100 text-pink-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}>
          <Folder size={18} /> <span>Projects</span>
        </NavLink>
        <NavLink to="/teams" className={({ isActive }) => `flex items-center space-x-2 p-2 rounded-md ${isActive ? 'bg-pink-100 text-pink-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}>
          <Users size={18} /> <span>Teams</span>
        </NavLink>
        <NavLink to="/analytics" className={({ isActive }) => `flex items-center space-x-2 p-2 rounded-md ${isActive ? 'bg-pink-100 text-pink-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}>
          <BarChart size={18} /> <span>Analytics</span>
        </NavLink>
        <NavLink to="/messages" className={({ isActive }) => `flex items-center space-x-2 p-2 rounded-md ${isActive ? 'bg-pink-100 text-pink-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}>
          <MessageSquare size={18} /> <span>Messages</span>
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => `flex items-center space-x-2 p-2 rounded-md ${isActive ? 'bg-pink-100 text-pink-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}>
          <Settings size={18} /> <span>Settings</span>
        </NavLink>
      </nav>

      <div className="mt-10 p-4 rounded-lg bg-blue-50">
        <h2 className="font-semibold text-sm mb-2">V2.0 is available</h2>
        <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded-md">Try now</button>
      </div>
    </div>
  );
};

export default Sidebar;