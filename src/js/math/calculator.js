/* global document, difference, sum */
function bindCalc() {
  const numA = document.getElementById('numA');
  const numB = document.getElementById('numB');
  const operator = document.getElementById('operator');

  const log = message => console.log(message); // eslint-disable-line no-console
  const calc = () => {
    const math = (operator.value === 'Add') ? sum : difference;
    log(math(numA.value, numB.value));
  };

  numA.addEventListener('change', calc);
  numB.addEventListener('change', calc);
  operator.addEventListener('change', calc);

  // $('#numA, #numB, #operator').change(() => {
  //   const numA = $('#numA').val();
  //   const numB = $('#numB').val();
  //   const operator = $('#operator').val();

  //   const math = (operator === 'Add') ? sum : difference;
  //   log(math(numA, numB));
  // });
}

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    bindCalc,
  };
}
