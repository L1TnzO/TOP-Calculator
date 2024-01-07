const btnContainer = document.querySelector('.buttons-container')

const history = document.querySelector('.history');

btnContainer.addEventListener ('click', (event)=> {
    let target = event.target;
    //Check if the element is a direct child div of the container
    if (target.matches('.buttons-container > div')) {
        switch (target.textContent){
            case '=':
                alert('equal');
                break
            case '⌫':
                history.textContent = history.textContent.slice(0, -1);
                break
            case 'Ac':
                history.textContent = '';
                break
            case '/':
                operate()

            default:
                history.textContent += target.textContent;
        }
    }
})

const operate = () => {
    let str = history.textContent;
    if (str.includes('/') || str.includes('*') || str.includes('-') || str.includes('+')) {
        equal(str)
        
    }
}

const equal = (str)=>{
    const foundOperator = str.match(/[/*+-]/)[0];
    alert(foundOperator)
    alert(str.split(foundOperator));
    [a,b] = [str.split(foundOperator)[0],str.split(foundOperator)[1]]
    switch (foundOperator){
        case '/':
            alert(a/b);
            break
        case '*':
            alert(a*b);
            break
        case '-':
            alert(a-b);
            break
        case '+':
            alert(a+b);
            break
    }
}