import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from "../assets/Image 1858.png"
import LayoutDashboard from "../assets/Squares four 1.png"
import FolderKanban from "../assets/Folder.png"
import Users from "../assets/Groups.png"
import BarChart2 from "../assets/Pie chart.png"
import MessageSquare from "../assets/Chat.png"
import Zap from "../assets/Code.png"



const links = [
  { to: '/dashboard', label: 'Dashboard',icon: LayoutDashboard },
  { to: '/projects', label: 'Projects', icon: FolderKanban },
  { to: '/teams', label: 'Teams', icon: Users },
  { to: '/analytics', label: 'Analytics', icon: BarChart2 },
  { to: '/messages', label: 'Messages', icon: MessageSquare },
  { to: '/integrations', label: 'Integrations', icon: Zap },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:block h-full bg-white border-r p-4 space-y-4">
     
      <img src={Logo} alt="logo" />
      <nav className="space-y-2">
        {links.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-100 transition ${
                isActive ? 'bg-pink-400 text-white' : 'text-gray-700'
              }`
            }
          >
             <img src={icon} alt={label} className="w-5 h-5" />
            <span>{label}</span>

          </NavLink>
        ))}
      </nav>
    </aside>
  );
}