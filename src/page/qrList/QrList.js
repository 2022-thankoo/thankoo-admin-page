import {useLocation} from "react-router-dom";
import {useState} from "react";
import {copyImageToClipboard} from "copy-image-clipboard";

import * as qls from './QrListStyle';

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
   <qls.ImageBox>
     {clickedQr && clickedQr.map(({link, clicked}) =>
       <qls.QrImage
         key={link}
         src={link}
         alt="coupon qr code"
         clicked={clicked}
         onClick={() => handleCLickToCopy(link)}
       />)}
   </qls.ImageBox>
  );
}

export default QrList;