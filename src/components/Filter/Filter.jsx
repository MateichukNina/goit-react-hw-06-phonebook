
import {FilterInput, Input} from './Filter.styled';

export const Filter = ({ filter, newContact }) => {
  return (
    <FilterInput>
         <h2>Contacts</h2>
        <p>Find contacts by name</p>
      <Input
       
        placeholder="Search..."
        type="text"
        name="filter"
        value={filter}
        onChange={newContact}
      />
    </FilterInput>
  );
};

