const newColorElement = document.getElementById("new-color");
const currentColor = document.getElementById("current-color");

const hexValue = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function getRandomHexValue(){
    const randomIndex = Math.floor(
        Math.random() * hexValue.length
    )

    const randomHex = hexValue[randomIndex];
    return randomHex;

}

function getRandomString(stringlnt){
    let hexString = '';
    for(let i = 0; i < stringlnt; i++){
        hexString += getRandomHexValue()
    }
    return hexString
}

newColorElement.addEventListener("click", () =>{
    const randomHexString = '#' + getRandomString(6)

    document.body.style.setProperty('background-color', randomHexString)
    currentColor.textContent = randomHexString
})