alert('Hallo!');


let navList = document.getElementById("navList");
let navData = ['Home', 'Kategorien', 'Verkaufen', 'Unternehmen'];
let unternehmenData = ['Philosophie', 'Karriere'];

let uL1 = document.createElement('ul');

// Iterate navData
navData.forEach(function(value, index) {
   let li = document.createElement('li');
    li.innerText = value;
    // if (value === 'Kategorien') {
    //     console.log('hello');
    //     li.setAttribute('href',  'http://127.0.0.1:8000/articleCategories');
    // }
    uL1.appendChild(li);
    // Unternehmen
    if (value === 'Unternehmen') {
        let uL2 = document.createElement('ul');
        unternehmenData.forEach((item) => {
            let li2 = document.createElement('li');
            li2.innerText = item;
            uL2.appendChild(li2);
        });
        li.appendChild(uL2);
    }
});
document.body.appendChild(uL1);
