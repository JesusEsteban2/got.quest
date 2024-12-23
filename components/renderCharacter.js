export function renderCharacter(element) {
  const categoryItem = {
    king: `<li>Años de reinado: ${element.reignYears}</li>`,
    fighter: `<li>Arma: ${element.weapon}</li><li>Destreza: ${element.skillLevel}</li>`,
    // adviser: `<li>Asesora a: ${element.adviseTo.name}</li>`,
    // squire: `<li>Sirve a: ${element.servesTo.name}</li><li>Servilismo: ${element.serveLevel}</li>`,
  };

  let emoji = '🗡';
  if (element.category === 'king') {
    emoji = '👑';
  }
  if (element.category === 'adviser') {
    categoryItem.adviser = `<li>Asesora a: ${element.adviseTo.name}</li>`;
    emoji = '🎓';
  }
  if (element.category === 'squire') {
    categoryItem.squire = `<li>Sirve a: ${element.servesTo.name}</li><li>Servilismo: ${element.serveLevel}</li>`;
    emoji = '🛡';
  }

  const classCharacter = categoryItem[element.category];
  let isAliveItem = ['<i class="fas fa-thumbs-down"></i>', 'isDead'];

  if (element.isAlive) {
    isAliveItem = ['<i class="fas fa-thumbs-up"></i>', ''];
  }
  const img = element.name.toLowerCase();
  const template = `
          <li class="character col">
            <div class="card character__card">
              <img
                src="img/${img}.jpg"
                alt="Nombre y familia del personaje"
                width="300px"
                class="character__picture card-img-top ${isAliveItem[1]}"
              />
              <div class="card-body">
                <h2 class="character__name card-title h4">${element.name} ${element.family}</h2>
                <div class="character__info">
                  <ul class="list-unstyled">
                    <li>Edad: ${element.age} años</li>
                    <li>
                      Estado:
                      ${isAliveItem[0]}
                    </li>
                  </ul>
                </div>
                <div class="character__overlay">
                  <ul class="list-unstyled">
                  ${classCharacter}
                  </ul>
                  <div class="character__actions">
                    <button class="character__action btn" habla>habla</button>
                    <button class="character__action btn muere">muere</button>
                  </div>
                </div>
              </div>
              <i class="emoji">${emoji}</i>
            </div>
          </li>`;

  const insertPoint = document.querySelector('.characters-list');
  insertPoint.insertAdjacentHTML('afterbegin', template);

  console.dir(insertPoint);

  const buttons = document.querySelectorAll('button');

  buttons[0].addEventListener('click', () => handlerHabla(element));
  buttons[1].addEventListener('click', () => handlerMuere(element));
  // element[link]=insertPoint;
  return insertPoint;
}

export function renderMessage(message, picture) {
  const template = `
     <div class="comunications-message"> 
        <p class="comunications-tex">${message}</p>
        <img
         class="comunications-picture"
         src="./img/${picture}.jpg"
          alt="Nombre y familia del que habla"
        />
      </div>`;

  const insertPoint = document.querySelector('.comunications');
  const item = insertPoint.insertAdjacentHTML('afterbegin', template);
  insertPoint.classList.replace('comunications', 'comunications.on');

  setTimeout(() => {
    insertPoint.classList.replace('comunications.on', 'comunications');
    const childPoint = document.querySelector('.comunications-message');
    childPoint.remove();
  }, 2000);

  return insertPoint.children;
}

function handlerHabla(element) {
  console.log(element);
  const men = renderMessage(element.message, element.name.toLowerCase());
}

function handlerMuere(element) {
  //TODO: Falta renderizado tras la muerte.
  element.isAlive = false;

  console.dir(element);
}
