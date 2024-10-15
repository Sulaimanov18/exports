export type Expert = {
    id: string;
    name: string;
    profession: string;
    description: string;
    specialties: string[];
    imageUrl: string;
    phone: string;
    website: string;
    location: string;
    bio: string;
    email: string;
};

const experts: Expert[] = [
    {
        id: '1',
        name: 'Эйприл Догерти',
        profession: 'Психолог',
        description: 'Эйприл специализируется на тревожных расстройствах, депрессии и когнитивно-поведенческой терапии, помогая клиентам преодолевать психические трудности и процветать.',
        specialties: ['Тревожные расстройства', 'Депрессия', 'Когнитивно-поведенческая терапия'],
        imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
        phone: '123-456-7890',
        website: 'https://example.com',
        location: 'Колливилл, Техас',
        bio: 'Сострадательный психолог, посвятивший себя помощи клиентам в преодолении трудностей.',
        email: 'april@example.com',
    },
    {
        id: '2',
        name: 'Джон Смит',
        profession: 'Семейный консультант',
        description: 'Джон помогает парам разрешать конфликты и улучшать общение, способствуя созданию более крепких эмоциональных связей и здоровых отношений.',
        specialties: ['Терапия для пар', 'Разрешение конфликтов'],
        imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
        phone: '987-654-3210',
        website: 'https://johnsmith.com',
        location: 'Даллас, Техас',
        bio: 'Опытный семейный консультант, помогающий парам строить крепкие отношения.',
        email: 'john@example.com',
    },
    {
        id: '3',
        name: 'Джейн Доу',
        profession: 'Лайф-коуч',
        description: 'Джейн помогает клиентам добиваться личного и профессионального роста, предлагая руководство по личному развитию и карьерному коучингу.',
        specialties: ['Личностное развитие', 'Карьера и коучинг'],
        imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
        phone: '234-567-8901',
        website: 'https://janedoe.com',
        location: 'Остин, Техас',
        bio: 'Страстный лайф-коуч, стремящийся помочь людям в достижении личностного роста.',
        email: 'jane@example.com',
    },
    {
        id: '4',
        name: 'Майкл Джонсон',
        profession: 'Бизнес-коуч',
        description: 'Майкл консультирует предпринимателей по вопросам бизнес-стратегии и маркетинга, помогая им добиваться устойчивого роста и долгосрочного успеха.',
        specialties: ['Бизнес-стратегия', 'Маркетинг'],
        imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
        phone: '345-678-9012',
        website: 'https://michaeljohnson.com',
        location: 'Хьюстон, Техас',
        bio: 'Бизнес-коуч, сосредоточенный на стратегиях успеха в мире предпринимательства.',
        email: 'michael@example.com',
    },
    {
        id: '5',
        name: 'Эмили Дэвис',
        profession: 'Финансовый консультант',
        description: 'Эмили предлагает индивидуальные стратегии по инвестициям и планированию выхода на пенсию, помогая клиентам достичь финансовой безопасности и долгосрочных целей.',
        specialties: ['Инвестиции', 'Пенсионное планирование'],
        imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
        phone: '456-789-0123',
        website: 'https://emilydavis.com',
        location: 'Сан-Антонио, Техас',
        bio: 'Финансовый консультант, посвятивший себя помощи клиентам в достижении их финансовых целей.',
        email: 'emily@example.com',
    },
];

export default experts;
