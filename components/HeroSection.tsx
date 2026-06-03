import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block bg-accent-yellow px-4 py-1 rounded-full text-sm font-medium text-gray-900 mb-6">
          Coming Soon
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold max-w-3xl mx-auto mb-6">
          <span className="text-gray-900">Transform Your</span>{" "}
          <span className="text-accent-blue">Digital Future</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Join industry leaders for an immersive experience exploring the latest trends in technology and innovation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-accent-blue text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-blue-300 transition-colors text-lg">
            Register Now
          </button>
          <button className="border border-gray-300 text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors text-lg">
            View Schedule
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;