const Blogs = () => {
  return (
    <>
      {/* Blogs */}
      <div className="bg-custom-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-custom-blue-dark mb-12">
            Our Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Blog Post 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <img
                src="https://plus.unsplash.com/premium_photo-1666946131242-b2c5cc73892a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Understanding Mental Health"
                className="w-full h-48 object-cover"
              />
              <div className="flex-1 p-6">
                <h3 className="text-2xl font-bold text-custom-blue-dark mb-4">
                  Understanding Mental Health
                </h3>
                <p className="text-gray-600 mb-4">
                  Dive into our latest post on understanding the complexities of
                  mental health and finding effective strategies for managing
                  it.
                </p>
              </div>
              <div className="p-6">
                <a
                  href="/blog/1"
                  className="inline-block bg-custom-blue text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-custom-blue-dark transition duration-300"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <img
                src="https://images.pexels.com/photos/4101137/pexels-photo-4101137.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Effective Therapy Techniques"
                className="w-full h-48 object-cover"
              />
              <div className="flex-1 p-6">
                <h3 className="text-2xl font-bold text-custom-blue-dark mb-4">
                  Effective Therapy Techniques
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore various therapy techniques and discover what works
                  best for your mental well-being.
                </p>
              </div>
              <div className="p-6">
                <a
                  href="/blog/2"
                  className="inline-block bg-custom-blue text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-custom-blue-dark transition duration-300"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <img
                src="https://images.pexels.com/photos/158465/waterlily-pink-water-lily-water-plant-158465.jpeg/"
                alt="Building a Support System"
                className="w-full h-48 object-cover"
              />
              <div className="flex-1 p-6">
                <h3 className="text-2xl font-bold text-custom-blue-dark mb-4">
                  Building a Support System
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to build and maintain a supportive network to aid in
                  your mental health journey.
                </p>
              </div>
              <div className="p-6">
                <a
                  href="/blog/3"
                  className="inline-block bg-custom-blue text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-custom-blue-dark transition duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletters */}

      <div className="bg-gray-100 py-16 px-6 mt-36 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-custom-blue-dark mb-6">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Subscribe to our newsletter and be the first to receive updates on
            mental health tips, blog posts, and special offers. Your privacy is
            important to us.
          </p>
          <form className="flex flex-col md:flex-row justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 mb-4 md:mb-0 md:mr-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-custom-blue"
              required
            />
            <button
              type="submit"
              className="bg-custom-blue text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-custom-blue-dark transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Blogs;
