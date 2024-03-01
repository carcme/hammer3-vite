export const MysteryListData = [
  {
    id: 0,
    feature: true,
    title: "Northcott Manor Crime Dinner",
    plot: [
      "Whatever happened to Jane Templeton? The young maid disappeared without a trace 20 years ago and now your group must find out what happened to her.",
      "Detective Inspector Duncan Hall has gathered all the suspects to dinner… and none of the guests are who they seem to be.",
      "Your hosts will guide you through a thrilling crime where each character will play an important role. Enjoy the eerie scenery, the delicious food and the all inclusive drinks.",
    ],
    image: "pbg2.webp",
    srcset: "pbg2",
    players: "6-8",
    difficulty: "Easy",
    cost: "180",
    slug: "/mystery",
  },
  {
    id: 1,
    feature: true,
    title: "Elementary Murder on the Marple Express",
    plot: [
      "Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.",
      "Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.",
      "Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.",
    ],
    image: "pbg6.webp",
    srcset: "pbg6",
    players: "6-8",
    difficulty: "Hard",
    cost: "180",
    slug: "/mystery",
  },
  {
    id: 2,
    feature: true,
    title: "Death at Dunham Manor",
    plot: [
      "'Death at Dunham Manor' immerses players in a world of intrigue and betrayal as they attend a lavish dinner party hosted by Lord Alexander Dunham. Amidst the aristocratic splendor, guests navigate tangled relationships and hidden agendas.",
      "Lady Emily Dunham, torn between duty and desire, pursues a forbidden romance, while her troubled brother, Sir William Dunham, grapples with resentment and self-destructive tendencies. Among the attendees are Lady Elizabeth Montgomery, driven by ambition, and Sir Reginald Hastings, embroiled in a bitter feud. Miss Abigail Foster, the governess, harbors a scandalous secret, while Dr. Geoffrey Wright and Colonel Rupert Mallory hide their own mysteries.",
      "When Lord Dunham is discovered murdered, suspicion falls on each guest, sparking a thrilling race to uncover the killer and unravel the secrets lurking within Dunham Manor's walls.",
    ],
    plotExtended: [
      "In the quaint English countryside lies Dunham Manor, an estate renowned for its elegance and charm. The owner, Lord Alexander Dunham, is a distinguished aristocrat known for his lavish parties and extravagant lifestyle. However, behind the facade of opulence, secrets lurk within the walls of Dunham Manor.",
      "Lord Dunham, a widower, lives with his two children, Lady Emily Dunham and Sir William Dunham, both of whom have their own share of scandals and secrets. Lady Emily, a socialite known for her beauty and charm, is entangled in a tumultuous affair with the dashing but enigmatic Captain James Thornton, much to the dismay of her father. Sir William, on the other hand, is a troubled soul with a penchant for gambling and heavy drinking, often causing embarrassment to the family name.",
      "The evening begins with a lavish dinner party hosted by Lord Dunham, attended by a select group of esteemed guests including wealthy socialites, prominent politicians, and influential figures from various walks of life. However, tensions simmer beneath the surface as old rivalries resurface and hidden agendas come to light.",
      "As the night progresses, a shocking discovery is made – the lifeless body of Lord Dunham is found in the study, a dagger plunged into his chest. Panic ensues as accusations fly and suspicion falls on each guest, each with their own motives and alibis.",
    ],
    image: "ai.jpg",
    srcset: "ai",
    players: "4-10",
    difficulty: "Taxing",
    cost: "180",
    slug: "/mystery",
    guests: [
      {
        name: "Lady Emily Dunham",
        backStory:
          "Lady Emily is the epitome of grace and sophistication, but beneath her charming facade lies a restless spirit yearning for freedom from the constraints of aristocratic society. Despite her engagement to a wealthy suitor chosen by her father, she finds herself irresistibly drawn to Captain James Thornton, a dashing officer with a mysterious past. Emily is torn between duty and desire, risking scandal and disgrace to pursue her forbidden romance",
        motive:
          "Lord Dunham disapproves of Emily's affair with Captain James Thornton and threatens to cut her off financially if she continues the relationship. Emily sees her father's controlling nature as an obstacle to her happiness and wishes to be free from his influence",
      },
      {
        name: "Sir William Dunham",
        backStory:
          "Sir William, the heir apparent to Dunham Manor, is a troubled soul plagued by demons of his own making. Reckless and impulsive, he squanders his family's fortune on gambling and drinking, much to the dismay of his father. Desperate to escape the pressures of his title and the expectations placed upon him, William seeks solace in the vices of the London underworld, where he becomes entangled in a dangerous game of deceit and betrayal",
        motive:
          "Motive: Sir William is deeply resentful of his father's constant criticism and interference in his life. Lord Dunham's threats to disinherit him push William to the brink, and he sees his father's demise as the only way to claim his birthright and live life on his own terms",
      },
      {
        name: "Lady Elizabeth Montgomery",
        backStory:
          "Lady Elizabeth is a close friend and confidante of Lady Emily, but beneath her affable demeanor lies a calculating mind adept at navigating the treacherous waters of high society. Unbeknownst to her peers, Elizabeth harbors a secret ambition to elevate her social status by any means necessary, even if it means resorting to manipulation and deceit. Her loyalty to Emily is tested as she becomes embroiled in the scandalous affair threatening to tear the Dunham family apart",
        motive:
          "Lady Elizabeth harbors ambitions of marrying into the Dunham family to secure her social standing. However, Lord Dunham's opposition to her scheming and manipulative ways threatens to thwart her plans. Eliminating Lord Dunham would remove the biggest obstacle standing in the way of her ambitions",
      },
      {
        name: "Sir Reginald Hastings",
        backStory:
          "Sir Reginald is a wealthy landowner and business rival of Lord Dunham, locked in a bitter feud over a valuable parcel of land coveted by both parties. Determined to emerge victorious at any cost, Sir Reginald resorts to underhanded tactics and political maneuvering to undermine his adversary's position. His simmering animosity towards Lord Dunham threatens to boil over into open conflict, casting suspicion upon him in the wake of the murder.",
        motive:
          "Sir Reginald's bitter feud with Lord Dunham over a valuable parcel of land has escalated to the point of no return. Unable to reach a compromise through legal means, Sir Reginald sees Lord Dunham's death as the only way to secure the land for himself and deal a final blow to his rival.",
      },
      {
        name: "Miss Abigail Foster",
        backStory:
          "Miss Abigail is the governess hired to educate and care for the Dunham children, but her past holds dark secrets that threaten to unravel the fragile peace of Dunham Manor. Fleeing from a scandalous affair with a married man, Abigail seeks refuge in the secluded countryside, where she hopes to rebuild her shattered life. However, her past catches up with her when she becomes entangled in the web of intrigue surrounding the murder of her employer",
        motive:
          "Miss Foster's past indiscretions could be exposed if Lord Dunham discovers the truth about her scandalous affair with a married man. Fearing the loss of her job and reputation, Miss Foster may resort to desperate measures to silence Lord Dunham and protect her secrets",
      },
      {
        name: "Dr. Geoffrey Wright",
        backStory:
          "Dr. Wright is the family physician entrusted with the health and well-being of the Dunham household, but his keen intellect and sharp intuition make him a formidable ally in the quest for truth. Uncovering the secrets hidden within the walls of Dunham Manor, Dr. Wright must navigate the treacherous waters of deception and deceit to unmask the killer lurking in their midst.",
        motive:
          "Dr. Wright is privy to Lord Dunham's medical history and may uncover damning evidence of foul play or malfeasance. Lord Dunham's death would prevent him from revealing any incriminating information and safeguard the reputation of the Dunham family",
      },
      {
        name: "Colonel Rupert Mallory",
        backStory:
          "Colonel Mallory is a retired military officer with a storied past shrouded in mystery and intrigue. Rumored to have been involved in covert operations during his time in the service, Mallory's true allegiance remains a closely guarded secret known only to a select few. When the murder at Dunham Manor threatens to expose his hidden past, Mallory must use all of his cunning and resourcefulness to protect his secrets from falling into the wrong hands",
        motive:
          "Colonel Mallory's clandestine activities during his military career may have left him vulnerable to blackmail or exposure. Lord Dunham's death could eliminate a potential threat to Mallory's secrets and ensure his continued safety and security",
      },
      {
        name: "Mrs. Beatrice Pemberton",
        backStory:
          "Mrs. Pemberton is the indomitable housekeeper of Dunham Manor, whose sharp eye and no-nonsense demeanor make her an invaluable asset in maintaining order within the household. With a keen understanding of human nature gleaned from years of observing the inner workings of the aristocracy, Mrs. Pemberton becomes an unwitting participant in the deadly game of cat and mouse unfolding under her watchful gaze.",
        motive:
          "Mrs. Pemberton is fiercely loyal to the Dunham family and may perceive Lord Dunham's actions or decisions as detrimental to their well-being. Eliminating Lord Dunham could be seen as a misguided attempt to protect the family's interests and preserve their legacy",
      },
      {
        name: "Mr. Edward Sinclair",
        backStory:
          "Mr. Sinclair is a charming but mysterious stranger whose sudden appearance at Dunham Manor raises eyebrows among the guests. Claiming to be a distant relative of the Dunham family, Sinclair's true motives remain unclear as he ingratiates himself into the inner circle of high society. With a disarming smile and a silver tongue, Sinclair may hold the key to unlocking the secrets hidden within the walls of Dunham Manor—or he may be the greatest threat of all.",
        motive:
          "Mr. Sinclair's true identity and motives remain shrouded in mystery, but his sudden appearance at Dunham Manor suggests ulterior motives. Lord Dunham's death could be part of a larger scheme orchestrated by Sinclair to manipulate events to his advantage or gain access to the Dunham family's wealth and influence",
      },
      {
        name: "",
        backStory: "",
      },
    ],
  },
  {
    id: 3,
    feature: false,
    title: "Another Death in the Forest",
    plot: [
      "Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.",
      "Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.",
      "Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.",
    ],
    image: "misty-car-headlights.webp",
    srcset: "misty-car-headlights",
    players: "6-8",
    difficulty: "Easy",
    cost: "180",
    slug: "/mystery",
  },
];
