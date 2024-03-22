import { GiSherlockHolmes } from "react-icons/gi";
import { GiShakingHands, GiWineGlass, GiNightSleep } from "react-icons/gi";

const ExpectationData = {
  en: {
    sectionHeading: "What to expect",
    listItems: [
      {
        icon: (
          <GiShakingHands className="transition-all w-14 h-14 text-white/80 group-hover:scale-125" />
        ),
        title: "Meet & Greet",
        text: [
          "Start the evening with a relaxing drink while getting to know your hosts and surroundings",
        ],
      },
      {
        icon: (
          <GiWineGlass className="transition-all w-14 h-14 text-white/80 group-hover:scale-125" />
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
          <GiNightSleep className="transition-all w-14 h-14 text-white/80 group-hover:scale-125" />
        ),
        title: "Stay the Night",
        text: [
          "Stay the night in the converted barn and we’ll make sure breakfast is ready in the morning. Then grab a shower and relax in the Brandenburg forest until its time to head home.",
        ],
      },
    ],
  },
  de: {
    sectionHeading: "Was Sie erwarten können",
    listItems: [
      {
        icon: (
          <GiShakingHands className="transition-all w-14 h-14 text-white/80 group-hover:scale-125" />
        ),
        title: "Begrüßung",
        text: [
          "Beginnen Sie den Abend mit einem entspannenden Getränk, während Sie Ihre Gastgeber und die Umgebung kennenlernen.",
        ],
      },
      {
        icon: (
          <GiWineGlass className="transition-all w-14 h-14 text-white/80 group-hover:scale-125" />
        ),
        title: "Essen & Trinken",
        text: [
          "Köstliches, traditionelles deutsches Essen und alle Getränke inklusive. Sie müssen sich nur darauf konzentrieren, den Mörder zu finden.",
          "Wir haben eine offene Bar. Bedienen Sie sich an Bier, Wein und alkoholfreien Getränken während des Abends.",
        ],
      },
      {
        icon: (
          <GiSherlockHolmes className="transition-all w-14 h-14 text-white/80 group-hover:scale-125" />
        ),
        title: "Den Mörder aufdecken",
        text: [
          "Jede einzigartige Figur wird eine wichtige Rolle bei der Lösung dieses aufregenden Verbrechens spielen. Wir werden Sie auf dem richtigen Weg halten, um herauszufinden, wer von Ihren Freunden der Schuldige ist.",
        ],
      },
      {
        icon: (
          <GiNightSleep className="transition-all w-14 h-14 text-white/80 group-hover:scale-125" />
        ),
        title: "Übernachten",
        text: [
          "Verbringen Sie die Nacht im umgebauten Stall, und wir sorgen dafür, dass das Frühstück am Morgen bereitsteht. Dann nehmen Sie eine Dusche und entspannen Sie sich im Brandenburger Wald, bis es Zeit ist, nach Hause zu fahren.",
        ],
      },
    ],
  },
};

export default ExpectationData;
