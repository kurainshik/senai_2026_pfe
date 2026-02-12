document.title = "Página da UC";
const titleTag = document.getElementById('page-title');
titleTag.textContent = "titulo atualizado 2026 sem virus";

const containerDiv = document.createElement('div');

Object.assign(containerDiv.style, {
    width: "94%",
    minHeight: "400px",
    backgroundColor: "#ffffff",
    margin: "20px auto",
    padding: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    borderRadius: "12px",
    textAlign: "center"
});

document.body.appendChild(containerDiv);

const h2 = document.createElement('h2');
h2.innerHTML = "<span></span>";
h2.querySelector('span').innerText = "alguma coisa";
containerDiv.appendChild(h2);

const imageDiv = document.createElement('div');
imageDiv.style.marginTop = "30px";
                
imageDiv.innerHTML = `
    <img src="https://i.pinimg.com/736x/89/2d/d3/892dd3120e69595f9f3e952b424abe2f.jpg" 
         alt="aaaaa " 
         style="max-width: 100%; border-radius: 8px; border: 1px solid #ddd;">
`;

containerDiv.appendChild(imageDiv);