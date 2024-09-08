import imgHero from "../../../public/Images/hero-cartoon.jpg";
import chatbotImg from "../../../public/Images/chatbot.png";
import appStoreImg from "../../../public/Images/App-store.png";
import diagnosisImg from "../../../public/Images/diagnosis.png";
import googlePlayImg from "../../assets/google-play.png";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div>
        <div className="flex items-center justify-around bg-white py-16 lg:px-20 mt-8">
          {/* Left Section */}
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold text-custom-blue-dark mb-8">
              Your Mental Health, Your Way – Find What Works for You!
            </h1>
            <p className="text-xl text-gray-500 mb-12">
              Check in with yourself, explore new tools, and connect with a
              community that gets it. It’s all about your journey!
            </p>
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
              <a href="#" className="shadow-md w-48">
                <img src={appStoreImg} alt="App Store" className="max-w-full" />
              </a>
              <a href="#" className="shadow-md w-52">
                <img
                  src={googlePlayImg}
                  alt="App Store"
                  className="max-w-full"
                />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden lg:block">
            <img
              src={imgHero}
              alt="App Showcase"
              className="rounded-full shadow-lg w-full max-w-xl"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-custom-white mt-20">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold text-custom-blue-dark mb-12 mt-1">
              What We Offer
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-6">
              {/* Feature Items */}
              {[
                {
                  icon: "🩺",
                  title: "Diagnosis",
                  text: "Understand your mental health needs with expert diagnostic tools.",
                  bgColor: "bg-blue-200",
                },
                {
                  icon: "👩‍⚕️",
                  title: "Therapist Mapping",
                  text: "Get paired with licensed therapists who specialize in your unique concerns and offer personalized support",
                  bgColor: "bg-rose-200",
                },

                {
                  icon: "📝",
                  title: "Customizable Therapy Plans",
                  text: "Tailor your sessions and plans to fit your personal mental health needs.",
                  bgColor: "bg-orange-200",
                },

                {
                  icon: "🗣️",
                  title: "Therapy & Counselling",
                  text: "Schedule 1-on-1 sessions or explore therapies like art, music, CBT, and mindfulness, tailored to your needs",
                  bgColor: "bg-rose-200",
                },
                {
                  icon: "📊",
                  title: "Personalized Dashboard",
                  text: "Track your progress over time with a personalized dashboard.",
                  bgColor: "bg-orange-200",
                },
                {
                  icon: "👥",
                  title: "Community Support",
                  text: "Interact and connect with others on a similar journey to share experiences.",
                  bgColor: "bg-blue-200",
                },
                {
                  icon: "🧠",
                  title: "Cognitive Games",
                  text: "Improve your mental agility with games and self-improvement tests.",
                  bgColor: "bg-blue-200",
                },
                {
                  icon: "💬",
                  title: "24/7 Chat Support",
                  text: "Connect with a professional anytime, anywhere for real-time support.",
                  bgColor: "bg-rose-200",
                },
                {
                  icon: "🔒",
                  title: "Secure & Private",
                  text: "Your conversations are encrypted and fully confidential.",
                  bgColor: "bg-orange-200",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`${feature.bgColor} shadow-lg p-8 rounded-2xl hover:shadow-2xl transition-shadow transform hover:scale-105`}
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-custom-blue mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Start the diagnosis */}
      <section className="bg-sky-50 py-16 px-6 mb-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl font-bold text-custom-blue-dark mb-6">
              Start Your Diagnosis
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Let’s open up and start the journey to better understanding
              yourself. Book a session now and take the first step towards a
              more balanced you.
            </p>
            <a
              href="#book-now"
              className="inline-block bg-custom-blue text-white text-lg font-semibold py-4 px-14 rounded-lg shadow-lg hover:bg-custom-blue-dark transition duration-300"
            >
              Book Now
            </a>
          </div>
          {/* Right Side */}
          <div className="w-full md:w-1/2">
            <img
              src={diagnosisImg} // Replace with your image path
              alt="Consultation"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-5xl font-bold text-custom-blue-dark mb-16 mt-1 text-center">
            How It Works?
          </h2>

          {/* Vertical timeline line */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-custom-blue-dark h-full"></div>

            <div className="space-y-16 relative z-10">
              {/* Step 1 */}
              <div className="flex justify-between items-center w-full">
                <div className="md:w-5/12 bg-white shadow-md p-6 border-l-4 border-custom-blue-dark rounded-md relative ml-4">
                  <h3 className="text-2xl font-bold text-custom-blue-dark mb-4">
                    Step 1: Sign Up
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Create your account and personalize your mental health
                    journey.
                  </p>
                  {/* Arrow pointing to the timeline */}
                  <div className="absolute right-[-15px] top-1/2 transform -translate-y-1/2 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-custom-blue-dark"></div>
                </div>

                <div className="flex items-center">
                  {/* Circle on the line */}

                  <div className="w-4 h-4 rounded-full bg-white border-4 border-custom-blue-dark absolute left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex justify-between items-center w-full flex-row-reverse">
                <div className="md:w-5/12 bg-white shadow-md p-6 border-r-4 border-custom-blue-dark rounded-md relative mr-4">
                  <h3 className="text-2xl font-bold text-custom-blue-dark mb-4">
                    Step 2: Choose a Therapist
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Select from our pool of experienced therapists who best suit
                    your needs.
                  </p>
                  {/* Arrow pointing to the timeline */}
                  <div className="absolute left-[-15px] top-1/2 transform -translate-y-1/2 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-custom-blue-dark"></div>
                </div>

                <div className="flex items-center">
                  {/* Circle on the line */}

                  <div className="w-4 h-4 rounded-full bg-white border-4 border-custom-blue-dark absolute left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex justify-between items-center w-full">
                <div className="md:w-5/12 bg-white shadow-md p-6 border-l-4 border-custom-blue-dark rounded-md relative ml-4">
                  <h3 className="text-2xl font-bold text-custom-blue-dark mb-4">
                    Step 3: Book Your Session
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Schedule your first session and begin your mental health
                    journey.
                  </p>
                  {/* Arrow pointing to the timeline */}
                  <div className="absolute right-[-15px] top-1/2 transform -translate-y-1/2 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-custom-blue-dark"></div>
                </div>

                <div className="flex items-center">
                  {/* Circle on the line */}

                  <div className="w-4 h-4 rounded-full bg-white border-4 border-custom-blue-dark absolute left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex justify-between items-center w-full flex-row-reverse">
                <div className="md:w-5/12 bg-white shadow-md p-6 border-r-4 border-custom-blue-dark rounded-md relative mr-4">
                  <h3 className="text-2xl font-bold text-custom-blue-dark mb-4">
                    Step 4: Begin Your Therapy
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Start your personalized therapy sessions with ongoing
                    support.
                  </p>
                  {/* Arrow pointing to the timeline */}
                  <div className="absolute left-[-15px] top-1/2 transform -translate-y-1/2 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-custom-blue-dark"></div>
                </div>

                <div className="flex items-center">
                  {/* Circle on the line */}

                  <div className="w-4 h-4 rounded-full bg-white border-4 border-custom-blue-dark absolute left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex justify-between items-center w-full">
                <div className="md:w-5/12 bg-white shadow-md p-6 border-l-4 border-custom-blue-dark rounded-md relative ml-4">
                  <h3 className="text-2xl font-bold text-custom-blue-dark mb-4">
                    Step 5: Track Your Progress
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Monitor your mental health progress and adjust your plan as
                    needed.
                  </p>
                  {/* Arrow pointing to the timeline */}
                  <div className="absolute right-[-15px] top-1/2 transform -translate-y-1/2 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-custom-blue-dark"></div>
                </div>

                <div className="flex items-center">
                  {/* Circle on the line */}

                  <div className="w-4 h-4 rounded-full bg-white border-4 border-custom-blue-dark absolute left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot section */}
      <section className="bg-sky-50 px-20 mt-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly">
          {/* Image on the left */}

          <img
            src={chatbotImg} // Replace with your chatbot image path
            alt="AI Chatbot"
            className="w-1/3 h-auto rounded-lg"
          />

          {/* Text on the right */}
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0 text-center md:text-left">
            <h2 className="text-5xl font-bold text-custom-blue-dark mb-6">
              Meet Our AI Chatbot
            </h2>
            <p className="mt-4 text-lg text-gray-600 mb-4">
              Need a quick chat or some support at any hour? Our friendly AI
              chatbot is always here to listen and guide you. Chat with ease and
              get help right when you need it!
            </p>
            <a href="https://rezen-c.streamlit.app/">
            <button className="mt-6 px-16 py-4 bg-pink-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-pink-700">
              Try Now
            </button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

      <Testimonial />
    </>
  );
};

export default Home;
