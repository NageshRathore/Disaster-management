import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
// import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return<>
  
  <Navbar></Navbar>
  
   <Component {...pageProps} />;
   
   <Footer></Footer>
   
   </>
}
