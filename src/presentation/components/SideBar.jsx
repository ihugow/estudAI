const SideBar = ({ onClose, isOpen }) => {
  return (
    <div className={`fixed top-0 right-0 w-56 h-screen bg-zinc-900 text-white p-5 z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <button onClick={onClose} className="cursor-pointer hover:text-amber-800">
        <i className="fa-solid fa-xmark"></i>
      </button>
      <nav className="mt-6">
        <ul>
          <li className="p-1.5 flex items-center gap-2 text-base cursor-pointer text-amber-200">
            <i className="!text-amber-200 bi bi-house-fill "></i>
            <span>Home</span>
          </li>
          <li>

          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
