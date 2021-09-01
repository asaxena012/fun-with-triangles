const baseEl = document.querySelector('#input-base')
const heightEl = document.querySelector('#input-height')
const submitBtn = document.querySelector('button')
const outputEl = document.querySelector('#output')
const errorEl = document.querySelector('#error')

const displayError = (message) => {
    outputEl.textContent = ''
    errorEl.style.display = 'block';
    errorEl.textContent = message
}

const hideError = () => errorEl.style.display = 'none'


const calculateArea = () => {
    const base = Number(baseEl.value);
    const height = Number(heightEl.value)

    try{
        if(base < 0 || height < 0){
            throw {message: "Please check if the values are positive and valid"}
        }

        return 0.5 * base * height;
    } catch (err) {
        displayError(err.message)
    }

}

const submitHandler = () => {
    const area = calculateArea();
    if(!area){
        displayError("Please check if the values are positive and valid")
        return;
    }
    hideError()
    outputEl.textContent = `The area of given triangle is ${area}`
}

submitBtn.addEventListener('click', submitHandler)