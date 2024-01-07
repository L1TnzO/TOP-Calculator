const btnContainer = document.querySelector('.buttons-container')

const history = document.querySelector('.history');

const result = document.querySelector('.result')

btnContainer.addEventListener ('click', (event)=> {
    let target = event.target;
    //Check if the element is a direct child div of the container
    if (target.matches('.buttons-container > div')) {
        switch (target.textContent){
            case '=':
                equal(history.textContent);
                break;
            case '⌫':
                history.textContent = history.textContent.slice(0, -1);
                break;
            case 'Ac':
                history.textContent = '';
                result.textContent = '0';
                break;
            case '/':
            case '*':
            case '-':
            case '+':
                operate();
                history.textContent += target.textContent;
                break;
            default:
                history.textContent += target.textContent;
        }
    }
})

const operate = () => {
    let str = history.textContent;
    str = str.replace(/([/*+-]).*?([/*+-])/, '');
    if (str.includes('/') || str.includes('*') || str.includes('-') || str.includes('+')) {
        equal(str)
        history.textContent = result.textContent;
    }
}


const equal = (str)=>{
    const foundOperator = str.match(/[/*+-]/)[0];
    [a,b] = str.split(foundOperator).map(x => x ? Number(x) : NaN); //Verify if the second parameter is empty, and converts it to NaN
    if (!isNaN(b)) {
        switch (foundOperator){
            case '/':
                resultNumber = a/b;
                break
            case '*':
                resultNumber = a*b;
                break
            case '-':
                resultNumber = a-b;
                break
            case '+':
                resultNumber = a+b;
                break
        }
        result.textContent = resultNumber.toFixed(8).replace(/\.?0+$/, '');
    }
}

//TODO: fix minus operation.