import React, { FunctionComponent } from "react";
import { FilterSelect, FilterOption } from "./style";

export interface FilterDropdownProps {
  options: string[];
  onOptionSelect: (optionValue: string) => void;
  dataTest: string;
}

const FilterDropdown: FunctionComponent<FilterDropdownProps> = ({ options, onOptionSelect, dataTest }) => {

  return (
      <FilterSelect
        data-test={`select:filter-dropdown:${dataTest}`}
        onChange={(e) => onOptionSelect(e.target.value)}
      >
        {
          options?.map((option: string) => (
            <FilterOption data-test={`option:filter-dropdown:${option}`} key={ option }>
              { option }
            </FilterOption>
          ))
        }
        
      </FilterSelect>
  )
}

export default FilterDropdown;