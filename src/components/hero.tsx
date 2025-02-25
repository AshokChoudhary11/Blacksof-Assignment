import { useState, useEffect, useRef } from "react";
import passengerAlfa from "../assets/Passenger Alpha - Trim.mp4";
import front from "../assets/front.mp4";
import trunk from "../assets/trunk.mp4";
import exterior from "../assets/exterior.mp4";
import CommercialAlfa from "../assets/Commercial Alpha.mp4";
import Cabin from "../assets/commercialCabin.mp4";
import Engin from "../assets/engine.mp4";
import { ImageWithName, PlayPauseButton } from "./Utils";
import passenger1 from "../assets/passenger1.png";
import passenger2 from "../assets/passenger2.png";
import passenger3 from "../assets/passenger3.png";
import passenger4 from "../assets/passenger4.png";
import CommercialBody from "../assets/CommercialBody.svg";
import CommercialEngine from "../assets/CommercialEngine.svg";
import CommercialCabin from "../assets/CommercialCabin.svg";

const Hero = () => {
    const [selectedCategory, setSelectedCategory] = useState("passenger");
    const [videoSrc, setVideoSrc] = useState(passengerAlfa);
    const [selectedImage, setSelectedImage] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null!);

    const PassengerVehicleData = [
        { image: passenger1, name: "Complete Body", video: passengerAlfa },
        { image: passenger2, name: "Front", video: front },
        { image: passenger3, name: "Trunk", video: trunk },
        { image: passenger4, name: "Exterior", video: exterior },
    ];
    const CommercialVehicleData = [
        { image: CommercialBody, name: "Complete Body", video: CommercialAlfa },
        { image: CommercialEngine, name: "Engine", video: Engin },
        { image: CommercialCabin, name: "Cabin", video: Cabin },
    ];
    const currentData = selectedCategory === "passenger" ? passengerAlfa : CommercialAlfa;

    useEffect(() => {
        setVideoSrc(currentData);
        setSelectedImage(0);

        if (videoRef.current) {
            videoRef.current.src = currentData;
            videoRef.current.play();
        }
    }, [selectedCategory]);

    return (
        <div className="w-full bg-black min-h-screen text-white">
            {/* Heading */}
            <div className="max-w-[780px] text-3xl md:text-5xl mx-auto text-center py-6 px-4 md:py-10">
                <span>Evolving the drive with </span>
                <span className="font-semibold">360-degree</span>
                <span> nonwoven solutions</span>
            </div>

            {/* Category Selector */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center px-6 md:px-12 lg:px-24 gap-4">
                {/* Category Selection */}
                <div className="md:col-span-5 space-y-4">
                    <div
                        className={`p-4 border-l-4 border-white cursor-pointer transition-opacity ${
                            selectedCategory === "passenger" ? "opacity-100" : "opacity-20"
                        }`}
                        onClick={() => setSelectedCategory("passenger")}
                    >
                        <div className="text-xl md:text-2xl font-bold">Passenger Vehicles</div>
                        <div className="text-sm md:text-lg">Revving up Nonwoven innovation from interior to exterior.</div>
                    </div>

                    <div
                        className={`p-4 border-l-4 border-white cursor-pointer transition-opacity ${
                            selectedCategory === "commercial" ? "opacity-100" : "opacity-20"
                        }`}
                        onClick={() => setSelectedCategory("commercial")}
                    >
                        <div className="text-xl md:text-2xl font-bold">Commercial Vehicles</div>
                        <div className="text-sm md:text-lg">Advancing engineering for heavy-duty vehicles.</div>
                    </div>
                </div>

                {/* Video Section */}
                <div className="md:col-span-7 flex justify-center w-full h-auto lg:h-96">
                    <video
                        ref={videoRef}
                        className="w-full h-auto max-w-lg md:max-w-2xl lg:max-w-3xl rounded-lg"
                        autoPlay
                        muted
                    >
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* Image Selection */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center px-6 md:px-12 lg:px-24 gap-4 mt-6">
                <div className="md:col-span-5"></div>

                {/* Image Thumbnails */}
                <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {(selectedCategory === "passenger" ? PassengerVehicleData : CommercialVehicleData).map(
                        (item, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer transition-opacity ${
                                    selectedImage === index ? "opacity-100" : "opacity-35"
                                }`}
                                onClick={() => handleImageClick(index, item.video)}
                            >
                                <ImageWithName image={item.image} name={item.name} />
                            </div>
                        )
                    )}
                </div>

                {/* Play/Pause Button */}
                <div className="md:col-span-2 flex justify-center ">
                    <PlayPauseButton videoRef={videoRef} />
                </div>
            </div>
        </div>
    );
};

export default Hero;
