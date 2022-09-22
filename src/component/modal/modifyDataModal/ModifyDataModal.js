import PropTypes from 'prop-types';
import {useState} from "react";
import equal from 'deep-equal';

import CommonModalBox from "../CommonModal";
import * as Mdms from './ModifyDataModalStyle';
import {InputNewData} from "./ModifyDataModalStyle";

function ModifyDataModal({target}) {

  const [modifiedData, setModifiedData] = useState(Object.assign(target));
  const [targetData] = useState(Object.entries(target));

  const handleModifyData = ({target: {value, name}}) => {
    const newData = value === '' ? target[name] : value;
    setModifiedData(prevState => ({
      ...prevState,
      [name]: newData
    }));
  };

  const handleSubmitModify = () => {
    if (equal(target, modifiedData)) {
      return;
    }
    console.log(modifiedData);
  }

  return (
    <>
      <CommonModalBox>
        <Mdms.ModifyDataModalWrapper>
          {targetData.map(data => {
              const targetName = data[0];
              const targetData = data[1] + "";
              return (
                <Mdms.TargetWrapper key={targetName}>
                  <label htmlFor={targetName}>{targetName}</label>
                  <InputNewData
                    type="text"
                    placeholder={targetData}
                    name={targetName}
                    onChange={handleModifyData}
                  />
                </Mdms.TargetWrapper>
              );
            }
          )}
          <Mdms.SubmitModifyButton type='button' onClick={handleSubmitModify}>
            submit
          </Mdms.SubmitModifyButton>
        </Mdms.ModifyDataModalWrapper>
      </CommonModalBox>
    </>
  )
}

ModifyDataModal.propTypes = {
  target: PropTypes.object,
}

export default ModifyDataModal;