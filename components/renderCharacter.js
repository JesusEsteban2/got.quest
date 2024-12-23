export function renderCharacter(element) {
  console.log(element);
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

  const template = `
          <li class="character col">
            <div class="card character__card">
              <img
                src="img/${element.name}.jpg"
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
                    <button class="character__action btn">habla</button>
                    <button class="character__action btn">muere</button>
                  </div>
                </div>
              </div>
              <i class="emoji">${emoji}</i>
            </div>
          </li>`;

  const insertPoint = document.querySelector('.characters-list');

  const item = insertPoint.insertAdjacentHTML('afterbegin', template);
  return item;
}

export function renderMessage(message, picture) {
  //TODO: Cambiar los métodos.

  console.log(picture, message);

  const template = `
      <p class="comunications-tex">${message}</p>
      <img
        class="comunications-picture"
        src="./img/${picture}.jpg"
        alt="Nombre y familia del que habla"
      />`;

  const insertPoint = document.querySelector('.comunications');
  const item = insertPoint.insertAdjacentHTML('afterbegin', template);
  insertPoint.classList.replace('comunications', 'comunications.on');
  return item;
}
