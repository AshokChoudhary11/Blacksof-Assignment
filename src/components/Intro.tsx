const Intro = () => {
    return (
        <div className="relative h-[calc(100vh-80px)] flex items-center justify-center text-center text-white bg-gray-500">
            {/* Background Video */}
            {/* <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        >
          <source src="/assets/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

            {/* Content */}
            <div className="flex flex-col relative z-1 gap-[30] ">
                <div>
                    <p className="text-[22px] font-normal">Performance in motion</p>
                </div>
                <div>
                    <h1 className="text-[48px] font-semibold">Soft Trims and NVH Solutions</h1>
                    <p className="text-[48px] font-normal">for seamless rides</p>
                </div>
            </div>
        </div>
    );
};

export default Intro;
