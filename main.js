//cards
let poundsCard = document.getElementById('lbs');
let gramsCard = document.getElementById('g');
let kgCard = document.getElementById('kg');
let ozCard = document.getElementById('oz');
//outputs
let poundsOP = document.getElementById('lbsOutput');
let gramsOP = document.getElementById('gramsOutput');
let kgOP = document.getElementById('kgOutput')
let ouncesOP = document.getElementById('ozOutput');

//implementar lo del text shadow de wes bos


document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function (e) {
    document.getElementById('output').style.visibility = 'visible';
    //manejar la opcion del select con un switch
    let selected = document.getElementById('unitOption').value;
    switch (selected) {
        case 'pounds':
            gramsCard.style.display = 'block';
            kgCard.style.display = 'block';
            ozCard.style.display = 'block';
            poundsCard.style.display = 'none';
            let pPounds = e.target.value;
            let pGrams = pPounds / 0.0022046;
            let pKg = pPounds / 2.20462;
            let pOz = pPounds * 16;
            gramsOP.innerHTML = pGrams.toFixed(4);
            kgOP.innerHTML = pKg.toFixed(4);
            ouncesOP.innerHTML = pOz.toFixed(4);
            break;
        case 'grams':
            poundsCard.style.display = 'block';
            kgCard.style.display = 'block';
            ozCard.style.display = 'block';
            gramsCard.style.display = 'none';
            let gGrams = e.target.value;
            let gPounds = gGrams * 0.0022046;
            let gKg = gGrams / 1000;
            let gOz = gGrams * 0.035274;
            poundsOP.innerHTML = gPounds.toFixed(4);
            kgOP.innerHTML = gKg.toFixed(4);
            ouncesOP.innerHTML = gOz.toFixed(4);
            break;
        case 'kilograms':
            poundsCard.style.display = 'block';
            gramsCard.style.display = 'block';
            ozCard.style.display = 'block';
            kgCard.style.display = 'none';
            let kKg = e.target.value;
            let kPounds = kKg * 2.20462;
            let kGrams = kKg * 1000;
            let kOunces = kKg * 35.274;
            poundsOP.innerHTML = kPounds.toFixed(4);
            gramsOP.innerHTML = kGrams.toFixed(4);
            ouncesOP.innerHTML = kOunces.toFixed(4);
            break;
        case 'ounces':
            poundsCard.style.display = 'block';
            gramsCard.style.display = 'block';
            kgCard.style.display = 'block';
            ozCard.style.display = 'none';
            let oOunces = e.target.value;
            let oPounds = oOunces * 0.0625;
            let oGrams = oOunces * 28.3495;
            let oKg = oOunces * 0.0283495;
            poundsOP.innerHTML = oPounds.toFixed(4);
            gramsOP.innerHTML = oGrams.toFixed(4);
            kgOP.innerHTML = oKg.toFixed(4);
            break;
    }
})

//code for text shadow of the title
const hero = document.querySelector('#title');
  const text = document.querySelector('h1');
  const walk = 30; //100px

  function shadow(e) {
    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX : x, offsetY : y} = e;

    if(this !== e.target) {
      x  = x + e.target.offsetLeft;
      y = y + e.target.pffsetTop;
    }
  /*Si el walk es 100px, entonces lo mas alto que se desplaza el shadow es 50px y -50px*/
    const xWalk = (x / width * walk) - (walk / 2);
    const yWalk = (y / height * walk) - (walk / 2);

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(184, 184, 184, 0.4)`;

  }

  hero.addEventListener('mousemove', shadow);