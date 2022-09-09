import PropTypes from 'prop-types';
import {FaSearch} from "react-icons/fa";

import * as Hs from './HeaderStyle';
import OptionList from "../optionList/OptionList";
import {useState} from "react";

function Header({searchOption}) {

  const [searchOptions, setSearchOptions] = useState({
    startDate: '',
    endDate: '',
    status: '',
  });

  const handleChange = (name, value) => {
    setSearchOptions({...searchOptions, [name]: value})
  };

  const handleSearch = () => {
    console.log(searchOptions);
  }

  return (
    <Hs.Header>
      <Hs.HeaderWrapper>
        <Hs.DateBox>
          <Hs.DateSelection onChange={(e) => {
            handleChange("startDate", e.target.value)
          }}/>
          ~
          <Hs.DateSelection onChange={(e) => {
            handleChange("endDate", e.target.value)
          }}/>
        </Hs.DateBox>
        {searchOption.hasStatus
          && <OptionList
            options={searchOption.statuses}
            handleChange={(e) => {
              handleChange("status", e)
            }}
          />}
        <Hs.SearchButton onClick={handleSearch}><FaSearch/></Hs.SearchButton>
      </Hs.HeaderWrapper>
    </Hs.Header>
  )
}

Header.propTypes = {
  hasStatus: PropTypes.bool,
  statuses: PropTypes.arrayOf(PropTypes.string),
}

export default Header;