"use client";
import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../../../../utils/constants';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const EditService = ({ params }) => {
  const [formData, setFormData] = useState({
    image: null,
    title: '',
    description: ''
  });

  const [existingImage, setExistingImage] = useState('');
  const id = params.editService;
  const router = useRouter();

  useEffect(() => {
    fetchServiceById(id);
  }, [id]);

  const fetchServiceById = async (serviceId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/service/getServiceById/${serviceId}`);
      if (!response.ok) throw new Error('Failed to fetch service details');

      const service = await response.json();
      setFormData({
        image: null, // Initially set to null, updated if new image is uploaded
        title: service.title,
        description: service.description
      });
      setExistingImage(service.image); // Store the existing image URL
    } catch (error) {
      console.error('Error:', error);
      toast.error(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const uploadImage = async () => {
    if (!formData.image) return existingImage; // Use the existing image URL if no new image is uploaded
    const data = new FormData();
    data.append('image', formData.image);

    const response = await fetch(`${API_BASE_URL}/auth/upload`, {
      method: 'POST',
      body: data,
    });

    if (!response.ok) {
      throw new Error('Image upload failed');
    }

    const result = await response.json();
    return result.imageUrl; // Assuming the response contains the new image URL
  };

  const updateService = async (imageUrl) => {
    const response = await fetch(`${API_BASE_URL}/service/updateService/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image: imageUrl, // Use the appropriate image URL
        title: formData.title,
        description: formData.description
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to update service');
    }

    return response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageUrl = await uploadImage(); // Get the correct image URL
      await updateService(imageUrl);
      toast.success('Service updated successfully!');
      router.push("/Service");
    } catch (error) {
      console.error('Error:', error);
      toast.error(error.message);
    }
  };

  return (
    <section className='md:p-5'>
      <h1 className="text-2xl text-black underline mb-3 font-bold">
        Edit Service
      </h1>
      <Link href="/Service">
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
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="image">Image:</label>
            <input 
              type="file" 
              name="image" 
              onChange={handleChange} 
              className="bg-gray-50 border border-gray-300 rounded-md w-full text-gray-900"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required" htmlFor="title">Title:</label>
            <input 
              type="text" 
              name="title" 
              value={formData.title} 
              onChange={handleChange} 
              className="bg-gray-50 border border-gray-300 rounded-md p-2 w-full text-gray-900"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required" htmlFor="description">Description:</label>
            <textarea 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              className="bg-gray-50 border border-gray-300 rounded-md p-2 w-full text-gray-900"
              required
            />
          </div>
          <button 
            type="submit" 
            className="bg-gray-900 text-white rounded p-2 hover:bg-blue-600"
          >
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditService;
