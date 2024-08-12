let navigationItem = Navigation.map(
    (item) => `<div class="navigation__item" id="${item.id}">
    <img src="${item.image}" alt="${item.image}"/>
    <a class="navigation__item__link" href="${item.link}">${item.name}</a></div>`,
).join('');

document.querySelector('#navigation').innerHTML += navigationItem;
document.querySelector('#navigation').innerHTML += `<div class="navigation__close">
                    <img src="../assets/svgs/arrow-left.svg" alt="arrow-left" />
                    <p class="navigation__close__text">Скрыть меню</p>
                </div>`;

let locationTypeItem = LocationTypes.map(
    (item) =>
        `<div id="${item.id}" class="place__location__types__type"><h1 class="place__location__types__type__title">${item.text}</h1></div>`,
).join('');
document.querySelector('#place__location__types').innerHTML += locationTypeItem;
document.querySelector(
    '#place__location__types',
).innerHTML += `<div class="place__location__types__type"><h1 class="place__location__types__type__title">Настройки</h1></div>`;

let locationItem = Locations.map(
    (item) => `<div id="${item.id}" class="place__locations_list__item">
                        <header class="place__locations_list__item__header">
                            <div class="place__locations_list__item__header__imgs">
                                <img src="${
                                    item.subdepartament.length > 0
                                        ? '../assets/svgs/minus.svg'
                                        : '../assets/svgs/plus.svg'
                                }" alt="plus" />
                                <img src="../assets/svgs/dots.svg" alt="" />
                            </div>
                            <p class="place__locations_list__item__header__name">${item.name}</p>
                            <p class="place__locations_list__item__header__count">${item.count}</p>
                            <div class="place__locations_list__item__header__buttons">
                                <div id="edit__item" class="place__locations_list__item__header__buttons__button">
                                    <img src="../assets/svgs/edit.svg" alt="edit" />
                                    <p>Редактировать</p>
                                </div>
                                <div class="place__locations_list__item__header__buttons__button">
                                    <img src="../assets/svgs/close.svg" alt="edit" />
                                    <p>Удалить</p>
                                </div>
                            </div>
                        </header>
                        ${
                            item.subdepartament.length > 0
                                ? item.subdepartament
                                      .map(
                                          (
                                              subitem,
                                          ) => `<div class="place__locations_list__item__body">
                            <header class="place__locations_list__item__body__header">
                                <div class="place__locations_list__item__header__imgs">
                                    <img src="${
                                        subitem.subsubdepartament &&
                                        subitem.subsubdepartament.length > 0
                                            ? '../assets/svgs/minus.svg'
                                            : '../assets/svgs/plus.svg'
                                    }" alt="plus" />
                                    <img src="../assets/svgs/dots.svg" alt="" />
                                </div>
                                <p class="place__locations_list__item__body__header__name">${
                                    subitem.name
                                }</p>
                                <p class="place__locations_list__item__header__count">${
                                    subitem.count
                                }</p>
                                <p class="place__locations_list__item__header__for">${
                                    subitem.for ? subitem.for : ''
                                }</p>
                            </header>
                            </div>
                            ${
                                subitem.subsubdepartament.length > 0
                                    ? subitem.subsubdepartament
                                          .map(
                                              (subsubitem) =>
                                                  `<div class="place__locations_list__item__body__sub">
                                                        <header class="place__locations_list__item__body__header">
                                                            <img src="../assets/svgs/dots.svg"/>
                                                            <p class="place__locations_list__item__body__header__name">${
                                                                subsubitem.name
                                                            }</p>
                                                            <p class="place__locations_list__item__header__count">${
                                                                subsubitem.count
                                                            }</p>
                                                            <p class="place__locations_list__item__header__for">${
                                                                subsubitem.for ? subsubitem.for : ''
                                                            }</p>
                                                            <p class="place__locations_list__item__body__header__name">${
                                                                !subsubitem.barcode
                                                                    ? 'Со штрихкодом'
                                                                    : 'Без штрихкода'
                                                            }</p>
                                                        </header>
                                                    </div>`,
                                          )
                                          .join('')
                                    : ''
                            }`,
                                      )
                                      .join('')
                                : ''
                        }
                    </div>`,
).join('');
document.querySelector('#place__locations_list').innerHTML += locationItem;

const popupElement = document.querySelector('#popup');
const popupBlockElement = document.querySelector('#popup__container__block');

const popupEditElement = document.querySelector('#edit__popup');
const popupEditBlockElement = document.querySelector('#popup__container__edit');

document.querySelector('#place__additional__create').addEventListener('click', () => {
    popupElement.classList.remove('hide');
    popupElement.classList.add('popup');
    popupBlockElement.classList.remove('hide');
    popupBlockElement.classList.add('popup__container__block');
});

document.querySelector('#remove').addEventListener('click', () => {
    popupElement.classList.remove('popup');
    popupElement.classList.remove('hide');
    popupBlockElement.classList.remove('popup__container__block');
    popupBlockElement.classList.add('hide');
});

document.querySelector('#edit__item').addEventListener('click', () => {
    popupEditElement.classList.remove('hide');
    popupEditElement.classList.add('popup');
    popupEditBlockElement.classList.remove('hide');
    popupEditBlockElement.classList.add('popup__container__block');
});

document.querySelector('#removeedit').addEventListener('click', () => {
    popupEditElement.classList.remove('popup');
    popupEditElement.classList.remove('hide');
    popupEditBlockElement.classList.remove('popup__container__block');
    popupEditBlockElement.classList.add('hide');
});
