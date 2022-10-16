// not cat images

let warImages = [
    "https://pbs.twimg.com/media/FYTZCjsUUAEguWS?format=jpg&name=large",
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Ghost_of_Kyiv_Art.jpg",
    "https://www.euractiv.com/wp-content/uploads/sites/2/2022/10/h_57976935-1.jpg",
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/1400A/production/_124203918__124200908_c759bd1f-254f-4106-8a3f-0b52d7fe1403-1.jpg"
];

const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * warImages.length)
    imgs[i].src = warImages[randomImg]
}

const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Glory to the Heroes.";
}

// replace all mentions of Putin with Poopin

const text = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, td, caption, span, a')

for (let i = 0; i < text.length; i++) {
    if (text[i].innerHTML.includes('Putin')) {
        text[i].innerHTML = text[i].innerHTML.replace('Putin', 'Poopin')
    }
}

// make the website content disappear as the time goes on

var visibility = 1;
       
setInterval(function() {
    if (visibility >= 0) {
        visibility = visibility - 0.1;
        document.body.style.opacity = visibility ;
    }
}, 2000);

// add a clock that can hide if needed

const clock = document.createElement('div')
clock.classList.add('clock_extension', 'hide')

setInterval(updateClock, 1000);
updateClock()

document.body.append(clock)

document.addEventListener('keydown', event => {
    if (event.code === 'Enter') {
        clock.classList.toggle('hide')
    }
})

function updateClock() {
    const date = new Date()
    const time = new Intl.DateTimeFormat('ru-Ru', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }).format(date)

    clock.innerText = time
}

// add a picture of HIMARS

let counter = 0

const himars = document.createElement("div")
himars.classList.add('himars_extension')

document.body.append(himars)

himars.addEventListener('click', event => {
    if (counter === 5) {
        alert("It's Himars O'Clock")
    }
    var x = Math.random() * 1000;
    x = Math.round(x);
    
    var y = Math.random() * 500;
    y = Math.round(y);
    
    himars.style.left = x + 'px';
    himars.style.top = y + 'px';

    counter++
})
