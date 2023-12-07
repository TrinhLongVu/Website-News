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

const categoryList = [
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

export default categoryList;
