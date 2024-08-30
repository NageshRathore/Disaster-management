import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import ChatBot from "@/components/ChatBot";
// import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return<>
  
  <Navbar></Navbar>
  
   <Component {...pageProps} />;
   <ChatBot/>
   <Footer></Footer>
   
   </>
}
