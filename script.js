const wrapper = document.querySelector(".wrapper"),
input = wrapper.querySelector("#input"),
button = wrapper.querySelector("button"),
qrImg = wrapper.querySelector("#qrImg");
let preValue;

button.addEventListener("click", () => {
    let qrValue = input.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    button.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        button.innerText = "Generate QR Code";
    });
});

input.addEventListener("keyup", () => {
    if(!input.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});