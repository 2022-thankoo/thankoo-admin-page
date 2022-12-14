import PropTypes from 'prop-types';
import {RiDeleteBin5Fill} from "react-icons/ri";
import {GiAutoRepair} from "react-icons/gi";
import {useState} from "react";

import * as Dls from './DataListStyle';
import DropDownMenu from "../dropDownMenu/DropDownMenu";
import ModifyDataModal from "../modal/modifyDataModal/ModifyDataModal";
import {useRecoilState} from "recoil";
import modalOnOff from "../../globalState/modalOnOff";
import selectedDataId from "../../globalState/selectedDataId";
import {nanoid} from "nanoid";

function DataList({dropDownList, idList, tableHeaders, tableRows, handleSelectData, modifyTargets, handleModify}) {

  const [openModifyDataModal, setOpenModifyDataModal] = useRecoilState(modalOnOff);

  const [modifyTarget, setModifyTarget] = useState({});
  const [selectedIds, setSelectedIds] = useRecoilState(selectedDataId);

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
  }

  const handleModifyDataButton = (targetId) => {
    setOpenModifyDataModal(!openModifyDataModal);
    setModifyTarget(tableRows.filter(({id}) => id === targetId)
      .map(target => ({
        id: target.id,
        ...(modifyTargets
          .map(modifyTarget => ({[modifyTarget]: target[modifyTarget]}))
          .reduce((obj, item) => ({...obj, [item.key]: item.value}))
        ),
      }))[0]);
  };

  return (
    <>
      <Dls.Table>
        <Dls.TableHeader>
          <tr>
            <th><input type="checkbox" onChange={e => {
              handleSelectAll(e.target.checked)
            }}/></th>
            {tableHeaders?.length >= 1 && tableHeaders.map(tableHeader => <th key={tableHeader}>{tableHeader}</th>)}
            <th>
              action
              {dropDownList && <DropDownMenu
                menuList={dropDownList}
                handleSelectData={handleSelectData}
              />}
            </th>
          </tr>
        </Dls.TableHeader>

        <Dls.TableBody>
          {tableRows?.length >= 1 && tableRows.map(({id, ...data}) => {
              return (<Dls.Row key={id}>
                  <td>
                    <input
                      type="checkbox"
                      onChange={e => {
                        handleSelect(e.target.checked, id)
                      }}
                      checked={selectedIds.includes(id)}
                    />
                  </td>
                  {Object.values({id, ...data}).map(d => <td key={nanoid()}>{d}</td>)}
                  <td>
                    <button onClick={() => handleDeleteRow(id)}>
                      <RiDeleteBin5Fill/>
                    </button>
                    <button onClick={() => {
                      handleModifyDataButton(id)
                    }}>
                      <GiAutoRepair/>
                    </button>
                  </td>
                </Dls.Row>
              )
            }
          )}
        </Dls.TableBody>
      </Dls.Table>
      {openModifyDataModal
        && <ModifyDataModal
          target={modifyTarget}
          handleModify={handleModify}
        />
      }
    </>
  );
}

DataList.propTypes = {
  dropDownList: PropTypes.arrayOf(PropTypes.string),
  idList: PropTypes.arrayOf(PropTypes.number),
  tableHeaders: PropTypes.arrayOf(PropTypes.string),
  tableRows: PropTypes.arrayOf(PropTypes.object),
  handleSelectData: PropTypes.func,
  modifyTargets: PropTypes.arrayOf(PropTypes.string),
  handleModify: PropTypes.func,
};

export default DataList;
