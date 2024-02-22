
let dates = JSON.parse(localStorage.getItem('dates'))


for (const date of dates) {
    let h1 = document.createElement('h1')
    document.body.append(h1)
    h1.innerText = date.date

}














