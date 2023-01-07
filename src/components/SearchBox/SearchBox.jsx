import { Wrapper } from './SearchBox.styled';

const SearchBox = ({ value, onChange }) => {
  return (
    <Wrapper>
      <p>Input search query</p>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      ></input>
    </Wrapper>
  );
};
export default SearchBox;
