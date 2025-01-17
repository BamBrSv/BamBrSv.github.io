import {
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarIcon,
  DevicePhoneMobileIcon,
  InboxIcon,
  MapPinIcon,
  UserIcon,
} from '@heroicons/react/16/solid';
import { Data } from '@shared/types';

export const mainResponseRu: Data = {
  info: {
    imageUrl: './photo_2023-12-27_15-15-42.jpg',
    name: 'Дудо Иван Николаевич',
    profession: 'Backend разработчик',
    education:
      'Факультет компьютерных технологий и прикладной математики Кафедра информационных технологий Специальность «Прикладная математика и информатика»',
    themeGraduationPaper:
      'Разработка гибридного алгоритма и программы построения оптимального маршрута.',
    teacher: 'Полупанов Алексей Александрович',
  },
  aboutMe: [
    {
      title: 'Личная информация',
      items: [
        {
          label: 'ФИО',
          icon: UserIcon,
          text: 'Дудо Иван Николаевич',
        },
        {
          label: 'Дата рождения',
          icon: CalendarIcon,
          text: '01.10.2001',
        },
        {
          label: 'Место проживания',
          icon: MapPinIcon,
          text: 'г. Краснодар',
        },
      ],
    },
    {
      title: 'Образование',
      items: [
        {
          label: 'Магистратура',
          icon: AcademicCapIcon,
          text: 'КубГУ, Прикладная математика и информатика / 2023-2025',
        },
        {
          label: 'Бакалавриат',
          icon: AcademicCapIcon,
          text: 'КубГУ, Прикладная математика и информатика / 2019-2023',
        },
        {
          label: 'Среднее общее',
          icon: AcademicCapIcon,
          text: 'МБОУ Гимназия ст.Азовской / 2008-2019',
        },
        {
          label: 'Телефон',
          icon: DevicePhoneMobileIcon,
          text: '8-999-999-99-99',
        },
        {
          label: 'Почта',
          icon: InboxIcon,
          text: 'example.com',
        },
      ],
    },
    {
      title: 'Опыт работы',
      items: [
        {
          label: 'МТС',
          icon: BriefcaseIcon,
          text: 'Ведущий разработчик / 10.2024 - настоящее время',
        },
        {
          label: 'МТС',
          icon: AcademicCapIcon,
          text: 'Инженер / 10.2023 - 10.2024',
        },
      ],
    },
    {
      title: 'Навыки и специализация',
      items: [
        {
          label: 'Технологический стек',
          text: 'Python Django TS NodeJS NestJS',
        },
        {
          label: 'Сборщики',
          text: 'Vite Webpack',
        },
        {
          label: 'Базы данных',
          text: 'PostgreSQL Oracle MongoDB',
        },
        {
          label: 'Контроль версий',
          text: 'Git GitLab GitHub',
        },
      ],
    },
  ],
};
export const mainResponseEng: Data = {
  info: {
    imageUrl: './photo_2023-12-27_15-15-42.jpg',
    name: 'Dudo Ivan Nikolaevich',
    profession: 'Backend developer',
    education:
      'Faculty of Computer Technologies and Applied Mathematics Department of Information Technologies Specialty “Applied Mathematics and Computer Science”',
    themeGraduationPaper:
      'Development of a hybrid algorithm and program for constructing the correct route.',
    teacher: 'Polupanov Alexey Alexandrovich',
  },
  aboutMe: [
    {
      title: 'Personal information',
      items: [
        {
          label: 'FIO',
          icon: UserIcon,
          text: 'Dudo Ivan Nikolaevich',
        },
        {
          label: 'Date of birth',
          icon: CalendarIcon,
          text: '01.10.2001',
        },
        {
          label: 'Place of residence',
          icon: MapPinIcon,
          text: 'town Krasnodar',
        },
        {
          label: 'telephone',
          icon: DevicePhoneMobileIcon,
          text: '8-999-999-99-99',
        },
        {
          label: 'email',
          icon: InboxIcon,
          text: 'example.com',
        },
      ],
    },
    {
      title: 'Education',
      items: [
        {
          label: 'Education',
          icon: AcademicCapIcon,
          text: 'KubSU, Applied mathematics and computer science / 2023-2025',
        },
        {
          label: 'Bachelor degree',
          icon: AcademicCapIcon,
          text: 'KubSU, Applied mathematics and computer science / 2019-2023',
        },
        {
          label: 'Average total',
          icon: AcademicCapIcon,
          text: 'MBOU Gymnasium of Azovskaya / 2008-2019',
        },
      ],
    },
    {
      title: 'Experience',
      items: [
        {
          label: 'MTS',
          icon: BriefcaseIcon,
          text: 'Lead Developer / 10.2024 - present',
        },
        {
          label: 'MTS',
          icon: AcademicCapIcon,
          text: 'Engineer / 10.2023 - 10.2024',
        },
      ],
    },
    {
      title: 'Skills and Specialization',
      items: [
        {
          label: 'Technology stack',
          text: 'Python Django TS NodeJS NestJS',
        },
        {
          label: 'Pickers',
          text: 'Vite Webpack',
        },
        {
          label: 'Databases',
          text: 'PostgreSQL Oracle MongoDB',
        },
        {
          label: 'Version control',
          text: 'Git GitLab GitHub',
        },
      ],
    },
  ],
};

export const referatResponseRu = [
  {
    title: 'Введение',
    body: 'В условиях высокой конкуренции и постоянно меняющегося рынка предприятия, в том числе и логистические, вынуждены искать способы снижения издержек. Деятельность предприятий тесно связана с процессами перевозки, консолидации, складирования. Многие предприятия не имеют четкой стратегии развития логистики и не уделяют должного внимания оптимизации данных процессов. В результате тратят много времени и ресурсов на решение вопросов, которые можно было бы избежать при оптимизации и автоматизации логистических решений.',
  },
  {
    title: 'Обзор существующих решений и анализ проблемы',
    body: 'На сегодняшний день существует множество инструментов, таких как MONTRANS ONLINE , New Relic и 1С:Предприятие 8.Транспортная логистика. Эти программные продукты могут не полностью отвечать деятельности транспортной компании или наоборот иметь функционал, который в силу специфики работы организации не используется. В условиях ограниченного бюджета и малого числа сотрудников, такая работа не рациональна и не эффективна.',
  },
  {
    title: 'Методология и подход к разработке',
    body: 'В данной работе ставиться задача разработки ИС для транспортной компании. Для выполнения поставленной задачи необходимо создать функциональную модель, отображающую функции и структуру разрабатываемой системы, с использованием нотации IDEF0. Далее, реализовать физическую модель БД и разработать приложение для работы с данными, в процессе работы были использованы: PostgreSQL, Python, Flask, набор инструментов Werkzeug, а также шаблонизатор Jinja2 .',
  },
  {
    title: 'Результаты разработки и тестирования',
    body: 'Разработанная система включает три основных модуля: транспортный, диспетчерский и юридическийк. Тестирование системы проводилось на реальных задачах, что позволило оценить ее эффективность. Основные результаты: уменьшение времени на составление необходимой документации, повышение доступности данных о производительности в реальном времени, интуитивно понятный интерфейс для анализа имеющихся данных. Система доказала свою пригодность для использования в коммерческих проектах и была успешно внедрена в тестовую среду.',
  },
  {
    title: 'Заключение и перспективы развития',
    body: 'В ходе выполнения магистарской работы был проведён анализ предметной области. При изучении существующих программных продуктов была выявлена необходимость создания собственной информационной системы. Опираясь на проведённый анализ, была создана модель бизнес-процесса с использованием нотации IDEF0. Спроектирована база данных и разработано web приложение для работы с ней. Созданное решение соответствует требования построенной модели, позволяет оперативно получить точную и достоверную информацию о текущих процессах, а также оказать своевременное влияние на них. В будущем планируется добавить модуль для построения оптимального маршрута с учётом меняющихся условий с использованием генетического алгоритма.',
  },
];

export const referatResponseEng = [
  {
    title: 'Introduction',
    body: 'In the conditions of high competition and constantly changing market, enterprises, including logistics, are forced to look for ways to reduce costs. The activities of enterprises are closely related to the processes of transportation, consolidation, warehousing. Many enterprises do not have a clear strategy for the development of logistics and do not pay due attention to the optimization of these processes. As a result, they spend a lot of time and resources on solving issues that could be avoided by optimizing and automating logistics solutions.',
  },
  {
    title: 'Review of existing solutions and problem analysis',
    body: "Today, there are many tools, such as MONTRANS ONLINE, New Relic and 1C:Enterprise 8.Transport logistics. These software products may not fully meet the activities of a transport company or, on the contrary, have functionality that is not used due to the specifics of the organization's work. In conditions of a limited budget and a small number of employees, such work is not rational and ineffective.",
  },
  {
    title: 'Methodology and approach to development',
    body: 'The development of the system was carried out in several stages. First, a collection of requirements was carried out, which included an analysis of the needs of the target audience. Then, a microservices-based architecture was chosen to ensure scalability. The technologies used for implementation were:Backend: Node.js using Express.js .,Frontend: React for interactive user interface,Database: PostgreSQL for storing analytical data, Monitoring systems: Elasticsearch for logs, Grafana for visualization of metrics. Special attention was paid to the implementation of agents for collecting data from web applications that integrate without significant changes to the source code.',
  },
  {
    title: 'Development and testing results',
    body: 'The developed system includes three main modules: transport, dispatching and legal. The system was tested on real tasks, which allowed us to evaluate its effectiveness. The main results: reduced time for drawing up the necessary documentation, increased availability of performance data in real time, an intuitive interface for analyzing existing data. The system proved its suitability for use in commercial projects and was successfully implemented in the test environment.',
  },
  {
    title: 'Conclusion and development prospects',
    body: "During the master's thesis, an analysis of the subject area was conducted. When studying existing software products, the need to create our own information system was identified. Based on the analysis, a business process model was created using the IDEF0 notation. A database was designed and a web application for working with it was developed. The created solution meets the requirements of the constructed model, allows you to quickly obtain accurate and reliable information about current processes, as well as have a timely impact on them. In the future, it is planned to add a module for constructing an optimal route taking into account changing conditions using a genetic algorithm.",
  },
];

export const biographyResponse = {
  articles: [
    {
      title: 'Личностное становление',
      body: 'Ещё будучи учеником школы, понял чем хочу занимать и шаг за шагом шёл к поставленной цели. Так я поступил в универсистет и определился со специализацией, ещё много предстоит изучить и сделать, это только начало пути. ',
    },
    {
      title: 'Профессиональное становление',
      body: 'Во время учёбы в универсистете удалось попробовать множество технологий, в итоге я обратил своё внимание на JavaScript. По окончанию обучения начался мой трудоваой путь, вначале я стал инженером радиосвязи, но вскоре перешёл на должность ведущего разработчика, мне повезло попасть в команду настоящих профессионалов которые всегда помогут словом и делом. ',
    },
    {
      title: 'Цели, планы и видение будущего',
      body: 'Совершенствовать свои навыки и расти по карьерной лестнице, в будующем возможно заняться исследовательской работой',
    },
  ],
};
export const reportSearchResponse = [
  {
    id: 1,
    numberPhrase: 1,
    language: 'ru',
    phrase: 'Алгоритмы для поиска пути в городской сети автодорог',
    search: 'Google',
    countDocuments: '980000',
    link: 'https://www.google.ru/search?q=Алгоритмы+для+поиска+пути+в+городской+сети+автодорог&sourceid=chrome&ie=UTF-8',
  },
  {
    id: 2,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '540000',
    link: 'https://yandex.ru/search/?text=Алгоритмы+для+поиска+пути+в+городской+сети+автодорог&clid=2270455&banerid=6302000000%3A6680db83573f89c8040fd8b3&win=652&lr=35',
  },
  {
    id: 3,
    search: 'Bing',
    language: 'ru',
    countDocuments: '315000',
    link: 'https://www.bing.com/search?q=Алгоритмы+для+поиска+пути+в+городской+сети+автодорог&PC=U316&FORM=CHROMN',
  },
  {
    id: 4,
    search: 'Yahoo',
    language: 'ru',
    countDocuments: '316000',
    link: 'https://ru.search.yahoo.com/search?p=Алгоритмы+для+поиска+пути+в+городской+сети+автодорог&fr=crmas&fr2=intlr&ei=UTF-8',
  },
  {
    id: 5,
    numberPhrase: 2,
    language: 'ru',
    phrase: 'Полупанов Алексей Александрович',
    search: 'Google',
    countDocuments: '4970',
    link: 'https://www.google.ru/search?q=Полупанов+Алексей+Александрович&sourceid=chrome&ie=UTF-8',
  },
  {
    id: 6,
    search: 'Яндекс',
    language: 'ru',
    link: 'https://yandex.ru/search/?text=Полупанов+Алексей+Александрович&lr=35&clid=2270455&win=652',
    countDocuments: '11000',
  },
  {
    id: 7,
    search: 'Bing',
    language: 'ru',
    link: 'https://www.bing.com/search?q=Полупанов+Алексей+Александрович&PC=U316&FORM=CHROMN',
    countDocuments: '10200',
  },
  {
    id: 8,
    search: 'Yahoo',
    language: 'ru',
    link: 'https://ru.search.yahoo.com/search?p=Полупанов+Алексей+Александрович&fr=crmas&fr2=intlr&ei=UTF-8',
    countDocuments: '12200',
  },
  {
    id: 9,
    numberPhrase: 3,
    language: 'ru',
    phrase: 'Применение генетических алгоритмов для поиска пути ',
    search: 'Google',
    countDocuments: '79000',
    link: 'https://www.google.ru/search?q=Применение+генетических+алгоритмов+для+поиска+пути&sourceid=chrome&ie=UTF-8',
  },
  {
    id: 10,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '23000',
    link: 'https://yandex.ru/search/?text=Применение+генетических+алгоритмов+для+поиска+пути&clid=2270455&banerid=6302000000%3A6680db83573f89c8040fd8b3&win=652&lr=35',
  },
  {
    id: 11,
    search: 'Bing',
    language: 'ru',
    countDocuments: '121000',
    link: 'https://www.bing.com/search?q=Применение+генетических+алгоритмов+для+поиска+пути&PC=U316&FORM=CHROMN',
  },
  {
    id: 12,
    search: 'Yahoo',
    language: 'ru',
    countDocuments: '110000',
    link: 'https://ru.search.yahoo.com/search?p=Применение+генетических+алгоритмов+для+поиска+пути&fr=crmas&fr2=intlr&ei=UTF-8',
  },
  {
    id: 13,
    numberPhrase: 4,
    language: 'ru',
    phrase: 'Информационные системы для логистических компаний',
    search: 'Google',
    countDocuments: '290000',
    link: 'https://www.google.ru/search?q=Информационные+системы+для+логистических+компаний&sourceid=chrome&ie=UTF-8',
  },
  {
    id: 14,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '54000',
    link: 'https://yandex.ru/search/?text=Информационные+системы+для+логистических+компаний&clid=2270455&banerid=6302000000%3A6680db83573f89c8040fd8b3&win=652&lr=35',
  },
  {
    id: 15,
    search: 'Bing',
    language: 'ru',
    countDocuments: '75100',
    link: 'https://www.bing.com/search?q=Информационные+системы+для+логистических+компаний&PC=U316&FORM=CHROMN',
  },
  {
    id: 16,
    search: 'Yahoo',
    language: 'ru',
    countDocuments: '189100',
    link: 'https://ru.search.yahoo.com/search?p=Информационные+системы+для+логистических+компаний&fr=crmas&fr2=intlr&ei=UTF-8',
  },
  {
    id: 17,
    numberPhrase: 5,
    language: 'ru',
    phrase: 'Модификации генетического алгоритма для поиска пути',
    search: 'Google',
    countDocuments: '245000',
    link: 'https://www.google.ru/search?q=Модификации+генетического+алгоритма+для+поиска+пути&sourceid=chrome&ie=UTF-8',
  },
  {
    id: 18,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '120000',
    link: 'https://yandex.ru/search/?text=Модификации+генетического+алгоритма+для+поиска+пути&clid=2270455&banerid=6302000000%3A6680db83573f89c8040fd8b3&win=652&lr=35',
  },
  {
    id: 19,
    search: 'Bing',
    language: 'ru',
    countDocuments: '267000',
    link: 'https://www.bing.com/search?q=Модификации+генетического+алгоритма+для+поиска+пути&PC=U316&FORM=CHROMN',
  },
  {
    id: 20,
    search: 'Yahoo',
    language: 'ru',
    countDocuments: '235000',
    link: 'https://ru.search.yahoo.com/search?p=Модификации+генетического+алгоритма+для+поиска+пути&fr=crmas&fr2=intlr&ei=UTF-8',
  },
  {
    id: 21,
    numberPhrase: 1,
    language: 'eng',
    phrase: 'Algorithms for finding a path in an urban road network',
    search: 'Google',
    countDocuments: '2940000',
    link: 'https://www.google.ru/search?q=Algorithms+for+finding+a+path+in+an+urban+road+network&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=lang_en&cr=&as_qdr=all&as_sitesearch=&as_occt=any&as_filetype=&tbs=',
  },
  {
    id: 22,
    search: 'Яндекс',
    language: 'eng',
    countDocuments: '46000',
    link: 'https://yandex.ru/search/?text=Algorithms+for+finding+a+path+in+an+urban+road+network&lr=35&clid=2270455&win=652&rstr=-35&within=0&lang=en',
  },
  {
    id: 23,
    search: 'Bing',
    language: 'eng',
    countDocuments: '628000',
    link: 'https://www.bing.com/search?q=Algorithms+for+finding+a+path+in+an+urban+road+network&PC=U316&FORM=CHROMN',
  },
  {
    id: 24,
    search: 'Yahoo',
    language: 'eng',
    countDocuments: '465000',
    link: 'https://search.yahoo.com/search?ei=UTF-8&fr=crmas&p=Algorithms+for+finding+a+path+in+an+urban+road+network',
  },
  {
    id: 25,
    numberPhrase: 2,
    language: 'eng',
    phrase: 'Polupanov Alexey Alexandrovich',
    search: 'Google',
    countDocuments: '45000',
    link: 'https://www.google.ru/search?as_q=Polupanov+Alexey+Alexandrovich&as_epq=&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=lang_en&cr=&as_qdr=all&as_sitesearch=&as_occt=any&as_filetype=&tbs=',
  },
  {
    id: 26,
    search: 'Яндекс',
    language: 'eng',
    countDocuments: '20000',
    link: 'https://yandex.ru/search/?text=Polupanov+Alexey+Alexandrovich&lr=35&clid=2270455&win=652&within=0&lang=en',
  },
  {
    id: 27,
    search: 'Bing',
    language: 'eng',
    countDocuments: '64600',
    link: 'https://www.bing.com/search?go=Search&q=Polupanov+Alexey+Alexandrovich&qs=ds&form=QBRE',
  },
  {
    id: 28,
    search: 'Yahoo',
    language: 'eng',
    countDocuments: '83100',
    link: 'https://search.yahoo.com/search;_ylt=AwrFRoaiuPpmQwAvuyjumYlQ;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZANTUFIyNDI3LURJTVRfMQRzZWMDcGl2cw--?p=Polupanov+Alexey+Alexandrovich&fr2=p:s,v:l,m:pivot&fr=sfp',
  },
  {
    id: 29,
    numberPhrase: 3,
    language: 'eng',
    phrase: 'Application of Genetic Algorithms for Path Finding',
    search: 'Google',
    countDocuments: '3880000',
    link: 'https://www.google.ru/search?q=Application+of+Genetic+Algorithms+for+Path+Finding&lr=lang_en&newwindow=1&sca_esv=e6c6a1c4dd3e8b42&sca_upv=1&as_qdr=all&tbs=lr%3Alang_1en&ei=37b6Zv3LKYiywPAP6amBoA4&ved=0ahUKEwi9t7rH8eqIAxUIGRAIHelUAOQQ4dUDCA8&uact=5&oq=Predicting+risks+and+failures+in+ICT+operation&gs_lp=Egxnd3Mtd2l6LXNlcnAiLlByZWRpY3Rpbmcgcmlza3MgYW5kIGZhaWx1cmVzIGluIElDVCBvcGVyYXRpb24yBRAhGKABSJ3zG1C27xtYtu8bcAF4AJABAJgBwwGgAcMBqgEDMC4xuAEDyAEA-AEC-AEBmAICoALLAcICChAAGIAEGLADGALCAgsQABiABBiwAxiiBJgDAIgGAZAGA5IHAzEuMaAH5wE&sclient=gws-wiz-serp',
  },
  {
    id: 30,
    search: 'Яндекс',
    language: 'eng',
    countDocuments: '4300000',
    link: 'https://yandex.ru/search/?text=Application+of+Genetic+Algorithms+for+Path+Finding&lr=35&clid=2270455&win=652&within=0&lang=en',
  },
  {
    id: 31,
    search: 'Bing',
    language: 'eng',
    countDocuments: '772000',
    link: 'https://www.bing.com/search?go=Поиск&q=Application+of+Genetic+Algorithms+for+Path+Finding&qs=ds&form=QBRE',
  },
  {
    id: 32,
    search: 'Yahoo',
    language: 'eng',
    countDocuments: '872000',
    link: 'https://search.yahoo.com/search?fr=sfp&p=Application+of+Genetic+Algorithms+for+Path+Finding&save=0',
  },
  {
    id: 33,
    numberPhrase: 4,
    language: 'eng',
    phrase: 'Information systems for logistics companies',
    search: 'Google',
    countDocuments: '914000',
    link: 'https://www.google.ru/search?q=Information+systems+for+logistics+companies&lr=lang_en&newwindow=1&sca_esv=e6c6a1c4dd3e8b42&sca_upv=1&as_qdr=all&tbs=lr%3Alang_1en&ei=6rj6ZpuiEcXBi-gPz-uKkQY&ved=0ahUKEwibv9PA8-qIAxXF4AIHHc-1ImIQ4dUDCA8&uact=5&oq=Modern+methods+and+models+for+assessing+technical+risks&gs_lp=Egxnd3Mtd2l6LXNlcnAiN01vZGVybiBtZXRob2RzIGFuZCBtb2RlbHMgZm9yIGFzc2Vzc2luZyB0ZWNobmljYWwgcmlza3MyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogRI9ZQHUPKCB1jNiQdwA3gAkAEAmAGXAqABlwKqAQMyLTG4AQPIAQD4AQL4AQGYAgSgAqUCwgILEAAYgAQYsAMYogTCAgsQABiwAxiiBBiJBZgDAIgGAZAGBZIHBTMuMC4xoAefAg&sclient=gws-wiz-serp',
  },
  {
    id: 34,
    search: 'Яндекс',
    countDocuments: '142000',
    language: 'eng',
    link: 'https://yandex.ru/search/?text=Information+systems+for+logistics+companies&lr=35&clid=2270455&win=652&within=0&lang=en',
  },
  {
    id: 35,
    search: 'Bing',
    countDocuments: '283000',
    language: 'eng',
    link: 'https://www.bing.com/search?q=Information+systems+for+logistics+companies&qs=n&form=QBRE&sp=-1&lq=0&pq=predicting+risks+and+failures+in+ict+operation&sc=0-46&sk=&cvid=423F8C63CF064E1FBB23B10E9387A053&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 36,
    search: 'Yahoo',
    countDocuments: '248000',
    language: 'eng',
    link: 'https://search.yahoo.com/search;_ylt=AwriihD2QIlnagIAeuZXNyoA;_ylc=X1MDMjc2NjY3OQRfcgMyBGZyA3NmcARmcjIDc2ItdG9wBGdwcmlkA3BaRzN6SUZBVDZhUlZfYko5WWZ3cEEEbl9yc2x0AzAEbl9zdWdnAzAEb3JpZ2luA3NlYXJjaC55YWhvby5jb20EcG9zAzAEcHFzdHIDBHBxc3RybAMwBHFzdHJsAzQzBHF1ZXJ5A0luZm9ybWF0aW9uJTJCc3lzdGVtcyUyQmZvciUyQmxvZ2lzdGljcyUyQmNvbXBhbmllcwR0X3N0bXADMTczNzA0ODMzMA--?p=Information%2Bsystems%2Bfor%2Blogistics%2Bcompanies&fr=sfp&fr2=sb-top',
  },
  {
    id: 37,
    numberPhrase: 5,
    language: 'eng',
    phrase: 'Modifications of the genetic algorithm for path finding',
    search: 'Google',
    countDocuments: '790000',
    link: 'https://www.google.ru/search?q=Modifications+of+the+genetic+algorithm+for+path+finding&lr=lang_en&newwindow=1&sca_esv=e6c6a1c4dd3e8b42&sca_upv=1&as_qdr=all&tbs=lr%3Alang_1en&ei=d7n6ZpW1B7Wxi-gPkZSLyAE&ved=0ahUKEwjVzOeD9OqIAxW12AIHHRHKAhkQ4dUDCA8&uact=5&oq=Causes+of+failures+in+telecommunications+systems&gs_lp=Egxnd3Mtd2l6LXNlcnAiMENhdXNlcyBvZiBmYWlsdXJlcyBpbiB0ZWxlY29tbXVuaWNhdGlvbnMgc3lzdGVtczIFECEYnwVIjwRQyAJYyAJwAXgBkAEAmAGxAaABsQGqAQMwLjG4AQPIAQD4AQL4AQGYAgKgArgBwgIKEAAYsAMY1gQYR5gDAIgGAZAGBZIHAzEuMaAH6wE&sclient=gws-wiz-serp',
  },
  {
    id: 38,
    search: 'Яндекс',
    language: 'eng',
    countDocuments: '144000',
    link: 'https://yandex.ru/search/?text=Modifications+of+the+genetic+algorithm+for+path+finding&lr=35&clid=2270455&win=652&within=0&lang=en',
  },
  {
    id: 39,
    search: 'Bing',
    language: 'eng',
    countDocuments: '264000',
    link: 'https://www.bing.com/search?q=Modifications+of+the+genetic+algorithm+for+path+finding&qs=n&form=QBRE&sp=-1&lq=0&pq=modern+methods+and+models+for+assessing+technical+risks&sc=15-55&sk=&cvid=AD0E01004B4642E88E2A68145F75A403&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 40,
    search: 'Yahoo',
    language: 'eng',
    countDocuments: '127000',
    link: 'https://search.yahoo.com/search;_ylt=AwrEt6lmQYln5wEAYupXNyoA;_ylc=X1MDMjc2NjY3OQRfcgMyBGZyA3NmcARmcjIDc2ItdG9wBGdwcmlkA0ZCb0tUVUdsUW5xN0V5RWRwaFdoaEEEbl9yc2x0AzAEbl9zdWdnAzQEb3JpZ2luA3NlYXJjaC55YWhvby5jb20EcG9zAzAEcHFzdHIDBHBxc3RybAMwBHFzdHJsAzU1BHF1ZXJ5A01vZGlmaWNhdGlvbnMlMjBvZiUyMHRoZSUyMGdlbmV0aWMlMjBhbGdvcml0aG0lMjBmb3IlMjBwYXRoJTIwZmluZGluZwR0X3N0bXADMTczNzA0ODQzMQ--?p=Modifications+of+the+genetic+algorithm+for+path+finding&fr=sfp&fr2=sb-top',
  },
];

export const LibraryResponse = [
  {
    title:
      'Исследование эффективности применения генетического алгоритма для решения задачи транспортной логистики ',
    authors: 'А.Р. Салиева, К.Я. Кудрявцев, И.С. Трифонов ',
    description:
      'В статье А.Р. Салиевой и соавторов рассматривается использование генетического алгоритма для решения задачи транспортной логистики. Статья подчеркивает значимость внедрения современных алгоритмических подходов в сферу транспортной логистики для достижения более высоких результатов.',
    source: 'Оригинальные исследования (ОРИС), 2023 год',
  },
  {
    title:
      'Применение генетических алгоритмов для решения задачи коммивояжера в условиях динамических изменений ',
    authors: 'Е. В. Петрова, А. Н. Сидоров',
    description:
      'В статье основное внимание уделяется важности использования генетических алгоритмов в задачах, требующих учета динамики, что может значительно улучшить процессы маршрутизации и повысить устойчивость логистических систем..',
    source:
      'Вестник ЮУрГУ Серия: Математическое моделирование и программирование, 2020 год',
  },
];
export const LinkResponse = {
  literature: [
    {
      title: 'Genetic Algorithms in Search, Optimization, and Machine Learning',
      authors: 'David E. Goldberg',
      description:
        ' Книга охватывает основные концепции, такие как операторы скрещивания, мутации и селекции, а также их использование для решения реальных задач.',
    },
    {
      title: 'Genetic Algorithms: A Practical Approach',
      authors: 'Roland A. O. M. Santos',
      description:
        'В этой книге объясняется, как генетические алгоритмы могут быть использованы для решения различных оптимизационных задач. Она включает в себя практические примеры и код на языках программирования.',
    },
    {
      title: 'Evolutionary Algorithms for Solving Multi-Objective Problems',
      authors: 'Carlos A. Coello Coello',
      description:
        'В этой книге рассматриваются генетические и эволюционные алгоритмы для решения многокритериальных задач.',
    },
  ],
  saits: [
    {
      link: 'http://www.machinelearning.ru',
      description:
        'MachineLearning.ru — Портал о машинном обучении, где можно найти материалы по генетическим алгоритмам и их практическому применению.',
    },
    {
      link: 'https://www.openstreetmap.org/',
      description:
        'OpenStreetMap (OSM) — Проект предоставляет свободные географические данные, которые могут быть использованы без ограничений.',
    },
  ],
};

export const PersonalLink = {
  title: 'Люблю музыку, книги и винду',
  video: './Реклама Apple Macintosh 1984.mp4',
  preview: './images.jpg',
};

export const UemkResponse = {
  titleKurs: 'Разработка на JavaScript',
  descriptionKurs:
    'Курс по MongoDB обучает основам работы с этой NoSQL базой данных. Курс ориентирован на практическое применение MongoDB.',
  lectures: [
    {
      title: 'Введение в MongoDB',
      pathDocument: './uemkValentin/1.docx',
    },
    {
      title: 'Структура данных в MongoDB',
      pathDocument: './uemkValentin/2.docx',
    },
    {
      title: 'CRUD-операции в MongoDB',
      pathDocument: './uemkValentin/3.docx',
    },
    {
      title: 'Агрегации и обработка данных в MongoDB',
      pathDocument: './uemkValentin/4.docx',
    },
    {
      title: 'Репликация и шардирование в MongoDB',
      pathDocument: './uemkValentin/5.docx',
    },
    {
      title: 'Безопасность и администрирование MongoDB',
      pathDocument: './uemkValentin/6.docx',
    },
    {
      title: 'Интеграция MongoDB в приложения',
      pathDocument: './uemkValentin/7.docx',
    },
  ],
  tasks: [
    {
      title: 'Основы работы с MongoDB',
      pathDocument: './uemkValentin/tasks/1.docx',
    },
    {
      title: 'Использование агрегаций и индексов',
      pathDocument: './uemkValentin/tasks/2.docx',
    },
    {
      title: 'Интеграция MongoDB в приложение',
      pathDocument: './uemkValentin/tasks/3.docx',
    },
  ],
  dopMatireals: [
    {
      title: 'MongoDB Documentation',
      description:
        'Официальная документация MongoDB Это основной источник информации, включая подробные руководства, API-референсы и лучшие практики.',
      link: 'https://docs.mongodb.com/',
    },
    {
      title: 'MongoDB Tutorials (TutorialsPoint)',
      description:
        'Хорошо структурированное руководство по MongoDB, с примерами и объяснениями всех основных функций.',
      link: 'https://www.tutorialspoint.com/mongodb/index.htm',
    },
    {
      title: 'MongoDB University',
      description:
        'Онлайн-курсы от MongoDB, включающие как базовые, так и углубленные темы, с возможностью получения сертификатов..',
      link: 'https://university.mongodb.com/',
    },
  ],
  authour: 'Дудо Иван',
  kriteri: './uemkValentin/kriteri.docx',
};

export default {
  mainResponseRu: mainResponseRu,
  mainResponseEng: mainResponseEng,
  referatResponseRu: referatResponseRu,
  referatResponseEng: referatResponseEng,
  biographyResponse: biographyResponse,
  reportSearchResponse: reportSearchResponse,
  LibraryResponse: LibraryResponse,
  LinkResponse: LinkResponse,
  PersonalLink: PersonalLink,
  UemkResponse: UemkResponse,
};
