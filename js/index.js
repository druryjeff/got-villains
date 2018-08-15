/* GLOBAL VARS */

let i = 1;
const nav = document.querySelectorAll('nav a');
const b_reset = document.querySelector('.reset');
const list = document.querySelector('ul');


/* MAIN CONTENT */

const antag = [
  { name: 'Lysa Arryn', status: 'dead', season: 4 },
  { name: 'The Waif', status: 'dead', season: 6 },
  { name: 'Euron Greyjoy', status: 'alive', season: 6 },
  { name: 'Randyll Tarly', status: 'alive', season: 4 },
  { name: 'Pyat Pree', status: 'dead', season: 2 },
  { name: 'Locke', status: 'dead', season: 4 },
  { name: 'Septa Unella', status: 'alive', season: 6 },
  { name: 'Karl Tanner', status: 'dead', season: 4 },
  { name: 'Ser Meryn Trant', status: 'dead', season: 5 },
  { name: 'Balon Greyjoy', status: 'dead', season: 6 },
  { name: 'Olly', status: 'dead', season: 6 },
  { name: 'Qyburn', status: 'alive', season: 6 },
  { name: 'Craster', status: 'dead', season: 3 },
  { name: 'Theon Greyjoy', status: 'alive', season: 6 },
  { name: 'Ser Alliser Thorne', status: 'dead', season: 6 },
  { name: 'Jaime Lannister', status: 'alive', season: 6 },
  { name: 'Viserys Targaryen', status: 'dead', season: 1 },
  { name: 'Melisandre', status: 'alive', season: 6 },
  { name: 'Sandor Clegane', status: 'alive', season: 6 },
  { name: 'Roose Bolton', status: 'dead', season: 6 },
  { name: 'Walder Frey', status: 'dead', season: 6 },
  { name: 'Stannis Baratheon', status: 'dead', season: 5 },
  { name: 'The High Sparrow', status: 'dead', season: 6 },
  { name: 'Tywin Lannister', status: 'dead', season: 4 },
  { name: 'Gregor Clegane', status: 'alive', season: 6 },
  { name: 'Petyr Baelish', status: 'alive', season: 6 },
  { name: 'Ramsay Bolton', status: 'dead', season: 6 },
  { name: 'The Night King', status: 'alive', season: 6 },
  { name: 'Joffrey Baratheon', status: 'dead', season: 4 },
  { name: 'Cersei Lannister', status: 'alive', season: 6 }
];


/* ARRAY FILTERS */

const stayinAlive = antag.filter(alive => alive.status === 'alive');
const nowDead = antag.filter(alive => alive.status === 'dead');
const sortDead = nowDead.sort((a,b) => a.season > b.season ? 1 : -1);


/* FUNCTIONS */

function makeListItems(el){
  const listitem = document.createElement('li');
  const link = document.createElement('a');
  const src = 'https://www.youtube.com/results?search_query=GOT+';
  link.classList.add(el['status']);
  link.setAttribute('href',src+el['name']);
  link.setAttribute('target','_blank');
  link.innerHTML = el['name'];
  listitem.appendChild(link);
  listitem.style.animationDelay = i + 's';
  list.appendChild(listitem);
  i++;
}

function showList(){
  // set up the page, hiding the header, displaying notes and back button
  setUp();
  // print selected list (this is still awkward)
  // can't use variable name from selected button
  // to reference the array name in the for/of loop
  if (this.className === 'stayinAlive'){
    for (let value of stayinAlive) {
      makeListItems(value);
    }
  } else {
    for (let value of sortDead) {
      makeListItems(value);
    }
  }
}

function setUp(){
  // vars
  const header = document.querySelector('header');
  const notes = document.querySelector('.notes');
  // clear out existing list to reset
  if(this.className === 'reset'){
    // reset counter
    i = 1;
    // remove list items
    while (list.hasChildNodes()) {
      list.removeChild(list.lastChild);
    }
  }
  // toggle visibility of reset button, notes and header
  header.classList.toggle('js-hide');
  b_reset.classList.toggle('js-hide');
  notes.classList.toggle('js-hide');
}


/* EVENT HANDLERS */

nav.forEach(filterBtn => filterBtn.addEventListener('click', showList));
b_reset.addEventListener('click',setUp);


/* OTHER ARRAY MANIPULATIONS TO CONSIDER */

//const namesBySeason = antag.sort((a,b) => a.season > b.season ? 1 : -1);
//const alphaNames = antag.sort((a,b) => a.name > b.name ? 1 : -1);
//const familyNames = antag.filter(fn => fn.name.includes('Lannister'));