const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 border-b">
      <h1 className="text-2xl font-semibold text-pink-600">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search..." className="px-3 py-1 rounded-md border text-sm" />
        <span className="w-6 h-6 bg-gray-300 rounded-full" />
        <span className="w-6 h-6 bg-gray-300 rounded-full" />
      </div>
    </header>
  );
};

export default Header;