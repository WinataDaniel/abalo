document.body.onload = showForm;

// function showForm() {
//     const form = document.createElement('form');
//     form.setAttribute("method", "POST");
//     form.setAttribute("action", "/articles");
//
//     let  titel = document.createElement('h2');
//     titel.innerText = "Add your article!";
//     form.appendChild(titel);
//
//     // Create a break line element
//     let br = document.createElement("br");
//
//     // CSRF token
//     let csrfToken = document.getElementById("csrf-token");
//     let myToken = document.createElement("input");
//     myToken.type = "hidden";
//     myToken.name = "_token";
//     myToken.value = csrfToken.dataset.token;
//     form.appendChild(myToken);
//
//     // article name label
//     let articleNameLabel = document.createElement('label');
//     articleNameLabel.htmlFor = "article_name";
//     articleNameLabel.innerText = "Article Name";
//     form.appendChild(articleNameLabel);
//     form.appendChild(br.cloneNode());
//     // article name
//     let articleName = document.createElement('input');
//     articleName.id = "article_name";
//     articleName.setAttribute("type", "text");
//     articleName.setAttribute("name", "articleName");
//     articleName.setAttribute("placeholder", "article name");
//     articleName.setAttribute("maxlength", "80");
//     articleName.required = true;
//     articleName.className = "@error('articleName') ERROR @enderror"
//     form.appendChild(articleName);
//     form.appendChild(br.cloneNode());
//
//     // article price label
//     let articlePriceLabel = document.createElement('label');
//     articlePriceLabel.htmlFor = "article_price";
//     articlePriceLabel.innerText = "Article Price";
//     form.appendChild(articlePriceLabel);
//     form.appendChild(br.cloneNode());
//     // article price
//     let articlePrice = document.createElement('input');
//     articlePrice.setAttribute("type", "number");
//     articlePrice.setAttribute("name", "articlePrice");
//     articlePrice.setAttribute("placeholder", "article price");
//     articlePrice.setAttribute("min", "1");
//     articlePrice.required = true;
//     form.appendChild(articlePrice);
//     form.appendChild(br.cloneNode());
//
//     // article description label
//     let articleDescriptionLabel = document.createElement('label');
//     articleDescriptionLabel.htmlFor = "article_description";
//     articleDescriptionLabel.innerText = "Article Description";
//     form.appendChild(articleDescriptionLabel);
//     form.appendChild(br.cloneNode());
//     // article description
//     let articleDescription = document.createElement('input');
//     articleDescription.setAttribute("type", "text");
//     articleDescription.setAttribute("name", "articleDescription");
//     articleDescription.setAttribute("placeholder", "article description");
//     articleDescription.setAttribute("maxlength", "1000");
//     form.appendChild(articleDescription);
//     form.appendChild(br.cloneNode());
//
//     // create a submit button
//     var s = document.createElement("input");
//     s.setAttribute("type", "submit");
//     s.setAttribute("value", "Speichern");
//     s.id = "article_submit";
//     form.appendChild(s);
//
//     form.onsubmit = function (e) {
//         const allValues = e.target.elements;
//         if (allValues['articlePrice'].value <= 0) {
//             e.preventDefault();
//             alert("Price must be greater than 0!");
//         }
//         if (allValues['articleName'].value.trim().length === 0) {
//             e.preventDefault();
//             alert("Article name needed!");
//         }
//     }
//     document.getElementsByTagName("body")[0]
//         .appendChild(form);
// }

function showForm() {
    const form = document.createElement('form');
    // form.setAttribute("method", "POST");
    form.setAttribute("name", "newArticleForm")
    // form.setAttribute("action", "...");

    let titel = document.createElement('h2');
    titel.innerText = "Add your article!";
    form.appendChild(titel);

    // Create a break line element
    let br = document.createElement("br");

    // CSRF token
    let csrfToken = document.getElementById("csrf-token");
    let myToken = document.createElement("input");
    myToken.id = "csrf-token2";
    myToken.type = "hidden";
    myToken.name = "_token";
    myToken.value = csrfToken.dataset.token;
    form.appendChild(myToken);

    // article name label
    let articleNameLabel = document.createElement('label');
    articleNameLabel.htmlFor = "article_name";
    articleNameLabel.innerText = "Article Name";
    form.appendChild(articleNameLabel);
    form.appendChild(br.cloneNode());
    // article name
    let articleName = document.createElement('input');
    articleName.id = "article_name";
    articleName.setAttribute("type", "text");
    articleName.setAttribute("name", "articleName");
    articleName.setAttribute("placeholder", "article name");
    articleName.setAttribute("maxlength", "80");
    articleName.required = true;
    articleName.className = "@error('articleName') ERROR @enderror"
    form.appendChild(articleName);
    form.appendChild(br.cloneNode());

    // article price label
    let articlePriceLabel = document.createElement('label');
    articlePriceLabel.htmlFor = "article_price";
    articlePriceLabel.innerText = "Article Price";
    form.appendChild(articlePriceLabel);
    form.appendChild(br.cloneNode());
    // article price
    let articlePrice = document.createElement('input');
    articlePrice.id = "article_price";
    articlePrice.setAttribute("type", "number");
    articlePrice.setAttribute("name", "articlePrice");
    articlePrice.setAttribute("placeholder", "article price");
    articlePrice.setAttribute("min", "1");
    articlePrice.required = true;
    form.appendChild(articlePrice);
    form.appendChild(br.cloneNode());

    // article description label
    let articleDescriptionLabel = document.createElement('label');
    articleDescriptionLabel.htmlFor = "article_description";
    articleDescriptionLabel.innerText = "Article Description";
    form.appendChild(articleDescriptionLabel);
    form.appendChild(br.cloneNode());
    // article description
    let articleDescription = document.createElement('input');
    articleDescription.id = "article_description";
    articleDescription.setAttribute("type", "text");
    articleDescription.setAttribute("name", "articleDescription");
    articleDescription.setAttribute("placeholder", "article description");
    articleDescription.setAttribute("maxlength", "1000");
    form.appendChild(articleDescription);
    form.appendChild(br.cloneNode());

    let s = document.createElement("button");
    s.innerText = "Speichern";
    s.id = "article_submit";
    form.appendChild(s);

    let ausgabe = document.createElement('div');
    ausgabe.innerText = "Hello";
    ausgabe.id = "output";
    form.appendChild(ausgabe);

    // Append vor AJAX
    document.getElementsByTagName("body")[0]
        .appendChild(form);

    // window.addEventListener("DOMContentLoaded", e => {
    let submitBtn = document.getElementById("article_submit");
    console.log(submitBtn)
    if (submitBtn) {
        submitBtn.addEventListener("click", ev => {
            ev.preventDefault();
            let articleName = document.querySelector("#article_name").value;
            let articlePrice = document.querySelector("#article_price").value;
            let articleDescription = document.querySelector("#article_description").value;
            sendData(articleName, articlePrice, articleDescription);
            return false;
        });
    }

    function sendData(articleName, articlePrice, articleDescription) {
        let output = document.getElementById("output");

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/newArticle", true);
        xhr.setRequestHeader("X-CSRF-TOKEN", document.getElementById("csrf-token2").getAttribute('value'));

        let formData = new FormData();
        formData.append("articleName", articleName);
        formData.append("articlePrice", articlePrice);
        formData.append("articleDescription", articleDescription);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    output.innerHTML = JSON.parse(xhr.responseText).message; // parse to json obj and get the message property
                    output.style.color = "green";
                } else {
                    output.innerHTML = "Fehler!";
                    output.style.color = "red";
                }
            }
        }
        xhr.send(formData);
    }
}
