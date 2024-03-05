class Kalkulator {
  constructor(display, tombol) {
    this.display = display;
    this.tombol = tombol;
    this.karakterKhusus = ["%", "*", "/", "-", "+", "="];
    this.output = "";
    this.tombol.forEach(tombol => tombol.addEventListener('click', (e) => this.kalkulasi(e.target.dataset.value)));
  }

  // Metode untuk melakukan kalkulasi
  kalkulasi(btnValue) {
    this.display.focus();
    if (btnValue === "=" && this.output !== "") this.output = eval(this.output.replace("%", "/100"));
    else if (btnValue === "AC") this.output = "";
    else if (btnValue === "DEL") this.output = this.output.toString().slice(0, -1);
    else {
      if (this.output === "" && this.karakterKhusus.includes(btnValue)) return;
      this.output += btnValue;
    }
    this.display.value = this.output;
  }
}

// Buat instance dari kelas Kalkulator
const kalkulator = new Kalkulator(document.querySelector(".display"), document.querySelectorAll("button"));￼Enter
