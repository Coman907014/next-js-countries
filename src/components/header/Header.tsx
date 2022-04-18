import React, { FunctionComponent } from "react";
import Moon from "../../theme/icons/Moon";
import { HeaderWrapper, HeaderElement, HeaderLogo } from './style';

interface HeaderProps {
  leftSideText: string;
  rightSideText: string;
  onRightSideClick: () => void;
}

const Header: FunctionComponent<HeaderProps> = ({
  leftSideText,
  rightSideText,
  onRightSideClick
}) => {
  return (
    <HeaderWrapper
      aria-labelledby="main menu"
      data-test="wrapper:header"
    >
      <HeaderElement
        contentAlign="flex-start"
        data-test={`element:header:${leftSideText}`}
        aria-labelledby={`Header element ${leftSideText}`}
        onClick={() => window.location.href = '/'}
      >
        { leftSideText }
      </HeaderElement>


      <HeaderElement
        contentAlign="flex-end"
        data-test={`element:header:${rightSideText}`}
        aria-labelledby={`Header element ${rightSideText}`}
        onClick={ onRightSideClick }
      >
        <Moon />
        { rightSideText }
      </HeaderElement>
  
    </HeaderWrapper>
  )
};

export default Header