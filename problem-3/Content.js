// add a picture of HIMARS in a random spot of the website

const img = document.createElement("img");

//img.src = chrome.runtime.getURL("https://i.redd.it/rm9l33moxpi91.jpg");
img.src = "https://i.redd.it/rm9l33moxpi91.jpg";
document.body.appendChild(img);

var x = Math.random() * 1000;
x = Math.round(x);
    
var y = Math.random() * 500;
y = Math.round(y);

img.style.position = 'absolute';
img.style.left = x + 'px';
img.style.top = y + 'px';

// cats

let catsImages = [
    "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    "https://e3.365dm.com/21/03/768x432/skynews-cats-missing-microchip_5315182.jpg?20210323142004",
    "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/petting_pet_cat-1296x728-header.jpg?w=1155&h=1528",
    "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc3836660-7846-11eb-80c3-8cc375faed89.jpg?crop=5729%2C3222%2C187%2C805&resize=1200",
	"https://lh3.googleusercontent.com/pw/AL9nZEXYJlrVkYoKIkpx07_3F4HOiTiOheaoaiRAcwrUg3C613-jkzEubJ3k8Z9fDjG5IfVqCzorphZ00vp6mIyB79GtCsoyV69xXe9cqrA0zglgrcvYhH2UP4cDR88WTm1AmuyCxQHAWCB5JzKD7eD94dtNZA=w690-h920-no"
];

const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * catsImages.length)
    imgs[i].src = catsImages[randomImg]
}

const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Cats are awesome.";
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