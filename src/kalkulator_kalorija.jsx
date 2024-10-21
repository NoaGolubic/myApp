//Kalkulator kalorija
//Treba dobiti preporuceni dnevni unos kalorija na temelju dobi spola i tezine
import { createSignal } from "solid-js";

export default function Izracunaj(props){

    const [dob, setDob] = createSignal();
    const [spol, setSpol] = createSignal();   
    const [tezina, setTezina] = createSignal();

    return(
        <div>
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
        </div>
    );
}