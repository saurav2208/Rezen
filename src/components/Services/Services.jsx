const Services = () => {
  return (
    <>
      {/* Headline and Description */}
      <div className="bg-white py-20 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-custom-blue-dark mb-10">
            Explore Our Wellness Plans
          </h1>
          <p className="text-2xl text-gray-500">
            Whether you're seeking full support or essential services, we have a
            plan designed to meet you where you are on your mental health
            journey.
          </p>
          <p className="text-2xl text-gray-500">
            Choose the plan that fits your mental health journey best!
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-custom-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Complete Wellness Plan - Left Column */}
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-3xl font-bold text-custom-blue-dark mb-8 text-center">
                Complete Wellness Plan
              </h3>

              {/* Available Features */}
              <ul className="list-none space-y-4 text-xl text-gray-600">
                <li>✔️ Professional Diagnosis</li>
                <li>✔️ One-on-One Sessions</li>
                <li>✔️ Community Access</li>
                <li>✔️ Personalized Trackers</li>
                <li>✔️ Access to Online Events</li>
                <li>✔️ Progress Tracking</li>
                <li>✔️ Access to Resources</li>
                <li>✔️ Creative Art Therapy</li>
                <li>✔️ Cognitive Games</li>
                <li>✔️ Your Calendar</li>
                <li>✔️ Medication Tracking</li>
              </ul>

              {/* Check It Out Button */}
              <div className="flex justify-center mt-24">
                <button className="w-full px-8 py-4 bg-pink-600 text-white font-semibold text-xl rounded-lg shadow-lg hover:bg-pink-700 transition duration-300">
                  Check It Out
                </button>
              </div>
            </div>

            {/* Essential Wellness Plan - Right Column */}
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-3xl font-bold text-custom-blue-dark mb-8 text-center">
                Essential Wellness Plan
              </h3>

              {/* Available Features */}
              <ul className="list-none space-y-4 text-xl text-gray-600">
                <li>✔️ Professional Diagnosis</li>
                <li>✔️ One-on-One Sessions</li>
                <li>✔️ Community Access</li>
                <li>✔️ Progress Tracking</li>
                <li>✔️ Access to Resources</li>
              </ul>

              {/* Unavailable Features */}
              <ul className="list-none space-y-4 text-xl text-gray-600 mt-8">
                <li className="line-through">❌ Personalized Trackers</li>
                <li className="line-through">❌ Access to Online Events</li>
                <li className="line-through">❌ Creative Art Therapy</li>
                <li className="line-through">❌ Cognitive Games</li>
                <li className="line-through">❌ Your Calendar</li>
                <li className="line-through">❌ Medication Tracking</li>
              </ul>

              {/* Check It Out Button */}
              <div className="flex justify-center mt-20">
                <button className="w-full px-8 py-4 bg-pink-600 text-white font-semibold text-xl rounded-lg shadow-lg hover:bg-pink-700 transition duration-300">
                  Check It Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
