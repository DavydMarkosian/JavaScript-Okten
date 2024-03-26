// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX
// (замість ХХХ - айді юзера)

// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача
// (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX
// де ХХХ - айді користувача)


fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(value => {

        let ol = document.createElement('ol')
        document.body.appendChild(ol)

        for (const user of value) {

            let li = document.createElement('li')
            let a = document.createElement('a')

            ol.appendChild(li)
            li.appendChild(a)
            a.innerHTML=`${user.name} <br>Id: ${user.id}`
            a.href=`user-details.html?id=${user.id}`

        }

    })












