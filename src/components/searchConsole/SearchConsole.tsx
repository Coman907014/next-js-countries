import React, { FunctionComponent } from "react";
import FilterDropdown, { FilterDropdownProps } from "../filterDropdown/FilterDropdown";
import SearchBox, { SearchBoxProps } from "../searchBox/SearchBox";
import { SearchConsoleWrapper } from "./style";

interface SearchConsoleProps {
  searchBox: SearchBoxProps;
  filter: FilterDropdownProps;
}

const SearchConsole: FunctionComponent<SearchConsoleProps> = ({ searchBox, filter }) => {
  return (
    <SearchConsoleWrapper>
      <SearchBox {...searchBox}/>
      <FilterDropdown {...filter}/>
    </SearchConsoleWrapper>
    )
}

export default SearchConsole;