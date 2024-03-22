import saImage1 from "@public/sa2.webp";
import saImage2 from "@public/sa2.webp";
import mbImage1 from "@public/mb3.webp";
import mbImage2 from "@public/mb3.webp";

export const hostsData = {
  en: {
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
  },
  de: {
    section: "Deine Gastgeber",
    listing: [
      {
        name: "Susanne Abendroth",
        text: [
          `Eine Ostdeutsche mit einem Talent für Sprache und das geschriebene Wort. Aufgewachsen in Äthiopien, bevor sie nach Deutschland zurückkehrte, um den Fall des Eisernen Vorhangs zu erleben.`,
          `Als großer Fan von Agatha Christie und kreativem Schreiben dachte sie, warum nicht beides kombinieren und Hammer3 ist das Ergebnis.`,
          `Ihr Englisch wird Sie an ihrem deutschen Erbe zweifeln lassen.`,
        ],
        frontImg: saImage1,
        backImg: saImage2,
      },
      {
        name: "Marc Bampton",
        text: [
          `Ein Engländer, der Deutschland zu seinem Zuhause macht. Hat in ganz Europa gearbeitet und sich von der Softwareentwicklung zurückgezogen, um bei Hammer3 ein Händchen für Heimwerken zu entwickeln.`,
          `Hammer3 begann als verlassenes Haus und entwickelte sich zu einer lustigen Idee für abenteuerlustige Menschen.`,
          `Sein Deutsch wird Sie an der tatsächlichen Dauer seines Aufenthalts hier zweifeln lassen!`,
        ],
        frontImg: mbImage1,
        backImg: mbImage2,
      },
    ],
  },
};
