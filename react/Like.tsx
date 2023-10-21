import React, { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";

interface Props {
  onClick: () => void;
}

export const Like = ({ onClick }: Props) => {
  const [isLikeClicked, setIsLikeClicked] = useState(false);

  const handleLikeClicked = () => {
    setIsLikeClicked(!isLikeClicked);
    onClick();
  };

  const computedColor = isLikeClicked ? "red" : "";

  return (
    <div>
      <BsFillHeartFill
        onClick={handleLikeClicked}
        size={80}
        color={computedColor}
      />
    </div>
  );
};
