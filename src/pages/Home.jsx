// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
<div className="px-4 py-8  h-full w-full bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
  <section className="relative h-90 overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500 opacity-5 rounded-full"
        animate={{ 
          x: [0, 50, 0], 
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-accent-500 opacity-5 rounded-full"
        animate={{ 
          x: [0, -30, 0], 
          y: [0, 50, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary-600 opacity-5 rounded-full"
        animate={{ 
          x: [0, 40, 0], 
          y: [0, -40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 md:pr-12 mb-10 md:mb-0"
        >
          {/* 3D rotating text effect */}
          <motion.div 
            className="perspective-1000 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-white"
              initial={{ rotateX: 90 }}
              animate={{ rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Learn</span>
            </motion.h1>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-white"
              initial={{ rotateX: 90 }}
              animate={{ rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="inline-block bg-gradient-to-r from-cyan-300 to-teal-400 bg-clip-text text-transparent">Earn</span>
            </motion.h1>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
              initial={{ rotateX: 90 }}
              animate={{ rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="inline-block bg-gradient-to-r from-teal-400 to-emerald-300 bg-clip-text text-transparent">Verify</span>
            </motion.h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            Complete courses, participate in hackathons, and earn blockchain-verified certificates that showcase your skills to the world.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/courses">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 25px rgba(20, 184, 166, 0.6)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-400 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Courses
              </motion.button>
            </Link>
            <Link to="/hackathons">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 25px rgba(20, 184, 166, 0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-teal-500 text-teal-400 font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                Join Hackathons
              </motion.button>
            </Link>
          </div>
        </motion.div>
        
        {/* Right side with 3D certificate mockup */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="md:w-1/2"
        >
          <div className="relative">
            {/* Glowing effect behind certificate */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-500 opacity-20 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            {/* 3D rotating certificate */}
            <motion.div
              className="perspective-1000 mx-auto"
              initial={{ rotateY: 45 }}
              animate={{ 
                rotateY: [-5, 5, -5],
                y: [-10, 10, -10]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              <motion.img
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                src="./images.png" 
                alt="NFT Certificate Platform" 
                className="max-w-[90%] h-80 rounded-2xl shadow-2xl z-10 mx-auto"
                style={{
                  boxShadow: "0 0 30px rgba(20, 184, 166, 0.3)",
                  transform: "perspective(1000px) rotateY(-5deg) rotateX(5deg)"
                }}
              />
            </motion.div>
            
            {/* Floating verification badge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -right-5 -bottom-5 bg-white p-4 rounded-xl shadow-lg z-20"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" 
              }}
            >
              <div className="flex items-center">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                  className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3"
                >
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </motion.div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Blockchain Verified</p>
                  <p className="text-xs text-gray-500">Tamper-proof certificates</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Floating tech icons */}
      <motion.div 
        className="absolute -bottom-10 left-1/4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
        animate={{ 
          y: [-10, 10, -10],
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      >
        <img src="./eth.jpeg" alt="Ethereum" className="w-9 h-9" />
      </motion.div>
      
      <motion.div 
        className="absolute -bottom-5 left-1/2 w-12 h-12  rounded-full shadow-lg flex items-center justify-center"
        animate={{ 
          y: [-8, 8, -8],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      >
        <img src="/etheeee.png" alt="Blockchain" className="w-6 h-6" />
      </motion.div>
    </div>
  </section>
</div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Our platform combines learning, achievement, and verification in one seamless experience
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                ),
                title: "Learn",
                description: "Take courses from industry experts and master new skills at your own pace"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                ),
                title: "Earn",
                description: "Complete courses and hackathons to earn NFT certificates that verify your achievements"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                ),
                title: "Showcase",
                description: "Share your blockchain-verified credentials with employers and the world"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
                <p className="text-secondary-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="py-16 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Courses</h2>
            <Link to="/courses" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
              View All
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <img 
                  src={`./heeee.jpeg`} 
                  alt={`Course ${item}`} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">Blockchain Fundamentals</h3>
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Blockchain
                    </span>
                  </div>
                  <p className="text-secondary-600 mb-4">Learn the basics of blockchain technology and how it works.</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-secondary-500">
                      <span className="mr-3">12 lessons</span>
                      <span>6 hours</span>
                    </div>
                    <Link 
                      to={`/courses/${item}`}
                      className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      View Course
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center mb-10">
      <h2 className="text-3xl font-bold">Hackathon Certificates</h2>
      <Link to="/certificates" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
        View All
        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[1, 2].map((item) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: item * 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-primary-100"
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">Web3 Innovation Hackathon Certificate</h3>
              <span className="bg-accent-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                Pending Claim
              </span>
            </div>
            <p className="text-secondary-600 mb-4">This certificate was issued by Web3 Innovation Hackathon organizers for your participation.</p>
            <div className="flex items-center mb-4">
              <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <span className="text-secondary-600">Blockchain Verified</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm text-secondary-500">
                Issued on: May 5, 2025
              </div>
              <Link 
                to={`/certificates/${item}`}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Claim NFT
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Join thousands of learners who have transformed their careers with our platform
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Software Developer",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                quote: "The blockchain certificates I earned helped me stand out in job interviews. Employers were impressed by the verifiable credentials."
              },
              {
                name: "Sarah Williams",
                role: "Data Scientist",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                quote: "I participated in a hackathon and not only learned new skills but also made valuable connections. The NFT certificate is a great addition to my portfolio."
              },
              {
                name: "Michael Chen",
                role: "Blockchain Developer",
                image: "https://randomuser.me/api/portraits/men/22.jpg",
                quote: "The courses are comprehensive and up-to-date with the latest industry trends. The anti-cheating mechanism ensures that my certificates truly reflect my skills."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-card"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-secondary-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-secondary-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join our platform today and start earning verifiable blockchain certificates
            </p>
            <Link to="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary-600 font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started for Free
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
