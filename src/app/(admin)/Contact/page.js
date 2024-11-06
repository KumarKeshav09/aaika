"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../../utils/constants";
import { toast } from "react-toastify";
import Popup from "@/components/Popup";
import Pagination from "@/components/Pagination";

export default function Contact() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [listData, setListData] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    import("flowbite").then((module) => {
      const { initFlowbite } = module;
      initFlowbite();
    });
  }, [page]);

  // Function to fetch contact data
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${API_BASE_URL}/contact/getAllContacts?page=${page}&limit=10`
      );
      const data = await res.json();
      if (res.ok) {
        console.log("Fetched data:", data);
        setListData(data || []);
      } else {
        toast.error("Failed to fetch contacts.");
      }
    } catch (error) {
      console.error("Error fetching Contacts:", error);
      toast.error("An error occurred while fetching Contacts.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on initial render and page change
  useEffect(() => {
    fetchData();
  }, [page]);

  // Delete a Contact
  const handleDelete = async () => {
    try {
      const res = await fetch(
        `${API_BASE_URL}/contact/deleteContact/${deleteId}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();

      if (res.ok) {
        await fetchData(); // Re-fetch contact data after successful deletion
        setDeleteId(null);
        setIsPopupOpen(false);
        toast.success("Contact deleted successfully.");
      } else {
        toast.error(data?.errMessage || "Failed to delete Contact.");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the Contact.");
    }
  };

  const handleCancel = () => {
    setDeleteId(null);
    setIsPopupOpen(false);
  };

  // Open the delete confirmation popup
  const deleteTestimonialModal = (id) => {
    setDeleteId(id);
    setIsPopupOpen(true);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <section className="md:p-5">
      <div className="relative overflow-x-auto sm:rounded-lg">
        <h1 className="text-2xl text-black underline mb-3 font-bold">Contact</h1>
        <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 justify-end pb-4">
          <div>
            <Link href={"/Contact/AddContact"}>
              <button
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-900 rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                type="button"
              >
                + Add Contact
              </button>
            </Link>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="px-4 border rounded-lg" // Update search term on input change
            />
          </div>
        </div>

        {loading ? (
          <div role="status" className="flex justify-center items-center h-64">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3 text-nowrap">Mobile Number</th>
                <th scope="col" className="px-6 py-3">Address</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {listData?.contacts?.map((item) => (
                <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4">{item.emailAddress}</td>
                  <td className="px-6 py-4">{item.phoneNumber}</td>
                  <td className="px-6 py-4">{item.address}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Link href={`/Contact/${item._id}`} className="font-medium text-blue-600 text-lg dark:text-blue-500 hover:underline">
                        <i className="bi bi-pencil-square"></i>
                      </Link>
                      <button onClick={() => deleteTestimonialModal(item._id)} className="font-medium text-red-600 text-lg dark:text-red-500 hover:underline">
                        <i className="bi bi-trash-fill"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Pagination data={listData} pageNo={handlePageChange} pageVal={page} totalCount={listData?.totalContacts} />
      <Popup
        isOpen={isPopupOpen}
        title="Are you sure you want to delete this Contact?"
        confirmLabel="Yes, I'm sure"
        cancelLabel="No, cancel"
        onConfirm={handleDelete}
        onCancel={handleCancel}
      />
    </section>
  );
}
