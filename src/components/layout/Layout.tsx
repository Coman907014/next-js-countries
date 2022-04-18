import React, { FunctionComponent } from "react"
import Header from "../header/Header";
import { ChildrenWrapper, LayoutWrapper  } from "./style";


interface LayoutProps {
  children: any;
  toggleTheme: () => void
}

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  toggleTheme
}) => {
  return (
    <LayoutWrapper>
      <Header leftSideText={ 'Where in the World ?' } rightSideText={ 'Change Theme' } onRightSideClick={ toggleTheme }/>
      <ChildrenWrapper>
        { children }
      </ChildrenWrapper>
    </LayoutWrapper>
  )
}

export default Layout