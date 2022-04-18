import React, { FunctionComponent } from "react";
import { CardWrapper } from "./style";

export interface CardProps {
  image: string;
  title: string;
  body: { [key: string]: string | number; }
}

const Card: FunctionComponent<CardProps> = ({ image, title, body }) => {
  return (
    <CardWrapper>
      Some Card
    </CardWrapper>
  )
}

export default Card;