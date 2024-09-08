import chatbotImg from "../../../public/Images/chatbot.png";

function Chatbot() {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 ml-20">
            <img src={chatbotImg} alt="AI Chatbot" className="rounded-lg" />
          </div>

          <div className="md:w-1/2 mt-8 md:mt-20 md:pl-12 mb-10">
            <h2 className="text-5xl font-bold text-custom-blue-dark">
              Meet Our AI Wellness Companion
            </h2>
            <h3 className="text-2xl text-custom-blue mb-6 mr-16 mt-8">
              Personalized Support and Guidance at Any Time, From Anywhere.
            </h3>
            <p className="text-lg text-gray-600 mt-4 mb-8 mr-20">
              Our AI chatbot is here to help, offering 24/7 access to
              personalized guidance and resources. Whether you need a comforting
              conversation or immediate assistance, the chatbot provides
              reliable support right when you need it, all within a confidential
              and secure environment.
            </p>
            <a
              href="https://rezen-c.streamlit.app/"
              className="inline-block bg-pink-600 text-white text-lg font-semibold py-4 px-16 rounded-lg shadow-md hover:bg-pink-700 transition duration-300"
            >
              Explore More
            </a>
          </div>
        </div>
      </div>

      <div className="bg-custom-white py-20">
        {/* Why an AI Chatbot for Mental Health Section */}
        <section className="text-center mx-36 my-16 bg-sky-100 py-10 px-28 rounded-lg mb-32">
          <h2 className="text-4xl font-bold text-custom-blue-dark mb-8 mt-6">
            Why an AI Chatbot for Mental Health?
          </h2>
          <p className="text-lg font-semibold text-gray-600 mb-8">
            In today’s fast-paced world, finding the right mental health support
            can be challenging. Our AI chatbot is designed to provide immediate,
            personalized help whenever you need it, bridging the gap between
            traditional therapy and everyday wellness support.
          </p>
          <a
            href="https://rezen-c.streamlit.app/"
            className="inline-block bg-custom-blue-dark text-white text-lg font-semibold py-4 px-10 rounded-lg shadow-md hover:bg-custom-blue-dark/90 transition duration-300"
          >
            Try Our AI Chatbot
          </a>
        </section>

        {/* Features Grid Section */}
        <section className="mx-20">
          <h2 className="text-5xl font-bold text-custom-blue-dark text-center mb-16">
            What Can Our AI Chatbot Do For You?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:bg-sky-200">
              <h3 className="text-xl font-semibold text-custom-blue-dark mb-2">
                24/7 Instant Support
              </h3>
              <p className="text-gray-600">
                Our AI chatbot is available around the clock, ensuring you have
                someone to talk to whenever you need.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:bg-sky-200">
              <h3 className="text-xl font-semibold text-custom-blue-dark mb-2">
                Personalized Conversations
              </h3>
              <p className="text-gray-600">
                The chatbot adapts to your unique needs, offering tailored
                advice based on your mental health history.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:bg-sky-200">
              <h3 className="text-xl font-semibold text-custom-blue-dark mb-2">
                Confidential & Secure
              </h3>
              <p className="text-gray-600">
                Your privacy is our priority. All conversations are fully
                encrypted and remain confidential.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:bg-sky-200">
              <h3 className="text-xl font-semibold text-custom-blue-dark mb-2">
                Self-Care Reminders
              </h3>
              <p className="text-gray-600">
                Receive regular wellness tips and self-care reminders to help
                maintain a balanced mental state.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:bg-sky-200">
              <h3 className="text-xl font-semibold text-custom-blue-dark mb-2">
                Crisis Mode
              </h3>
              <p className="text-gray-600">
                In times of heightened distress, the chatbot can provide
                immediate support or connect you with professional help.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:bg-sky-200">
              <h3 className="text-xl font-semibold text-custom-blue-dark mb-2">
                Integration with Therapists
              </h3>
              <p className="text-gray-600">
                The chatbot seamlessly connects you to licensed therapists for
                further assistance when needed.
              </p>
            </div>
          </div>
        </section>
        <div className="mt-24 text-center mx-auto">
          <a
            href="https://rezen-c.streamlit.app/"
            className="inline-block bg-pink-600 text-white text-lg font-semibold py-4 px-20 rounded-lg shadow-md hover:bg-pink-700 transition duration-300"
          >
            Talk to Chatbot
          </a>
        </div>
      </div>
    </>
  );
}

export default Chatbot;
