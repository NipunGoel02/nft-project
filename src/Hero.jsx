export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Scene />
        </Canvas>
      </div>

      {/* UI Overlay */}
      <div className="relative z-10 container mx-auto h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white max-w-2xl"
        >
          <h1 className="text-5xl font-bold mb-6 font-inter">
            Blockchain-Powered Certificates
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Immersive 3D credentials with NFT verification
          </p>
        </motion.div>
      </div>
    </section>
  )
}
