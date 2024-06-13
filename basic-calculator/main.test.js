const { fireEvent, getByText } = require('@testing-library/dom');
require('@testing-library/jest-dom/extend-expect');
const { setupEvents} = require('./main.js');


describe('Calculator Integration Test', () => {
  let container;

  beforeEach(() => {
    // Configuration du DOM pour chaque test
    document.body.innerHTML = `
      <div>
        <div class="first-number"></div>
        <div class="second-number"></div>
        <div class="ops"></div>
        <div class="result"></div>
        <button class="number">3</button>
        <button class="number">2</button>
        <button class="operator">*</button>
        <button class="equal">=</button>
      </div>
    `;
    // Initialisez les variables et fonctions
    container = document.body;
    setupEvents(); 
  });

  test('adds numbers correctly', () => {
    const button1 = getByText(container, '3');
    const button2 = getByText(container, '2');
    const plusButton = getByText(container, '*');
    const equalButton = getByText(container, '=');
    const firstNumberText = container.querySelector('.first-number');
    const secondNumberText = container.querySelector('.second-number');
    const operatorText = container.querySelector('.ops');
    

    // Simulez les clics 
    fireEvent.click(button1);
    fireEvent.click(plusButton);
    fireEvent.click(button2);
    fireEvent.click(equalButton);

    // Vérifiez que le résultat est correct
    expect(firstNumberText).toHaveTextContent('6');
    expect(secondNumberText).toHaveTextContent('');
    expect(operatorText).toHaveTextContent('');
  });

});
