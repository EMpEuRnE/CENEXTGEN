const change_background_Color = document.getElementById("btn");

change_background_Color.addEventListener("click" , change)

let content = document.querySelector("#content");


function change (d){
    let arr_color = fetch("data.Json").then(r => r.json()).then(arr_color => {
    let num = Math.floor(Math.random() * 4) + 1 ;
    

    
    if (num === 1 ){  content.style.background = arr_color[0] }
    else if (num === 2) {  content.style.background = arr_color[1] }
    else if (num === 3) { content.style.background = arr_color[2] }
    else if (num === 4) {  content.style.background = arr_color[3] }
    });
    // ทำระบบสุ่มสี ดึงข้อมูล โค้ดสี จาก Json เก้บที่ array
    
    
    
}

const image = document.querySelector("#profile")
image.addEventListener("mouseenter" ,()=>{
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUkHNfkmW6rySu4Lutiz3LKymHtjgmzdwGx0a_X-pjvQ&s=10";
});

image.addEventListener("mouseleave" ,() =>{
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAG5S9aMOq7JnuQjrReMzZJA4HVrag6343UxZgqbgbA&s=10";
});


