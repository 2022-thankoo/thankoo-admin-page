import styled from "styled-components";
import {RiDeleteBin5Fill} from "react-icons/ri";
import {GiAutoRepair} from "react-icons/gi";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {useState} from "react";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  height: 40px;
  background-color: #C1C1C1;
`;

const Row = styled.tr`
  text-align: center;
  border-bottom: 1px solid black;
`;

const TableBody = styled.tbody`
  height: 100%;
  overflow: scroll;
`;

const DropDownWrapper = styled.div`
  width: 120px;
  height: auto;
  position: absolute;
  right: 50px;
  background-color: #C1C1C1;
`;

function DataList() {

  const [selectedList, setSelectedList] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const idList = [1, 2];

  const handleSelectAll = ({target: {checked}}) => {
    setSelectedList(checked ? idList : []);
  }

  const handleSelect = ({target: {checked}}, id) => {
    if (checked) {
      setSelectedList([...selectedList, id]);
      return;
    }
    setSelectedList(selectedList.filter(selectedId => selectedId !== id));
  }

  const handleShowDropDown = () => {
    setShowDropDown(!showDropDown);
  }

  const handleDeleteSelected = () => {
    console.log(selectedList);
  }

  return (
    <Table>
      <TableHeader>
        <tr>
          <th><input type="checkbox" onChange={e => handleSelectAll(e)}/></th>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>
            action
            {!showDropDown
              ? <IoIosArrowUp onClick={handleShowDropDown}/>
              : <>
                <IoIosArrowDown onClick={handleShowDropDown}/>
                <DropDownWrapper>
                  <button
                    type='button'
                    onClick={handleDeleteSelected}
                  >delete selected</button>
                </DropDownWrapper>
              </>
            }
          </th>
        </tr>
      </TableHeader>
      <TableBody>
        <Row>
          <td>
            <input
              type="checkbox"
              onChange={e => handleSelect(e, 1)}
              checked={selectedList.includes(1)}
            />
          </td>
          <td>1</td>
          <td>skull</td>
          <td>example@gmail.com</td>
          <td>
            <button>
              <RiDeleteBin5Fill/>
            </button>
            <button>
              <GiAutoRepair/>
            </button>
          </td>
        </Row>

        <Row>
          <td>
            <input
              type="checkbox"
              onChange={e => handleSelect(e, 2)}
              checked={selectedList.includes(2)}
            />
          </td>
          <td>1</td>
          <td>skull</td>
          <td>example@gmail.com</td>
          <td>
            <button>
              <RiDeleteBin5Fill/>
            </button>
            <button>
              <GiAutoRepair/>
            </button>
          </td>
        </Row>
      </TableBody>
    </Table>
  );
}

export default DataList;