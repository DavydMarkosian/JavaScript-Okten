// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX
// (замість ХХХ - айді юзера)
//-----------------------------------------------------------
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача
// (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX
// де ХХХ - ай---ді користувача)

let url = new URL(location.href)
let id = url.searchParams.get('id');
console.log(id)

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(value => {
        let div = document.createElement('div')
        document.body.appendChild(div)

        let h3Name = document.createElement('h3')
        let h3UserName = document.createElement('h3')
        let pId = document.createElement('p')
        let pEmail = document.createElement('p')
        let pPhone = document.createElement('p')
        let pWebsite = document.createElement('p')
        let ulAd = document.createElement('ul')
        let ulCom = document.createElement('ul')

        h3Name.innerText = ` ${value.name}`
        h3UserName.innerText = `username: ${value.username}`
        pId.innerText = `id: ${value.id}`
        pEmail.innerText = `${value.email}`
        pPhone.innerText = `${value.phone}`
        pWebsite.innerText = `${value.website}`
        ulAd.innerText = `Address:`
        ulCom.innerText = `Company:`

        let address = value.address
        let {city, street, suite, zipcode, geo} = address
        let arrAd = [city, street, suite, zipcode, geo]

        for (const arrElement of arrAd) {
            let li = document.createElement('li')
            li.innerText = arrElement
            ulAd.appendChild(li)

            if (typeof arrElement == 'object') {
                li.innerText = 'Geo:'

                let {lat, lng} = arrElement
                let arrGeo = [lat, lng]
                for (const arrGeoElement of arrGeo) {
                    let ulInner = document.createElement('ul')
                    ulAd.appendChild(ulInner)

                    let liInner = document.createElement('li')
                    ulInner.appendChild(liInner)
                    liInner.innerText = arrGeoElement
                }

            }

        }
        div.append(h3Name, h3UserName, pId, pEmail, pPhone, pWebsite, ulAd)
        let company = value.company
        let {bs, catchPhrase, name} = company
        let arr = [bs, catchPhrase, name]

        for (const arrElement of arr) {
            div.appendChild(ulCom)

            let li = document.createElement('li')
            li.innerText = arrElement
            ulCom.appendChild(li)
        }
    })






























