import { AiOutlineTeam } from "react-icons/ai";
import { SlChemistry, SlBadge } from "react-icons/sl";

const howToPlayData = {
  en: {
    sectionHeading: "How to play",
    listItems: [
      {
        title: "Who Should Play?",
        text: [
          `Our mysteries are perfect for everyone. There are no special skills 
      needed to have a great time. Bring your friends, family, co-workers, 
      just a bunch of random people and get fun.`,
        ],
        icon: (
          <AiOutlineTeam className="transition-all w-14 h-14 text-white/80 group-hover:scale-125" />
        ),
      },
      {
        title: "For Team Building",
        text: [
          `Our games are designed for intense participation from the group trying 
      to solve a murder mystery. It’s perfect for team building experience.`,
        ],
        icon: (
          <SlChemistry className="transition-all w-14 h-14 text-white/80 group-hover:scale-125" />
        ),
      },
      {
        title: "For Special Events",
        text: [
          `Whatever the celebration, Hammer3 is here to take it to another level. 
      Book your slot and contact us to see how we can help make any special 
      occasion even better.`,
        ],
        icon: (
          <SlBadge className="transition-all w-14 h-14 text-white/80 group-hover:scale-125" />
        ),
      },
    ],
  },
  de: {
    sectionHeading: "Wie man spielt",
    listItems: [
      {
        title: "Wer sollte spielen?",
        text: [
          `Unsere Rätsel sind für alle perfekt. Es sind keine besonderen Fähigkeiten erforderlich, um eine tolle Zeit zu haben. Bring deine Freunde, Familie, Kollegen, einfach eine Gruppe von zufälligen Personen und habe Spaß.`,
        ],
        icon: (
          <AiOutlineTeam className="transition-all w-14 h-14 text-white/80 group-hover:scale-125" />
        ),
      },
      {
        title: "Für Team Building",
        text: [
          `Unsere Spiele sind darauf ausgelegt, dass die Gruppe intensiv daran teilnimmt, ein Mordgeheimnis zu lösen. Es ist perfekt für Teambuilding-Erfahrungen.`,
        ],
        icon: (
          <SlChemistry className="transition-all w-14 h-14 text-white/80 group-hover:scale-125" />
        ),
      },
      {
        title: "Für besondere Anlässe",
        text: [
          `Egal, was gefeiert wird, Hammer3 ist hier, um es auf ein neues Level zu heben. Buchen Sie Ihren Slot und kontaktieren Sie uns, um zu sehen, wie wir jeden besonderen Anlass noch besser machen können.`,
        ],
        icon: (
          <SlBadge className="transition-all w-14 h-14 text-white/80 group-hover:scale-125" />
        ),
      },
    ],
  },
};

export default howToPlayData;
