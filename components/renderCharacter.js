export function renderCharacter(element, insertPoint) {
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
        <div class="card character__card">
           <img
            src="img/${img}.webp"
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
        </div>`;

  insertPoint.insertAdjacentHTML('afterbegin', template);

  const buttons = insertPoint.querySelectorAll('button');

  buttons[0].addEventListener('click', () => handlerTalk(element));
  buttons[1].addEventListener('click', () => handlerDead(element));

  return insertPoint;
}

function renderMessage(message, pictureName) {
  const template = `
     <div class="comunications-message"> 
        <p class="comunications-tex">${message}</p>
        <img
         class="comunications-picture"
         src="./img/${pictureName}.jpg"
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

  return insertPoint;
}

function handlerTalk(element) {
  const showMessage = renderMessage(
    element.message,
    element.name.toLowerCase()
  );
}

function handlerDead(element) {
  element.isAlive = !element.isAlive;
  element.linkElement.innerHTML = '';
  renderCharacter(element, element.linkElement);
}
