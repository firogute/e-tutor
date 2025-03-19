const Navigation = () => {
  return (
    <>
      <nav className="bg-gray-800 text-white px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left Links */}
          <div className="flex space-x-6 items-center">
            {[
              "Home",
              "Courses",
              "About",
              "Contact",
              "Become an Instructor",
            ].map((item, index) => (
              <a
                key={index}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative text-white transition duration-200 pb-2
                after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-[3px] 
                after:w-0 after:bg-[#FF6636] after:transition-all after:duration-300 
                hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <span className="cursor-pointer hover:text-gray-400">USD</span>
            <span className="cursor-pointer hover:text-gray-400">English</span>
          </div>
        </div>
      </nav>
      <div className="bg-white shadow-md px-6 py-4">
        <div className="mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/LOGOs.svg" alt="Website Logo" />
            <div className="relative">
              <select className="border border-gray-300 rounded px-16 py-2 appearance-none">
                <option>Browse</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06-.01L10 10.586l3.71-3.4a.75.75 0 111.02 1.1l-4.25 3.867a.75.75 0 01-1.02 0l-4.25-3.867a.75.75 0 01-.01-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="flex gap-2 border border-gray-300 rounded-2xl px-4 items-center">
              <img src="/search.svg" alt="" />
              <input
                type="text"
                placeholder="What do you want to learn..."
                className="flex-1 w-full border-none outline-none p-2"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800 cursor-pointer">
              <span className="material-icons">
                <img src="/notification.svg" alt="notification" />
              </span>
            </button>
            <button className="text-gray-600 hover:text-gray-800 cursor-pointer">
              <span className="material-icons">
                <img src="/heart.svg" alt="like" />
              </span>
            </button>
            <button className="text-gray-600 hover:text-gray-800 cursor-pointer">
              <span className="material-icons">
                <img src="/cart.svg" alt="cart" />
              </span>
            </button>
            <button
              type="button"
              className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 cursor-pointer bg-[#FFEEE8] text-[#FF6636]"
            >
              Create Account
            </button>
            <button
              type="button"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 cursor-pointer"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
