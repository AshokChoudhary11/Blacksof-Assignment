import { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

type PlayPauseButtonProps = {
    videoRef: React.RefObject<HTMLVideoElement>;
  };


export const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({ videoRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const radius = 24; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Full circle circumference

  // Toggle Play/Pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update progress based on video time
  useEffect(() => {
    const updateProgress = () => {
      if (videoRef.current) {
        const percent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(percent);
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("timeupdate", updateProgress);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, [videoRef]);

  return (
    <div className="relative w-16 h-16 flex justify-center items-center">
      {/* SVG Circular Progress Bar */}
      <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 52 52">
        {/* Background Circle */}
        <circle
          cx="26"
          cy="26"
          r={radius}
          stroke="white"
          strokeWidth="2"
          fill="transparent"
          opacity="0.3"
        />
        {/* Animated Progress Circle */}
        <circle
          cx="26"
          cy="26"
          r={radius}
          stroke="white"
          strokeWidth="2"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={(1 - progress / 100) * circumference}
          strokeLinecap="round"
        />
      </svg>

      {/* Play/Pause Button */}
      <button
        className="absolute flex items-center justify-center w-12 h-12 bg-black rounded-full text-white"
        onClick={togglePlay}
      >
        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
      </button>
    </div>
  );
};

export default PlayPauseButton;

interface ImageWithNameProps {
    image: string;
    name: string;
}
export const ImageWithName: React.FC<ImageWithNameProps> = ({ image, name }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={image} alt={name} className="w-18 h-18 object-cover rounded-lg" />
            <span className=" text-sm ">{name}</span>
        </div>
    );
};
