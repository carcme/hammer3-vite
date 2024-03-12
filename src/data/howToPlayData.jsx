import { AiOutlineTeam } from "react-icons/ai";
import { SlChemistry, SlBadge } from "react-icons/sl";

const howToPlayData = {
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
};

export default howToPlayData;
