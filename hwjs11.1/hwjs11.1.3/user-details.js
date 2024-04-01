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

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(value => {
        let wrap = document.createElement('div')
        document.body.appendChild(wrap)
        console.log(value)
        console.log(wrap)

        function createListRecursion(value, wrap) {
            let ul = document.createElement('ul')

            console.log(wrap);

            console.log(ul)
            wrap.appendChild(ul)

            for (const key in value) {

                let li = document.createElement('li')
                ul.appendChild(li)
                li.innerText = `${key} : ${value[key]} `

                if (typeof value[key] === 'object' && value[key] !== null) {
                    li.innerText = `${key}: `
                    createListRecursion(value[key], li)
                }
            }
        }

        createListRecursion(value, wrap)
    })


        //
        // let h3Name = document.createElement('h3')
        // let h3UserName = document.createElement('h3')
        // let pId = document.createElement('p')
        // let pEmail = document.createElement('p')
        // let pPhone = document.createElement('p')
        // let pWebsite = document.createElement('p')
        // let ulAd = document.createElement('ul')
        // let ulCom = document.createElement('ul')
        //
        // h3Name.innerText = ` ${value.name}`
        // h3UserName.innerText = `username: ${value.username}`
        // pId.innerText = `id: ${value.id}`
        // pEmail.innerText = `${value.email}`
        // pPhone.innerText = `${value.phone}`
        // pWebsite.innerText = `${value.website}`
        // ulAd.innerText = `Address:`
        // ulCom.innerText = `Company:`

        // let address = value.address
        // let {city, street, suite, zipcode, geo} = address
        // let arrAd = [city, street, suite, zipcode, geo]
        //
        // for (const arrElement of arrAd) {
        //     let li = document.createElement('li')
        //     li.innerText = arrElement
        //     ulAd.appendChild(li)
        //
        //     if (typeof arrElement == 'object') {
        //         li.innerText = 'Geo:'
        //
        //         let {lat, lng} = arrElement
        //         let arrGeo = [lat, lng]
        //         for (const arrGeoElement of arrGeo) {
        //             let ulInner = document.createElement('ul')
        //             ulAd.appendChild(ulInner)
        //
        //             let liInner = document.createElement('li')
        //             ulInner.appendChild(liInner)
        //             liInner.innerText = arrGeoElement
        //         }
        //
        //     }
        //
        // }
        // div.append(h3Name, h3UserName, pId, pEmail, pPhone, pWebsite, ulAd)
        // let company = value.company
        // let {bs, catchPhrase, name} = company
        // let arr = [bs, catchPhrase, name]
        //
        // for (const arrElement of arr) {
        //     div.appendChild(ulCom)
        //
        //     let li = document.createElement('li')
        //     li.innerText = arrElement
        //     ulCom.appendChild(li)
        // }




//==============================================user-details mini project
//===================================================================================================================
// let h3Name = document.createElement('h3')
// let h3UserName = document.createElement('h3')
// let pId = document.createElement('p')
// let pEmail = document.createElement('p')
// let pPhone = document.createElement('p')
// let pWebsite = document.createElement('p')
// let ulAd = document.createElement('ul')
// let ulCom = document.createElement('ul')
//
// h3Name.innerText = `name:  ${value.name}`
// h3UserName.innerText = `username: ${value.username}`
// pId.innerText = `id: ${value.id}`
// pEmail.innerText = `email:  ${value.email}`
// pPhone.innerText = `phone: ${value.phone}`
// pWebsite.innerText = `website: ${value.website}`
// ulAd.innerText = `Address:`
// ulCom.innerText = `Company:`
//
// let address = value.address
// let {city, street, suite, zipcode, geo} = address
// let arrAd = [{city}, {street}, {suite}, {zipcode}, {geo}]
//
// for (const arrElement of arrAd) {
//     let li = document.createElement('li')
//     li.innerText = `${Object.keys(arrElement)}: ${Object.values(arrElement)}`
//     ulAd.appendChild(li)
//
//     if (Object.keys(arrElement) == 'geo') {
//         let {lat, lng} = geo
//         let arrGeo = [{lat}, {lng}]
//
//         let ulInner = document.createElement('ul')
//         ulAd.appendChild(ulInner)
//
//         for (const arrGeoElement of arrGeo) {
//             li.innerText = 'geo:'
//
//             let liInner = document.createElement('li')
//             ulInner.appendChild(liInner)
//
//             liInner.innerText = `${Object.keys(arrGeoElement)}: ${Object.values(arrGeoElement)} `
//
//         }
//
//     }
//
// }
//
// div.append(h3Name, h3UserName, pId, pEmail, pPhone, pWebsite, ulAd)
//
// let company = value.company
// let {bs, catchPhrase, name} = company
// let arr = [{bs}, {catchPhrase}, {name}]
//
// for (const arrElement of arr) {
//     div.appendChild(ulCom)
//
//     let li = document.createElement('li')
//     li.innerText = `${Object.keys(arrElement)}: ${Object.values(arrElement)}`
//     ulCom.appendChild(li)
// }




























