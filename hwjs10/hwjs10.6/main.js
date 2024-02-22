// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача


let input = document.createElement('input')
document.body.append(input)

let btn = document.createElement('button')
document.body.append(btn)
btn.type = 'button'
btn.textContent = 'check'

input.placeholder = 'Enter your age'

btn.addEventListener('click', () => {
    input.value > 18 ? alert('good') : alert('you are not accepted');
    input.value = ''
})






















