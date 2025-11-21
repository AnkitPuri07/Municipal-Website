// src/data/visitData.js
import visit1 from "../assets/visit1.jpg";
import visit2 from "../assets/visit2.jpg";
import visit3 from "../assets/visit3.jpg";
import visit4 from "../assets/visit4.jpg";
import visit5 from "../assets/visit5.jpg";
import visit6 from "../assets/visit6.jpg";

const visitData = [
  {
    id: 1,
    title: "Sunkoshi Riverside",
    description: "A peaceful riverside with breathtaking sunrise and sunset views.",
    location: "Sunkoshi, Dudhauli",
    image: visit5,
    details: {
      route: "Accessible via Sunkoshi Road, about 30 mins from Dudhauli center",
      speciality: "Ideal for morning walks, photography, and riverside picnics"
    }
  },
  {
    id: 2,
    title: "Green Hills",
    description: "Rolling hills covered in lush greenery, perfect for hiking.",
    location: "Hillside, Dudhauli",
    image: visit1,
    details: {
      route: "Take the hillside trail from Dudhauli main road, approx. 45 mins hike",
      speciality: "Hiking, birdwatching, and panoramic green views"
    }
  },
  {
    id: 3,
    title: "Historical Museum",
    description: "Museum showcasing rich culture and heritage with pictures that are centuries old.",
    location: "Main Bazaar, Dudhauli",
    image: visit4,
    details: {
      route: "Located in Main Bazaar, easily accessible by foot or local transport",
      speciality: "Traditional dresses, traditional architecture, and historical paintings"
    }
  },
  {
    id: 4,
    title: "Dudhauli Bazaar",
    description: "The vibrant heart of the city with local shops and eateries.",
    location: "Downtown Dudhauli",
    image: visit6,
    details: {
      route: "Central Dudhauli, reachable by any public or private transport",
      speciality: "Shopping local crafts, tasting local food, lively market atmosphere"
    }
  },
  {
    id: 5,
    title: "Peace Garden",
    description: "A serene park filled with flowers, trees, and calm vibes.",
    location: "Ward No. 5, Dudhauli",
    image: visit3,
    details: {
      route: "Follow Ward No. 5 road, about 15 mins from city center",
      speciality: "Meditation, relaxation, family outings, and seasonal flower displays"
    }
  },
  {
    id: 6,
    title: "Mountain Viewpoint",
    description: "A perfect spot to witness panoramic Himalayan landscapes.",
    location: "Upper Dudhauli Hills",
    image: visit2,
    details: {
      route: "Drive or hike up the Upper Dudhauli Hills, around 1 hour from downtown",
      speciality: "Sunrise/sunset views, Himalayan panorama, and trekking base point"
    }
  },
];

export default visitData;
