// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.

    let url = new URL('https://dummyjson.com/carts')
fetch(url)
    .then(res => res.json())
    .then(value => {

        let carts = value.carts
        console.log(carts)

        for (const cart of carts) {
            let div = document.createElement('div')
            document.body.appendChild(div)
            div.classList.add('block')

            div.innerText = `Id: ${cart.id}`

            let ul = document.createElement('ul')
            div.appendChild(ul)

            for (const item of cart.products) {
                let li = document.createElement('li')
                ul.appendChild(li)
                li.innerText = item.title

                let img = document.createElement('img')
                ul.appendChild(img)
                img.src=item.thumbnail

            }
            let p = document.createElement('p')
            let h4 = document.createElement('h4')
            let h3= document.createElement('h3')
            div.append(p,h4,h3)

            p.innerText=`Total items: ${cart.totalProducts}`
            h4.innerText=`Total: ${cart.total}$`
            h3.innerText=`Discounted Total: ${cart.discountedTotal}$`
        }
    })





// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX
// (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача
// (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX
// де ХХХ - айді користувача)















