import React from "react";

import bullsye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image } from "@chakra-ui/react";

interface EmojisProps {
  rating: number;
}

const Emojis = ({ rating }: EmojisProps) => {
  const emojiMap: {
    [key: number]: { src: string; alt: string; boxSize: string };
  } = {
    3: { src: meh, alt: "meh", boxSize: "25x" },
    4: { src: thumbsUp, alt: "thumbs up", boxSize: "25px" },
    5: { src: bullsye, alt: "exceptional", boxSize: "35" },
  };
  if (rating < 3) return null;
  return <Image {...emojiMap[rating]} boxSize={emojiMap[rating].boxSize} />;
};

export default Emojis;
