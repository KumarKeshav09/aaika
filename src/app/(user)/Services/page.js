'use client';
import Navbar from "@/components/NavBar";
import styles from "./service.module.css";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/Common/Whatsapp";
export default function Services() {
  return (
    <>
      <Navbar />
      <div className="min-w-screen border-b flex items-center justify-center py-3">
        <div className="w-full  border-gray-200 md:px-12 px-5 md:py-10 ">
          <div className="w-full mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Services
              </h1>
              <div className="text-center mb-3">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className={styles.BoxContainer}>
              <div className={styles.card}>
                <img
                  src="https://images.pexels.com/photos/13033658/pexels-photo-13033658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.text}>
                    <h3 className={styles.textDesp}>Social events </h3>
                    <p className={styles.textSecret}>
                      {" "}
                      Host your special moments with us! From birthdays to
                      corporate gatherings.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <img
                  src="https://images.pexels.com/photos/8818723/pexels-photo-8818723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.text}>
                    <h3 className={styles.textDesp}> Corporate parties</h3>
                    <p className={styles.textSecret}>
                      Make your corporate events unforgettable with our
                      exceptional catering and ambiance.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <img
                  src="https://images.pexels.com/photos/11479023/pexels-photo-11479023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.text}>
                    <div>
                      <h3 className={styles.textDesp}> Weddings</h3>
                    </div>
                    <p className={styles.textSecret}>
                      {" "}
                      Make your special day unforgettable with our exquisite
                      wedding catering. From personalized menus to flawless
                      service.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <img
                  src="https://images.unsplash.com/photo-1695654401292-2807ecb9383b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.text}>
                    <h3 className={styles.textDesp}>Food Delivery </h3>
                    <p className={styles.textSecret}>
                      {" "}
                      We are also available on Zomato and Swiggy. You can place
                      your order there.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
