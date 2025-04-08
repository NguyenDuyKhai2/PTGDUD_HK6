import React from 'react';
// import { Bell, HelpCircle, Search } from 'lucide-react';
import avt from "../assets/Avatar (1).png"
import Bell from "../assets/Bell 1.png"
import HelpCircle from "../assets/Question 1.png"
import Search from "../assets/Search.png"


export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <h1 className="text-3xl font-bold text-pink-600">Dashboard</h1>
      <div className="flex items-center gap-4">
        <div className="relative">
        <img src={Search} alt="search" className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 opacity-60"/>
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-4 py-2 border rounded-md text-sm"
          />
        </div>
        <img src={Bell} alt="bell" />
        <img src={HelpCircle} alt="HelpHelp" />
        <img
          src={avt}
          alt="User avatar"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </header>
  );
}