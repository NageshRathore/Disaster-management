import Head from "next/head"
import { useState } from 'react';


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/img1.jpg',
    '/image2.jpg',
    '/image3.png',
    '/img4.jpeg',
  ];

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
   <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Real time data aggregation" />
        <title>Umeed</title>
      </Head>
      {/* banner code */}
      <div className="bg-red-600 text-white py-2 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-red-700 opacity-50"></div>
        <div className="whitespace-nowrap animate-marquee">
          <span className="px-6">📞 Police Helpline: 100</span>
          <span className="px-6">🚨 NDRF: 011-2342 4099</span>
          <span className="px-6">🚑 Rapid Response Team: 108</span>
          <span className="px-6">🌟  "Prepared for the Unexpected"</span>
          <span className="px-6">📞 Police Helpline: 100</span>
          <span className="px-6">🚑 Rapid Response Team: 108</span>
        </div>
      </div>
      {/* //slider wala code */}
      <div className="relative w-full max-w-4xl mx-auto">
      {/* Slider Container */}
      <div className="relative overflow-hidden rounded-lg" style={{ height: '400px' }}>
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)`, height: '100%'  }}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0" style={{ height: '100%' }}>
              <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover"  style={{ height: '100%' }}/>
            </div>
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={handlePrevClick}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none"
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          onClick={handleNextClick}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none"
        >
          &#10095;
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
          ></button>
        ))}
      </div>
       </div>
    {/* //feedback */}
     <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="p3.jpeg"/>
          <p class="leading-relaxed">"Working with the disaster response team has been an incredible experience. Their dedication, quick response times, and ability to adapt to rapidly changing situations are unmatched. They not only provide immediate relief but also offer long-term support to affected communities. Their professionalism and compassion make them a crucial part of disaster management efforts."</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
          <p class="text-gray-500"> Disaster Response Coordinator</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/p1.jpeg"/>
          <p class="leading-relaxed">"The disaster response team consistently demonstrates exceptional skill and coordination during critical situations. Their efficiency in mobilizing resources and managing operations on the ground has greatly enhanced our ability to provide timely medical assistance and support. Their teamwork and resilience make a significant difference in the lives of those affected by disasters."</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
          <p class="text-gray-500">Emergency Medical Technician</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/p2.jpeg"/>
          <p class="leading-relaxed">"As a volunteer working alongside the disaster response team, I've witnessed firsthand their commitment to making a positive impact. They go above and beyond to ensure that help reaches those in need swiftly and effectively. Their expertise and dedication are vital in coordinating relief efforts and supporting affected communities through challenging times."</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
          <p class="text-gray-500">Volunteer Field Officer</p>
        </div>
      </div>
    </div>
  </div>
        </section>
   </div>
  )
}
