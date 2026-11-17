const image = document.querySelector("#img")
const audio = new Audio("./audio/laughing-hamster.mp3")
const sad_audio = new Audio("./audio/sad-hamster-violin-meme.mp3")

image.addEventListener("mouseenter" ,()=>{
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kXVrHszE5K19GAOJ2xx4FYJ8TBfQbOfrqev8Gjzu3w&s=10";
    audio.play()
});

image.addEventListener("mouseleave" ,() =>{
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzI92LVYwN0H6tzg0rnD3Cp1lcmykOMC0QX23AvKEPew&s=10";
    sad_audio.play()
});



