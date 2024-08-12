const Navigation = [
    {
        id: 1,
        name: 'Имущество',
        link: 'property.html',
        image: '../assets/svgs/property.svg',
    },
    {
        id: 2,
        name: 'Инвентаризация',
        link: 'inventory.html',
        image: '../assets/svgs/inventory.svg',
    },
    {
        id: 3,
        name: 'Сотрудники',
        link: 'employees.html',
        image: '../assets/svgs/employees.svg',
    },
    {
        id: 4,
        name: 'Уведомления',
        link: 'notify.html',
        image: '../assets/svgs/notify.svg',
    },
    {
        id: 5,
        name: 'Локации',
        link: 'location.html',
        image: '../assets/svgs/location.svg',
    },
    {
        id: 6,
        name: 'Настройки',
        link: 'settings.html',
        image: '../assets/svgs/settings.svg',
    },
];

const LocationTypes = [
    {
        id: 1,
        text: 'Все локции',
    },
    {
        id: 2,
        text: 'Импорт/Экспорт',
    },
];

const Locations = [
    {
        id: 1,
        name: 'Локация 1',
        count: 512,
        subdepartament: [
            {
                id: 1,
                name: 'Подотдел 1',
                count: 10,
                for: 'Для утерь',
                subsubdepartament: [],
            },
            {
                id: 2,
                count: 100,
                name: 'Подотдел 2',
                subsubdepartament: [
                    {
                        id: 1,
                        count: 2,
                        for: 'Виртуальная',
                        name: 'Подподотдел 1',
                        barcode: true,
                    },
                ],
            },
            {
                id: 3,
                name: 'Подотдел 3',
                count: 400,
                subsubdepartament: [],
            },
        ],
    },
    {
        id: 2,
        name: 'Локация 2',
        count: 100,
        subdepartament: [],
    },
    {
        id: 3,
        name: 'Локация 3',
        count: 100,
        subdepartament: [],
    },
];

const Settings = [
    {
        id: 1,
        name: 'Имущество',
    },
    {
        id: 2,
        name: 'Инвентаризация',
    },
    {
        id: 3,
        name: 'Сотрудники',
    },
    {
        id: 4,
        name: 'Локации',
    },
    {
        id: 5,
        name: 'Уведомления',
    },
    {
        id: 6,
        name: 'Справочники',
    },
    {
        id: 7,
        name: 'Пользователь',
    },
];

const Table = [
    {
        id: 1001,
        name: 'Название',
        count: 500,
        areaType: 'Строка',
        show: true,
        notnull: true,
        delete: false,
        background: 1,
    },
    {
        id: 1002,
        name: 'Цена',
        count: 520,
        areaType: 'Число',
        show: true,
        notnull: true,
        delete: true,
        background: 2,
    },
    {
        id: 1003,
        name: 'МОЛ',
        count: 500,
        areaType: 'Справочник',
        show: true,
        notnull: true,
        delete: true,
        background: 1,
    },
    {
        id: 1004,
        name: 'Фото',
        count: 500,
        areaType: 'Файл',
        show: true,
        notnull: true,
        delete: true,
        background: 2,
    },
    {
        id: 1005,
        name: 'Цвет',
        count: 500,
        areaType: 'Строка',
        show: true,
        notnull: true,
        delete: true,
        background: 1,
    },
    {
        id: 1006,
        name: 'Локация',
        count: 500,
        areaType: 'Справочник',
        show: true,
        notnull: true,
        delete: true,
        background: 2,
    },
    {
        id: 1007,
        name: 'Количество',
        count: 500,
        areaType: 'Число',
        show: true,
        notnull: true,
        delete: true,
        background: 1,
    },
    {
        id: 1008,
        name: 'Описание',
        count: 500,
        areaType: 'Текст',
        show: true,
        notnull: true,
        delete: true,
        background: 2,
    },
];
