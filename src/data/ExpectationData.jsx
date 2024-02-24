import { IoHandLeft } from "react-icons/io5";
import { PiWineFill } from "react-icons/pi";
import { GiSherlockHolmes } from "react-icons/gi";
import { FaMoon } from "react-icons/fa6";

const ExpectationData = [
  {
    icon: (
      <IoHandLeft className="transition-all w-14 h-14 text-white/80 group-hover:scale-125" />
    ),
    title: "Meet & Greet",
    text: [
      "Start the evening with a relaxing drink while getting to know your hosts and surroundings",
    ],
  },
  {
    icon: (
      <PiWineFill className="transition-all w-14 h-14 text-white/80 group-hover:scale-125" />
    ),
    title: "Food & Drink",
    text: [
      "Delicious, traditional German food and all inclusive drinks. You just have to concentrate on finding the killer.",
      "We have an open bar policy. Ask or help yourself to beer, wine and soft drinks throughout the evening.",
    ],
  },
  {
    icon: (
      <GiSherlockHolmes className="transition-all w-14 h-14 text-white/80 group-hover:scale-125" />
    ),
    title: "Uncover the Killer",
    text: [
      "Each unique character will play an important role in solving this thrilling crime. We’ll keep you on the right path to discover which of your friends is the culprit.",
    ],
  },
  {
    icon: (
      <FaMoon className="transition-all w-14 h-14 text-white/80 group-hover:scale-125" />
    ),
    title: "Stay the Night",
    text: [
      "Stay the night in the converted barn and we’ll make sure breakfast is ready in the morning. Then grab a shower and relax in the Brandenburg forest until its time to head home.",
    ],
  },
];

export default ExpectationData;
