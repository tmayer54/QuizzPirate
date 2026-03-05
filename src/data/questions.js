const questions = [
  {
    q: "Comment appelle-t-on l'avant d'un navire ?",
    a: "La proue",
    hint: "L'opposé de la poupe",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Quel est le nom du drapeau pirate à tête de mort ?",
    a: "Le Jolly Roger",
    hint: "Il est noir avec une tête de mort",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Comment appelle-t-on l'arrière d'un navire ?",
    a: "La poupe",
    hint: "L'opposé de la proue",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Quel est le nom de la boisson préférée des pirates ?",
    a: "Le rhum",
    hint: "Ça vient des Caraïbes…",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Comment appelle-t-on un pirate qui prend d'autres navires avec la permission de son gouvernement ?",
    a: "Un corsaire",
    hint: "Il a des lettres de marque",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Quel célèbre pirate est associé aux Caraïbes au XVIIIe siècle, surnommé Barbe-Noire ?",
    a: "Edward Teach (Thatch)",
    hint: "Il s'appelait Edward...",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Comment s'appelle la planche que l'on forçait les prisonniers à marcher jusqu'à tomber à la mer ?",
    a: "La planche",
    hint: "Walk the... ?",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Quel est le nom du côté gauche d'un navire quand on regarde vers l'avant ?",
    a: "Bâbord",
    hint: "Bâbord = gauche, tribord = droite",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Quel est le nom du côté droit d'un navire quand on regarde vers l'avant ?",
    a: "Tribord",
    hint: "Bâbord = gauche, tribord = droite",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Comment appelle-t-on le mât principal d'un navire ?",
    a: "Le grand mât",
    hint: "C'est le plus grand...",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Qu'est-ce qu'un abordage ?",
    a: "Attaquer un navire en s'y accrochant / monter à bord de force",
    hint: "Les pirates utilisent des grappins...",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Quel oiseau mythique renaît de ses cendres, souvent tatoué par les marins ?",
    a: "Le Phénix",
    hint: "Il renaît de ses cendres",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Comment s'appelle le fond de la cale d'un navire, souvent rempli d'eau croupie ?",
    a: "La sentine",
    hint: "C'est très bas... et très malodorant",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Quel monstre marin géant était censé couler les navires selon les légendes nordiques ?",
    a: "Le Kraken",
    hint: "Il a plein de tentacules...",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Comment appelle-t-on le document officiel donnant le droit à un corsaire d'attaquer des navires ennemis ?",
    a: "Les lettres de marque",
    hint: "Un document royal ou d'État...",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Quelle mer était surnommée 'la mer des Caraïbes' et terrain de jeu favori des pirates du XVIIe siècle ?",
    a: "La mer des Antilles (mer des Caraïbes)",
    hint: "Pirates des... ?",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Comment appelle-t-on l'action de se balancer d'un navire à l'autre avec une corde ?",
    a: "Se balancer / prendre un cordage en liane",
    hint: "Comme Tarzan, mais en mer",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Quel est le nom de la punition consistant à traîner un homme sous la quille du navire ?",
    a: "La quillée (ou passage sous la quille)",
    hint: "Ça passe sous le bateau...",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Comment s'appelait la légendaire cité submergée pleine d'or selon les explorateurs espagnols ?",
    a: "El Dorado",
    hint: "La cité d'or...",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Qu'est-ce qu'un « boucanier » à l'origine ?",
    a: "Un chasseur/fumeur de viande dans les Caraïbes",
    hint: "Ils fumaient de la viande sur des grils appelés boucans",
    penalty: "Bois 1 seconde !"
  },
  // --- Pirates célèbres ---
  {
    q: "Quelles sont les deux femmes pirates les plus célèbres qui naviguaient avec Calico Jack ?",
    a: "Anne Bonny et Mary Read",
    hint: "Elles se déguisaient en hommes sur le même navire",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Quel surnom portait le pirate Jack Rackham, connu pour ses vêtements colorés ?",
    a: "Calico Jack",
    hint: "Son surnom vient du tissu de ses vêtements...",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Quel célèbre pirate avait pour habitude d'allumer des mèches dans sa barbe pour terroriser ses ennemis ?",
    a: "Barbe-Noire (Edward Teach)",
    hint: "Barbe-Noire",
    penalty: "Bois 1 seconde !"
  },
  // --- Pirates réels × One Piece ---
  {
    q: "Quel pirate réel a inspiré le personnage de Barbe Noire (Marshall D. Teach) dans One Piece ?",
    a: "Edward Teach (Barbe-Noire)",
    hint: "Même nom de famille... Teach",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Quel pirate réel a inspiré le personnage de Jewelry Bonney dans One Piece ?",
    a: "Anne Bonny",
    hint: "Bonney... Bonny... une femme pirate célèbre",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Quel pirate réel a inspiré le personnage d'Eustass Kid dans One Piece ?",
    a: "William Kidd (Captain Kidd)",
    hint: "Kid... Kidd... un capitaine célèbre",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Quel pirate réel a inspiré le nom de Bartholomew Kuma dans One Piece ?",
    a: "Bartholomew Roberts (Black Bart)",
    hint: "Le plus grand pirate de l'âge d'or... Bartholomew",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Quel pirate réel a inspiré le personnage de X Drake dans One Piece ?",
    a: "Francis Drake",
    hint: "Sir... un corsaire anglais qui a fait le tour du monde",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Quel pirate réel a inspiré le personnage de Basil Hawkins dans One Piece ?",
    a: "John Hawkins",
    hint: "Un navigateur et marchand anglais du XVIe siècle",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Quel corsaire réel a inspiré le personnage de Roronoa Zoro dans One Piece ?",
    a: "François l'Olonnais (pirate cruel des Caraïbes)",
    hint: "Zoro... l'Olonnais... et un autre célèbre escrimeur masqué",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Quel pirate réel a inspiré le personnage de Scratchmen Apoo dans One Piece ?",
    a: "Chui A-poo (pirate chinois du XIXe siècle)",
    hint: "Un pirate chinois... Apoo",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Quel pirate réel a inspiré le personnage de Capone Bege dans One Piece ?",
    a: "Al Capone (gangster) et William Le Sauvage",
    hint: "Un célèbre gangster de Chicago...",
    penalty: "Bois 1 seconde !"
  },
  {
    q: "Quel pirate réel a inspiré le personnage d'Alvida dans One Piece ?",
    a: "Awilda (femme pirate scandinave légendaire)",
    hint: "Alvida... Awilda... une femme pirate du Nord",
    penalty: "Bois 1 seconde !"
  },
];

export default questions;
