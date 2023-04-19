
document.body.onload = showForm;

function showForm() {
    const form = document.createElement('form');
    form.setAttribute("method", "POST");
    form.setAttribute("action", "/articles");

    let  titel = document.createElement('h2');
    titel.innerText = "Add your article!";
    form.appendChild(titel);

    // Create a break line element
    let br = document.createElement("br");

    // CSRF token
    let csrfToken = document.getElementById("csrf-token");
    let myToken = document.createElement("input");
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
    articleDescription.setAttribute("type", "text");
    articleDescription.setAttribute("name", "articleDescription");
    articleDescription.setAttribute("placeholder", "article description");
    articleDescription.setAttribute("maxlength", "1000");
    form.appendChild(articleDescription);
    form.appendChild(br.cloneNode());

    // create a submit button
    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Speichern");
    s.id = "article_submit";
    form.appendChild(s);

    form.onsubmit = function (e) {
        const allValues = e.target.elements;
        if (allValues['articlePrice'].value <= 0) {
            e.preventDefault();
            alert("Price must be greater than 0!");
        }
        if (allValues['articleName'].value.trim().length === 0) {
            e.preventDefault();
            alert("Article name needed!");
        }
    }
    document.getElementsByTagName("body")[0]
        .appendChild(form);
}


