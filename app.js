/* `<div class="kartica">

            <h2 class="kartica-naslov">Lorem, ipsum dolor.</h2>
            <p class="kartica-para">Lorem ipsum dolor sit amet consectetur.</p>
            <button class="kartica-dugme">Klikni</button>


         </div>`;
const okvir = document.querySelector('.kartica-okvir');

okvir.innerHTML = html;*/

//mini baza
const kartice = [
    {
        naslov: 'Ovo je prvi naslov',
        tekst:'Ovo je tekst u prvoj kartici',
        dugme: ' klikni na prvu karticu'
    }, {
         naslov: 'Ovo je drugi naslov',
        tekst:'Ovo je tekst u drugoj kartici',
        dugme: ' klikni na drugu karticu'

    }, {
         naslov: 'Ovo je treci naslov',
        tekst:'Ovo je tekst u trecoj kartici',
        dugme: ' klikni na trecu karticu'
    }, {
         naslov: 'Ovo je cetvrti naslov',
        tekst:'Ovo je tekst u cetrvrtoj kartici',
        dugme: ' klikni na cetvrtu karticu'
    }
];
kartice.forEach(function(kartice){
    const okvir = document.querySelector('.kartica-okvir');
    let html =`<div class="kartica">

            <h2 class="kartica-naslov">${kartice.naslov}</h2>
            <p class="kartica-para">${kartice.tekst}</p>
            <button class="kartica-dugme">${kartice.dugme}</button>


         </div>`;
   okvir.innerHTML += html;

});


/*
kartice.forEach(function(kartice){
    console.log(kartice.naslov)

});*/



