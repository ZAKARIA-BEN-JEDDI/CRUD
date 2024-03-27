var temp;
var table = document.getElementById('table')
var title = document.getElementById('title')
var price = document.getElementById('price')
var taxes = document.getElementById('taxes')
var ads = document.getElementById('ads')
var discount = document.getElementById('discount')
var total = document.getElementById('total')
var count = document.getElementById('count')
var categorie = document.getElementById('categorie')
var create = document.getElementById('create')
var search = document.getElementById('search')

// calcul total
price.focus()
function calcul_total() {
    var t =0
    var total_FINAL = ''
    t = Number(price.value)+ Number(taxes.value)+Number(ads.value)+Number(discount.value)
    if (t>0) {
        total_FINAL = (t+' DH')
        total.style.cssText = 'background-color:green;'
    }if (t=='' || t==0 || t<0 || t==null){
        total.style.cssText = 'background-color:red;'
    }
    total.setAttribute('placeholder',total_FINAL)
}
price.onfocus = calcul_total
taxes.onfocus = calcul_total
ads.onfocus = calcul_total
discount.onfocus = calcul_total

// vider input
function Vider__Input() {
    title.value = ''
    price.value = ''
    taxes.value = ''
    ads.value = ''
    discount.value = ''
    total.setAttribute('placeholder','')
    count.value = ''
    categorie.value = ''
}

// create
var tableau = []
function CREATE() {
    calcul_total()
    var x = {
        id : tableau.length+1, 
            title1 : title.value,
            price1 : price.value,
            taxes1 : taxes.value,
            ads1 : ads.value,
            discount1 : discount.value,
            total1 : total.getAttribute('placeholder'),
            categorie1 : categorie.value,
        }
    if (create.value == 'create') {
        tableau.push(x)
        Vider__Input()
        READ()
    }else{
        tableau[temp] = x
        READ()
        create.value = 'create'
        Vider__Input()
    }
}
document.getElementById('create').addEventListener('click',CREATE)

function READ() {
    var title_a_chercher = search.value
    var tbody1 = document.querySelectorAll('tbody')
    for (let j = 0; j < tbody1.length; j++) {
        tbody1[j].innerHTML = ''
    }
    var tbody = document.createElement('tbody')
    if (title_a_chercher == '') {
        for (let i = 0; i < tableau.length; i++) {
            tbody.innerHTML +=`
                <tr>
                    <td>${tableau[i].id}</td>
                    <td>${tableau[i].title1}</td>
                    <td>${tableau[i].price1}</td>
                    <td>${tableau[i].taxes1}</td>
                    <td>${tableau[i].ads1}</td>
                    <td>${tableau[i].discount1}</td>
                    <td>${tableau[i].categorie1}</td>
                    <td>${tableau[i].total1}</td>
                    <td>
                        <input class='btn btn-primary rounded-pill' type='button' value='UPDATE' id='${'btnUPDATE'+(i)}' onclick="UPDATE(${(i)})"> 
                    </td>
                    <td>
                        <input class='btn btn-primary rounded-pill' type='button' value='DELETE' id='${'btnDELETE'+(i)}' onclick="DELETE(${(i)})"> 
                    </td>
                </tr>
            `
            table.appendChild(tbody)
        
        }
    }
    for (let i = 0; i < tableau.length; i++) {
        if (title_a_chercher == tableau[i].title1) {
            tbody.innerHTML +=`
                <tr>
                    <td>${tableau[i].id}</td>
                    <td>${tableau[i].title1}</td>
                    <td>${tableau[i].price1}</td>
                    <td>${tableau[i].taxes1}</td>
                    <td>${tableau[i].ads1}</td>
                    <td>${tableau[i].discount1}</td>
                    <td>${tableau[i].categorie1}</td>
                    <td>${tableau[i].total1}</td>
                    <td>
                        <input class='btn btn-primary rounded-pill' type='button' value='UPDATE' id='${'btnUPDATE'+(i)}' onclick="UPDATE(${(i)})"> 
                    </td>
                    <td>
                        <input class='btn btn-primary rounded-pill' type='button' value='DELETE' id='${'btnDELETE'+(i)}' onclick="DELETE(${(i)})"> 
                    </td>
                </tr>
            `
            table.appendChild(tbody)
        
        }
    }

    for (let i = 0; i < tableau.length; i++) {
        if (title_a_chercher == tableau[i].categorie1) {
            tbody.innerHTML +=`
                <tr>
                    <td>${tableau[i].id}</td>
                    <td>${tableau[i].title1}</td>
                    <td>${tableau[i].price1}</td>
                    <td>${tableau[i].taxes1}</td>
                    <td>${tableau[i].ads1}</td>
                    <td>${tableau[i].discount1}</td>
                    <td>${tableau[i].categorie1}</td>
                    <td>${tableau[i].total1}</td>
                    <td>
                        <input class='btn btn-primary rounded-pill' type='button' value='UPDATE' id='${'btnUPDATE'+(i)}' onclick="UPDATE(${(i)})"> 
                    </td>
                    <td>
                        <input class='btn btn-primary rounded-pill' type='button' value='DELETE' id='${'btnDELETE'+(i)}' onclick="DELETE(${(i)})"> 
                    </td>
                </tr>
            `
            table.appendChild(tbody)
        
        }
    }

}

// search (title & categorie)
document.getElementById('search__title').addEventListener('click',READ)
document.getElementById('search__categorie').addEventListener('click',READ)
// function SEARCH_TITLE() {
//     var title_a_chercher = search.value
//     for (let i = 0; i < tableau.length; i++) {
//         if (title_a_chercher == tableau[i].title1) {
            
//         }
//     }
// }

// delete all
function DELETE_ALL() {
    tableau.splice(0,tableau.length)
    READ()
}
document.getElementById('delete__all').addEventListener('click',DELETE_ALL)
// update
function UPDATE(x) {
    Vider__Input()
    title.value = tableau[x].title1
    price.value = tableau[x].price1
    taxes.value = tableau[x].taxes1
    ads.value = tableau[x].ads1
    discount.value = tableau[x].discount1
    categorie.value = tableau[x].categorie1
    count.style.display = 'none'
    create.value = 'UPDATE'
    temp = x
}
// delete
function DELETE(y) {
    var tbody1 = document.querySelectorAll('tbody')
    for (let j = 0; j < tbody1.length; j++) {
        tbody1[j].innerHTML = ''
    }
    tableau.splice(y,1)
    READ()
}