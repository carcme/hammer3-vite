import React from "react";
import { getAssetURL } from "../lib/image-util";
import { FaGamepad, FaEuroSign } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Temp = ({
  id,
  title,
  plot,
  image,
  srcset,
  players,
  difficulty,
  cost,
  slug,
}) => {
  const imageFile = getAssetURL(image);

  return <div></div>;
};

export default Temp;
