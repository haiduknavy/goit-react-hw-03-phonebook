import { FilterInput, FilterLabel } from './Filter.styled';

const Filter = ({ findContact }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput onChange={findContact} name="filter" type="text" />
    </FilterLabel>
  );
};

export default Filter;
