import React from "react";
// fontawesome
import {
  FaPhone,
  FaLocationArrow,
  FaRegClock,
  FaEnvelope,
} from "react-icons/fa";

const FooterData = () => {
  const FooterCards = [
    {
      icon: <FaPhone />,
      title: "Phone Number",
      Firstsubtitle: "+49 176 3439 8803",
    },
    {
      icon: <FaLocationArrow />,
      title: "Our Address",
      Firstsubtitle: "Hammer3, 15746",
      Secondsubtitle: "Gross Koris",
    },
    {
      icon: <FaRegClock />,
      title: "Open Hours",
      Firstsubtitle: "Fr: 18:00 - late",
      Secondsubtitle: "Sa: 18:00 - late",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Address",
      Firstsubtitle: "hammer@hammer3.com",
    },
  ];

  return (
    <>
      {FooterCards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center w-full min-w-10 py-5 rounded-lg 
          text-center text-neutral-400 border-2 border-neutral-700 bg-transparent backdrop-blur-md"
        >
          <div
            className="rounded-full max-w-14 text-3xl p-3 flex justify-center ring-2 
          ring-neutral-700"
          >
            {card.icon}
          </div>
          <div>
            <h3 className="capitalize font-medium mt-3">{card.title}</h3>
            <p className="font-thin">{card.Firstsubtitle}</p>

            {/* no idea what i was thinking here!! just use array!!  */}
            {card.Secondsubtitle && (
              <p className="font-thin">{card.Secondsubtitle}</p>
            )}
            {card.Thirdsubtitle && (
              <p className="font-thin">{card.Thirdsubtitle}</p>
            )}
            {card.Forthsubtitle && (
              <p className="font-thin">{card.Forthsubtitle}</p>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default FooterData;
