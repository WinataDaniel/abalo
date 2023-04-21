if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let addArticleButtons = document.getElementsByClassName('add-article-button')

    for (let i = 0; i < addArticleButtons.length; i++) {
        let button = addArticleButtons[i]
        button.addEventListener('click', addArticleButtonClicked)
    }
}

function addArticleButtonClicked(event) {
    let button = event.target
    let tableData = button.parentElement.parentElement
    let dataImage = tableData.getElementsByClassName("table-data-image")[0].getElementsByTagName("img")[0].src
    let dataName = tableData.getElementsByClassName("table-data-name")[0].innerText
    let dataPrice = tableData.getElementsByClassName("table-data-price")[0].innerText
    let dataDescription = tableData.getElementsByClassName("table-data-description")[0].innerText
    addArticleToCart(dataImage, dataName, dataPrice, dataDescription,)
}

function addArticleToCart(dataImage, dataName, dataPrice , dataDescription) {
    let cartItem = document.createElement("div")
    cartItem.classList.add("shopping-cart-item")
    let cartItems = document.getElementsByClassName("shopping-cart-items")[0]

    // Check if article exists
    let cartItemNames = cartItems.getElementsByClassName("cart-item-name")
    for (let i = 0; i < cartItemNames.length; i++) {
        console.log(cartItemNames[i])
        if (cartItemNames[i].innerText.trim() === dataName.trim()) {
            alert("This article is already in the shopping cart!")
            return
        }
    }

    cartItem.innerHTML = `
        <img class="cart-item-image"src="${dataImage}" alt="a picture" width="50" height="50">
        <span class="cart-item-name"> ${dataName} </span>
        <span class="cart-item-price"> ${dataPrice} </span>
        <span class="cart-item-description"> ${dataDescription} </span>
        <button class="remove-article-button">-</button>
    `
    cartItems.append(cartItem)
    cartItem.getElementsByClassName("remove-article-button")[0].addEventListener("click", removeArticle)
}

function removeArticle(event) {
    let removeButtonClicked = event.target
    removeButtonClicked.parentElement.remove()
}
