import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/shared/Cards";

const Gallery = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectCategory, setSelectCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");

  // load data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/cars");
        const data = await res.json();
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // filter cars based on search query
  useEffect(() => {
    const filtered =
      searchQuery === ""
        ? menu
        : menu.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
    setFilteredItems(filtered);
  }, [searchQuery, menu]);

  // handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // filtering data based on category
  const filterItems = (brand) => {
    const filtered =
      brand === "all"
        ? menu
        : menu.filter((item) => item.brand === brand);
    setFilteredItems(filtered);
    setSelectCategory(brand);
    setCurrentPage(1);
  };

  // show all data
  const showAll = () => {
    setFilteredItems(menu);
    setSelectCategory("all");
    setCurrentPage(1);
  };

  // sorting based a-z , z-a , low to high
  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];

    // logic
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }
    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  // pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* banner text */}
      <div className="section-container flex flex-col items-center py-28 justify-center">
        {/* text */}
        <div className="space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
            Explore Our Amazing Collection of{" "}
            <span className="text-first">Luxury Cars!</span>
          </h2>
          <p>
            Where Each Car Tells a Story of Innovation and Engineering
            Excellence
          </p>
          {/* Search box */}
          <input
            type="text"
            placeholder="Search cars..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="border border-gray-700 w-1/2 rounded-md px-3 py-2 mt-4"
          />
        </div>
      </div>

      {/* menu shop bar */}
      <div className="section-container">
        {/* btns and sorts */}
        <div className="flex flex-col md:flex-row space-y-3 md:justify-between items-center">
          {/* all category data */}
          <div className="flex justify-start items-center gap-8 flex-wrap font-medium my-3">
            <button
              onClick={showAll}
              className={selectCategory === "all" ? "active" : ""}
            >
              All
            </button>
            <button
              onClick={() => filterItems("Toyota")}
              className={selectCategory === "Toyota" ? "active" : ""}
            >
              Toyota
            </button>
            <button
              onClick={() => filterItems("Ford")}
              className={selectCategory === "Ford" ? "active" : ""}
            >
              Ford
            </button>
            <button
              onClick={() => filterItems("BMW")}
              className={selectCategory === "BMW" ? "active" : ""}
            >
              BMW
            </button>
            <button
              onClick={() => filterItems("Mercedes-Benz")}
              className={selectCategory === "Mercedes-Benz" ? "active" : ""}
            >
              Mercedes-Benz
            </button>
            <button
              onClick={() => filterItems("Tesla")}
              className={selectCategory === "Tesla" ? "active" : ""}
            >
              Tesla
            </button>
          </div>

          {/* sorting based on filtering */}
          <div className="flex justify-end items-center mb-4">
            <div className="bg-black p-2">
              <FaFilter className="h-4 w-4 text-white" />
            </div>

            {/* sorting options */}
            <select
              name="sort"
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">low-to-high</option>
              <option value="high-to-low">high-to-low</option>
            </select>
          </div>
        </div>

        {/* product card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-16">
          {currentItems?.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      </div>

      {/* pagination section */}
      <div className="flex justify-center items-center my-8">
        {Array.from({
          length: Math.ceil(filteredItems.length / itemsPerPage),
        }).map((_, index) => (
          <button
            className={`px-3 py-1 mx-1  ${
              currentPage === index + 1 ? "bg-second text-white" : "bg-third"
            }`}
            key={index + 1}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
