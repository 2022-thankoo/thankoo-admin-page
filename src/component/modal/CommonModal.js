import PropTypes from 'prop-types';
import {AiOutlineClose} from "react-icons/ai";

import Portal from "./Portal";
import * as cms from "./CommonModalStyle";
import {CloseModalButton} from "./CommonModalStyle";
import {useRecoilState} from "recoil";
import modalOnOff from "../../globalState/modalOnOff";

const CommonModalBox = ({children}) => {

  const [isModalOpen, setIsModalOpen] = useRecoilState(modalOnOff);

  const handleModalOnOff = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <Portal>
      <cms.ModalOverlay>
        <cms.ModalBox>
          <CloseModalButton type='button' onClick={handleModalOnOff}>
            <AiOutlineClose />
          </CloseModalButton>
          {children}
        </cms.ModalBox>
      </cms.ModalOverlay>
    </Portal>
  );
}

CommonModalBox.propTypes = {
  children: PropTypes.element.isRequired,
}

export default CommonModalBox;