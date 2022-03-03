// - l'utente seleziona una difficoltà
// - a seconda della difficoltà selezionata devo creare n elementi



const btnPlay = document.getElementById("btn-play");
const eleField = document.querySelector(".field");
const eleDifficulty = document.getElementById("difficulty");
const arrLevels = [100, 81, 49];
btnPlay.addEventListener('click', setupGame);



function setupGame() {

    //reset field
    eleField.innerHTML = '';
    const arrBombs = [];
     

    //seleziono il livello
    let indexLevel = parseInt(eleDifficulty.value); // 0, 1, 2
    let cellsCount = arrLevels[indexLevel]; // 100, 81, 49

    //calcolo quante celle per riga in modo da  poterne calcolare i lati 
    let cellPerRow = Math.sqrt(cellsCount); // 10, 9, 7



    //genero le bombe finchè la lunghezza dell'arrey non è uguale a 16
    for (let i = 0; arrBombs.length != 16; i++) {

        //genero un numero casuale tra 1 e il numero di celle
        let rngNum = Math.floor(Math.random() * cellsCount);

        //se l'arrey delle bombe ('arrBombs') non include il numero casuale lo aggiungo e vado avanti
        if (!arrBombs.includes(rngNum)) {
            arrBombs.push(rngNum);
            
        }
        
    }
    console.log(arrBombs)

    //ciclo per creare le celle
    for (let cellsNum = 1; cellsNum <= cellsCount; cellsNum++) {
        let eleCell = document.createElement("div");
        eleCell.classList.add("cell");
        eleCell.style.width = `calc(100% / ${cellPerRow})`;
        eleCell.style.height = `calc(100% / ${cellPerRow})`;
        eleCell.innerHTML = cellsNum;

        //assegno una classe a seconda se ho cliccato una cella con un indice incluso nell'arrey delle bombe
        if (arrBombs.includes(cellsNum)) {
            eleCell.addEventListener('click', bombFound);
 
        }else {
            eleCell.addEventListener('click', changeCellColor);

        }
        
        eleField.append(eleCell);
        
    }
}




//funzione per aggiungere la classe 'selected' all'oggetto che richiama la funzione 
function changeCellColor() {
   this.classList.add('selected');
    
}

function bombFound() {
    this.classList.remove('selected');
    this.classList.add('bomb');
}





        //ciclo per creare le celle
        // for (let cellsNum = 1; cellsNum <= cellsCount; cellsNum++) {
        //     let eleCell = document.createElement("div");
        //     eleCell.classList.add("cell");
        //     eleCell.style.width = `calc(100% / ${cellPerRow})`;
        //     eleCell.style.height = `calc(100% / ${cellPerRow})`;
        //     eleCell.innerHTML = cellsNum;
        //     eleCell.addEventListener('click', changeCellColor);
            
    
        //     eleField.append(eleCell);
            
        // }