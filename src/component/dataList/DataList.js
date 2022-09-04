import styled from "styled-components";
import {RiDeleteBin5Fill} from "react-icons/ri";
import {GiAutoRepair} from "react-icons/gi";
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

function DataList() {

  const [selectedList, setSelectedList] = useState([]);
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

  return (
    <Table>
      <TableHeader>
        <tr>
          <th><input type="checkbox" onClick={e => handleSelectAll(e)} /></th>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>action</th>
        </tr>
      </TableHeader>
      <TableBody>
       <Row>
         <td>
           <input
             type="checkbox"
             onClick={e => handleSelect(e, 1)}
             checked={selectedList.includes(1)}
           />
         </td>
         <td>1</td>
         <td>skull</td>
         <td>example@gmail.com</td>
         <td>
           <button>
             <RiDeleteBin5Fill />
           </button>
           <button>
             <GiAutoRepair />
           </button>
         </td>
       </Row>

        <Row>
          <td>
            <input
              type="checkbox"
              onClick={e => handleSelect(e, 2)}
              checked={selectedList.includes(2)}
            />
          </td>
          <td>1</td>
          <td>skull</td>
          <td>example@gmail.com</td>
          <td>
            <button>
              <RiDeleteBin5Fill />
            </button>
            <button>
              <GiAutoRepair />
            </button>
          </td>
        </Row>
      </TableBody>
    </Table>
  );
}

export default DataList;