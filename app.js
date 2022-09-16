// https://www.omnicalculator.com/conversion/acres-to-square-feet-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const squarefeetRadio = document.getElementById('squarefeetRadio');
const acresRadio = document.getElementById('acresRadio');

let squarefeet;
let acres = v; 

// labels of the inpust
const variable = document.getElementById('variable');

squarefeetRadio.addEventListener('click', function() {
  variable.textContent = 'Acres';
  acres = v;
  result.textContent = '';
});

acresRadio.addEventListener('click', function() {
  variable.textContent = 'Square feet';
  squarefeet = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(squarefeetRadio.checked)
    result.textContent = `Square feet = ${computesquarefeet().toFixed(5)}`;

  else if(acresRadio.checked)
    result.textContent = `Acres = ${computeacres().toFixed(5)}`;
})

// calculation

function computesquarefeet() {
  return Number(acres.value) * 43560;
}

function computeacres() {
  return Number(squarefeet.value) / 43560;
}