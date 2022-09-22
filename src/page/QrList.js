import {useLocation} from "react-router-dom";
import styled, {css} from "styled-components";
import {useState} from "react";
import {copyImageToClipboard} from "copy-image-clipboard";

const ImageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const QrImage = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 20px;
  margin-bottom: 20px;
  ${props => props.clicked && css`
    border: 5px solid gray;
  `}
`;

function QrList() {

  const location = useLocation();
  const qrCodes = location.state.qrCodes;
  const [clickedQr, setClickedQr] = useState(qrCodes
    .map(({link}) => ({link, clicked: false})))

  console.log(clickedQr);
  const handleCLickToCopy = async (link) => {
    setClickedQr(clickedQr.map(qr => {
      if (qr.link !== link) {
        return {link: qr.link, clicked: false};
      }
      return {link: qr.link, clicked: true};
    }));

    await copyImageToClipboard(link);
  }

  return (
   <ImageBox>
     {clickedQr && clickedQr.map(({link, clicked}) =>
       <QrImage
         key={link}
         src={link}
         alt="coupon qr code"
         clicked={clicked}
         onClick={() => handleCLickToCopy(link)}
       />)}
   </ImageBox>
  );
}

export default QrList;