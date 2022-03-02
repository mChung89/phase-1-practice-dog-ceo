console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(data => {
            data.message.forEach(data => renderDogImage(data))
        })
        .catch(message => console.log(message))
})

document.addEventListener('DOMContentLoaded', () => {
    return fetch("https://dog.ceo/api/breeds/list/all")
        .then(resp => resp.json())
        .then(data => {
            for (const breed in data.message) {
                renderDogBreed(breed)
            }
        })
        .catch(message => console.log(message))
})

function renderDogBreed(dog) {
    const li = document.createElement(`li`);
    const dogBreeds = document.getElementById(`dog-breeds`);
    li.textContent = dog;
    li.addEventListener(`click`, (e) => {
        e.target.style.color = "red"
    });
    dogBreeds.appendChild(li)
}

function renderDogImage(dog) {
    const img = document.createElement('img');
    const dogContainer = document.getElementById(`dog-image-container`);
    img.src = dog;
    dogContainer.appendChild(img)
}

// DROPDOWN FILTER

const dropDown = document.getElementById('breed-dropdown')
dropDown.addEventListener('change', e => {
    const ul = document.querySelector('ul')
    const children = Array.from(ul.childNodes)
    children.shift()
    if (e.target.value === "a") {
        for(const word in children) {
            if (!children[word].textContent.startsWith("a")) {
                children[word].style.display = 'none'
            } else children[word].style.display = ''}}
    if (e.target.value === "b") {
        for(const word in children) {
            if (!children[word].textContent.startsWith("b")) {
                children[word].style.display = 'none'
            } else children[word].style.display = ''
        }}
    if (e.target.value === "c") {
        for(const word in children) {
            if (!children[word].textContent.startsWith("c")) {
                children[word].style.display = 'none'
            } else children[word].style.display = ''}}
    if (e.target.value === "d") {
        for(const word in children) {
            if (!children[word].textContent.startsWith("d")) {
                children[word].style.display = 'none'
            } else children[word].style.display = ''}}
})