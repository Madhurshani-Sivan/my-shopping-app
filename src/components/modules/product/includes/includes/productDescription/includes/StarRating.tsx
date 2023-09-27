import { FC } from "react";
import { StarRatingProps } from "../../../../../../../types/props";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import styles from "./StarRating.module.css";

const StarRating: FC<StarRatingProps> = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<StarFilled key={i} className={styles.star} />);
    } else {
      stars.push(<StarOutlined key={i} className={styles.star} />);
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;
