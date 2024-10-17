"use client";
import { useEffect, useState } from "react";
import { API_BASE_URL, WEB_BASE_URL } from "../../../../../utils/constants";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EditMenu({ params }) {
  const router = useRouter();
  const id = params.editMenu; // Get the menu ID from the URL
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [subTitle, setSubTitle] = useState("");
  const [note, setNote] = useState("");
  const [submenu, setSubmenu] = useState([]);

  useEffect(() => {
    if (id) {
      fetchMenuData();
    }
  }, [id]);

  const fetchMenuData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/menu/getMenuById/${id}`);
      if (!response.ok) throw new Error("Failed to fetch menu");
      const data = await response.json();

      // Set state with fetched data
      setTitle(data.title);
      setImage(data.image);
      setSubTitle(data.subTitle);
      setNote(data.note);
      setSubmenu(data.submenu);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  const handleSubmenuChange = (index, field, value) => {
    const newSubmenu = [...submenu];
    newSubmenu[index][field] = value;
    setSubmenu(newSubmenu);
  };

  const handleAddSubmenu = () => {
    setSubmenu([...submenu, { name: "", price: "", productImage: null }]);
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(`${API_BASE_URL}/auth/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Image upload failed");
    }

    const data = await response.json();
    console.log("API Response:", data);
    return data.url || data.imageUrl;
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const imageUrl = await uploadImage(file);
        console.log("Uploaded menu image URL:", imageUrl);
        setImage(imageUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleSubmenuImageUpload = async (index, e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const productImageUrl = await uploadImage(file);
        console.log(
          `Uploaded submenu image for item ${index}:`,
          productImageUrl
        );
        handleSubmenuChange(index, "productImage", productImageUrl);
      } catch (error) {
        console.error("Error uploading submenu image:", error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const menuData = {
      title,
      image,
      subTitle,
      note,
      submenu,
    };

    console.log("Menu data before submission:", menuData);

    // Check for image URLs
    if (!image || submenu.some((item) => !item.productImage)) {
      console.error("Images are not uploaded properly.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/menu/updateMenu/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(menuData),
      });

      const textResponse = await response.text();
      console.log("Raw response:", textResponse);

      if (!response.ok) {
        throw new Error("Failed to update menu");
      }

      const data = JSON.parse(textResponse);
      toast.success("Menu updated successfully!");
      router.push(`/Menus`); // Redirect to the menu detail page after updating
    } catch (error) {
      console.error("Error updating menu:", error);
    }
  };

  return (
    <section className="md:p-5">
      <h1 className="text-2xl text-black underline mb-3 font-bold">
        Edit Your Menu Details
      </h1>
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
      <div className="container mx-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
              htmlFor="menuTitle"
            >
              Menu Title
            </label>
            <input
              id="menuTitle"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-50 border border-gray-300 rounded-md p-2 w-full text-gray-900"
              required
            />
          </div>

          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
              htmlFor="menuImage"
            >
              Menu Image
            </label>
            <input
              id="menuImage"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="bg-gray-50 border border-gray-300 rounded-md w-full text-gray-900"
            />
            {image && (
              <img
                src={WEB_BASE_URL + "/" + image}
                alt="Menu"
                className="my-2 h-32 object-cover"
              />
            )}
          </div>

          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
              htmlFor="subTitle"
            >
              Subtitle
            </label>
            <input
              id="subTitle"
              type="text"
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
              className="bg-gray-50 border border-gray-300 rounded-md p-2 w-full text-gray-900"
            />
          </div>

          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
              htmlFor="note"
            >
              Note
            </label>
            <textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="bg-gray-50 border border-gray-300 rounded-md p-2 w-full text-gray-900"
            ></textarea>
          </div>

          <h2 className="text-xl font-semibold">Submenu Items</h2>
          {submenu.map((item, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <div className="flex-1">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
                  htmlFor={`itemName${index}`}
                >
                  Item Name
                </label>
                <input
                  id={`itemName${index}`}
                  type="text"
                  value={item.name}
                  onChange={(e) =>
                    handleSubmenuChange(index, "name", e.target.value)
                  }
                  className="bg-gray-50 border border-gray-300 rounded-md p-2 w-full text-gray-900"
                  required
                />
              </div>
              <div className="w-24">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
                  htmlFor={`itemPrice${index}`}
                >
                  Price
                </label>
                <input
                  id={`itemPrice${index}`}
                  type="number"
                  value={item.price}
                  onChange={(e) =>
                    handleSubmenuChange(index, "price", e.target.value)
                  }
                  className="bg-gray-50 border border-gray-300 rounded-md p-2 w-full text-gray-900"
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
                  htmlFor={`itemImage${index}`}
                >
                  Item Image
                </label>
                <input
                  id={`itemImage${index}`}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleSubmenuImageUpload(index, e)}
                  className="bg-gray-50 border border-gray-300 rounded-md w-full text-gray-900"
                />
                {item.productImage && (
                  <img
                    src={WEB_BASE_URL + "/" + item.productImage}
                    alt="Submenu"
                    className="my-2 h-16 object-cover"
                  />
                )}
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddSubmenu}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-5"
          >
            Add Submenu Item
          </button>

          <button
            type="submit"
            className="bg-gray-900 text-white px-4 py-2 rounded"
          >
            Update Menu
          </button>
        </form>
      </div>
    </section>
  );
}
