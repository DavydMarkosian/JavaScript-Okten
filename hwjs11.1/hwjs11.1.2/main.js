




// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.


fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(res => {

        let recipes = res.recipes // []
        console.log(recipes)

        for (const recipe of recipes) {

            let div = document.createElement('div')
            document.body.append(div)
            div.classList.add('bucket')

            let img = document.createElement('img')
            img.src = recipe.image
            div.innerText = `meal ${recipe.id}:  ${recipe.name}`

            div.appendChild(img)

            let ul = document.createElement('ul')
            div.appendChild(ul)

            let arrIngr = recipe.ingredients
            for (const ingr of arrIngr) {
                let li = document.createElement('li')
                ul.append(li)
                li.innerText = ingr

            }
        }
    })















