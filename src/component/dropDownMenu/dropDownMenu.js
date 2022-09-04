import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {useState} from "react";

import * as dls from "../dataList/DataListStyle";

function DropDownMenu({menuList, selectedData}) {

  const [showDropDown, setShowDropDown] = useState(false);

  const handleShowDropDown = () => {
    setShowDropDown(!showDropDown);
  }

  return (
    <>
      {!showDropDown
        ? <IoIosArrowUp onClick={handleShowDropDown}/>
        : <>
          <IoIosArrowDown onClick={handleShowDropDown}/>
          <dls.DropDownWrapper>
            {menuList.map(({value, handleClick}) =>
              <button
                key={value}
                type='button'
                onClick={() => handleClick(selectedData)}
              >{value}</button>
            )}
          </dls.DropDownWrapper>
          </>
        }
    </>
  );
}

export default DropDownMenu;