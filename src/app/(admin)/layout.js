
import Sidebar from '@/components/Sidebar';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import "./layout.css"

export const metadata = {
  title: "Admin Aaika",
  description: "aaika",
};

export default function RootLayout({ children }) {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
        <Sidebar childrenT={children} />
        {/* <ToastContainer autoClose={2000} closeOnClick/> */}
    </>
       
  );
}
