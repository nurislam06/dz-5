const searchBtn = document.getElementById('searchBtn')
const inputField = document.getElementById('input')
const modal = document.getElementById('modalDiv')
let modalOpenBtn = document.getElementById('modalBtn')
const smallWindow = document.getElementById('smallWindow')
const searchCoctail = async () => {
    try {
        const coctailDb = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputField.value}`)
        const data = await coctailDb.json();
        console.log(data);
        for (let i = 0; i< data.drinks.length; i++) {
            const divMain = document.createElement('div')
            divMain.className = 'coctail'
            const p = document.createElement('p')
            p.setAttribute('id', 'modalWin')
            p.innerText = data.drinks[i].strDrink;
            p.style.cursor = 'pointer'
            const span = document.createElement('span')
            span.className = 'img'
            span.style.backgroundImage = `url(${data.drinks[i].strDrinkThumb})`
            span.style.backgroundSize = 'cover'
            span.style.backgroundPosition = 'center'//Картинка напитка
            const divModal = document.createElement('div')
            divModal.className = 'modalDiv'
            divModal.setAttribute('id','modalDiv')//Модальное окно
            const btnMore = document.createElement('button')
            btnMore.textContent = 'View ditails'
            btnMore.addEventListener('click',  () => {
                divModal.style.display = "block"
            })
            btnMore.setAttribute('id', 'modalBtn')
            const innerModalDiv = document.createElement('div')
            innerModalDiv.className = 'modal-content'//Модальное окно
            const modalHeader = document.createElement('div')
            modalHeader.className = 'modal-header'
            const inModalHeadH = document.createElement('h3')
            inModalHeadH.innerText = `${data.drinks[i].strDrink}\nIngridients`;
            const inModalHeadSpan = document.createElement('span')
            inModalHeadSpan.className = 'close'
            inModalHeadSpan.textContent = 'X'
            inModalHeadSpan.addEventListener('click', () => {
                divModal.style.display = "none"
            })
            modalHeader.appendChild(inModalHeadH)
            modalHeader.appendChild(inModalHeadSpan)//Модальный хэдэр
            const modalBody = document.createElement('div')
            modalBody.className = 'modal-body'
            const inModalBodyContent = document.createElement('p')
            inModalBodyContent.innerText = 'Тут будут ингридиенты!'
            modalBody.appendChild(inModalBodyContent)//Модальное тело
            const modalFooter = document.createElement('div')
            modalFooter.className = 'modal-footer'
            const inModalFooterH = document.createElement('h3')
            inModalFooterH.textContent = 'Instruction: '
            const inModalFooterP = document.createElement('p')
            inModalFooterP.textContent = data.drinks[i].strInstructions;
            modalFooter.appendChild(inModalFooterH)
            modalFooter.appendChild(inModalFooterP)//Модальный футер, способ приготовления
            innerModalDiv.appendChild(modalHeader)
            innerModalDiv.appendChild(modalBody)
            innerModalDiv.appendChild(modalFooter)
            divModal.appendChild(innerModalDiv)
            divMain.append(span)
            divMain.appendChild(p)
            divMain.append(btnMore)
            divMain.append(divModal)
            smallWindow.append(divMain);
        }
    }
    catch (e) {
        alert("404 Not Found")
    }
    const ingredients = async () => {
        try {
            const ingredients = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
            const data = await ingredients.json();
            console.log(data);
            for (let i = 0; i < data.drinks.length; i++) {
                
            }
        }catch (e) {

        }
    }

    ingredients()
}


searchBtn.addEventListener('click', searchCoctail)


function modalClose() {
    modal.style.display = 'none'
}

window.onclick = function(event){
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


