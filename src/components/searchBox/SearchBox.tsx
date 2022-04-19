import { FunctionComponent } from "react"
import { SearchBoxWrapper, SearchBoxInput, SearchBoxError } from './style';

export interface SearchBoxProps {
  inputName: string;
  inputPlaceholder: string;
  error: string | null;
  onChange: (newValue: string) => void;
  value: string;
}

const SearchBox: FunctionComponent<SearchBoxProps> = ({
  onChange,
  error,
  inputName,
  inputPlaceholder,
  value }) => {
  return (
    <SearchBoxWrapper>
      <SearchBoxInput
        type="text"
        data-test={`input:search-box:${inputName}`}
        name={ inputName }
        value={ value }
        onChange={ (e) => onChange(e.target.value) }
        placeholder={ inputPlaceholder }
      />
      <SearchBoxError data-test={ `error:search-box:${inputName}` }>
        { error }
      </SearchBoxError>
    </SearchBoxWrapper>
  )
}

export default SearchBox;