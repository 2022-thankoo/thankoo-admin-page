import PropTypes from 'prop-types';
import {FaSearch} from "react-icons/fa";

import * as hs from './HeaderStyle';
import OptionList from "../optionList/OptionList";
import {useCallback, useState} from "react";

function Header({searchOption}) {

  const [searchOptions, setSearchOptions] = useState({
    startDate: '',
    endDate: '',
    status: '',
  });

  const handleChange = useCallback((name, {target: {value}}) => {
    setSearchOptions({...searchOptions, [name]: value})
  }, [searchOptions]);

  const handleSearch = () => {
    console.log(searchOptions);
  }

  return (
    <hs.Header>
      <hs.HeaderWrapper>
        <hs.DateBox>
          <hs.DateSelection onChange={(e) => handleChange("startDate", e)}/>
          ~
          <hs.DateSelection onChange={(e) => handleChange("endDate", e)}/>
        </hs.DateBox>
        {searchOption.hasStatus
          && <OptionList
            options={searchOption.statuses}
            handleChange={(e) => handleChange("status", e)}
          />}
        <hs.SearchButton onClick={handleSearch}><FaSearch/></hs.SearchButton>
      </hs.HeaderWrapper>
    </hs.Header>
  )
}

Header.propTypes = {
  hasStatus: PropTypes.bool,
  statuses: PropTypes.arrayOf(PropTypes.string),
}

export default Header;