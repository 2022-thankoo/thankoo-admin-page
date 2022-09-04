import {RiDeleteBin5Fill} from "react-icons/ri";
import {GiAutoRepair} from "react-icons/gi";
import {useCallback, useState} from "react";

import * as dls from './DataListStyle';
import DropDownMenu from "../dropDownMenu/dropDownMenu";

function DataList() {

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

  const handleSelectAll = useCallback(({target: {checked}}) => {
    setSelectedIds(checked ? idList : []);
  }, [idList]);

  const handleSelect = useCallback(({target: {checked}}, id) => {
    if (checked) {
      setSelectedIds([...selectedIds, id]);
      return;
    }
    setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
  }, [selectedIds]);

  return (
    <dls.Table>
      <dls.TableHeader>
        <tr>
          <th><input type="checkbox" onChange={e => handleSelectAll(e)}/></th>
          {tableHeaders.map(tableHeader => <th key={tableHeader}>{tableHeader}</th>)}
          <th>
            action
            <DropDownMenu
              menuList={dropDownList}
              selectedData={selectedIds}
            />
          </th>
        </tr>
      </dls.TableHeader>
      <dls.TableBody>
        {tableRows.map(({id, ...data}) => {
            return (<dls.Row key={id}>
                <td>
                  <input
                    type="checkbox"
                    onChange={e => handleSelect(e, id)}
                    checked={selectedIds.includes(id)}
                  />
                </td>
                {Object.values({id, ...data}).map(d => <td key={d}>{d}</td>)}
                <td>
                  <button>
                    <RiDeleteBin5Fill/>
                  </button>
                  <button>
                    <GiAutoRepair/>
                  </button>
                </td>
              </dls.Row>
            )
          }
        )}
      </dls.TableBody>
    </dls.Table>
  );
}

export default DataList;