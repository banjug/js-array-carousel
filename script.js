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

// inserisco l'html di base

coverContainer.innerHTML = `<div class="cover-cont active"><img class="cover-img" src="${items[0]}" alt="${title[0]}"><div class="text-cont"><h2>${title[0]}</h2><p>${text[0]}</p></div></div>`

thumbContainer.innerHTML += `<img class="thumb active" src="${items[0]}" alt="${title[0]}">`

for (let i = 1; i < items.length; i++) {

    thumbContainer.innerHTML += `<img class="thumb " src="${items[i]}" alt="${title[i]}">`
    coverContainer.innerHTML += `<div class="cover-cont "><img class="cover-img" src="${items[i]}" alt="${title[i]}"><div class="text-cont"><h2>${title[i]}</h2><p>${text[i]}</p></div></div>`

}