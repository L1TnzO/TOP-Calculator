const btnContainer = document.querySelector('.buttons-container')

btnContainer.addEventListener ('click', (e)=> {
    alert(e.target.textContent);
})