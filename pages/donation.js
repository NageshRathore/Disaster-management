
import Link from 'next/link';

export default function Donation() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/donation-hero.jpg')" }}>
        <div className="absolute inset-0 mt-3 bg-slate-600 opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Make a Difference Today</h1>
          <p className="text-xl mb-8">Your generosity can bring hope and relief to those in need.</p>
          <Link href="/payment" legacyBehavior>
            <a className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-red-700">
              Donate Now
            </a>
          </Link>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-2xl font-bold mb-8">Why Your Donation Matters</h2>
        <blockquote className="text-xl italic mb-8">
          <p>"The best way to find yourself is to lose yourself in the service of others." – Mahatma Gandhi</p>
        </blockquote>
        <p className="text-lg mb-4">
          Your donation helps provide essential resources and support to individuals and families affected by disasters.
        </p>
        <p className="text-lg">
          Every contribution, no matter how small, makes a significant impact.
        </p>
      </section>

      
    </div>
  );
}
