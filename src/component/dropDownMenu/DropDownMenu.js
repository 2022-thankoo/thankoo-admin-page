import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {useState} from "react";
import PropTypes from 'prop-types';

import * as Dwms from "./DropDownMenuStyle";

function DropDownMenu({menuList, selectedData}) {

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
            {menuList.map(({value, handleClick}) =>
              <button
                key={value}
                type='button'
                onClick={() => {
                  handleClick(selectedData)
                }}
              >{value}</button>
            )}
          </Dwms.DropDownWrapper>
        </>
      }
    </>
  );
}

DropDownMenu.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    handleClick: PropTypes.func
  })),
  selectedData: PropTypes.arrayOf(PropTypes.number)
}

export default DropDownMenu;