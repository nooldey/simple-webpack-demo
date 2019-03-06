import * as xMath from './libs/math';

function component() {
  let element = document.createElement('div');
  element.innerHTML = [
    'Hello',
    'webpack',
    'with',
    'pwa',
    '3 cubed is equal to ' + xMath.cube(3),
    '5 cubed is equal to ' + xMath.cube(5),
  ].join('\n\n');
  return element;
}

document.body.appendChild(component());
