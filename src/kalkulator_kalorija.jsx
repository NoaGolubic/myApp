//Kalkulator kalorija
//Treba dobiti preporuceni dnevni unos kalorija na temelju dobi spola i tezine
import { createSignal } from "solid-js";

export default function Izracunaj(props){

    const [dob, setDob] = createSignal();
    const [spol, setSpol] = createSignal();   
    const [tezina, setTezina] = createSignal();
    const [visina, setVisina] = createSignal();

    function formula(){
      if(spol === "musko"){
  //BMR = 10 * weight + 6.25 * height – 5 * age + 5
      }  else if(spol === "zensko"){
//BMR = 10 * weight + 6.25 * height – 5 * age – 161
      } else{
        console.log("Unesite ispravne vrijednosti!");
      }
    }

    return(
        <div className="podaci">
        <h2>Kalkulator preporučenog dnevnog unosa kalorija</h2>
        <p>
U ovoj aplikaciji možete saznati koliko kalorija morate unijeti na dan.<br/>
Preporučen dnevni unos kalorija za mušku osobu je 2000cal,<br/>
dok je za žensku osobu taj unos nešto manji, otprilike 1500cal.
</p>
        <label>Unesite broj godina</label>
        <input type="number" value={dob()} onInput={(event) => setDob(event.target.value)}/>
        <label>Unesite spol</label>
        <input type="text" value={spol()} onInput={(event) => setSpol(event.target.value)}/>
        <label>Unesite težinu</label>
        <input type="number" value={tezina()} onInput={(event) => setTezina(event.target.value)}/>
        <label>Unesite visinu</label>
        <input type="number" value={visina()} onInput={(event) => setVisina(event.target.value)}/>
        </div>
    );
}