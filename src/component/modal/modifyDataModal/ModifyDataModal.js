import PropTypes from 'prop-types';
import {useCallback, useState} from "react";
import equal from 'deep-equal';

import CommonModalBox from "../CommonModal";
import * as mdms from './ModifyDataModalStyle';
import {InputNewData} from "./ModifyDataModalStyle";

function ModifyDataModal({target}) {

  const [modifiedData, setModifiedData] = useState(Object.assign(target));
  const [targetData] = useState(Object.entries(target));

  const handleModifyData = useCallback(({target: {value, name}}) => {
    const newData = value === '' ? target[name] : value;
    setModifiedData(prevState => ({
      ...prevState,
        [name]: newData
    }));
  }, [modifiedData]);

  const handleSubmitModify = () => {
    if (equal(target, modifiedData)) {
      return;
    }
    console.log(modifiedData);
  }

  return (
    <>
      <CommonModalBox>
        <mdms.ModifyDataModalWrapper>
          {targetData.map(data => {
            const targetName = data[0];
            const targetData = data[1] + "";
              return (
                <mdms.TargetWrapper key={targetName}>
                  <label htmlFor={targetName}>{targetName}</label>
                  <InputNewData
                    type="text"
                    placeholder={targetData}
                    name={targetName}
                    onChange={handleModifyData}
                  />
                </mdms.TargetWrapper>
              );
          }
          )}
          <mdms.SubmitModifyButton type='button' onClick={handleSubmitModify}>
            submit
          </mdms.SubmitModifyButton>
        </mdms.ModifyDataModalWrapper>
      </CommonModalBox>
    </>
  )
}

ModifyDataModal.propTypes = {
  target: PropTypes.object,
}

export default ModifyDataModal;