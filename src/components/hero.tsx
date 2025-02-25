import { useState, useEffect, useRef } from "react";
import passengerAlfa from "../assets/Passenger Alpha - Trim.mp4"
import front from "../assets/front.mp4"
import trunk from "../assets/trunk.mp4"
import exterior from "../assets/exterior.mp4"
import CommercialAlfa from "../assets/Commercial Alpha.mp4"
import Cabin from "../assets/commercialCabin.mp4"
import Engin from "../assets/engine.mp4"
import { ImageWithName, PlayPauseButton } from "./Utils";
import passenger1 from "../assets/passenger1.png"
import passenger2 from "../assets/passenger2.png"
import passenger3 from "../assets/passenger3.png"
import passenger4 from "../assets/passenger4.png"
import CommercialBody from "../assets/CommercialBody.svg"
import CommercialEngine from "../assets/CommercialEngine.svg"
import CommercialCabin from "../assets/CommercialCabin.svg"


const Hero = () => {
    const [selectedCategory, setSelectedCategory] = useState("passenger");
    const [videoSrc, setVideoSrc] = useState(passengerAlfa);
    const [selectedImage, setSelectedImage] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null!); 

    const PassengerVehicleData = [
        { image: passenger1, name: "Complete Body", video: passengerAlfa },
        { image: passenger2, name: "front", video: front },
        { image: passenger3, name: "Trunk", video: trunk },
        { image: passenger4, name: "Exterior", video: exterior },
    ];
    const CommercialVehicleData = [
        { image: CommercialBody, name: "Complete Body", video: CommercialAlfa  },
        { image: CommercialEngine, name: "Engine", video: Engin },
        { image: CommercialCabin, name: "Cabin", video: Cabin },
    ]
    const handleImageClick = (index: number, video: string) => {
        setSelectedImage(index);
        setVideoSrc(video);
        if (videoRef.current) {
            if (videoRef.current.src !== video) {
                videoRef.current.src = video; // Change video source without reloading
                videoRef.current.play();
            }
        }
    };
    useEffect(() => {
        if (selectedCategory === "passenger") {
            setVideoSrc(passengerAlfa);
            setSelectedImage(0); // Reset selected image index
        } else {
            setVideoSrc(CommercialAlfa);
            setSelectedImage(0);
        }
    
        if (videoRef.current) {
            videoRef.current.src = selectedCategory === "passenger" ? passengerAlfa : CommercialAlfa;
            videoRef.current.play();
        }
    }, [selectedCategory]);

    return (
        <div className="w-full bg-black h-screen">
            <div className="max-w-[780px] text-5xl text-white mx-auto text-center py-10">
                <span>Evolving the drive with </span>
                <span className="font-semibold">360-degree</span>
                <span> nonwoven solutions</span>
            </div>

            <div className="grid grid-cols-12  text-white justify-between items-center px-24">
                <div className="col-span-5 ">
                    <div
                        className={`flex flex-col items-start px-24 pt-8 pb-4 border-l-4 border-white ${selectedCategory === "passenger" ? "opacity-100" : "opacity-50"
                            }`}
                        onClick={() => setSelectedCategory("passenger")}
                    >
                        <div className="font-manrope font-bold text-[28px]">Passenger vehicles</div>
                        <div className="font-manrope font-normal text-[18px]">
                            Revving up Nonwoven innovation from interior to exterior.
                        </div>
                    </div>

                    <div
                        className={`flex flex-col items-start px-24 pt-4 pb-8 border-l-4 border-white ${selectedCategory === "commercial" ? "opacity-100" : "opacity-50"
                            }`}
                        onClick={() => setSelectedCategory("commercial")}
                    >
                        <div className="font-manrope font-bold text-[28px]">Commercial vehicles</div>
                        <div className="font-manrope font-normal text-[18px]">
                            Advancing engineering for heavy-duty vehicles.
                        </div>
                    </div>
                </div>
                <div className=" col-span-7 ">
                    <div className="flex justify-center w-full">
                        <video ref={videoRef}  className="mb-4 min-w-full min-h-full" >
                            <source src={videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                </div>
            </div>
            <div className="grid grid-cols-12 text-white justify-between items-center px-24 pb-8">
                <div className="col-span-5"></div>
                <div className="col-span-5 flex justify-between">
                    {(selectedCategory === "passenger"?PassengerVehicleData:CommercialVehicleData).map((item, index) => (
                        <div
                        key={index}
                        className={`cursor-pointer transition-opacity ${
                            selectedImage === index ? "opacity-100" : "opacity-50"
                        }`}
                        onClick={() => handleImageClick(index, item.video)}
                    >
                        <ImageWithName image={item.image} name={item.name} />
                    </div>
                    ))}

                </div>
                <div className="col-span-2 flex justify-center ">
                <PlayPauseButton videoRef={videoRef} />
                </div>
            </div>

        </div>

    );
};

export default Hero;
