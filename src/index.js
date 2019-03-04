import printMe from './print.js';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');
  element.innerHTML = ['Hello','webpack','with','pwa','\n'].join(' ');
  btn.innerHTML = 'click here';
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());