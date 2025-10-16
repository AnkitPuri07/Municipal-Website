// src/data/aboutData.js
import History from "../assets/history.jpg";
import CurrentStat from "../assets/statistics.jpg";
import constructionProject from "../assets/construction.png";

const aboutData = [
  {
    id: 1,
    title: "Our Proud Heritage",
    description:
      "Dudhauli Municipality stands on centuries of culture and tradition. From its historical landmarks to the stories of resilience passed down through generations, the roots of this community reflect unity, pride, and timeless heritage that continue to inspire its people today.",
    image: History,
  },
  {
    id: 2,
    title: "A Thriving Present",
    description:
      "Today, Dudhauli is more than just a municipality—it’s a growing hub of opportunity. With modern infrastructure, upgraded healthcare and education, digital access, and improved public services, the region is steadily advancing toward becoming a model of balanced urban and rural development.",
    image: CurrentStat,
  },
  {
    id: 3,
    title: "Shaping Tomorrow",
    description:
      "Large-scale construction projects and sustainable initiatives are laying the foundation for the future. From road expansions and smart housing to eco-friendly facilities, Dudhauli is investing in progress while safeguarding the environment and ensuring long-term prosperity for generations ahead.",
    image: constructionProject,
  },
];

export default aboutData;
