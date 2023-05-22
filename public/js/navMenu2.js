// "use strict";
// document.body.innerHTML = "<nav id=\"navId\"></nav>\n" +
//     "<article id=\"articleId\"></article>";
//
// let navBar = document.getElementById("navId");
// navBar.setAttribute("class", "navbar navbar-inverse navbar-fixed-top");
// let container = document.createElement("div");
// container.setAttribute("class", "container-fluid");
// let barHeader = document.createElement("div");
// barHeader.setAttribute("class", "navbar-header");
// barHeader.setAttribute("class", "navbar-brand");
// barHeader.innerText = "abalo";
//
// let navData = ['Home', 'Kategorien', 'Verkaufen', 'Unternehmen'];
// let unternehmenData = ['Philosophie', 'Karriere'];
// let unList = document.createElement("ul");
// unList.setAttribute("class", "nav navbar-nav");
//
// // Iterate navData
// navData.forEach(function (value) {
//     let li = document.createElement('li');
//     let link = document.createElement("a");
//     link.innerText = value;
//     li.appendChild(link);
//     unList.appendChild(li);
//     if (value === 'Unternehmen') {
//         li.innerText = "";
//         li.setAttribute("class", "dropdown");
//         let link = document.createElement("a");
//         link.innerText = value;
//         link.setAttribute("class", "dropdown_toggle");
//         li.appendChild(link);
//         let innerUnList = document.createElement('ul');
//
//         innerUnList.setAttribute("class", "dropdown-content");
//         innerUnList.setAttribute("id", "myDropdown");
//         innerUnList.style.backgroundColor = "black";
//
//         unternehmenData.forEach((item) => {
//             let link = document.createElement("a");
//             link.innerText = item;
//             link.style.textDecoration = "none";
//             link.style.color = "white";
//             let li2 = document.createElement('li');
//             li2.appendChild(link);
//             innerUnList.appendChild(li2);
//         });
//         li.appendChild(innerUnList);
//     }
// });
// document.body.appendChild(unList)
// container.append(barHeader, unList);
// navBar.appendChild(container);

// Refactoring
"use strict";

class NavBar {
    constructor(navBarId, navData, unternehmenData) {
        this.navBar = document.getElementById(navBarId);
        this.navBar.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-dark fixed-top");
        this.navData = navData;
        this.unternehmenData = unternehmenData;
        this.container = document.createElement("div");
        this.container.setAttribute("class", "collapse navbar-collapse");
        this.barHeader = document.createElement("div");
        this.barHeader.setAttribute("class", "navbar-header");
        this.barHeader.setAttribute("class", "navbar-brand");
        this.barHeader.innerText = "abalo";
        this.unList = document.createElement("ul");
        this.unList.setAttribute("class", "navbar-nav");
        this.createNavItems();
    }

    createNavItem(value) {
        const li = document.createElement('li');
        const link = document.createElement("a");
        link.innerText = value;
        li.setAttribute("class", "nav-item");
        link.setAttribute("class", "nav-link");
        link.setAttribute("href", "#");
        li.appendChild(link);
        this.unList.appendChild(li);
        if (value === 'Unternehmen') {
            li.innerText = "";
            li.setAttribute("class", "nav-item dropdown");
            li.setAttribute("id", "dropDownList");
            const link = document.createElement("a");
            link.innerText = value;
            link.setAttribute("class", "nav-link dropdown_toggle");
            link.setAttribute("id", "navbarDropdownMenuLink");
            link.setAttribute("data-toggle", "dropdown");
            link.setAttribute("aria-haspopup", "true");
            link.setAttribute("aria-expanded", "false");
            link.setAttribute("href", "#");
            li.appendChild(link);
            const innerUnList = document.createElement('div');
            innerUnList.setAttribute("id", "dr-menu");
            innerUnList.setAttribute("class", "dropdown-menu");
            innerUnList.setAttribute("aria-labelledby", "navbarDropdownMenuLink");
            this.unternehmenData.forEach((item) => {
                const link = document.createElement("a");
                link.setAttribute("class", "dropdown-item");
                link.innerText = item;
                link.setAttribute("href", "#");
                innerUnList.appendChild(link);
            });
            li.appendChild(innerUnList);
        }
    }

    createNavItems() {
        this.navData.forEach((value) => {
            this.createNavItem(value);
        });
    }

    addToggleEvent() {
        document.getElementById("dropDownList").onclick = () => {
            document.getElementById("dropDownList").classList.toggle("show");
            document.getElementById("dr-menu").classList.toggle("show");
            document.getElementById("navbarDropdownMenuLink").toggleAttribute("aria-expanded");
        }
    }

    render() {
        this.container.append(this.barHeader, this.unList);
        this.navBar.appendChild(this.container);
        this.addToggleEvent();
    }
}

const navData = ['Home', 'Kategorien', 'Verkaufen', 'Unternehmen'];
const unternehmenData = ['Philosophie', 'Karriere'];
const navBar = new NavBar("navId", navData, unternehmenData);
navBar.render();
