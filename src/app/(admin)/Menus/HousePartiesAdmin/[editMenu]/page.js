"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import { API_BASE_URL, WEB_BASE_URL } from "../../../../../utils/constants";

export default function EditMenu({ params }) {
  const router = useRouter();
  const id = params.editMenu; // Get the menu ID from the URL
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [subTitle, setSubTitle] = useState("");
  const [note, setNote] = useState("");

  const [showImageUpload, setShowImageUpload] = useState("yes");

  useEffect(() => {
    if (id) {
      fetchMenuData();
    }
  }, [id]);

  const fetchMenuData = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/menu/getHousePartyById/${id}`
      );
      if (!response.ok) throw new Error("Failed to fetch menu");
      const data = await response.json();

      // Set state with fetched data
      setTitle(data?.data?.title);
      setImage(data?.data?.image);
      setNote(data?.data?.description);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
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

  const r = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const menuData = {
      title,
      image,
      description: note,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/menu/updateHouseParty/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(menuData),
      });

      const textResponse = await response.text();
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
        Edit Menu
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
          <>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
                htmlFor="menuTitle"
              >
                Title
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
                htmlFor="note"
              >
                Description
              </label>
              <textarea
                id="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="bg-gray-50 border border-gray-300 rounded-md p-2 w-full text-gray-900"
              ></textarea>
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
          </>
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
