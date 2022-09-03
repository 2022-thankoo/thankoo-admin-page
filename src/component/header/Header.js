import PropTypes from 'prop-types';

import {FaSearch} from "react-icons/fa";

import * as hs from './HeaderStyle';

function Header({searchOption}) {

  return (
    <hs.HeaderWrapper>
      <hs.DateBox>
        <hs.DateSelection name="startDate"/>
        ~
        <hs.DateSelection name="endDate"/>
      </hs.DateBox>
      {searchOption.hasStatus &&
        <select name="status">
          {searchOption.statuses.map((status) =>
            <option key={status + ""} value={status + ""}>{status}</option>
          )}
        </select>}
      <hs.SearchButton><FaSearch /></hs.SearchButton>
    </hs.HeaderWrapper>
  )
}

Header.propTypes = {
  hasStatus: PropTypes.bool,
  statuses: PropTypes.arrayOf(PropTypes.string),
}

export default Header;