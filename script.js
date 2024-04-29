let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

// QR Generate funcction using "qrserver" api
const generateQR = () => {
  if (qrText.value.length > 0) {
    let qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;

    // Handle API url error
    fetch(qrUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to generate QR code");
        }
        return response.blob();
      })
      .then((blob) => {
        qrImg.src = URL.createObjectURL(blob);
        imgBox.classList.add("showImg");
      })
      .catch((error) =>
        console.error("QR code generate error: ", error.message)
      );
  }
  // Input empty handling
  else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
};

// Debounce function
const debounce = (func, delay) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(func, delay);
};

qrText.addEventListener("input", () => debounce(generateQR, 500));
