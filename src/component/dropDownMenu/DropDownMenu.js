import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {useState} from "react";
import PropTypes from 'prop-types';

import * as Dwms from "./DropDownMenuStyle";

function DropDownMenu({menuList, handleSelectData}) {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleShowDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <>
      {!showDropDown
        ? <IoIosArrowUp onClick={handleShowDropDown}/>
        : <>
          <IoIosArrowDown onClick={handleShowDropDown}/>
          <Dwms.DropDownWrapper>
            {menuList.map(menu =>
              <button
                key={menu}
                type='button'
                onClick={() => {
                  handleSelectData();
                }}
              >{menu}</button>
            )}
          </Dwms.DropDownWrapper>
        </>
      }
    </>
  );
}

DropDownMenu.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.string),
  handleSelectData: PropTypes.func,
}

export default DropDownMenu;
