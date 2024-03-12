import saImage1 from "/sa2.webp";
import saImage2 from "/sa2.webp";
import mbImage1 from "/mb3.webp";
import mbImage2 from "/mb3.webp";

export const hostsData = {
  section: "Your Hosts",
  listing: [
    {
      name: "Susanne Abendroth",
      text: [
        `An East German with a talent for language and the written word. Grew up in 
      Ethiopia before returning to Germany to see the fall of the Iron Curtain.`,
        `As big fan of Agatha Christie and creative writing, thought why not 
      combine the two and Hammer3 is the result.`,
        `Her English will make you doubt her German heritage.`,
      ],
      frontImg: saImage1,
      backImg: saImage2,
    },
    {
      name: "Marc Bampton",
      text: [
        `English guy making Germany his home. Worked across Europe and retired from 
      software engineering to Hammer3 where he developed a knack for home renovation.`,
        `Hammer3 started as an abandoned house and grew into a fun idea for adventurous 
      people.`,
        `His German will make you doubt the length of time he’s actually been here!`,
      ],
      frontImg: mbImage1,
      backImg: mbImage2,
    },
  ],
};
