const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

//Tambahkan event listener pada setiap tombol.
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    //Untuk mengecek apakah output sudah berisi angka atau tidak.
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    //Output dihapus 1 karakter.
    output = output.toString().slice(0, -1);
  } else {
    //Menambahkan output.
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

//Menampilkan output.
buttons.forEach((button) => {
  //Ngambil nilai dari tombol.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});