// Створити 3 інпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк,
// третій вмиіст ячеєк.

// При натисканні кнопки, вся ця інформація зчитується і формується табличка,
// з відповідним вмістом. (Додатковачастина для завдання)

let div = document.createElement('div')
document.body.append(div)
div.id = 'wrap'
let wrap = document.getElementById('wrap')
wrap.style.width = '100%'
wrap.style.display = 'flex'
wrap.style.justifyContent = 'space-between'

let inputTr = document.createElement('input')
wrap.append(inputTr)
inputTr.placeholder = 'Enter row count'
inputTr.type = 'number'
inputTr.min = 1
inputTr.max = 10
inputTr.style.width = '30%'

let inputTd = document.createElement('input')
wrap.append(inputTd)
inputTd.placeholder = 'Enter column count'
inputTd.type = 'number'
inputTd.min = 1
inputTd.max = 10
inputTd.style.width = '30%'

let inputText = document.createElement('input')
wrap.append(inputText)
inputText.placeholder = 'Enter your text'
inputText.type = 'string'
inputText.style.width = '30%'

let btn = document.createElement('button')
document.body.append(btn)
btn.innerText = 'create'
btn.style.marginTop = '8px'
btn.style.marginBottom = '8px'

let arrInputs = []
arrInputs.push(inputTr, inputTd, inputText)

btn.addEventListener('click', function () {

    if (inputText.value === '') {
        inputText.placeholder = 'fill up this field'
        return false
    }
    if (inputTr.value === '') {
        inputTr.placeholder = 'fill up this field'
        return false
    }
    if (inputTd.value === '') {
        inputTd.placeholder = 'fill up this field'
        return false
    } else {

        let table = document.createElement('table')
        document.body.append(table)

        for (let i = 0; i < inputTr.value; i++) {
            let tr = document.createElement('tr')
            table.append(tr)
            tr.classList.add('border')

            for (let i = 0; i < inputTd.value; i++) {
                let td = document.createElement('td')
                tr.append(td)
                td.classList.add('border')
                td.innerText = inputText.value
                td.style.textAlign = 'center'
                td.style.backgroundColor = '#9F9F9F38'

            }
            table.classList.add('border')
            table.classList.add('w')
        }
        inputTr.value = ''
        inputTd.value = ''
        inputText.value = ''
        inputText.placeholder = 'Enter your text'
        inputTr.placeholder = 'Enter row count'
        inputTd.placeholder = 'Enter column count'
    }
})





















