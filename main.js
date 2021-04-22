const boys = ['Damian', 'Przemek', 'Bartek', 'Roman'];
const girls = ['Kasia', 'Ania', 'Ewa', 'Asia', 'Basia', 'Justyna', 'Magda'];

const btn = document.querySelector('button');
const sex = document.querySelectorAll('input[name="sex"]');

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
}

function randomName(e) {
  e.preventDefault();

  const writeName = document.querySelector('.show-name');

  sexArr = [...sex];

  const filtered = sexArr.filter((el) => el.checked);

  switch (filtered[0].value) {
    case 'boy':
      writeName.textContent = boys[randomNumber(0, boys.length)];
      break;

    case 'girl':
      writeName.textContent = girls[randomNumber(0, girls.length)];
      break;

    default:
      console.log('default');
      break;
  }
}

btn.addEventListener('click', randomName);
