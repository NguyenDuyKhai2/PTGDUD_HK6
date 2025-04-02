import React from 'react';

const Contents = () => {
  return (
    <div className='grid grid-rows-13 h-full'>
      <div className='row-span-1 border-3 flex items-center justify-between'>
        <p className='p-4 text-xl font-bold text-pink-400'>DashBoard</p>
        <div>
            <input type="text" className='border-2 rounded' placeholder=' Search' />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
      </div>

      <div className='row-span-4 border-3 border-green-400 flex items-center p-4 space-x-4'>
        <button className='border-3 border-purple-300 p-2'>Overview</button>
        <button className='border-3 border-purple-300 p-2'>Overview</button>
        <button className='border-3 border-purple-300 p-2'>Overview</button>
      </div>

      <div className='row-span-8 border-3 border-green-400 p-4'>
        

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-black-300 dark:text-black-200">
        <thead class="text-xs text-black uppercase bg-gray-400 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-gray-300 border-b border-blue-400">
                <th scope="row" class="px-6 py-4 font-medium text-black-200 whitespace-nowrap dark:text-black-200">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-gray-300 border-b border-blue-400">
                <th scope="row" class="px-6 py-4 font-medium text-black-200 whitespace-nowrap dark:text-black-200">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-gray-300 border-b border-blue-400">
                <th scope="row" class="px-6 py-4 font-medium text-black-200 whitespace-nowrap dark:text-black-200">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-gray-300 border-b border-blue-400">
                <th scope="row" class="px-6 py-4 font-medium text-black-200 whitespace-nowrap dark:text-black-200">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4">
                    Phone
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-gray-300 border-blue-40">
                <th scope="row" class="px-6 py-4 font-medium text-black-200 whitespace-nowrap dark:text-black-200">
                    Apple Watch 5
                </th>
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4">
                    Wearables
                </td>
                <td class="px-6 py-4">
                    $999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

      </div>
    </div>
  );
};

export default Contents;
