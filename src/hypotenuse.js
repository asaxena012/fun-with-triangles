const baseEl = document.querySelector('#input-base');
const perpendicularEl = document.querySelector('#input-perpendicular');
const submitBtn = document.querySelector('button');
const outputEl = document.querySelector('#output')
const errorEl = document.querySelector('#error')

const displayError = (message) => {
    errorEl.style.display = 'block';
    errorEl.textContent = message
}

const hideError = () => errorEl.style.display = 'none'

const calculateHypotenuse = () => {
    try{

        const base = Number(baseEl.value);
        const perpendicular = Number(perpendicularEl.value);
        
        if(base < 0 || perpendicular < 0){
            throw {message: "Please check if entered some positive numbers"}
        }
        hideError()
        return Math.sqrt(base*base + perpendicular*perpendicular)
    } catch(err) {
        displayError(err.message);
    }

}

const submitHandler = () => {
    const value = calculateHypotenuse();
    if(value) outputEl.textContent = 'The hypotenuse value is ' + value;
}

submitBtn.addEventListener('click', submitHandler)
