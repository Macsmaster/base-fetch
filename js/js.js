function createCard(title, content, image, parent){
    const cardContainer = document.createElement('article');
    cardContainer.innerHTML = `
        <h2>${title}</h2>
        <div>
            <p>${content}</p>
        </div>
        <img src="${image}">
          
    `;
    parent.appendChild(cardContainer);
}

//////////////////////////////////////////////

const padre = document.getElementById("bloque");
const arr = [
    {
        title: "Oxybelis",  
        content: "aeneus",
        image: "img/1.jpg"

    },

    { 
        title: "Oxybelis",  
        content: "aeneus",
        image: "img/2.jpg"  

    },

    { 
        title: "Oxybelis",  
        content: "aeneus",
        image: "img/1.jpg"  

    },

    { 
        title: "Oxybelis",  
        content: "aeneus",
        image: "img/2.jpg"  

    }

];

arr.forEach(function(element){
    createCard(element.title, element.content, element.image, padre);

})










