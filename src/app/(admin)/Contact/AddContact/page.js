"use client";
import Link from "next/link";
import { useState } from "react";
import { API_BASE_URL } from "../../../../../utils/constants";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AddContact = () => {
  const [formData, setFormData] = useState({
    address: "",
    officeAddress: "",
    emailAddress: "",
    phoneNumber: "",
    socialMedia: [{ name: "", url: "" }],
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSocialMediaChange = (index, e) => {
    const { name, value } = e.target;
    const newSocialMedia = [...formData.socialMedia];
    newSocialMedia[index][name] = value;
    setFormData((prev) => ({ ...prev, socialMedia: newSocialMedia }));
  };

  const handleAddSocialMedia = () => {
    setFormData((prev) => ({
      ...prev,
      socialMedia: [...prev.socialMedia, { name: "", url: "" }],
    }));
  };

  const handleRemoveSocialMedia = (index) => {
    const newSocialMedia = formData.socialMedia.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, socialMedia: newSocialMedia }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/contact/createContact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Contact added successfully");
        router.push("/Contact");
      } else {
        const errorMessage = await response.text();
        toast.error(`Error adding contact: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Network error: Please try again later.");
    }
  };

  return (
    <section className="md:p-5">
      <h1 className="text-2xl text-black underline mb-3 font-bold">
        Add Contact
      </h1>
      <Link href="/Contact">
        <div className="mb-5 mt-5">
          <button
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            type="button"
          >
            Back
          </button>
        </div>
      </Link>
      <div className="container mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 mb-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 rounded-md p-2 w-full text-gray-900"
                required
              />
            </div>
            <div>
              <label
                htmlFor="officeAddress"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
              >
                Office Address
              </label>
              <input
                type="text"
                name="officeAddress"
                placeholder="Office Address"
                value={formData.officeAddress}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 rounded-md p-2 w-full text-gray-900"
                required
              />
            </div>
            <div>
              <label
                htmlFor="emailAddress"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
              >
                Email Address
              </label>
              <input
                type="email"
                name="emailAddress"
                placeholder="Email Address"
                value={formData.emailAddress}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 rounded-md p-2 w-full text-gray-900"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 rounded-md p-2 w-full text-gray-900"
                required
              />
            </div>
          </div>

          <div className="flex justify-between my-4">
            <h2 className="text-lg font-semibold">Social Media</h2>
            <button
              type="button"
              onClick={handleAddSocialMedia}
              className="bg-white border text-nowrap text-black rounded-md p-2 mr-5"
            >
              Add more
            </button>
          </div>
          {formData.socialMedia.map((social, index) => (
            <div key={index} className="flex space-x-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={social.name}
                onChange={(e) => handleSocialMediaChange(index, e)}
                className="bg-gray-50 border border-gray-300 rounded-md p-2 w-full text-gray-900"
                required
              />
              <input
                type="url"
                name="url"
                placeholder="URL"
                value={social.url}
                onChange={(e) => handleSocialMediaChange(index, e)}
                className="bg-gray-50 border border-gray-300 rounded-md p-2 w-full text-gray-900"
                required
              />
              <button
                type="button"
                onClick={() => handleRemoveSocialMedia(index)}
                className="bg-red-500 text-nowrap text-white rounded-md p-2"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex md:justify-center">
            <button
              type="submit"
              className="bg-gray-900 text-white rounded-md p-2 px-6 mt-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddContact;
