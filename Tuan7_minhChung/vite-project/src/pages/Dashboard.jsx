import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import LayoutDashboard from "../assets/Squares four 1.png";
import cartIcon from "../assets/Button 1509.png";
import dollarIcon from "../assets/Button 1529.png";
import userIcon from "../assets/Button 1530.png";
import FileText from "../assets/File text 1.png";
import avatar1 from "../assets/Avatar (1).png"; 
import avatar2 from "../assets/Avatar (2).png"; 
import avatar3 from "../assets/Avatar (3).png"; 
import avatar4 from "../assets/Avatar (4).png"; 
import avatar5 from "../assets/Avatar (5).png"; 
import avatar6 from "../assets/Avatar 313.png"; 
import ImportIcon from "../assets/Download.png"; 
import ExportIcon from "../assets/Move up.png"; 

import { Pencil } from "lucide-react";


const iconMap = {
  1: cartIcon,
  2: dollarIcon,
  3: userIcon,
};

const statusStyle = {
  New: "bg-blue-100 text-blue-600",
  "In-progress": "bg-yellow-100 text-yellow-600",
  Completed: "bg-green-100 text-green-600",
};

const tableData = [
  { id: 1, name: "Elizabeth Lee", company: "AvatarSystems", value: "$359", date: "10/07/2023", status: "New", avatar: avatar1 },
  { id: 2, name: "Carlos Garcia", company: "SmoozeShift", value: "$747", date: "24/07/2023", status: "New", avatar: avatar2 },
  { id: 3, name: "Elizabeth Bailey", company: "Prime Time Telecom", value: "$564", date: "08/08/2023", status: "In-progress", avatar: avatar3 },
  { id: 4, name: "Ryan Brown", company: "OmniTech Corporation", value: "$541", date: "31/08/2023", status: "In-progress", avatar: avatar4 },
  { id: 5, name: "Ryan Young", company: "DataStream Inc.", value: "$769", date: "01/05/2023", status: "Completed", avatar: avatar5 },
  { id: 6, name: "Hailey Adams", company: "FlowRush", value: "$922", date: "10/06/2023", status: "Completed", avatar: avatar6 },
  
];

const tableColumns = [
  {
    name: "CUSTOMER NAME",
    selector: row => row.name,
    sortable: true,
    cell: row => (
      <div className="flex items-center gap-2">
        <img src={row.avatar} alt={row.name} className="w-8 h-8 rounded-full" />
        <span className="font-medium">{row.name}</span>
      </div>
    )
  },
  {
    name: "COMPANY",
    selector: row => row.company,
    sortable: true,
  },
  {
    name: "ORDER VALUE",
    selector: row => row.value,
    sortable: true,
  },
  {
    name: "ORDER DATE",
    selector: row => row.date,
    sortable: true,
  },
  {
    name: "STATUS",
    selector: row => row.status,
    cell: row => (
      <span className={`px-2 py-1 rounded-full text-sm font-medium ${statusStyle[row.status]}`}>
        {row.status}
      </span>
    ),
  },
  {
      name: "",
      cell: () => (
        <button className="text-gray-500 hover:text-blue-600">
          <Pencil size={16} />
        </button>
      ) 
    
  }
];

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get('https://67e2cb5297fc65f535379d73.mockapi.io/cards')
      .then(res => {
        const filtered = res.data.filter(item => ["1", "2", "3"].includes(item.id));
        setCards(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch overview data:', err);
        setLoading(false);
      });
  }, []);
  
  return (
    <div className="space-y-6">
      <div className='flex space-x-2 items-center'>
        <img src={LayoutDashboard} alt="" />
        <h1 className="text-xl font-bold">Overview</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          [...Array(3)].map((_, i) => (
            <div
              key={i}
              className="p-4 rounded-xl shadow-md bg-gray-100 animate-pulse h-32"
            />
          ))
        ) : (
          cards.map(({ id, title, value, change, color }) => (
            <div
              key={id}
              className="p-4 rounded-xl shadow-md text-gray-900 relative"
              style={{ backgroundColor: color }}
            >
              <button className="absolute top-3 right-3 p-2 rounded-lg">
                <img src={iconMap[id]} alt="icon" className="w-8 h-8" />
              </button>
              <h2 className="text-lg font-bold">{title}</h2>
              <p className="text-2xl font-bold">{value}</p>
              <div className="flex items-center gap-1 mt-1 text-xs">
                <span className="text-green-500 font-semibold">▲ {change}%</span>
                <span className="text-gray-600">period of change</span>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-8">
        <div className='flex items-center justify-between mb-4'>
          <div className='flex space-x-2 items-center'>
            <img src={FileText} alt="texttext" className="w-6 h-6" />
            <h1 className="text-xl font-bold">Detailed Report</h1>
          </div>
          <div className="space-x-2 flex">
            <button className="flex items-center space-x-1 px-3 py-1 border rounded-md text-pink-500 border-pink-300 hover:bg-pink-50">
              <img src={ImportIcon} alt="Import" className="w-4 h-4" />
              <span>Import</span>
            </button>
            <button className="flex items-center space-x-1 px-3 py-1 border rounded-md text-pink-500 border-pink-300 hover:bg-pink-50">
              <img src={ExportIcon} alt="Export" className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>

        </div>


        <DataTable
          columns={tableColumns}
          data={tableData}
          selectableRows
          pagination
          responsive
          className="rounded-md"
          paginationComponentOptions={{
            rowsPerPageText: 'Rows per page:',
            rangeSeparatorText: 'of',
            selectAllRowsItem: false,
          }}
          paginationPerPage={6}
          paginationRowsPerPageOptions={[6, 12, 24]}
          paginationComponent={({ currentPage, rowsPerPage, rowCount, onChangePage, onChangeRowsPerPage }) => {
            const totalPages = Math.ceil(rowCount / rowsPerPage);
            return (
              <div className="flex justify-between items-center px-4 py-2 border-t text-sm text-gray-600">
                <div>{rowCount} results</div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onChangePage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-2 py-1 rounded ${currentPage === 1 ? 'text-gray-400' : 'hover:text-pink-600'}`}
                  >
                    &lt;
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => onChangePage(i + 1)}
                      className={`px-2 py-1 rounded-full ${currentPage === i + 1
                        ? 'bg-pink-500 text-white'
                        : 'hover:bg-gray-100'
                        }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => onChangePage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-2 py-1 rounded ${currentPage === totalPages ? 'text-gray-400' : 'hover:text-pink-600'}`}
                  >
                    &gt;
                  </button>
                </div>
              </div>
            );
          }}
        />

      </div>
    </div>
  );
}
