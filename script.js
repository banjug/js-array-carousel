const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// selezione dei contenitori dove inserire l'html

const coverContainer = document.querySelector('.cover');
const thumbContainer = document.querySelector('.thumbnails');

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// inserisco l'html di base

let coverItem = '';
let thumbItem = '';


// inserisco gli element html senza classe active 

for (let i = 0; i < items.length; i++) {
    coverItem += `
        <div class="cover-item ">
            <div class="cover-img">
                <img src="${items[i]}" alt="${title[i]}">
            </div>
        
            <div class="text">
                <h2>${title[i]}</h2>
                <p>${text[i]}</p>
            </div>
        </div>`

    thumbItem += `
        <div class="thumb-item ">
            <img src="${items[i]}" alt="">
        </div>
    `
}

console.log(coverItem);
console.log(thumbItem);

// aggiungo la classe active agli elementi default

coverContainer.innerHTML = coverItem;
document.getElementsByClassName('cover-item')[0].classList.add('active');
thumbContainer.innerHTML += thumbItem;
document.getElementsByClassName('thumb-item')[0].classList.add('active');

// il click cambia la classe active 

// conta a quale oggetto dare la classe active 
let activeCounter = 0;

document.querySelector('.next').addEventListener('click',
    function() {
        // aumenta di uno il contatore ad ogni click 
        ++activeCounter;

        // rimuove la classe active al precedente e la aggiunge all'elemento dato dal numero del contatore
        document.querySelector('.cover-item.active').classList.remove('active');
        document.getElementsByClassName('cover-item')[activeCounter].classList.add('active');
                
        document.querySelector('.thumb-item.active').classList.remove('active');
        document.getElementsByClassName('thumb-item')[activeCounter].classList.add('active');
        
        if (activeCounter == 4) {
            activeCounter = -1;
        }
    
    }
);

let activeCounterPrev = 5;

document.querySelector('.prev').addEventListener('click',
    function() {
        --activeCounterPrev;

        document.querySelector('.cover-item.active').classList.remove('active');
        document.getElementsByClassName('cover-item')[activeCounterPrev].classList.add('active');
                
        document.querySelector('.thumb-item.active').classList.remove('active');
        document.getElementsByClassName('thumb-item')[activeCounterPrev].classList.add('active');
        
        if (activeCounterPrev == 0) {
            activeCounterPrev = 5;
        }
    
    }
);