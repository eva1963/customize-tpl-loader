import tpl from './info.tpl';


const oApp = document.querySelector('#app');
const info = tpl({
    name: 'John',
    age: 30,
    city: 'New York'
})
console.log(info);

oApp.innerHTML = info;