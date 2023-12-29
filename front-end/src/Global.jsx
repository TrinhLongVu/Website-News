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
  {
    icon: faSeedling,
    name: "Environment",
    img: envImg,
    link: "/categories/environment",
  },
  {
    icon: faGears,
    name: "Technology",
    img: techImg,
    link: "/categories/technology",
  },
  {
    icon: faChargingStation,
    name: "Energy",
    img: energyImg,
    link: "/categories/energy",
  },
  {
    icon: faPlaneDeparture,
    name: "Travel",
    img: travelImg,
    link: "/categories/travel",
  },
  { icon: faHamburger, name: "Food", img: foodImg, link: "/categories/food" },
  {
    icon: faHandHoldingMedical,
    name: "Health",
    img: healthImg,
    link: "/categories/health",
  },
  {
    icon: faFlask,
    name: "Science",
    img: scienceImg,
    link: "/categories/science",
  },
  {
    icon: faShirt,
    name: "Fashion",
    img: fashionImg,
    link: "/categories/fashion",
  },
  {
    icon: faCocktail,
    name: "Lifestyle",
    img: lifestyleImg,
    link: "/categories/lifestyle",
  },
  { icon: faUsers, name: "Social", img: socialImg, link: "/categories/social" },
  {
    icon: faUsersRays,
    name: "Culture",
    img: cultureImg,
    link: "/categories/culture",
  },
];

export const calcTime = (postedTime) => {
  const currentDate = new Date();
  const previousDate = new Date(postedTime);

  const timeDifferenceInSeconds = Math.floor(
    (currentDate - previousDate) / 1000
  );

  const secondsInMinute = 60;
  const secondsInHour = 3600;
  const secondsInDay = 86400;
  const secondsInWeek = 604800;
  const secondsInMonth = 2628000; // assuming a month has 30 days

  if (timeDifferenceInSeconds < secondsInMinute) {
    return timeDifferenceInSeconds + " seconds ago";
  } else if (timeDifferenceInSeconds < secondsInHour) {
    const minutes = Math.floor(timeDifferenceInSeconds / secondsInMinute);
    return minutes === 1 ? "1 minute ago" : minutes + " minutes ago";
  } else if (timeDifferenceInSeconds < secondsInDay) {
    const hours = Math.floor(timeDifferenceInSeconds / secondsInHour);
    return hours === 1 ? "1 hour ago" : hours + " hours ago";
  } else if (timeDifferenceInSeconds < secondsInWeek) {
    const days = Math.floor(timeDifferenceInSeconds / secondsInDay);
    return days === 1 ? "1 day ago" : days + " days ago";
  } else if (timeDifferenceInSeconds < secondsInMonth) {
    const weeks = Math.floor(timeDifferenceInSeconds / secondsInWeek);
    return weeks === 1 ? "1 week ago" : weeks + " weeks ago";
  } else {
    const months = Math.floor(timeDifferenceInSeconds / secondsInMonth);
    return months === 1 ? "1 month ago" : months + " months ago";
  }
};
