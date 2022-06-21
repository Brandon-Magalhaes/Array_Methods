const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const showMillionaireBtn = document.getElementById('show-millionaires')
const sortBtn = document.getElementById('sort')
const calculateWealthBtn = document.getElementById('calculate-wealth')
/*https://randomuser.me/api    site que fica randomizando nomes etc*/

getRandomUser();

let data = [];

async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api/');//buscando site
    const data = await res.json();//inserindo com json
    
    const user = data.results[0];//chama o resultado
    const newUser = {
        //as variaveis abaixo estao no site, estou puxando elas pra ver o resultado
        name:`${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 100000),//adicionando até 100.000
    }
    addData(newUser);
}


function doubleMoney(){//dobra o dinheiro
    data = data.map((user) => {
        return {...user, money: user.money * 2};
    });
    updateDOM();
}

function showMillionaires(){//amostra o que tem 1 milhao pra cima
    data = data.filter((user) => user.money > 1000000);
    updateDOM();
}

function sortByRichest(){//ordena por ordem do maior valor
    data.sort((a,b) => b.money - a.money);
    updateDOM();
}

//adiciona um novo objeto para data
function addData(obj){
    data.push(obj);

    updateDOM();
}

function calculateWealth(){
    const wealth = data.reduce((acc, user) => (acc += user.money), 0);//faz o calculo da soma
    const wealthEl = document.createElement('div');//adiciona a div
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`// insere o html pelo js
    main.appendChild(wealthEl);//adiciona ao main
}

function updateDOM(providedData = data){

    main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';//limpar main, div, nao deixa duplicar

    providedData.forEach(item => {
        const element = document.createElement('div');//cria uma div para cada item adicionado
        element.classList.add('person')//cria a classe person para cada item adicionado e faz funcionar o do css
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;//colocando o nome e o dinheiro
        // element.innerHTML = `<strong>${item.name}</strong> ${item.money}`;
        main.appendChild(element);//acrescenta o filho ao main
    });
}

function formatMoney(number){
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');//aqui eu coloco ponto e vírgula nos numeros ex: 100.000.000
}

addUserBtn.addEventListener('click',getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
showMillionaireBtn.addEventListener('click', showMillionaires);
sortBtn.addEventListener('click',sortByRichest)
calculateWealthBtn.addEventListener('click',calculateWealth)
