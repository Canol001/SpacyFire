import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <nav className="bg-white py-4 sticky top-0 z-50 border-b border-gray-300">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <i className="fas fa-fire text-blue-600 text-2xl"></i>
                <span className="text-blue-600 text-2xl font-bold">SPACYFIRE</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="text-blue-600 hover:text-blue-800 transition">HOME</a>
                <a href="#services" className="text-gray-600 hover:text-blue-600 transition">SERVICES</a>
                <a href="#about" className="text-gray-600 hover:text-blue-600 transition">ABOUT</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">CONTACT</a>
              </div>
              <div className="md:hidden">
                <button className="text-blue-600 focus:outline-none">
                  <i className="fas fa-bars text-2xl"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <section id="home" className="hero py-32 text-center bg-gray-100">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">IGNITE YOUR DIGITAL FUTURE</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              We deliver <span className="text-blue-600 font-bold">cutting-edge</span> technology solutions with <span className="text-blue-600 font-bold">unmatched</span> performance
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#services" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">OUR SERVICES</a>
              <a href="#contact" className="border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-bold py-3 px-8 rounded-full transition duration-300">CONTACT US</a>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4 text-blue-600">OUR SERVICES</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">We provide comprehensive technology solutions to power your business in the digital age</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="service-card p-8 rounded-lg border border-gray-300">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-globe"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Web Development</h3>
                <p className="text-gray-600">High-performance websites built with modern frameworks and optimized for speed and SEO.</p>
              </div>
              
              <div className="service-card p-8 rounded-lg border border-gray-300">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">App Development</h3>
                <p className="text-gray-600">Native and cross-platform mobile applications with seamless user experiences.</p>
              </div>
              
              <div className="service-card p-8 rounded-lg border border-gray-300">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-server"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Cloud Hosting</h3>
                <p className="text-gray-600">Scalable, secure cloud infrastructure with 99.9% uptime guarantee.</p>
              </div>
              
              <div className="service-card p-8 rounded-lg border border-gray-300">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Software Solutions</h3>
                <p className="text-gray-600">Custom software tailored to your business needs and workflows.</p>
              </div>
              
              <div className="service-card p-8 rounded-lg border border-gray-300">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-tools"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Hardware Services</h3>
                <p className="text-gray-600">Complete hardware solutions including maintenance and upgrades.</p>
              </div>
              
              <div className="service-card p-8 rounded-lg border border-gray-300">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-headset"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">IT Consulting</h3>
                <p className="text-gray-600">Strategic technology planning and digital transformation guidance.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
                <h2 className="text-4xl font-bold mb-6 text-blue-600">ABOUT SPACYFIRE</h2>
                <p className="text-gray-600 mb-4">Founded in 2015, SpacyFire has been at the forefront of technological innovation, helping businesses of all sizes navigate the digital landscape.</p>
                <p className="text-gray-600 mb-4">Our team of experts combines technical excellence with creative problem-solving to deliver solutions that drive real business results.</p>
                <p className="text-gray-600">We believe in pushing boundaries, challenging conventions, and creating technology that doesn't just work—it excels.</p>
                <div className="mt-8 flex space-x-4">
                  <div className="text-center">
                    <div className="text-blue-600 text-3xl font-bold">150+</div>
                    <div className="text-gray-400">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-600 text-3xl font-bold">98%</div>
                    <div className="text-gray-400">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-600 text-3xl font-bold">24/7</div>
                    <div className="text-gray-400">Support</div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Our Team" className="rounded-lg"/>
                  <div className="absolute -inset-2 border-2 border-blue-600 rounded-lg opacity-50"></div>
                  <div className="absolute -inset-4 border-2 border-blue-600 rounded-lg opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4 text-blue-600">GET IN TOUCH</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Ready to ignite your project? Contact us today for a free consultation.</p>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">CONTACT INFO</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt text-blue-600 text-xl mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-bold">HEADQUARTERS</h4>
                      <p className="text-gray-600">Maseno</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-phone-alt text-blue-600 text-xl mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-bold">PHONE</h4>
                      <p className="text-gray-600">+254 790 502 670</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-envelope text-blue-600 text-xl mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-bold">EMAIL</h4>
                      <p className="text-gray-600">canolowana6@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mt-12 mb-6 text-blue-600">FOLLOW US</h3>
                <div className="flex space-x-6">
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl"><i className="fab fa-github"></i></a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <form className="bg-white p-8 rounded-lg border border-gray-300">
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-blue-600 mb-2">YOUR NAME</label>
                    <input type="text" id="name" className="w-full bg-gray-100 border-b border-blue-600 focus:outline-none focus:border-blue-800 py-2 px-1 text-gray-800"/>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-blue-600 mb-2">EMAIL ADDRESS</label>
                    <input type="email" id="email" className="w-full bg-gray-100 border-b border-blue-600 focus:outline-none focus:border-blue-800 py-2 px-1 text-gray-800"/>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-blue-600 mb-2">SERVICE INTEREST</label>
                    <select id="service" className="w-full bg-gray-100 border-b border-blue-600 focus:outline-none focus:border-blue-800 py-2 px-1 text-gray-800">
                      <option value="">Select a service</option>
                      <option value="web">Web Development</option>
                      <option value="app">App Development</option>
                      <option value="cloud">Cloud Hosting</option>
                      <option value="software">Software Solutions</option>
                      <option value="hardware">Hardware Services</option>
                      <option value="consulting">IT Consulting</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-blue-600 mb-2">MESSAGE</label>
                    <textarea id="message" rows="4" className="w-full bg-gray-100 border-b border-blue-600 focus:outline-none focus:border-blue-800 py-2 px-1 text-gray-800"></textarea>
                  </div>
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 w-full">SEND MESSAGE</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-white py-12 border-t border-gray-300">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-fire text-blue-600 text-2xl"></i>
                  <span className="text-blue-600 text-2xl font-bold">SPACYFIRE</span>
                </div>
                <p className="text-gray-600 mt-2">Igniting digital transformation</p>
              </div>
              <div className="flex space-x-8">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition">Privacy Policy</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition">Terms of Service</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition">Careers</a>
              </div>
            </div>
            {/* <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-500">
              <p>&copy; 2023 SpacyFire Technologies. All rights reserved.</p>
            </div> */}
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;