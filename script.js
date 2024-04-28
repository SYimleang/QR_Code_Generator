let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

const generateQR = () => {
  if (qrText.value.length > 0) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    imgBox.classList.add("showImg");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
        qrText.classList.remove("error");
    }, 1000);
  }
};
