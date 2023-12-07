import envImg from "./assets/env-tag.jpeg";
import techImg from "./assets/tech-tag.jpeg";
import energyImg from "./assets/energy-tag.jpeg";
import travelImg from "./assets/travel-tag.jpeg";
import foodImg from "./assets/food-tag.jpeg";
import healthImg from "./assets/health-tag.jpeg";
import scienceImg from "./assets/science-tag.jpeg";
import fashionImg from "./assets/fashion-tag.jpeg";
import lifestyleImg from "./assets/lifestyle-tag.jpeg";
import socialImg from "./assets/social-tag.jpeg";
import cultureImg from "./assets/culture-tag.jpeg";

import {
  faSeedling,
  faGears,
  faChargingStation,
  faPlaneDeparture,
  faHamburger,
  faHandHoldingMedical,
  faFlask,
  faShirt,
  faUsers,
  faCocktail,
  faUsersRays,
} from "@fortawesome/free-solid-svg-icons";

export const categoryList = [
  { icon: faSeedling, name: "Environment", img: envImg, link: "" },
  { icon: faGears, name: "Technology", img: techImg, link: "" },
  { icon: faChargingStation, name: "Energy", img: energyImg, link: "" },
  { icon: faPlaneDeparture, name: "Travel", img: travelImg, link: "" },
  { icon: faHamburger, name: "Food", img: foodImg, link: "" },
  { icon: faHandHoldingMedical, name: "Health", img: healthImg, link: "" },
  { icon: faFlask, name: "Science", img: scienceImg, link: "" },
  { icon: faShirt, name: "Fashion", img: fashionImg, link: "" },
  { icon: faCocktail, name: "Lifestyle", img: lifestyleImg, link: "" },
  { icon: faUsers, name: "Social", img: socialImg, link: "" },
  { icon: faUsersRays, name: "Culture", img: cultureImg, link: "" },
];

export const calcTime = (postedTime) => {
  const currentDate = new Date();
  const postDate = new Date(postedTime);

  const timeDifferenceInSeconds = Math.floor((currentDate - postDate) / 1000);

  if (timeDifferenceInSeconds < 60) {
    return `${timeDifferenceInSeconds} seconds ago`;
  } else if (timeDifferenceInSeconds < 3600) {
    const minutes = Math.floor(timeDifferenceInSeconds / 60);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (timeDifferenceInSeconds < 86400) {
    const hours = Math.floor(timeDifferenceInSeconds / 3600);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else {
    const days = Math.floor(timeDifferenceInSeconds / 86400);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }
};
