import PropTypes from 'prop-types';

import {FaSearch} from "react-icons/fa";

import * as hs from './HeaderStyle';
import {HeaderWrapper, ListSelection} from "./HeaderStyle";

function Header({searchOption}) {

  return (
    <hs.Header>
      <HeaderWrapper>
        <hs.DateBox>
          <hs.DateSelection name="startDate"/>
          ~
          <hs.DateSelection name="endDate"/>
        </hs.DateBox>
        {searchOption.hasStatus &&
          <ListSelection name="status">
            {searchOption.statuses.map((status) =>
              <option key={status + ""} value={status + ""}>
                {status}
              </option>
            )}
          </ListSelection>}
        <hs.SearchButton><FaSearch /></hs.SearchButton>
      </HeaderWrapper>
    </hs.Header>
  )
}

Header.propTypes = {
  hasStatus: PropTypes.bool,
  statuses: PropTypes.arrayOf(PropTypes.string),
}

export default Header;