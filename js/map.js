console.log('safasf');

let settingsItem = Settings.map(
    (item) =>
        `<div id="${item.id}" class="place__location__types__type"><h1 class="place__location__types__type__title">${item.name}</h1></div>`,
).join('');
document.querySelector('#settings__types').innerHTML += settingsItem;
let tableItem = Table.map(
    (item) => `<div id="${item.id}" style="background-color: ${
        item.background == 1 && '#fff'
    }" class="place__table__item">
        <div  class="place__table__item__inner">
            <img src="../assets/svgs/dots.svg" alt="dots"/>
            <p class="place__table__item__inner__name">${item.name}</p>
            <img src="../assets/svgs/edit.svg" alt="dots"/>
        </div>
        <div class="place__table__item__body">
            <p class="place__table__item__body__count">${item.count}</p>
            <p class="place__table__item__body__id">${item.id}</p>
            <p class="place__table__item__body__type">${item.areaType}</p>
            <div class="place__table__item__body__checks">
            ${item.show && '<input class="place__additional__filter__check" type="checkbox"/>'}
            ${item.notnull && '<input class="place__additional__filter__check" type="checkbox"/>'}
            ${
                item.delete
                    ? '<input class="place__additional__filter__check" type="checkbox"/>'
                    : ''
            }
            </div>
        </div>
</div>`,
).join('');
document.querySelector('#place__table').innerHTML += tableItem;
