const Hero = () => {
  return (
    <section 
    className="h-fit lg:h-[80vh] col-center mt-40 lg:mt-20 2xl:mt-[7vh]"
    id="hero">
        <div
        className="relative z-10 col-center lg:translate-y-16"
        >
            <h1
            className="font-semibold lg:text-3xl 2xl:text-5xl text-white"
            >MacBook Pro</h1>
        <div className="relative text-center container mx-auto w-2/3 whitespace-nowrap">
            <h1 
                className="absolute inset-0 flex items-center justify-center text-2xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 blur-xl opacity-70 select-none" 
                aria-hidden="true"
            >
                Built for Apple Intelligence.
            </h1>
            <h1 className="relative text-2xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-orange-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">
                Built for Apple Intelligence.
            </h1>
        </div>
            <video 
            className="mx-auto lg:translate-y-5 2xl:translate-y-0"
            src="/videos/hero.mp4" autoPlay muted playsInline ></video>
            <button
            className="relative z-10 bg-primary text-white py-2 px-6 mt-10 lg:mt-0 mb-5 rounded-full font-semibold text-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
            >
                Buy
            </button>
            <p
            className="lg:h3-semibold base-semibold"
            >From $1599 or 133$/mo for 12 months</p>
        </div>
    </section>
  )
}

export default Hero