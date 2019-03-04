import printMe from './print.js';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');
  element.innerHTML = ['Hello','webpack','i am','pwa','\n'].join(' ');
  btn.innerHTML = 'click me and check the console';
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());