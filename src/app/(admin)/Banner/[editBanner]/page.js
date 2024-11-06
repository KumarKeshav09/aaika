"use client";
import { useState, useEffect, useRef } from "react";
import { API_BASE_URL } from "../../../../../utils/constants";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";

const EditTestimonialPage = ({ params }) => {
  const [image, setImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [existingImage, setExistingImage] = useState(null);
  const imageInputRef = useRef(null);
  const router = useRouter();
  const testimonialId = params.editBanner;

  const acceptedFileTypes = ["image/jpeg", "image/jpg", "image/png"];

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/banner/getBannerById/${testimonialId}`);
        if (!response.ok) throw new Error("Failed to fetch testimonial data");

        const data = await response.json();
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchTestimonial();
  }, [testimonialId]);

  const handleImageInputChange = async (e) => {
    const file = e.target.files[0];

    if (file && acceptedFileTypes.includes(file.type)) {
      setImage(file);
      await handleUpload(file); // Automatically upload the image
    } else {
      toast.error("Invalid image type. Please upload only JPEG or PNG files.");
      resetImageInput();
    }
  };

  const resetImageInput = () => {
    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  const uploadImage = async (imageFile) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const response = await fetch(`${API_BASE_URL}/auth/upload`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(
          `HTTP error! Status: ${response.status}. Response: ${errorBody}`
        );
      }

      const resData = await response.json();
      console.log("Image upload response:", resData);

      if (resData?.imageUrl) {
        return { imageUrl: resData.imageUrl };
      } else {
        throw new Error("Image URL not found in response.");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      return { error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (file) => {
    const { imageUrl, error } = await uploadImage(file);
    if (imageUrl) {
      setUploadedImage(imageUrl);
    }
    if (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const testimonialData = { image: uploadedImage || "" };

    console.log("Submitting testimonial data:", testimonialData);

    try {
      const response = await fetch(
        `${API_BASE_URL}/banner/updateBanner/${testimonialId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(testimonialData),
        }
      );

      const result = await response.json();
      console.log("Banner update response:", result);
      if (response.ok) {
        toast.success("Banner created successfully!");
        router.push("/Banner");
      } else {
        toast.error("Banner update failed:", result);
      }
    } catch (error) {
      console.error("Error updating testimonial:", error);
    }
  };

  return (
    <section>
      <h1 className="text-2xl text-black underline mb-3 font-bold">
        Edit Banner
      </h1>
      <Link href="/Banner">
        <div className="mt-7">
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
              htmlFor="image"
            >
              Image:
            </label>
            <input
              type="file"
              name="image"
              onChange={handleImageInputChange}
              accept="image/*"
              ref={imageInputRef}
              className="bg-gray-50 border border-gray-300 rounded-md w-full text-gray-900"
            />
          </div>
          <button
            type="submit"
            disabled={!uploadedImage}
            className="mt-4 bg-gray-900 text-white font-bold py-2 px-4 rounded"
          >
            Update Banner
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditTestimonialPage;
