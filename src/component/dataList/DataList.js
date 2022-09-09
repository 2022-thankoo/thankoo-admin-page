import {RiDeleteBin5Fill} from "react-icons/ri";
import {GiAutoRepair} from "react-icons/gi";
import {useState} from "react";

import * as Dls from './DataListStyle';
import DropDownMenu from "../dropDownMenu/DropDownMenu";
import ModifyDataModal from "../modal/modifyDataModal/ModifyDataModal";
import {useRecoilState} from "recoil";
import modalOnOff from "../../globalState/modalOnOff";

function DataList() {

  const [openModifyDataModal, setOpenModifyDataModal] = useRecoilState(modalOnOff);

  const [modifyTarget, setModifyTarget] = useState({});
  const [selectedIds, setSelectedIds] = useState([]);
  const tableHeaders = ["id", "name", "email"];
  const [dropDownList] = useState([{
    value: 'delete selected',
    handleClick: (selectedData) => console.log(selectedData)
  }]);

  // mock data
  //////////////////////////////
  const tableRows = [
    {id: 1, name: 'skull', email: 'example@gmail.com'},
    {id: 2, name: 'skull', email: 'example@gmail.com'},
  ];
  const idList = [1, 2];
  /////////////////////////////

  const handleSelectAll = (checked) => {
    setSelectedIds(checked ? idList : []);
  };

  const handleSelect = (checked, id) => {
    if (checked) {
      setSelectedIds([...selectedIds, id]);
      return;
    }
    setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
  };

  const handleDeleteRow = (id) => {
    // eslint-disable-next-line no-restricted-globals
    const confirmDelete = confirm(`정말 삭제하겠습니까?`);
    console.log(confirmDelete, id);
  }

  const handleModifyDataButton = (targetId) => {
    setOpenModifyDataModal(!openModifyDataModal);
    setModifyTarget(tableRows.filter(({id}) => id === targetId)[0]);
  };

  return (
    <>
      <Dls.Table>
        <Dls.TableHeader>
          <tr>
            <th><input type="checkbox" onChange={e => {handleSelectAll(e.target.checked)}}/></th>
            {tableHeaders.map(tableHeader => <th key={tableHeader}>{tableHeader}</th>)}
            <th>
              action
              <DropDownMenu
                menuList={dropDownList}
                selectedData={selectedIds}
              />
            </th>
          </tr>
        </Dls.TableHeader>
        <Dls.TableBody>
          {tableRows.map(({id, ...data}) => {
              return (<Dls.Row key={id}>
                  <td>
                    <input
                      type="checkbox"
                      onChange={e => {handleSelect(e.target.checked, id)}}
                      checked={selectedIds.includes(id)}
                    />
                  </td>
                  {Object.values({id, ...data}).map(d => <td key={d}>{d}</td>)}
                  <td>
                    <button onClick={() => handleDeleteRow(id)}>
                      <RiDeleteBin5Fill/>
                    </button>
                    <button onClick={() => {handleModifyDataButton(id)}}>
                      <GiAutoRepair/>
                    </button>
                  </td>
                </Dls.Row>
              )
            }
          )}
        </Dls.TableBody>
      </Dls.Table>
      {openModifyDataModal && <ModifyDataModal target={modifyTarget}/>}
    </>
  );
}

export default DataList;