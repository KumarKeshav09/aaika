"use client";
import { API_BASE_URL } from "@/utils/constants";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CreateSubMenu() {
  const [menuId, setMenuId] = useState("");  // State to hold the selected menu ID
  const [menus, setMenus] = useState([]);    // State to hold the list of menus fetched from the API
  const [submenu, setSubmenu] = useState([   // State to hold submenu items
    { name: "", price: "", description: "" },
  ]);
  const [isLoading, setIsLoading] = useState(false);  // Loading state for the form submission
  const [error, setError] = useState(null);  // Error state for any issues during form submission
  const [successMessage, setSuccessMessage] = useState(null);  // Success message state

  // Fetch all menus from the API
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/menu/getAllMenus`);
        if (!response.ok) {
          throw new Error("Failed to fetch menus");
        }
        const data = await response.json();
        setMenus(data?.menus || []); // Assuming 'menus' is the key in the API response
      } catch (err) {
        setError(err.message);  // Set error if the fetch fails
      }
    };

    fetchMenus();
  }, []);

  // Handle changes in submenu items (name, price, description)
  const handleSubmenuChange = (index, e) => {
    const updatedSubmenu = [...submenu];
    updatedSubmenu[index][e.target.name] = e.target.value;
    setSubmenu(updatedSubmenu);
  };

  // Add a new submenu item to the list
  const addSubmenuItem = () => {
    setSubmenu([...submenu, { name: "", price: "", description: "" }]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    const data = {
      menu: menuId,  // Sending the _id of the selected menu
      submenu: submenu.map((item) => ({
        name: item.name,
        price: parseFloat(item.price),
        description: item.description,
      })),
    };

    try {
      const response = await fetch(`${API_BASE_URL}/menu/createSubMenu`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create submenu");
      }

      const result = await response.json();
      setSuccessMessage("Submenu created successfully!");
      setIsLoading(false);
      setSubmenu([{ name: "", price: "", description: "" }]); // Reset form after submission
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl text-black underline mb-3 font-bold">Add Submenu</h1>
      <Link href="/Menus">
        <div className="mb-5 mt-5">
          <button
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            type="button"
          >
            Back
          </button>
        </div>
      </Link>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Menu selection dropdown */}
        <div>
          <label htmlFor="menuId" className="block text-sm font-medium text-gray-900">
            Menu:
          </label>
          <select
            id="menuId"
            value={menuId}
            onChange={(e) => setMenuId(e.target.value)}  // Set the selected menu ID
            required
            className="bg-gray-50 border border-gray-300 rounded-md p-2 w-full text-gray-900"
          >
            <option value="" disabled>
              Select a menu
            </option>
            {menus.map((menu) => (
              <option key={menu._id} value={menu._id}>
                {menu.title}
              </option>
            ))}
          </select>
        </div>

        {/* Submenu items */}
        {submenu.map((item, index) => (
          <div key={index} className="border p-4 rounded-md shadow-sm bg-white">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Submenu Item {index + 1}
            </h3>

            <div className="flex space-x-2 mb-2">
              {/* Submenu name */}
              <div className="flex-1">
                <label htmlFor={`name-${index}`} className="block text-sm font-medium text-gray-900">
                  Name:
                </label>
                <input
                  type="text"
                  id={`name-${index}`}
                  name="name"
                  value={item.name}
                  onChange={(e) => handleSubmenuChange(index, e)}
                  required
                  className="bg-gray-50 border border-gray-300 rounded-md p-2 w-full text-gray-900"
                />
              </div>

              {/* Submenu price */}
              <div className="w-36">
                <label htmlFor={`price-${index}`} className="block text-sm font-medium text-gray-900">
                  Price:
                </label>
                <input
                  type="number"
                  id={`price-${index}`}
                  name="price"
                  value={item.price}
                  onChange={(e) => handleSubmenuChange(index, e)}
                  required
                  className="bg-gray-50 border border-gray-300 rounded-md p-2 w-full text-gray-900"
                />
              </div>

              {/* Submenu description */}
              <div className="flex-1">
                <label htmlFor={`description-${index}`} className="block text-sm font-medium text-gray-900">
                  Description:
                </label>
                <input
                  type="text"
                  id={`description-${index}`}
                  name="description"
                  value={item.description}
                  onChange={(e) => handleSubmenuChange(index, e)}
                  required
                  className="bg-gray-50 border border-gray-300 rounded-md p-2 w-full text-gray-900"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Button to add more submenu items */}
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={addSubmenuItem}
            className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Add Another Item
          </button>
        </div>

        {/* Error and success messages */}
        {error && <p className="text-red-500">{error}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        {/* Submit button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-gray-900 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isLoading ? "Submitting..." : "Create Submenu"}
          </button>
        </div>
      </form>
    </div>
  );
}
