import React from 'react';

export default function App6() {
  return (
    <div>
      <section className="container mx-auto py-12">
        <div className="bg-gray-100 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed font-serif">
            Hijab Store is committed to providing exceptional quality hijabs
            that empower women to embrace their individuality and express their
            style with confidence. Our mission is to redefine the hijab
            experience by offering not only high-quality products but also a
            supportive community where women can celebrate their identity and
            connect with others who share similar values. We believe that
            wearing a hijab is more than just a fashion statement; it's a symbol
            of strength, resilience, and faith.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <div className="bg-gray-100 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
          <div className="flex flex-col items-center md:flex-row md:justify-center">
            <input
              type="email"
              className="w-full md:w-1/2 px-4 py-2 mb-4 md:mr-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              placeholder="Enter your email address"
            />
            <button className="w-full md:w-auto bg-blue-900 hover:bg-blue-700 text-white px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
