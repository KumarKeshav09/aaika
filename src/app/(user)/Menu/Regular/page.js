"use client";

import QueryComp from "@/components/Common/query";
import WhatsAppButton from "@/components/Common/Whatsapp";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { API_BASE_URL } from "@/utils/constants";
import { useEffect, useState } from "react";
import styles from "./regular.module.css";

// Static images array (modify this with your actual images)
const staticImages = [
  "/images/menu1.jpg",
  "https://www.freepik.com/free-photo/catering-buffet-food_3818811.htm#fromView=search&page=1&position=26&uuid=31d5f5ac-ede3-4726-a19f-d41079ff2c66",
  "https://images.pexels.com/photos/8818723/pexels-photo-8818723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "/images/menu4.jpg",
  // Add more images as needed
];

export default function Menu() {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/v1/menu/getAllMenus`);
      const data = await res.json();
      setListData(data || []);
    } catch (error) {
      console.error("Error fetching Services:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className={`${styles.menuBackground}`}>
        <div>
          <h1 className="font-medium italic md:text-8xl text-7xl">Menu</h1>
        </div>
      </div>
      <div className="lg:px-48">
        {loading ? (
          <div role="status" className="justify-center">
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
          <div className={styles.menuContainer}>
            <div className={styles.menuItem}>
              <div className={styles.menuImageContainer}>
                <div className={styles.menuImage1}>
                  <img
                    src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/p4-img-2.jpg"
                    alt="Vegetarian Platter"
                  />
                </div>
                <div className={styles.menuImage2}>
                  <img
                    src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/p4-img-3.jpg"
                    alt="Vegetarian Platter"
                  />
                </div>
              </div>
              <div className={styles.menuDetails}>
                <h2 className="uppercase text-sm">ellite catering</h2>
                <h2 className="md:text-7xl text-4xl text-nowrap">
                  Vegetarian Platter
                </h2>
                <p className={styles.menuItemDescription}>
                  Our Vegetarian Platter is a vibrant and flavorful feast
                  designed to please every palate. Perfect for any event, this
                  platter brings together a variety of fresh, seasonal
                  ingredients and hearty vegetarian dishes. From creamy hummus
                  and crunchy vegetable crudités to roasted vegetable skewers
                  and flavorful falafel, each bite is packed with wholesome
                  goodness.
                </p>
                <div className={styles.submenu}>
                  <div className={styles.submenuItem}>
                    <span className={styles.dishName}>
                      Stuffed Bell Peppers
                    </span>
                    <span className={styles.dishPrice}>₹250</span>
                  </div>
                  <div className={styles.submenuItem}>
                    <span className={styles.dishName}>
                      Grilled Vegetable Skewers
                    </span>
                    <span className={styles.dishPrice}>₹200</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.menuItemRight}>
              <div className={styles.menuDetailsRight}>
                <h2 className="uppercase text-sm">ellite catering</h2>
                <h2 className="md:text-7xl text-4xl text-nowrap">
                  Seafood Delight
                </h2>
                <p className={styles.menuItemDescription}>
                  Our Vegetarian Platter is a vibrant and flavorful feast
                  designed to please every palate. Perfect for any event, this
                  platter brings together a variety of fresh, seasonal
                  ingredients and hearty vegetarian dishes. From creamy hummus
                  and crunchy vegetable crudités to roasted vegetable skewers
                  and flavorful falafel, each bite is packed with wholesome
                  goodness.
                </p>
                <div className={styles.submenu}>
                  <div className={styles.submenuItem}>
                    <span className={styles.dishName}>Grilled Salmon</span>
                    <span className={styles.dishPrice}>₹500</span>
                  </div>
                  <div className={styles.submenuItem}>
                    <span className={styles.dishName}>Shrimp Cocktail</span>
                    <span className={styles.dishPrice}>₹300</span>
                  </div>
                </div>
              </div>
              <div className={styles.menuImageContainerRight}>
                <div className={styles.menuImage1}>
                  <img
                    src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/p4-img-4.jpg"
                    alt="Vegetarian Platter"
                  />
                </div>
                <div className={styles.menuImage3}>
                  <img
                    src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/p4-img-5.jpg"
                    alt="Vegetarian Platter"
                  />
                </div>
              </div>
            </div>

            <div className={styles.menuItem}>
              <div className={styles.menuImageContainer}>
                <div className={styles.menuImage1}>
                  <img
                    src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/p4-img-2.jpg"
                    alt="Vegetarian Platter"
                  />
                </div>
                <div className={styles.menuImage2}>
                  <img
                    src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/p4-img-3.jpg"
                    alt="Vegetarian Platter"
                  />
                </div>
              </div>
              <div className={styles.menuDetails}>
                <h2 className="uppercase text-sm">ellite catering</h2>
                <h2 className="md:text-7xl text-4xl text-nowrap">
                  Meat Lover Feast
                </h2>
                <p className={styles.menuItemDescription}>
                  Our Vegetarian Platter is a vibrant and flavorful feast
                  designed to please every palate. Perfect for any event, this
                  platter brings together a variety of fresh, seasonal
                  ingredients and hearty vegetarian dishes. From creamy hummus
                  and crunchy vegetable crudités to roasted vegetable skewers
                  and flavorful falafel, each bite is packed with wholesome
                  goodness.
                </p>
                <div className={styles.submenu}>
                  <div className={styles.submenuItem}>
                    <span className={styles.dishName}>
                      Steak with Garlic Butter
                    </span>
                    <span className={styles.dishPrice}>₹700</span>
                  </div>
                  <div className={styles.submenuItem}>
                    <span className={styles.dishName}>BBQ Ribs</span>
                    <span className={styles.dishPrice}>₹600</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.menuItemRight}>
              <div className={styles.menuDetailsRight}>
                <h2 className="uppercase text-sm">ellite catering</h2>
                <h2 className="md:text-7xl text-4xl text-nowrap">
                  Pasta Extravaganza
                </h2>
                <p className={styles.menuItemDescription}>
                  Our Vegetarian Platter is a vibrant and flavorful feast
                  designed to please every palate. Perfect for any event, this
                  platter brings together a variety of fresh, seasonal
                  ingredients and hearty vegetarian dishes. From creamy hummus
                  and crunchy vegetable crudités to roasted vegetable skewers
                  and flavorful falafel, each bite is packed with wholesome
                  goodness.
                </p>
                <div className={styles.submenu}>
                  <div className={styles.submenuItem}>
                    <span className={styles.dishName}>Fettuccine Alfredo</span>
                    <span className={styles.dishPrice}>₹400</span>
                  </div>
                  <div className={styles.submenuItem}>
                    <span className={styles.dishName}>Pesto Penne</span>
                    <span className={styles.dishPrice}>₹350</span>
                  </div>
                </div>
              </div>
              <div className={styles.menuImageContainerRight}>
                <div className={styles.menuImage1}>
                  <img
                    src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/p4-img-4.jpg"
                    alt="Vegetarian Platter"
                  />
                </div>
                <div className={styles.menuImage3}>
                  <img
                    src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/p4-img-5.jpg"
                    alt="Vegetarian Platter"
                  />
                </div>
              </div>
            </div>

            <div className={styles.menuItem}>
              <div className={styles.menuImageContainer}>
                <div className={styles.menuImage1}>
                  <img
                    src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/p4-img-2.jpg"
                    alt="Vegetarian Platter"
                  />
                </div>
                <div className={styles.menuImage2}>
                  <img
                    src="https://banquet.qodeinteractive.com/wp-content/uploads/2019/11/p4-img-3.jpg"
                    alt="Vegetarian Platter"
                  />
                </div>
              </div>
              <div className={`${styles.menuDetails}`}>
                <h2 className="uppercase text-sm">ellite catering</h2>
                <h2 className="md:text-7xl text-4xl text-nowrap">
                  Dessert Selection
                </h2>
                <p className={styles.menuItemDescription}>
                  Indulge your guests with a mouthwatering assortment of classic
                  desserts that are sure to satisfy every sweet tooth. From
                  rich, velvety chocolate cakes and creamy cheesecakes to light,
                  flaky fruit tarts and decadent brownies, our dessert menu
                  offers something for every occasion.
                </p>
                <div className={styles.submenu}>
                  <div className="flex items-center space-x-2 mt-4">
                    <span className={styles.dishName}>Chocolate Lava Cake</span>
                    <span className="flex-grow border-b border-gray-300">
                      &nbsp;
                    </span>
                    <span className={styles.dishPrice}>₹250</span>
                  </div>
                  <p className="text-sm">(Chocolate, Chocolate, Chocolate)</p>
                  <div className="flex items-center space-x-2 mt-4">
                    <span className={styles.dishName}>Chocolate Lava Cake</span>
                    <span className="flex-grow border-b border-gray-300"></span>
                    <span className={styles.dishPrice}>₹250</span>
                  </div>
                  <p className="text-sm">(Chocolate, Chocolate, Chocolate)</p>
                  <div className={styles.submenuItem}>
                    <span className={styles.dishName}>
                      Cheesecake{"  "}
                      <span className="text-sm text-gray-500">
                        (Chocolate, Chocolate, Chocolate)
                      </span>
                    </span>
                    <span className={styles.dishPrice}>₹200</span>
                  </div>
                  <div className={styles.submenuItem}>
                    <span className={styles.dishName}>Chocolate Lava Cake</span>
                    <span className={styles.dishPrice}>₹250</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
