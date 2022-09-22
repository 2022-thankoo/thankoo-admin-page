import CommonModalBox from "../CommonModal";

function QrCodeModal({qrUrls}) {

  return (
    <CommonModalBox>
      {qrUrls && qrUrls.map(({link}) => <img src={link} alt="coupon qr image" key={link} />)}
    </CommonModalBox>
  );
}

export default QrCodeModal;