import React, { FunctionComponent, ReactElement } from "react";
import {
  CardBody,
  CardBodyElement,
  CardImage,
  CardTitle,
  CardWrapper,
  CardBodyElementTitle,
  CardBodyElementValue } from "./style";

export interface CardProps {
  image?: string;
  title?: string;
  body: { [key: string]: string | number | any[]; };
  style?: {
    width?: string;
    shadow?: boolean
  }
  cardKey?: string;
  onClick?: (countryName: string ) => void;
}

const Card: FunctionComponent<CardProps> = ({ image, title, body, onClick, style, cardKey }) => {

  const dataTestTitle: string | undefined = title?.split(' ').join('-');

  return (
    <CardWrapper
      data-test={`wrapper:card${dataTestTitle ? `:${dataTestTitle}` : ''}`}
      onClick={ () => onClick && cardKey && onClick(cardKey) }
      width={ style?.width }
      shadow={ style?.shadow }>
      { image &&
        <CardImage src={ image } data-test={`image:card:${dataTestTitle ? `:${dataTestTitle}` : ''}`} alt={ title }/>
      }
      {
        title &&
        <CardTitle data-test={`text:card:${dataTestTitle ? `:${dataTestTitle}` : ''}`} >
          { title }
        </CardTitle>
      }
      <CardBody>
        {
          Object.entries(body).map(([objTitle, objValue]) => {
            return (
              <CardBodyElement data-test={`wrapper:card-list:${objTitle}`} key={objTitle}>
                <CardBodyElementTitle data-test={`text:card-list:title`}>
                  { objTitle.split('-').join(' ') }:
                </CardBodyElementTitle>
                <CardBodyElementValue data-test={`text:card-list:value`}>
                  { Array.isArray(objValue) ?
                    objValue.map(value => value) :
                    objValue
                  }
                </CardBodyElementValue>
              </CardBodyElement>
            )
          })
        }
      </CardBody>
    </CardWrapper>
  )
}

export default Card;