//Kalkulator kalorija
//Treba dobiti preporuceni dnevni unos kalorija na temelju dobi spola i tezine
import { createSignal } from "solid-js";
import "./kalkulator_kalorija.css";


export default function Izracunaj(props){

    const [dob, setDob] = createSignal();
    const [spol, setSpol] = createSignal();   
    const [tezina, setTezina] = createSignal();
    const [visina, setVisina] = createSignal();
    const [BMR, setBMR] = createSignal();


    function formula(){
      if(spol() === "M"){
 let bmr = 10 * + tezina() + 6.25 * visina() - 5 * dob() + 5;
 setBMR(bmr);
      }  else if(spol() === "Z"){
  let bmr = 10 * tezina() + 6.25 * visina() - 5 * dob() - 161;
  setBMR(bmr);
      } else{
        console.log("Unesite ispravne vrijednosti!");
      }
    }

    return(
      <>
        <div className="zaglavlje">
        <h2>Kalkulator preporučenog dnevnog unosa kalorija</h2>
        <p>
U ovoj aplikaciji možete saznati koliko kalorija morate unijeti na dan.<br/>
Preporučen dnevni unos kalorija za prosječnu mušku osobu je 2000cal,<br/>
dok je za prosječnu žensku osobu taj unos nešto manji, otprilike 1500cal.<br/>
Preporučeni dnevni unos kalorija omogučuje nam da održavamo svoju tjelesnu težinu.<br/>
Ako želite povečati svoju tjelesnu težinu, na rezultat dodajte 300-500 kalorija,<br/>
a ako želite smanjiti tjelesnu težinu pokušajte oduzeti 150 kalorija od svakog obroka<br/>
i biti fizički aktivni.
</p>
</div>
<div className="podaci">
        <label>Unesite broj godina:</label>
        <input  placeholder="1-100 godina" min={1} max={100} type="number" value={dob()} onInput={(event) => {
    let provjera = parseInt(event.target.value); 
    if (provjera >= 1 && provjera <= 100) {
      setDob(provjera); 
    } else if (event.target.value === "") {
      setDob(""); 
    } 
  }}
  onBlur={(event) => {
    const provjera = parseInt(event.target.value);
    if (provjera < 101 || provjera > 1) {
      event.target.value = dob() || ""; 
    }
  }}/>
        <label>Unesite spol:</label>
        <input placeholder="M ili Z" type="text" value={spol()}  onInput={(event) => {
    let provjera = event.target.value; 
    if (provjera ==="M" || provjera ==="Z") {
      setSpol(provjera);
    } else {
      event.target.value = "";
      setSpol(""); 
    }
  }}/>
        <label>Unesite težinu:</label>
        <input placeholder="10-220kg"min={10} max={220} type="number" value={tezina()} onInput={(event) => {
    let provjera = parseInt(event.target.value); 
    if (provjera >= 10 && provjera <= 220) {
      setTezina(provjera); 
    } else if (event.target.value === "") {
      setTezina(""); 
    } 
  }}
  onBlur={(event) => {
    const provjera = parseInt(event.target.value);
    if (provjera < 221 || provjera > 9) {
      event.target.value = tezina() || ""; 
    }
  }}/>
        <label>Unesite visinu u cm:</label>
        <input placeholder="100-230cm" min={100} max={230} type="number" value={visina()} onInput={(event) => {
    let provjera = parseInt(event.target.value); 
    if (provjera >= 100 && provjera <= 230) {
      setVisina(provjera); 
    } else if (event.target.value === "") {
      setVisina(""); 
    } 
  }}
  onBlur={(event) => {
    const provjera = parseInt(event.target.value);
    if (provjera < 100 || provjera > 230) {
      event.target.value = visina() || ""; 
    }
  }}/>
        </div>
        <div className="rezultat">
        <label>Vaš preopručeni dnevni unos kalorija je:</label>
        <input type="number" value={BMR()}/>
        </div>
        <button onClick={() => formula()}>Potvrdi</button>
        </>
    );
}