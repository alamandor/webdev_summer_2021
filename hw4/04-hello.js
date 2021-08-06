// Add your code here
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-flow: column;
let main = document.querySelector("main");
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.alignItems = "center";
main.style.flexFlow = "column";
let picture = document.createElement("img");
picture.src = "../hw1/Fish.png";
picture.style.marginTop = "20px";
picture.style.borderRadius = "50%";
picture.style.width = "200px";
picture.alt = "A surprised looking fish";
document.querySelector("main").appendChild(picture);

let text = document.createElement("p");
text.innerHTML =
  "Hello my name is Alec Greenaway. I was born and raised here in Portland, I enjoy any sort of outdoor activity. Something I would like to try and learn about is 3d-Printing";
text.style.textAlign = "center";
document.querySelector("main").appendChild(text);
