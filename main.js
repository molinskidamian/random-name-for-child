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
  // console.log(sex);

  sexArr = [...sex];

  const filtered = sexArr.filter((el) => el.checked);
  console.log(`Wybrana płeć: ${filtered[0].value}`);

  switch (filtered[0].value) {
    case 'boy':
      console.log('losuj imię dla chłopca');

      console.log(boys[randomNumber(0, boys.length)]);

      break;

    case 'girl':
      console.log('losuj imię dla dziewczynki');
      console.log(girls[randomNumber(0, girls.length)]);
      break;

    default:
      console.log('default');

      break;
  }
}

btn.addEventListener('click', randomName);
