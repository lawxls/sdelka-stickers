import { Search, User, MapPin, Phone, Mail, Globe, Send, LayoutGrid, List, X, Zap, Eye, EyeOff, Construction, Copy, Check, Bell, Sparkles, ArrowRight, Rocket, ChevronUp } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';
import Logo from './imports/Group100001019212';
import RoundLogo from './imports/Group1000010223';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('Производители этикеток');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDevModal, setShowDevModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [visibleCount, setVisibleCount] = useState(20);
  const loadMoreRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 600);
          ticking = false;
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = (emailStr: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = emailStr;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
    } catch (e) {
      // ignore
    }
    document.body.removeChild(textArea);
    setCopiedEmail(emailStr);
    setTimeout(() => setCopiedEmail(null), 1500);
  };
  
  const suppliers = [
    {
      id: 1,
      name: 'Студия рекламных технологий СКА',
      description: 'Комплексное обслуживание Вашего бизнеса в сфере рекламы',
      location: 'Владимир',
      phone: '+7 (930) 830-15-56',
      email: 'info@studiyaska.ru',
      website: 'studiyaska.ru',
    },
    {
      id: 2,
      name: 'ПромоТехнологии',
      description: 'Рекламно-производственная компания',
      location: 'Екатеринбург',
      phone: '+7 (343) 351-73-01',
      email: 'info@pr-ekb.ru',
      website: 'pr-ekb.ru',
    },
    {
      id: 3,
      name: 'Алмаз-Плюс',
      description: 'Производственная компания',
      location: 'Волгоград',
      phone: '+7 (8442) 981072',
      email: 'info@almazplus.ru',
      website: 'almazplus.ru',
    },
    {
      id: 4,
      name: 'Бегемот',
      description: 'Рекламно-производственная компания',
      location: 'Благовещенск',
      phone: '+7 (4162) 214422',
      email: 'info@begemot28.ru',
      website: 'begemot28.ru',
    },
    {
      id: 5,
      name: 'Атри+',
      description: 'полиграфическая компания',
      location: 'Москва',
      phone: '+7 (495) 380-21-80',
      email: 'info@atriplus.com',
      website: 'atriplus.com',
    },
    {
      id: 6,
      name: 'Кенстайл-Принт',
      description: 'Типография',
      location: 'Москва',
      phone: '+7 (495) 617-08-36',
      email: 'info@kenstyle-print.ru',
      website: 'kenstyle-print.ru',
    },
    {
      id: 7,
      name: 'Имфлекс Холдинг',
      description: 'Производство и поставка БОПП ПЭТГ самоклеящаяся термоусадочная пленка',
      location: 'Ступино',
      phone: '+7 (903) 667-27-88',
      email: 'info@imflexshop.ru',
      website: 'imflexshop.ru',
    },
    {
      id: 8,
      name: '«Полиграф-Центр Юг»',
      description: 'Производство этикетки и упаковки',
      location: 'Новочеркасск',
      phone: '+7 (8635) 226080',
      email: 'info@poligraf-center.ru',
      website: 'poligraf-center.ru',
    },
    {
      id: 9,
      name: '«КРЕАТИВ+»',
      description: 'рекламно-полиграфическая компания',
      location: 'Калуга',
      phone: '+7 (4842) 751906',
      email: 'info@kreativ-plus.ru',
      website: 'kreativ-plus.ru',
    },
    {
      id: 10,
      name: 'ПАЛИТРА',
      description: 'Рекламно-производственная компания',
      location: 'Абакан',
      phone: '+7 (3902) 305740',
      email: 'info@ра-палитра.рф',
      website: 'ра-палитра.рф',
    },
    {
      id: 11,
      name: 'Флексотипография "ИскраУпак"',
      description: 'типография',
      location: 'Смоленск',
      phone: '+7 (4812) 310799',
      email: 'info@iskra-po.ru',
      website: 'iskra-po.ru',
    },
    {
      id: 12,
      name: 'ЯМАЙКА',
      description: 'Студия печати',
      location: 'Москва',
      phone: '+7 (499) 455-99-32',
      email: 'info@i-maika.ru',
      website: 'i-maika.ru',
    },
    {
      id: 13,
      name: 'Типография "Этикетка плюс"',
      description: 'производство этикеток',
      location: 'Серпухов',
      phone: '+7 (926) 353-51-91',
      email: 'info@rekflex.ru',
      website: 'rekflex.ru',
    },
    {
      id: 14,
      name: '«ФИРМА СИГМА»',
      description: 'Полиграфическое предприятие',
      location: 'Москва',
      phone: '+7 (495) 333-14-75',
      email: 'info@firma-sigma.ru',
      website: 'firma-sigma.ru',
    },
    {
      id: 15,
      name: 'АРТУМ',
      description: 'Типография, дизайн, бизнес сувениры в Подольске',
      location: 'Подольск',
      phone: '+7 (926) 058-59-59',
      email: 'info@artum-buro.ru',
      website: 'artum-buro.ru',
    },
    {
      id: 16,
      name: 'Агентство рекламы',
      description: 'Рекламное агентство полного цикла, типография',
      location: 'Сочи',
      phone: '+7 (918) 371-15-58',
      email: 'info@trioli-sochi.ru',
      website: 'trioli-sochi.ru',
    },
    {
      id: 17,
      name: 'ЗнакЪ Печати',
      description: 'Любые услуги полиграфии и типографии',
      location: 'Ивантеевка',
      phone: '+7 (909) 622-62-62',
      email: 'info@znakpechati.ru',
      website: 'znakpechati.ru',
    },
    {
      id: 18,
      name: '"Мельница-Нк"',
      description: 'Рекламная мастерская полного цикла',
      location: 'Новокузнецк',
      phone: '+7 (3843) 600690',
      email: 'info@мельница-нк.рф',
      website: 'мельница-нк.рф',
    },
    {
      id: 19,
      name: 'Abrisvektor',
      description: 'Типография комплексных решений',
      location: 'Магнитогорск',
      phone: '+7 (3519) 590710',
      email: 'info@argus-mgn.ru',
      website: 'argus-mgn.ru',
    },
    {
      id: 20,
      name: 'ПРАЙМ ЛЭЙБЛ',
      description: 'Типография, производство и поставки качественной этикеточной продукции и сопутствующих расходных материалов для маркировки',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 407-34-01',
      email: 'info@primelabel.ru',
      website: 'primelabel.ru',
    },
    {
      id: 21,
      name: 'Р.М.Пак',
      description: 'Производство и продажа бумажной упаковки для пищевой промышленности, одноразовой',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 320-65-70',
      email: 'info@cafepack.ru',
      website: 'cafepack.ru',
    },
    {
      id: 22,
      name: 'Онли-Пресс',
      description: 'Мы- рекламная, издательская, промышленная полиграфия, флексопечать и упаковка',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 309-75-77',
      email: 'info@only-press.ru',
      website: 'only-press.ru',
    },
    {
      id: 23,
      name: 'Маркет Сервис',
      description: 'Производство рулонной этикетки. Флексопечать',
      location: 'Орск',
      phone: '+7 (903) 395-93-97',
      email: 'info@tipografiya-ms.ru',
      website: 'tipografiya-ms.ru',
    },
    {
      id: 24,
      name: 'ПроТехно',
      description: 'Полиграфическое оборудование. Расходные материалы',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 309-23-84',
      email: 'info@pro-tehno.ru',
      website: 'pro-tehno.ru',
    },
    {
      id: 25,
      name: 'Палитра',
      description: 'типография',
      location: 'Бийск',
      phone: '+7 (3854) 356803',
      email: 'info@printpalitra.ru',
      website: 'printpalitra.ru',
    },
    {
      id: 26,
      name: 'Интербэг плюс',
      description: 'Мы производим пакеты и плёнку для разных отраслей',
      location: 'Новосибирск',
      phone: '+7 (383) 209-22-52',
      email: 'info@interbag.ru',
      website: 'interbag.ru',
    },
    {
      id: 27,
      name: '« Пакторг»',
      description: 'производство  и продажа упаковочных материалов',
      location: 'Новосибирск',
      phone: '+7 (383) 209-13-51',
      email: 'info@sibtape.ru',
      website: 'sibtape.ru',
    },
    {
      id: 28,
      name: 'Типография «СТИК-ПРИНТ»',
      description: 'Этикетки на растения из сверхпрочного материала',
      location: 'Москва',
      phone: '+7 (800) 201-55-65',
      email: 'info@stickprint.ru',
      website: 'stickprint.ru',
    },
    {
      id: 29,
      name: '«ПРО-Пакет»',
      description: 'Производство пакетов с логотипом',
      location: 'Москва',
      phone: '+7 (495) 722-20-78',
      email: 'info@propacket.ru',
      website: 'propacket.ru',
    },
    {
      id: 30,
      name: 'Студия печати "CheesePhoto"',
      description: 'Оперативная полиграфия, сувенирное производство, фотосалон',
      location: 'Хабаровск',
      phone: '+7 (4212) 936767',
      email: 'info@cheese-khv.ru',
      website: 'cheese-khv.ru',
    },
    {
      id: 31,
      name: '«Этикетка для Вас»',
      description: 'Типография',
      location: 'Москва',
      phone: '+7 (495) 445-81-39',
      email: 'info@label4u.ru',
      website: 'label4u.ru',
    },
    {
      id: 32,
      name: 'ПроТехно (Новосибирск)',
      description: 'Полиграфическое оборудование. Расходные материалы',
      location: 'Новосибирск',
      phone: '+7 (963) 273-02-23',
      email: 'info@pro-tehno.ru',
      website: 'pro-tehno.ru',
    },
    {
      id: 33,
      name: 'Петропакет',
      description: 'Производство бумажных крафт пакетов с флексопечатью до 8 цветов',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 416-35-48',
      email: 'info@snabupak.business.site',
      website: 'snabupak.business.site',
    },
    {
      id: 34,
      name: 'Русфлекс',
      description: 'Полный цикл производства гибкой упаковки',
      location: 'Чехов',
      phone: '+7 (495) 157-27-27',
      email: 'info@rusflex.com',
      website: 'rusflex.com',
    },
    {
      id: 35,
      name: 'Partgifts',
      description: 'Корпоративные подарки',
      location: 'Москва',
      phone: '+7 (495) 275-26-76',
      email: 'info@partgifts.ru',
      website: 'partgifts.ru',
    },
    {
      id: 36,
      name: 'Гуфи',
      description: 'Флексографическая печать фирменной гибкой упаковки, викет-пакетов, этикеток.',
      location: 'Тамбов',
      phone: '+7 (953) 700-88-80',
      email: 'info@gufi-flex.ru',
      website: 'gufi-flex.ru',
    },
    {
      id: 37,
      name: '«Симбирск-Картон»',
      description: 'производственная компания',
      location: 'Ульяновск',
      phone: '+7 (8422) 263430',
      email: 'info@симбирск-картон.рф',
      website: 'симбирск-картон.рф',
    },
    {
      id: 38,
      name: '«НИЖУПАК-НН»',
      description: 'Типография',
      location: 'Нижний Новгород',
      phone: '+7 (831) 270-43-15',
      email: 'info@nizhupak.ru',
      website: 'nizhupak.ru',
    },
    {
      id: 39,
      name: 'Флексо-Пак',
      description: 'Изготовление самоклеящейся этикетки',
      location: 'Белгород',
      phone: '+7 (4722) 402010',
      email: 'info@fpack.ru',
      website: 'fpack.ru',
    },
    {
      id: 40,
      name: 'ПолиграфРесурсы',
      description: 'Типография полного цикла',
      location: 'Белгород',
      phone: '+7 (4722) 267690',
      email: 'info@belpoligraf.ru',
      website: 'belpoligraf.ru',
    },
    {
      id: 41,
      name: 'ЭФФЕКТ-ПРИНТ',
      description: 'полиграфическая компания',
      location: 'Москва',
      phone: '+7 (495) 220-34-24',
      email: 'info@effect-print.ru',
      website: 'effect-print.ru',
    },
    {
      id: 42,
      name: 'Импресс',
      description: 'Полиграфический комплекс полного цикла, специализирующийся на производстве самоклеящейся этикетки в рулоне и ролевой упаковки.',
      location: 'Барнаул',
      phone: '+7 (3852) 282803',
      email: 'info@impress-print.ru',
      website: 'impress-print.ru',
    },
    {
      id: 43,
      name: 'Промэтикет Плюс',
      description: 'Производство самоклеящихся этикеток',
      location: 'Клин',
      phone: '+7 (49624) 50628',
      email: 'info@prometiket.ru',
      website: 'prometiket.ru',
    },
    {
      id: 44,
      name: 'TopMayka',
      description: 'Шелкотрафаретная печать на футболках',
      location: 'Симферополь',
      phone: '+7 (978) 725-52-17',
      email: 'info@top-mayka.ru',
      website: 'top-mayka.ru',
    },
    {
      id: 45,
      name: 'Полиграфический Центр "Новая Эра"',
      description: 'Полиграфические услуги:  изготовление самоклеющейся этикетки, печать газет и журналов',
      location: 'Симферополь',
      phone: '+7 (3652) 693609',
      email: 'info@new-era3000.ru',
      website: 'new-era3000.ru',
    },
    {
      id: 46,
      name: 'Паритет',
      description: 'Типография полного цикла',
      location: 'Саянск',
      phone: '+7 (39553) 56715',
      email: 'info@sservis.com',
      website: 'sservis.com',
    },
    {
      id: 47,
      name: 'ASK - FLEXO',
      description: 'Производство гибкой полимерной упаковки с флексопечатью',
      location: 'Махачкала',
      phone: '+7 (989) 891-46-86',
      email: 'info@askflexo.ru',
      website: 'askflexo.ru',
    },
    {
      id: 48,
      name: 'ЭТИКЕТКА',
      description: 'Типография флексопечати самоклеящихся этикеток в рулонах',
      location: 'Оренбург',
      phone: '+7 (902) 411-00-51',
      email: 'info@etiketka-flex.com',
      website: 'etiketka-flex.com',
    },
    {
      id: 49,
      name: 'ПолиграфТорг',
      description: 'Производство и продажа товаров для бизнеса',
      location: 'Кемерово',
      phone: '+7 (384) 278-09-90',
      email: 'info@poligraftorg.ru',
      website: 'poligraftorg.ru',
    },
    {
      id: 50,
      name: 'Типография этикетки Самоклейка',
      description: 'Печать самоклеящихся этикеток. Изготовление этикеток, наклеек, стикеров на заказ',
      location: 'Москва',
      phone: '+7 (495) 150-70-21',
      email: 'info@samokleika.ru',
      website: 'samokleika.ru',
    },
    {
      id: 51,
      name: 'Zoom',
      description: 'Типография',
      location: 'Нижний Новгород',
      phone: '+7 (831) 215-13-16',
      email: 'info@zoom-nn.ru',
      website: 'zoom-nn.ru',
    },
    {
      id: 52,
      name: 'Олимия',
      description: 'Печать самоклеящихся этикеток в рулонах',
      location: 'Екатеринбург',
      phone: '+7 (343) 361-24-69',
      email: 'info@olimia.ru',
      website: 'olimia.ru',
    },
    {
      id: 53,
      name: '"НИИПХ-Полихим"',
      description: 'Производство и разработка лакокрасочных продуктов и растворителей',
      location: 'Москва',
      phone: '+7 (495) 589-77-49',
      email: 'info@niipolihim.ru',
      website: 'niipolihim.ru',
    },
    {
      id: 54,
      name: 'Гранат',
      description: 'Типография',
      location: 'Краснодар',
      phone: '+7 (988) 521-96-42',
      email: 'info@granatprint23.ru',
      website: 'granatprint23.ru',
    },
    {
      id: 55,
      name: 'Инвест - Пак',
      description: 'торгово-сервисная компания',
      location: 'Екатеринбург',
      phone: '+7 (343) 310-01-02',
      email: 'info@i-pac.ru',
      website: 'i-pac.ru',
    },
    {
      id: 56,
      name: '«Башфлаг»',
      description: 'изготовление флагов в Уфе',
      location: 'Уфа',
      phone: '+7 (347) 275-97-44',
      email: 'info@bashflag.com',
      website: 'bashflag.com',
    },
    {
      id: 57,
      name: '"Движение-ФлексТандем"',
      description: 'Широкоформатная печать',
      location: 'Кирово-Чепецк',
      phone: '+7 (83361) 5-10-50',
      email: 'info@tandemflex.com',
      website: 'tandemflex.com',
    },
    {
      id: 58,
      name: 'УФ-Графика',
      description: 'Рекламно-производственная компания',
      location: 'Ярославль',
      phone: '+7 (4852) 906642',
      email: 'info@fotomig76.ru',
      website: 'fotomig76.ru',
    },
    {
      id: 59,
      name: 'ДАГПРЕСС-МЕДИА',
      description: 'Компания',
      location: 'Махачкала',
      phone: '+7 (8722) 681505',
      email: 'info@dagpress.com',
      website: 'dagpress.com',
    },
    {
      id: 60,
      name: 'Marvel Print',
      description: 'Типография',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 339-34-27',
      email: 'info@marvelprint.ru',
      website: 'marvelprint.ru',
    },
    {
      id: 61,
      name: 'ПоЛиАРТ',
      description: 'Рекламно-полиграфическое агентство',
      location: 'Оренбург',
      phone: '+7 (3532) 938113',
      email: 'info@rapoliart.ru',
      website: 'rapoliart.ru',
    },
    {
      id: 62,
      name: 'Пакет-Сервис',
      description: 'производственная компания',
      location: 'Москва',
      phone: '+7 (962) 980-68-60',
      email: 'info@пакет-сервис.рф',
      website: 'пакет-сервис.рф',
    },
    {
      id: 63,
      name: 'Компания "Карт-Мастер"',
      description: 'Изготовление пластиковых карт',
      location: 'Набережные Челны',
      phone: '+7 (8552) 513298',
      email: 'info@kart-master116.ru',
      website: 'kart-master116.ru',
    },
    {
      id: 64,
      name: 'ФлексоПАК',
      description: 'Изготовление самоклеящейся этикетки.',
      location: 'Симферополь',
      phone: '+7 (800) 775-46-95',
      email: 'info@fpack.ru',
      website: 'fpack.ru',
    },
    {
      id: 65,
      name: 'Фотоатмосфера - фотопечать и печать на футболках',
      description: 'ФотоАтмосфера - магазин футболок, толстовок в Королеве, предлагает красивый и качественный текстиль и опретивную печать на нем.',
      location: 'Королёв',
      phone: '+7 (925) 809-61-44',
      email: 'info@fotoatmosfera.ru',
      website: 'fotoatmosfera.ru',
    },
    {
      id: 66,
      name: 'Экологическая Инициатива Урал',
      description: 'Производство полимерной бумаги, синтетической бумаги, упаковочных пленок',
      location: 'Екатеринбург',
      phone: '+7 (343) 216-65-70',
      email: 'info@ecolen-ural.ru',
      website: 'ecolen-ural.ru',
    },
    {
      id: 67,
      name: 'Глянцевая Этикетка',
      description: 'Флексопечать этикеток для продуктов питания',
      location: 'Ставрополь',
      phone: '+7 (968) 275-55-99',
      email: 'info@glosslabel.ru',
      website: 'glosslabel.ru',
    },
    {
      id: 68,
      name: 'Авалон',
      description: 'Изготовление самоклеящихся этикеток',
      location: 'Москва',
      phone: '+7 (800) 250-73-44',
      email: 'info@msk.avalonlabel.ru',
      website: 'msk.avalonlabel.ru',
    },
    {
      id: 69,
      name: '«Лейбл АйДи»',
      description: 'Мы производим и продаём термотрансферные и термоэтикетки для маркировки товаров',
      location: 'Москва',
      phone: '+7 (495) 532-58-12',
      email: 'info@термо-этикетка.рф',
      website: 'термо-этикетка.рф',
    },
    {
      id: 70,
      name: 'УФ-Графика',
      description: 'Рекламно-производственная компания',
      location: 'Ярославль',
      phone: '+7 (4852) 906642',
      email: 'info@fotomig76.ru',
      website: 'fotomig76.ru',
    },
    {
      id: 71,
      name: 'Аструм',
      description: 'Компания по производству этикетки, упаковки, пакетов',
      location: 'Иркутск',
      phone: '+7 (3952) 779593',
      email: 'info@astrumbaik.ru',
      website: 'astrumbaik.ru',
    },
    {
      id: 72,
      name: 'Диамант Флекс',
      description: 'Флексопечать на самых различных материалах',
      location: 'Бердск',
      phone: '+7 (383) 299-56-38',
      email: 'info@diamantflex.com',
      website: 'diamantflex.com',
    },
    {
      id: 73,
      name: 'Флексоцентр',
      description: 'Изготовление флексоформ. Допечатная подготовка. Цветопробы',
      location: 'Бердск',
      phone: '+7 (383) 363-59-87',
      email: 'info@flexocenter.com',
      website: 'flexocenter.com',
    },
    {
      id: 74,
      name: 'ПЛАТИНА',
      description: 'Рекламно-производственная компания',
      location: 'Благовещенск',
      phone: '+7 (4162) 512771',
      email: 'info@platinadv.ru',
      website: 'platinadv.ru',
    },
    {
      id: 75,
      name: '«Полипак»',
      description: 'производитель пищевой упаковки.',
      location: 'Лермонтов',
      phone: '+7 (87935) 37415',
      email: 'info@polipak.org',
      website: 'polipak.org',
    },
    {
      id: 76,
      name: 'Бюро+',
      description: 'Типография',
      location: 'Тюмень',
      phone: '+7 (3452) 434654',
      email: 'info@buroplus.ru',
      website: 'buroplus.ru',
    },
    {
      id: 77,
      name: 'bdPRINT',
      description: 'Типография',
      location: 'Тула',
      phone: '+7 (4872) 792306',
      email: 'info@bd71print.ru',
      website: 'bd71print.ru',
    },
    {
      id: 78,
      name: 'УФ-Графика',
      description: 'Рекламно-производственная компания',
      location: 'Ярославль',
      phone: '+7 (4852) 906642',
      email: 'info@fotomig76.ru',
      website: 'fotomig76.ru',
    },
    {
      id: 79,
      name: 'УФ-Графика',
      description: 'Рекламно-производственная компания',
      location: 'Ярославль',
      phone: '+7 (4852) 906642',
      email: 'info@fotomig76.ru',
      website: 'fotomig76.ru',
    },
    {
      id: 80,
      name: 'ArttexStudio',
      description: 'Студия художественного текстиля',
      location: 'Калуга',
      phone: '+7 (4842) 579359',
      email: 'info@arttexstudio.su',
      website: 'arttexstudio.su',
    },
    {
      id: 81,
      name: 'Аструм',
      description: 'Торгово-производственная компания',
      location: 'Улан-Удэ',
      phone: '+7 (3012) 204420',
      email: 'info@astrumbaik.ru',
      website: 'astrumbaik.ru',
    },
    {
      id: 82,
      name: 'ИЗОСТУДИЯ',
      description: 'Рекламно-производственная компания',
      location: 'Армавир',
      phone: '+7 (86137) 75600',
      email: 'info@izostudia.net',
      website: 'izostudia.net',
    },
    {
      id: 83,
      name: 'Арт Имидж',
      description: 'Рекламно-производственная компания',
      location: 'Ростов-на-Дону',
      phone: '+7 (863) 204-17-81',
      email: 'info@artimage-don.ru',
      website: 'artimage-don.ru',
    },
    {
      id: 84,
      name: 'Байкал Лайн',
      description: 'Рекламно-производственная компания',
      location: 'Иркутск',
      phone: '+7 (3952) 536652',
      email: 'info@baikalline.ru',
      website: 'baikalline.ru',
    },
    {
      id: 85,
      name: 'Грау',
      description: 'производственно-оптовая компания',
      location: 'Кемерово',
      phone: '+7 (800) 505-49-50',
      email: 'info@grau.ru',
      website: 'grau.ru',
    },
    {
      id: 86,
      name: 'Пифагор Принт',
      description: 'Рекламно-полиграфическое агентство',
      location: 'Саратов',
      phone: '+7 (8452) 212327',
      email: 'info@pifagorprint.ru',
      website: 'pifagorprint.ru',
    },
    {
      id: 87,
      name: 'Кремль',
      description: 'Рекламно-полиграфическое агентство',
      location: 'Саратов',
      phone: '+7 (8452) 212327',
      email: 'info@pifagorprint.ru',
      website: 'pifagorprint.ru',
    },
    {
      id: 88,
      name: 'Мозаика-Медиа',
      description: 'Редакция',
      location: 'Ульяновск',
      phone: '+7 (8422) 445353',
      email: 'info@mosaica.ru',
      website: 'mosaica.ru',
    },
    {
      id: 89,
      name: 'Колорит',
      description: 'Рекламно-производственная компания',
      location: 'Краснодар',
      phone: '+7 (918) 276-95-07',
      email: 'info@print23.ru',
      website: 'print23.ru',
    },
    {
      id: 90,
      name: 'Азимут',
      description: 'Научно-производственный центр новых технологий',
      location: 'Ярославль',
      phone: '+7 (4852) 280000',
      email: 'info@azimutprint.ru',
      website: 'azimutprint.ru',
    },
    {
      id: 91,
      name: 'СИБИРЬ-ПАК',
      description: 'производственно-торговое предприятие',
      location: 'Омск',
      phone: '+7 (3812) 446816',
      email: 'info@premierpack.ru',
      website: 'premierpack.ru',
    },
    {
      id: 92,
      name: 'Листок',
      description: 'Полиграфическая компания',
      location: 'Чебоксары',
      phone: '+7 (8352) 629000',
      email: 'info@listok.org',
      website: 'listok.org',
    },
    {
      id: 93,
      name: 'Принт-Экспресс',
      description: 'Типография',
      location: 'Смоленск',
      phone: '+7 (4812) 328070',
      email: 'info@print-express99.ru',
      website: 'print-express99.ru',
    },
    {
      id: 94,
      name: 'Шедевр',
      description: 'Многопрофильная компания',
      location: 'Челябинск',
      phone: '+7 (351) 248-49-64',
      email: 'info@шедевр74.рф',
      website: 'шедевр74.рф',
    },
    {
      id: 95,
      name: 'Арт Лэнд',
      description: 'Рекламное агентство',
      location: 'Петрозаводск',
      phone: '+7 (911) 400-36-43',
      email: 'info@633643.ru',
      website: '633643.ru',
    },
    {
      id: 96,
      name: 'ПоЛиАРТ',
      description: 'рекламно-полиграфическое агентство',
      location: 'Оренбург',
      phone: '+7 (3532) 253360',
      email: 'info@kpoliart.ru',
      website: 'kpoliart.ru',
    },
    {
      id: 97,
      name: 'ЮВЕНТА',
      description: 'Типография',
      location: 'Уфа',
      phone: '+7 (347) 299-01-06',
      email: 'info@ufaprint.ru',
      website: 'ufaprint.ru',
    },
    {
      id: 98,
      name: 'Стилягин',
      description: 'Типография',
      location: 'Челябинск',
      phone: '+7 (351) 250-00-10',
      email: 'info@стилягин.рф',
      website: 'стилягин.рф',
    },
    {
      id: 99,
      name: 'Цеппелин',
      description: 'Рекламно-полиграфическая компания',
      location: 'Воронеж',
      phone: '+7 (473) 202-99-77',
      email: 'info@ra-z.ru',
      website: 'ra-z.ru',
    },
    {
      id: 100,
      name: 'ГРАФИС',
      description: 'Типография',
      location: 'Тула',
      phone: '+7 (4872) 245677',
      email: 'info@grafis-print.ru',
      website: 'grafis-print.ru',
    },
    {
      id: 101,
      name: 'Просвещение',
      description: 'рекламно-информационное агентство',
      location: 'Челябинск',
      phone: '+7 (351) 236-40-40',
      email: 'info@pr174.ru',
      website: 'pr174.ru',
    },
    {
      id: 102,
      name: 'Альмарин',
      description: 'рекламно-производственная фирма',
      location: 'Челябинск',
      phone: '+7 (351) 217-03-18',
      email: 'info@infodoski.ru',
      website: 'infodoski.ru',
    },
    {
      id: 103,
      name: 'Пряник',
      description: 'Рекламно-полиграфическая фирма',
      location: 'Челябинск',
      phone: '+7 (351) 326-70-10',
      email: 'info@pranik.ru',
      website: 'pranik.ru',
    },
    {
      id: 104,
      name: 'Талекс Принт',
      description: 'Типография',
      location: 'Бердск',
      phone: '+7 (38341) 52223',
      email: 'info@talexprint.ru',
      website: 'talexprint.ru',
    },
    {
      id: 105,
      name: 'Максима',
      description: 'производственно-торговая компания',
      location: 'Новосибирск',
      phone: '+7 (383) 342-52-61',
      email: 'info@maxima-nsk.ru',
      website: 'maxima-nsk.ru',
    },
    {
      id: 106,
      name: 'ПолимерПак',
      description: 'торгово-производственная компания',
      location: 'Новосибирск',
      phone: '+7 (383) 341-38-57',
      email: 'info@полимер-пак.рф',
      website: 'полимер-пак.рф',
    },
    {
      id: 107,
      name: 'Компания АСТРУМ',
      description: 'компания по производству полиэтиленовой продукции',
      location: 'Новосибирск',
      phone: '+7 (383) 226-37-43',
      email: 'info@astrum.pro',
      website: 'astrum.pro',
    },
    {
      id: 108,
      name: 'ПОЛИМИР',
      description: 'Рекламно-производственная компания',
      location: 'Благовещенск',
      phone: '+7 (4162) 377333',
      email: 'info@polimir-amur.ru',
      website: 'polimir-amur.ru',
    },
    {
      id: 109,
      name: 'Грани',
      description: 'Начни экономить с нами! Полиграфия и сувениры почти даром',
      location: 'Благовещенск',
      phone: '+7 (4162) 572667',
      email: 'info@grani.online',
      website: 'grani.online',
    },
    {
      id: 110,
      name: 'Ситалл',
      description: 'Типография',
      location: 'Красноярск',
      phone: '+7 (391) 218-05-15',
      email: 'info@sitall.com',
      website: 'sitall.com',
    },
    {
      id: 111,
      name: 'Куранты',
      description: 'Типография',
      location: 'Казань',
      phone: '+8 (800) 555-40-22',
      email: 'info@kurantyprint.ru',
      website: 'kurantyprint.ru',
    },
    {
      id: 112,
      name: 'Тафлекс',
      description: 'Сервисно-производственная компания',
      location: 'Казань',
      phone: '+7 (962) 559-09-77',
      email: 'info@taflex-corp.ru',
      website: 'taflex-corp.ru',
    },
    {
      id: 113,
      name: 'СТМ',
      description: 'Торгово-полиграфическая компания',
      location: 'Самара',
      phone: '+7 (846) 336-33-10',
      email: 'info@ctm-company.ru',
      website: 'ctm-company.ru',
    },
    {
      id: 114,
      name: 'FotoArt',
      description: 'Центр фотоуслуг и термопечати',
      location: 'Тюмень',
      phone: '+7 (904) 499-97-51',
      email: 'info@fotoart72.ru',
      website: 'fotoart72.ru',
    },
    {
      id: 115,
      name: 'Соло',
      description: 'Типография',
      location: 'Пенза',
      phone: '+7 (8412) 559128',
      email: 'info@solo.su',
      website: 'solo.su',
    },
    {
      id: 116,
      name: 'Morsa',
      description: 'рекламная группа',
      location: 'Новокузнецк',
      phone: '+7 (3843) 561110',
      email: 'info@morsa.ru',
      website: 'morsa.ru',
    },
    {
      id: 117,
      name: '1-я рекламная помощь',
      description: 'Рекламно-производственная компания',
      location: 'Калининград',
      phone: '+7 (4012) 390286',
      email: 'info@prpkld.com',
      website: 'prpkld.com',
    },
    {
      id: 118,
      name: 'Риол Принт',
      description: 'Рекламно-производственная фирма',
      location: 'Москва',
      phone: '+7 (495) 922-72-18',
      email: 'info@riolprint.ru',
      website: 'riolprint.ru',
    },
    {
      id: 119,
      name: 'ОРМ',
      description: 'Полиграфическая компания',
      location: 'Пушкино',
      phone: '+7 (903) 237-10-40',
      email: 'info@ormgroup.ru',
      website: 'ormgroup.ru',
    },
    {
      id: 120,
      name: 'Флексознак',
      description: 'Полиграфическая компания',
      location: 'Москва',
      phone: '+7 (499) 578-04-88',
      email: 'info@flexoznak.ru',
      website: 'flexoznak.ru',
    },
    {
      id: 121,
      name: '«ВМС-Принт»',
      description: 'типография',
      location: 'Подольск',
      phone: '+7 (495) 925-51-38',
      email: 'info@vms-print.ru',
      website: 'vms-print.ru',
    },
    {
      id: 122,
      name: 'Сити Медиа Принт',
      description: 'Полиграфическая компания',
      location: 'Москва',
      phone: '+7 (964) 627-91-56',
      email: 'info@cmprint.ru',
      website: 'cmprint.ru',
    },
    {
      id: 123,
      name: 'Brendlabel',
      description: 'Производственная компания',
      location: 'Москва',
      phone: '+7 (499) 270-03-41',
      email: 'info@brendlabel.ru',
      website: 'brendlabel.ru',
    },
    {
      id: 124,
      name: 'ПринтВам',
      description: 'Студия профессиональной печати на текстиле',
      location: 'Королёв',
      phone: '+7 (925) 809-61-44',
      email: 'info@printvam.ru',
      website: 'printvam.ru',
    },
    {
      id: 125,
      name: 'РОСТ-ПЕРМЬ',
      description: 'Типография',
      location: 'Пермь',
      phone: '+7 (342) 207-90-11',
      email: 'info@rost-perm.ru',
      website: 'rost-perm.ru',
    },
    {
      id: 126,
      name: 'Ремас-Флексо',
      description: 'Типография',
      location: 'Ижевск',
      phone: '+7 (3412) 935023',
      email: 'info@remas.ru',
      website: 'remas.ru',
    },
    {
      id: 127,
      name: 'Фрукт',
      description: 'Рекламно-производственная фирма',
      location: 'Краснодар',
      phone: '+7 (965) 464-56-00',
      email: 'info@youfrukt.ru',
      website: 'youfrukt.ru',
    },
    {
      id: 128,
      name: 'Эпиграф',
      description: 'Типография',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 495-91-19',
      email: 'info@epigraf.ru',
      website: 'epigraf.ru',
    },
    {
      id: 129,
      name: 'Империя ПАК',
      description: 'Производственная компания',
      location: 'Москва',
      phone: '+7 (495) 502-41-22',
      email: 'info@imperia-pack.ru',
      website: 'imperia-pack.ru',
    },
    {
      id: 130,
      name: 'PRINTHIT',
      description: 'Интернет-типография',
      location: 'Краснодар',
      phone: '+7 (861) 204-12-10',
      email: 'info@printhit.org',
      website: 'printhit.org',
    },
    {
      id: 131,
      name: 'Лист',
      description: 'Фотокопицентр',
      location: 'Санкт-Петербург',
      phone: '+7 (952) 097-71-87',
      email: 'info@fotosalon-list.ru',
      website: 'fotosalon-list.ru',
    },
    {
      id: 132,
      name: 'Ch.R Group',
      description: 'Дизайн-студия',
      location: 'Москва',
      phone: '+7 (499) 130-90-94',
      email: 'info@chr-group.ru',
      website: 'chr-group.ru',
    },
    {
      id: 133,
      name: 'ULTRA-market',
      description: 'Шоу-рум',
      location: 'Ижевск',
      phone: '+7 (3412) 311022',
      email: 'info@моякартина.рф',
      website: 'моякартина.рф',
    },
    {
      id: 134,
      name: 'Икс-принт',
      description: 'Рекламно-производственная компания',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 676-35-14',
      email: 'info@x-print.ru',
      website: 'x-print.ru',
    },
    {
      id: 135,
      name: 'Издат-Черноземье',
      description: 'Универсальная типография',
      location: 'Воронеж',
      phone: '+7 (473) 239-66-55',
      email: 'info@izdat-chern.ru',
      website: 'izdat-chern.ru',
    },
    {
      id: 136,
      name: 'ПЕЧАТНИК',
      description: 'Компания по производству скотча с логотипом',
      location: 'Новосибирск',
      phone: '+7 (383) 381-03-33',
      email: 'info@3810333.ru',
      website: '3810333.ru',
    },
    {
      id: 137,
      name: 'NOTAPRINT',
      description: 'Онлайн-типография',
      location: 'Астрахань',
      phone: '+7 (8512) 996321',
      email: 'info@nota30.ru',
      website: 'nota30.ru',
    },
    {
      id: 138,
      name: 'FotoArt',
      description: 'Центр фотоуслуг и термопечати',
      location: 'Тюмень',
      phone: '+7 (904) 499-97-51',
      email: 'info@fotoart72.ru',
      website: 'fotoart72.ru',
    },
    {
      id: 139,
      name: 'Авангард-принт',
      description: 'Типография',
      location: 'Москва',
      phone: '+8 (800) 550-67-20',
      email: 'info@xprint-msk.ru',
      website: 'xprint-msk.ru',
    },
    {
      id: 140,
      name: 'НОВА',
      description: 'Рекламное агентство',
      location: 'Тюмень',
      phone: '+7 (3452) 530163',
      email: 'info@stdnova.ru',
      website: 'stdnova.ru',
    },
    {
      id: 141,
      name: 'Ямайки',
      description: 'Дизайн-студия',
      location: 'Пермь',
      phone: '+7 (342) 247-91-18',
      email: 'info@yamaiki.ru',
      website: 'yamaiki.ru',
    },
    {
      id: 142,
      name: 'Браслет Промо',
      description: 'Производственная компания',
      location: 'Екатеринбург',
      phone: '+8 (804) 333-80-33',
      email: 'info@brasletpromo.ru',
      website: 'brasletpromo.ru',
    },
    {
      id: 143,
      name: 'ПакетБери',
      description: 'Типография',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 380-73-71',
      email: 'info@paketberi.ru',
      website: 'paketberi.ru',
    },
    {
      id: 144,
      name: 'Megaflexspb',
      description: 'Типография',
      location: 'Санкт-Петербург',
      phone: '+7 (921) 900-05-44',
      email: 'info@megaflexspb.ru',
      website: 'megaflexspb.ru',
    },
    {
      id: 145,
      name: 'САНЯ',
      description: 'Группа компаний',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 748-91-63',
      email: 'info@sanyaspb.ru',
      website: 'sanyaspb.ru',
    },
    {
      id: 146,
      name: 'ЛеоУпак',
      description: 'Рекламно-производственная компания',
      location: 'Краснодар',
      phone: '+7 (918) 128-42-88',
      email: 'info@leoupak.ru',
      website: 'leoupak.ru',
    },
    {
      id: 147,
      name: 'Термофлекс-Юг',
      description: 'Компания по производству самоклеящихся этикеток',
      location: 'Воронеж',
      phone: '+8 (800) 700-98-19',
      email: 'info@termoflexug.ru',
      website: 'termoflexug.ru',
    },
    {
      id: 148,
      name: 'Фиолет',
      description: 'Рекламное агентство',
      location: 'Щёкино',
      phone: '+7 (953) 194-40-46',
      email: 'info@fioleet.ru',
      website: 'fioleet.ru',
    },
    {
      id: 149,
      name: 'Look',
      description: 'Мастерская',
      location: 'Оренбург',
      phone: '+8 (800) 700-89-02',
      email: 'info@horswear.ru',
      website: 'horswear.ru',
    },
    {
      id: 150,
      name: 'Линия',
      description: 'Типография',
      location: 'Сочи',
      phone: '+7 (862) 296-54-95',
      email: 'info@linia-sochi.ru',
      website: 'linia-sochi.ru',
    },
    {
      id: 151,
      name: 'PAKET05',
      description: 'Компания',
      location: 'Махачкала',
      phone: '+7 (988) 784-08-08',
      email: 'info@paket05.ru',
      website: 'paket05.ru',
    },
    {
      id: 152,
      name: 'Термофлекс-юг',
      description: 'Компания по производству самоклеящихся этикеток',
      location: 'Волгоград',
      phone: '+7 (8442) 597682',
      email: 'info@termoflexug.ru',
      website: 'termoflexug.ru',
    },
    {
      id: 153,
      name: 'ВеАрт',
      description: 'Рекламно-полиграфическая фирма',
      location: 'Казань',
      phone: '+7 (987) 290-43-36',
      email: 'info@veartkzn.ru',
      website: 'veartkzn.ru',
    },
    {
      id: 154,
      name: 'Либерти Арт',
      description: 'Рекламно-производственная компания',
      location: 'Москва',
      phone: '+7 (926) 337-81-54',
      email: 'info@liberty-art.ru',
      website: 'liberty-art.ru',
    },
    {
      id: 155,
      name: 'ЦКТ-РЕГИОНЫ',
      description: 'Торгово-производственная компания',
      location: 'Нижний Новгород',
      phone: '+7 (831) 435-18-09',
      email: 'info@price-etiketka.ru',
      website: 'price-etiketka.ru',
    },
    {
      id: 156,
      name: 'Квартет',
      description: 'Типография',
      location: 'Нижний Новгород',
      phone: '+7 (831) 282-05-01',
      email: 'info@kvartet52.ru',
      website: 'kvartet52.ru',
    },
    {
      id: 157,
      name: 'Рекламные Сувениры',
      description: 'Рекламно-производственная компания',
      location: 'Хабаровск',
      phone: '+7 (909) 843-18-43',
      email: 'info@krs-vl.ru',
      website: 'krs-vl.ru',
    },
    {
      id: 158,
      name: 'АРТУМ',
      description: 'Типография',
      location: 'Подольск',
      phone: '+7 (926) 553-90-16',
      email: 'info@artum-buro.ru',
      website: 'artum-buro.ru',
    },
    {
      id: 159,
      name: 'Зэт стиль',
      description: 'Производственная компания',
      location: 'Люберцы',
      phone: '+7 (977) 128-01-89',
      email: 'info@z-stil.ru',
      website: 'z-stil.ru',
    },
    {
      id: 160,
      name: 'МГК',
      description: 'Полиграфическая фирма',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 326-94-00',
      email: 'info@mgkprint.ru',
      website: 'mgkprint.ru',
    },
    {
      id: 161,
      name: 'Идея Дизайн Групп',
      description: 'Студия дизайна и рекламного производства',
      location: 'Владивосток',
      phone: '+7 (966) 274-90-27',
      email: 'info@дизайнидея.com',
      website: 'дизайнидея.com',
    },
    {
      id: 162,
      name: 'Фиолет',
      description: 'Рекламное агентство',
      location: 'Щёкино',
      phone: '+7 (953) 194-40-46',
      email: 'info@fioleet.ru',
      website: 'fioleet.ru',
    },
    {
      id: 163,
      name: 'яМайка',
      description: 'Студия печати',
      location: 'Москва',
      phone: '+7 (499) 577-00-05',
      email: 'info@i-maika.ru',
      website: 'i-maika.ru',
    },
    {
      id: 164,
      name: 'Территория рекламы',
      description: 'Рекламно-производственная компания',
      location: 'Хабаровск',
      phone: '+7 (4212) 602955',
      email: 'info@idea-dv.ru',
      website: 'idea-dv.ru',
    },
    {
      id: 165,
      name: 'АЕпринт',
      description: 'Рекламно-производственная компания',
      location: 'Екатеринбург',
      phone: '+7 (343) 204-77-78',
      email: 'info@aeprint.ru',
      website: 'aeprint.ru',
    },
    {
      id: 166,
      name: 'InfoCard',
      description: 'Производственно-полиграфическая компания',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 490-77-50',
      email: 'info@infocardltd.ru',
      website: 'infocardltd.ru',
    },
    {
      id: 167,
      name: 'НОВА',
      description: 'Рекламное агентство',
      location: 'Тюмень',
      phone: '+7 (3452) 530563',
      email: 'info@stdnova.ru',
      website: 'stdnova.ru',
    },
    {
      id: 168,
      name: '34CMYK.RU',
      description: 'Производственно-полиграфическая компания',
      location: 'Волгоград',
      phone: '+7 (8442) 503404',
      email: 'info@34cmyk.ru',
      website: '34cmyk.ru',
    },
    {
      id: 169,
      name: 'ИМПРЕСС АРТ',
      description: 'Типография',
      location: 'Пушкино',
      phone: '+7 (495) 993-33-23',
      email: 'info@im-press.ru',
      website: 'im-press.ru',
    },
    {
      id: 170,
      name: 'Красный Квадрат',
      description: 'Рекламная группа',
      location: 'Кемерово',
      phone: '+7 (3842) 770700',
      email: 'info@redkvadrat.net',
      website: 'redkvadrat.net',
    },
    {
      id: 171,
      name: 'ПАККЕР',
      description: 'Торгово-производственная фирма',
      location: 'Владивосток',
      phone: '+7 (423) 279-05-86',
      email: 'info@packer-dv.ru',
      website: 'packer-dv.ru',
    },
    {
      id: 172,
      name: 'Юлис',
      description: 'Типография. Полиграфические услуги. Сувенирная продукция.',
      location: 'Тамбов',
      phone: '+7 (4752) 756444',
      email: 'info@yulis.ru',
      website: 'yulis.ru',
    },
    {
      id: 173,
      name: 'Типография «КАСП ПЛЮС»',
      description: '',
      location: 'Сочи',
      phone: '+7 (861) 207-17-12',
      email: 'info@kaspplus.ru',
      website: 'kaspplus.ru',
    },
    {
      id: 174,
      name: '«Пакторг»',
      description: 'Обособленное подразделение',
      location: 'Новосибирск',
      phone: '+7 (383) 347-10-84',
      email: 'info@sibtape.ru',
      website: 'sibtape.ru',
    },
    {
      id: 175,
      name: 'Печатный дом DSM',
      description: 'Полный спектр полиграфических услуг',
      location: 'Самара',
      phone: '+7 (800) 250-75-73',
      email: 'info@dsm-print.ru',
      website: 'dsm-print.ru',
    },
    {
      id: 176,
      name: 'Доброфлекс',
      description: 'Производство рулонных самоклеящихся этикеток',
      location: 'Ростов-на-Дону',
      phone: '+7 (961) 281-10-65',
      email: 'info@dobroflex.ru',
      website: 'dobroflex.ru',
    },
    {
      id: 177,
      name: 'Флекстейп',
      description: 'услуги флексопечать на колбасных оболочках',
      location: 'Липецк',
      phone: '+7 (474) 224-02-94',
      email: 'info@flex-tape.ru',
      website: 'flex-tape.ru',
    },
    {
      id: 178,
      name: 'Карамель',
      description: 'Рекламное агентство',
      location: 'Южно-Сахалинск',
      phone: '+7 (4242) 304777',
      email: 'info@304777.ru',
      website: '304777.ru',
    },
    {
      id: 179,
      name: 'Пайрам',
      description: 'творческая мастерская',
      location: 'Абакан',
      phone: '+7 (39031) 23578',
      email: 'info@pairam.ru',
      website: 'pairam.ru',
    },
    {
      id: 180,
      name: 'Комус-Кубань',
      description: 'торгово-полиграфическая компания',
      location: 'Новороссийск',
      phone: '+7 (8617) 607041',
      email: 'info@komus.ru',
      website: 'komus.ru',
    },
    {
      id: 181,
      name: 'Курс`13',
      description: 'Рекламно-полиграфическое агентство',
      location: 'Саранск',
      phone: '+7 (927) 974-66-66',
      email: 'info@kurs13.ru',
      website: 'kurs13.ru',
    },
    {
      id: 182,
      name: 'Хакпак',
      description: 'торгово-производственное предприятие',
      location: 'Абакан',
      phone: '+7 (909) 524-45-09',
      email: 'info@xakpak.ru',
      website: 'xakpak.ru',
    },
    {
      id: 183,
      name: 'АО «Кострома»',
      description: 'Издательско-полиграфическое предприятие',
      location: 'Кострома',
      phone: '+7 (4942) 491511',
      email: 'info@ipp.kostroma.ru',
      website: 'ipp.kostroma.ru',
    },
    {
      id: 184,
      name: 'Комус-Кубань',
      description: 'Ставропольский филиал',
      location: 'Ставрополь',
      phone: '+7 (8652) 560376',
      email: 'info@komus.com',
      website: 'komus.com',
    },
    {
      id: 185,
      name: 'Хорошее продвижение',
      description: 'Типография',
      location: 'Калуга',
      phone: '+7 (910) 707-11-25',
      email: 'info@hopro.ru',
      website: 'hopro.ru',
    },
    {
      id: 186,
      name: 'РЕКЛАМА33.РФ',
      description: 'Рекламно-полиграфическое агентство',
      location: 'Владимир',
      phone: '+7 (4922) 461818',
      email: 'info@реклама33.рф',
      website: 'реклама33.рф',
    },
    {
      id: 187,
      name: 'Рек-Таймс',
      description: 'Типография',
      location: 'Владимир',
      phone: '+7 (4922) 531676',
      email: 'info@rek-times.ru',
      website: 'rek-times.ru',
    },
    {
      id: 188,
      name: 'Меньщиков К.А.',
      description: 'Оптово-розничная компания',
      location: 'Владимир',
      phone: '+7 (4922) 537799',
      email: 'info@maks-s.ru',
      website: 'maks-s.ru',
    },
    {
      id: 189,
      name: 'Полиграф Плюс',
      description: 'полиграфическая компания',
      location: 'Владимир',
      phone: '+7 (4922) 447282',
      email: 'info@poli33.ru',
      website: 'poli33.ru',
    },
    {
      id: 190,
      name: 'Эластика',
      description: 'Типография',
      location: 'Абакан',
      phone: '+7 (3902) 297677',
      email: 'info@эластика.рф',
      website: 'эластика.рф',
    },
    {
      id: 191,
      name: 'ЛейблПак',
      description: 'фабрика упаковки',
      location: 'Курск',
      phone: '+7 (4712) 341688',
      email: 'info@packfactory.ru',
      website: 'packfactory.ru',
    },
    {
      id: 192,
      name: 'Биомикс',
      description: 'торговая компания',
      location: 'Хабаровск',
      phone: '+7 (4212) 461871',
      email: 'info@биомикс.рф',
      website: 'биомикс.рф',
    },
    {
      id: 193,
      name: 'Фокус Принт',
      description: 'рекламно-производственная компания',
      location: 'Иркутск',
      phone: '+7 (3952) 609128',
      email: 'info@fokus-print-reklamno.tiu.ru',
      website: 'fokus-print-reklamno.tiu.ru',
    },
    {
      id: 194,
      name: 'АЛЕКСАНДРИТ-СЕРВИС',
      description: 'рекламно-полиграфическая компания',
      location: 'Ставрополь',
      phone: '+7 (8652) 465468',
      email: 'info@aleksandrit26.ru',
      website: 'aleksandrit26.ru',
    },
    {
      id: 195,
      name: 'Рекламно-сувенирная компания «Авакс».',
      description: 'рекламно-сувенирная компания',
      location: 'Ставрополь',
      phone: '+7 (8652) 350219',
      email: 'info@avakskmv.ru',
      website: 'avakskmv.ru',
    },
    {
      id: 196,
      name: 'Аква Маркет',
      description: 'производственно-торговая компания',
      location: 'Омск',
      phone: '+7 (3812) 908364',
      email: 'info@vodovos.ru',
      website: 'vodovos.ru',
    },
    {
      id: 197,
      name: 'Аквабаза',
      description: 'производственно-торговая компания',
      location: 'Омск',
      phone: '+7 (3812) 328860',
      email: 'info@aquabaza.tiu.ru',
      website: 'aquabaza.tiu.ru',
    },
    {
      id: 198,
      name: 'Жук',
      description: 'издательство',
      location: 'Хабаровск',
      phone: '+7 (4212) 654515',
      email: 'info@654515.com',
      website: '654515.com',
    },
    {
      id: 199,
      name: 'А-графика',
      description: 'Типография',
      location: 'Хабаровск',
      phone: '+7 (4212) 609202',
      email: 'info@agrafika.ru',
      website: 'agrafika.ru',
    },
    {
      id: 200,
      name: 'ПромУпак',
      description: 'производственная компания',
      location: 'Хабаровск',
      phone: '+7 (4212) 416621',
      email: 'info@promupak.net',
      website: 'promupak.net',
    },
    {
      id: 201,
      name: 'ТЭНА',
      description: 'Типография',
      location: 'Тольятти',
      phone: '+7 (8482) 708709',
      email: 'info@tenaprint.ru',
      website: 'tenaprint.ru',
    },
    {
      id: 202,
      name: 'СуперПринт',
      description: 'полиграфическая фирма',
      location: 'Тольятти',
      phone: '+7 (8482) 263389',
      email: 'info@superprint63.ru',
      website: 'superprint63.ru',
    },
    {
      id: 203,
      name: 'СуперПринт',
      description: 'Полиграфическая фирма',
      location: 'Тольятти',
      phone: '+7 (8482) 601230',
      email: 'info@superprint63.ru',
      website: 'superprint63.ru',
    },
    {
      id: 204,
      name: 'Рена Тольятти',
      description: 'Производственно-торговая фирма',
      location: 'Тольятти',
      phone: '+7 (8482) 557761',
      email: 'info@rena-tlt.ru',
      website: 'rena-tlt.ru',
    },
    {
      id: 205,
      name: 'Полимер',
      description: 'торгово-производственная компания',
      location: 'Тольятти',
      phone: '+7 (8482) 617793',
      email: 'info@полимер-тольятти.рф',
      website: 'полимер-тольятти.рф',
    },
    {
      id: 206,
      name: 'Абрис',
      description: 'Центр полиграфии',
      location: 'Брянск',
      phone: '+7 (4832) 641004',
      email: 'info@abris32.ru',
      website: 'abris32.ru',
    },
    {
      id: 207,
      name: 'Промупак-Барнаул',
      description: 'торгово-производственная компания',
      location: 'Барнаул',
      phone: '+7 (3852) 504484',
      email: 'info@promupak.su',
      website: 'promupak.su',
    },
    {
      id: 208,
      name: 'DeLogic',
      description: 'Производственно-торговая фирма',
      location: 'Ростов-на-Дону',
      phone: '+7 (863) 200-20-32',
      email: 'info@delogic.ru',
      website: 'delogic.ru',
    },
    {
      id: 209,
      name: 'АРТ-ИНФО',
      description: 'Типография',
      location: 'Тамбов',
      phone: '+7 (4752) 722261',
      email: 'info@etiketka-tambov.com',
      website: 'etiketka-tambov.com',
    },
    {
      id: 210,
      name: 'Арт-Статус',
      description: 'рекламно-полиграфическое агентство',
      location: 'Ростов-на-Дону',
      phone: '+7 (863) 232-89-60',
      email: 'info@artstatus.su',
      website: 'artstatus.su',
    },
    {
      id: 211,
      name: 'Март-Медиа',
      description: 'рекламно-полиграфическое агентство',
      location: 'Ростов-на-Дону',
      phone: '+7 (863) 269-75-60',
      email: 'info@mart-media.irnd.ru',
      website: 'mart-media.irnd.ru',
    },
    {
      id: 212,
      name: 'СИА-медиа',
      description: 'рекламно-полиграфическое агентство',
      location: 'Ростов-на-Дону',
      phone: '+7 (863) 263-54-34',
      email: 'info@siamedia.ru',
      website: 'siamedia.ru',
    },
    {
      id: 213,
      name: 'Гармония',
      description: 'рекламно-полиграфическая фирма',
      location: 'Ростов-на-Дону',
      phone: '+7 (863) 294-37-99',
      email: 'info@suvenir-rostov.ru',
      website: 'suvenir-rostov.ru',
    },
    {
      id: 214,
      name: 'Лекси',
      description: 'Торгово-производственная компания',
      location: 'Хабаровск',
      phone: '+7 (4212) 489310',
      email: 'info@lexidv.ru',
      website: 'lexidv.ru',
    },
    {
      id: 215,
      name: 'Мир печати',
      description: 'Типография',
      location: 'Ростов-на-Дону',
      phone: '+7 (863) 259-82-30',
      email: 'info@worldprint.su',
      website: 'worldprint.su',
    },
    {
      id: 216,
      name: 'КБТ Плюс',
      description: 'Производственная компания',
      location: 'Ростов-на-Дону',
      phone: '+7 (863) 294-17-80',
      email: 'info@kbt-rnd.ru',
      website: 'kbt-rnd.ru',
    },
    {
      id: 217,
      name: 'Юнипак Ростов',
      description: 'полиграфическая компания',
      location: 'Ростов-на-Дону',
      phone: '+7 (863) 200-11-77',
      email: 'info@unipack-rostov.ru',
      website: 'unipack-rostov.ru',
    },
    {
      id: 218,
      name: 'Card Group',
      description: 'Производственная компания',
      location: 'Ростов-на-Дону',
      phone: '+7 (903) 406-24-88',
      email: 'info@cardgroup.pro',
      website: 'cardgroup.pro',
    },
    {
      id: 219,
      name: 'Аврора',
      description: 'типография',
      location: 'Ростов-на-Дону',
      phone: '+7 (863) 219-84-61',
      email: 'info@aurora-print.ru',
      website: 'aurora-print.ru',
    },
    {
      id: 220,
      name: '«Атлантис-Пак»',
      description: 'производственно-коммерческая фирма',
      location: 'Аксай',
      phone: '+7 (800) 500-85-85',
      email: 'info@atlantis-pak.ru',
      website: 'atlantis-pak.ru',
    },
    {
      id: 221,
      name: 'Рубин',
      description: 'Типография',
      location: 'Ростов-на-Дону',
      phone: '+7 (863) 253-46-11',
      email: 'info@rubin-flex.ru',
      website: 'rubin-flex.ru',
    },
    {
      id: 222,
      name: 'Сибагро К',
      description: 'группа компаний',
      location: 'Иркутск',
      phone: '+7 (3952) 399884',
      email: 'info@sibagro.su',
      website: 'sibagro.su',
    },
    {
      id: 223,
      name: 'ИРСИ',
      description: 'Рекламно-издательская компания',
      location: 'Иркутск',
      phone: '+7 (3952) 706298',
      email: 'info@irsi.ru',
      website: 'irsi.ru',
    }

  ];

  // Infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < suppliers.length) {
          setVisibleCount((prev) => Math.min(prev + 20, suppliers.length));
        }
      },
      { threshold: 0.1 }
    );
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [visibleCount, suppliers.length]);

  const visibleSuppliers = suppliers.slice(0, visibleCount);

  // Force cards on mobile
  const effectiveView = isMobile ? 'cards' : viewMode;
  
  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-[72px] md:pb-0">
      {/* Header */}
      <div className="sticky top-0 z-40 will-change-[transform]">
        <div className="bg-white px-3 md:px-0">
          {/* Desktop header */}
          <div className="hidden md:flex items-center gap-5 px-6 py-3.5">
            <div className="flex-shrink-0 h-8 w-[150px]">
              <Logo />
            </div>
            <div className="flex-1 max-w-[600px]">
              <div
                className={`flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full transition-all duration-200 ${
                  searchFocused
                    ? 'bg-white shadow-[0_2px_12px_rgba(0,0,0,0.12)] border border-[#e0e0e0]'
                    : 'bg-[#f1f3f4] border border-transparent hover:shadow-[0_1px_6px_rgba(0,0,0,0.08)] hover:bg-[#eceef0]'
                }`}
              >
                <Search size={18} className={`flex-shrink-0 transition-colors ${searchFocused ? 'text-[#ff6a39]' : 'text-[#9aa0a6]'}`} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Какой товар или услугу ищем?"
                  className="flex-1 bg-transparent border-none outline-none text-[14px] text-[#202124] px-1.5 placeholder:text-[#9aa0a6]"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1.5 hover:bg-[#f1f3f4] rounded-full transition-colors flex-shrink-0"
                  >
                    <X size={14} className="text-[#70757a]" />
                  </button>
                )}
                <button onClick={() => setShowDevModal(true)} className="px-5 py-2 bg-[#ff6a39] hover:bg-[#e55a2f] text-white text-[13px] rounded-full transition-all hover:shadow-md active:scale-[0.97] whitespace-nowrap flex items-center gap-1.5">
                  <Search size={14} />
                  Найти
                </button>
              </div>
            </div>
          </div>

          {/* Mobile header */}
          <div className="md:hidden flex items-center gap-2 px-3 py-2">
            <div className="flex-shrink-0 w-[36px] h-[36px]">
              <RoundLogo />
            </div>
            <div
              className={`flex-1 flex items-center gap-1.5 pl-3 pr-1 py-1.5 rounded-full transition-all duration-200 ${
                searchFocused
                  ? 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] border border-[#e0e0e0]'
                  : 'bg-[#f1f3f4] border border-transparent'
              }`}
            >
              <Search size={16} className={`flex-shrink-0 transition-colors ${searchFocused ? 'text-[#ff6a39]' : 'text-[#9aa0a6]'}`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск поставщиков..."
                className="flex-1 bg-transparent border-none outline-none text-[16px] text-[#202124] px-1 min-w-0 placeholder:text-[#9aa0a6]"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              {searchQuery && !searchFocused && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 hover:bg-[#f1f3f4] rounded-full transition-colors flex-shrink-0"
                >
                  <X size={14} className="text-[#70757a]" />
                </button>
              )}
              <button onClick={() => setShowDevModal(true)} className="px-4 py-1.5 bg-[#ff6a39] hover:bg-[#e55a2f] text-white text-[13px] rounded-full transition-all active:scale-[0.96] whitespace-nowrap flex-shrink-0 flex items-center gap-1">
                <Search size={13} />
                Найти
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content — page that overlaps the header */}
      <div className="relative z-50 mt-3 md:mt-4 bg-[#f8f9fa] rounded-t-2xl md:rounded-t-3xl border-t border-[#e5e5e5] min-h-screen">
        <div className="max-w-[1400px] mx-auto px-3 md:px-6 pt-5 md:pt-6 pb-3 md:pb-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            
            {/* Left Column */}
            <div className="flex-1 min-w-0">
              {/* Results Info */}
              <div className="mb-3 md:mb-5">
                <h1 className="text-[16px] md:text-[22px] text-[#202124] mb-0.5 md:mb-1">
                  Производители этикеток
                  <span className="text-[#70757a] text-[14px] md:text-[22px]"> — {suppliers.length} компани{suppliers.length % 10 === 1 && suppliers.length % 100 !== 11 ? 'я' : 'й'}</span>
                </h1>
                <p className="text-[12px] md:text-[13px] text-[#70757a] leading-relaxed max-w-[640px] hidden md:block">
                  Список составлен автоматически на основе анализа сайтов. Контакты собраны с официальных страниц компаний — вы можете скачать список или отправить запрос КП всем сразу.
                </p>
              </div>

              {/* Action Bar - desktop */}
              <div className="hidden md:flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <button onClick={() => window.open('https://sdelka.ai', '_blank')} className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#f8f9fa] border border-[#dadce0] text-[#3c4043] text-[13px] rounded-full transition-colors">
                    <Send size={15} />
                    <span>Запросить КП</span>
                  </button>
                </div>
                <div className="flex items-center gap-0.5 bg-[#f1f3f4] p-0.5 rounded-full border border-[#e8eaed]">
                  <button
                    onClick={() => setViewMode('cards')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-[12px] rounded-full transition-all ${
                      viewMode === 'cards'
                        ? 'bg-white text-[#202124] shadow-sm'
                        : 'text-[#5f6368] hover:text-[#202124]'
                    }`}
                  >
                    <LayoutGrid size={14} />
                    <span>Список</span>
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-[12px] rounded-full transition-all ${
                      viewMode === 'table'
                        ? 'bg-white text-[#202124] shadow-sm'
                        : 'text-[#5f6368] hover:text-[#202124]'
                    }`}
                  >
                    <List size={14} />
                    <span>Таблица</span>
                  </button>
                </div>
              </div>

              {/* Suppliers */}
              {effectiveView === 'cards' ? (
                <div className="space-y-0">
                  {visibleSuppliers.map((supplier, index) => (
                    <div
                      key={supplier.id}
                      className="relative py-3.5 md:py-4 border-b border-[#e5e5e5] last:border-b-0"
                    >
                      {/* Website URL + Location (mobile: inline) */}
                      <div className="flex items-center gap-1.5 mb-0.5 md:mb-1">
                        <Globe size={12} className="text-[#5f6368] md:w-[14px] md:h-[14px]" />
                        <span className="text-[11px] md:text-[12px] text-[#5f6368]">{supplier.website}</span>
                        <span className="md:hidden text-[11px] text-[#bdc1c6]">·</span>
                        <span className="md:hidden text-[11px] text-[#5f6368]">{supplier.location}</span>
                      </div>
                      
                      {/* Company Name */}
                      <h3 className="text-[16px] md:text-[20px] text-[#1a0dab] hover:underline cursor-pointer mb-0.5 md:mb-1">
                        <a href={`https://${supplier.website}`} target="_blank" rel="noopener noreferrer">
                          {supplier.name}
                        </a>
                      </h3>
                      
                      {/* Description */}
                      <p className="text-[13px] md:text-[14px] text-[#4d5156] leading-relaxed mb-2 md:mb-3 max-w-[600px]">
                        {supplier.description}
                      </p>
                      
                      {/* Contact Details - Desktop horizontal */}
                      <div className="hidden md:flex items-center gap-4 text-[13px]">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-[#70757a]" />
                          <span className="text-[#202124]">{supplier.location}</span>
                        </div>
                        <div className="w-px h-4 bg-[#e5e5e5]"></div>
                        <div className="flex items-center gap-1.5">
                          <Phone size={14} className="text-[#70757a]" />
                          <a href={`tel:${supplier.phone}`} className="text-[#1a0dab] hover:underline">{supplier.phone}</a>
                        </div>
                        <div className="w-px h-4 bg-[#e5e5e5]"></div>
                        <div className="flex items-center gap-1.5">
                          <Mail size={14} className="text-[#70757a]" />
                          <span className="text-[#1a0dab] hover:underline cursor-pointer">{supplier.email}</span>
                          <button
                            onClick={() => handleCopyEmail(supplier.email)}
                            className="p-1 hover:bg-[#f1f3f4] rounded transition-all"
                            title="Скопировать email"
                          >
                            {copiedEmail === supplier.email ? (
                              <Check size={13} className="text-[#34a853]" />
                            ) : (
                              <Copy size={13} className="text-[#70757a]" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Contact Details - Mobile: action chips */}
                      <div className="md:hidden flex flex-wrap gap-1.5">
                        <a
                          href={`tel:${supplier.phone}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f1f3f4] rounded-full text-[12px] text-[#202124] active:bg-[#e8eaed] transition-colors"
                        >
                          <Phone size={12} className="text-[#5f6368]" />
                          <span>Позвонить</span>
                        </a>
                        <button
                          onClick={() => handleCopyEmail(supplier.email)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] transition-colors ${
                            copiedEmail === supplier.email
                              ? 'bg-[#e6f4ea] text-[#137333]'
                              : 'bg-[#f1f3f4] text-[#202124] active:bg-[#e8eaed]'
                          }`}
                        >
                          {copiedEmail === supplier.email ? (
                            <>
                              <Check size={12} />
                              <span>Скопировано</span>
                            </>
                          ) : (
                            <>
                              <Mail size={12} className="text-[#5f6368]" />
                              <span>{supplier.email}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Table View - desktop only */
                <div className="bg-white border border-[#e5e5e5] rounded-xl overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[640px]">
                      <thead>
                        <tr className="border-b-2 border-[#e8eaed] bg-[#f8f9fa]">
                          <th className="text-left px-4 py-2.5 text-[11px] text-[#5f6368] uppercase tracking-wider">Поставщик</th>
                          <th className="text-left px-4 py-2.5 text-[11px] text-[#5f6368] uppercase tracking-wider">Город</th>
                          <th className="text-left px-4 py-2.5 text-[11px] text-[#5f6368] uppercase tracking-wider">Телефон</th>
                          <th className="text-left px-4 py-2.5 text-[11px] text-[#5f6368] uppercase tracking-wider">Email</th>
                          <th className="text-left px-4 py-2.5 text-[11px] text-[#5f6368] uppercase tracking-wider">Сайт</th>
                        </tr>
                      </thead>
                      <tbody>
                        {visibleSuppliers.map((supplier, index) => (
                          <tr key={supplier.id} className={`border-b border-[#f1f3f4] hover:bg-[#f8f9fa] transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-[#fafbfc]'}`}>
                            <td className="px-4 py-3">
                              <a href={`https://${supplier.website}`} target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#1a0dab] hover:underline cursor-pointer">{supplier.name}</a>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-[13px] text-[#5f6368]">{supplier.location}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-[13px] text-[#202124]">{supplier.phone}</span>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-1 min-w-0">
                                <span className="text-[13px] text-[#1a0dab] hover:underline cursor-pointer truncate">{supplier.email}</span>
                                <button
                                  onClick={() => handleCopyEmail(supplier.email)}
                                  className="flex-shrink-0 p-1 hover:bg-[#e8eaed] rounded transition-all"
                                >
                                  {copiedEmail === supplier.email ? (
                                    <Check size={12} className="text-[#34a853]" />
                                  ) : (
                                    <Copy size={12} className="text-[#9aa0a6]" />
                                  )}
                                </button>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-[13px] text-[#1a0dab] hover:underline cursor-pointer">{supplier.website}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {visibleCount < suppliers.length && (
                <div ref={loadMoreRef} className="flex items-center justify-center py-8">
                  <div className="w-6 h-6 border-2 border-[#ff6a39] border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>

            {/* Right Column - Promo Banner */}
            <div className={`w-full lg:w-[320px] flex-shrink-0 order-first lg:order-last ${bannerDismissed ? 'hidden md:block' : ''}`}>
              <div className="lg:sticky lg:top-20">
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-[#ff6a39]">
                  {/* Dismiss button - mobile only */}
                  <button
                    onClick={() => setBannerDismissed(true)}
                    className="md:hidden absolute top-2.5 right-2.5 z-10 p-1 rounded-full"
                    style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                  >
                    <X size={14} className="text-white" />
                  </button>
                  {/* Decorative circles */}
                  <div className="absolute top-1/2 right-0 w-20 h-20 bg-white/5 rounded-full" />

                  <div className="relative p-4 md:p-6">
                    {/* Mobile: compact horizontal layout */}
                    <div className="md:hidden">
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg animate-[wiggle_3s_ease-in-out_infinite]"
                        >
                          <Rocket size={22} className="text-[#ff6a39]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white text-[15px] leading-tight mb-0.5">
                            Все КП за 5 минут
                          </h3>
                          <p className="text-white/80 text-[12px] leading-relaxed">
                            ИИ разошлёт запросы, соберёт ответы и сравнит цены в таблице
                          </p>
                        </div>
                      </div>

                      {/* Steps */}
                      <div className="flex gap-1.5 mb-3">
                        {[
                          { icon: '📨', t: 'Рассылка' },
                          { icon: '📥', t: 'Сбор КП' },
                          { icon: '📊', t: 'Сравнение' },
                        ].map((s) => (
                          <div
                            key={s.t}
                            className="flex items-center gap-1.5 flex-1 bg-white/15 rounded-lg px-2 py-1.5"
                          >
                            <span className="text-[13px]">{s.icon}</span>
                            <span className="text-white text-[11px]">{s.t}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => window.open('https://sdelka.ai', '_blank')}
                        className="w-full py-2.5 bg-white text-[#ff6a39] text-[13px] rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-[0.97] transition-transform"
                      >
                        <span>Запросить КП у всех</span>
                        <span className="animate-[bounceX_1.5s_ease-in-out_infinite]">
                          <ArrowRight size={15} />
                        </span>
                      </button>
                    </div>

                    {/* Desktop: full vertical layout */}
                    <div className="hidden md:block">
                      {/* Animated icon */}
                      <div className="mb-5 flex items-center gap-3">
                        <div
                          className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg animate-[wiggle_3s_ease-in-out_infinite]"
                        >
                          <Rocket size={30} className="text-[#ff6a39]" />
                        </div>
                        <div className="flex gap-1">
                          {[0, 1, 2].map((i) => (
                            <div
                              key={i}
                              className="w-1.5 h-1.5 bg-white/60 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"
                              style={{ animationDelay: `${i * 0.3}s` }}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="mb-1.5 inline-block bg-white/20 rounded-full px-3 py-1">
                        <span className="text-white text-[11px] flex items-center gap-1.5">
                          <Sparkles size={12} />
                          Сделайте работу в 10 раз быстрее
                        </span>
                      </div>

                      <h3 className="text-white text-[20px] leading-tight mb-2">
                        Соберите все КП за 5 минут
                      </h3>
                      <p className="text-white/85 text-[13px] leading-relaxed mb-5">
                        Отправьте запрос КП {suppliers.length} поставщикам одновременно. ИИ соберёт ответы и сделает таблицу сравнения.
                      </p>

                      {/* Steps */}
                      <div className="space-y-2.5 mb-6">
                        {[
                          { icon: '📨', title: 'Рассылка КП', desc: 'ИИ составит письмо и отправит всем' },
                          { icon: '📥', title: 'Сбор ответов', desc: 'Система сама соберёт все КП' },
                          { icon: '📊', title: 'Таблица сравнения', desc: 'Цены, сроки, условия поставки' },
                        ].map((s) => (
                          <div
                            key={s.title}
                            className="flex items-center gap-3 bg-white/15 rounded-xl px-3.5 py-2.5"
                          >
                            <span className="text-[20px] flex-shrink-0">{s.icon}</span>
                            <div className="min-w-0">
                              <span className="text-white text-[13px] block">{s.title}</span>
                              <p className="text-white/65 text-[11px]">{s.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => window.open('https://sdelka.ai', '_blank')}
                        className="w-full px-5 py-3.5 bg-white text-[#ff6a39] text-[15px] rounded-xl shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.97] transition-transform"
                      >
                        <span>Запросить КП у всех</span>
                        <span className="animate-[bounceX_1.5s_ease-in-out_infinite]">
                          <ArrowRight size={18} />
                        </span>
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#e5e5e5] px-3 py-2.5 safe-area-pb">
        <div className="flex gap-2">
          <button onClick={() => window.open('https://sdelka.ai', '_blank')} className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-white border border-[#dadce0] text-[#3c4043] text-[13px] rounded-xl transition-colors">
            <Send size={16} />
            <span>Запросить КП</span>
          </button>
        </div>
      </div>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-black/60 p-0 md:p-4" onClick={() => setShowAuthModal(false)}>
          <div className="relative bg-white rounded-t-2xl md:rounded-2xl shadow-2xl w-full md:max-w-[500px] max-h-[92vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Drag handle - mobile */}
            <div className="md:hidden flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 bg-[#dadce0] rounded-full" />
            </div>

            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-3 right-3 md:top-5 md:right-5 p-2 hover:bg-[#f8f9fa] rounded-xl transition-all z-10"
            >
              <X size={18} className="text-[#5f6368]" />
            </button>

            <div className="relative p-5 md:p-8">
              <div className="mb-5 md:mb-6 text-center">
                <div className="mb-3 md:mb-4 inline-block">
                  <div className="bg-[#ff6a39] p-3 rounded-2xl shadow-lg">
                    <User size={24} className="text-white" />
                  </div>
                </div>
                <h2 className="text-[22px] md:text-[28px] text-[#202124] mb-1.5 tracking-tight">
                  {authMode === 'login' ? 'С возвращением!' : 'Начните работу'}
                </h2>
                <p className="text-[13px] md:text-[14px] text-[#5f6368] leading-relaxed max-w-[380px] mx-auto">
                  {authMode === 'login' 
                    ? 'Войдите в свой аккаунт, чтобы продолжить' 
                    : 'Создайте аккаунт и получите доступ ко всем функциям'}
                </p>
              </div>

              <div className="mb-5">
                <button className="w-full px-5 py-3 bg-white hover:bg-[#f8f9fa] border-2 border-[#e5e5e5] hover:border-[#d0d0d0] rounded-xl text-[14px] text-[#202124] transition-all flex items-center justify-center gap-3 shadow-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span>Продолжить с Google</span>
                </button>
              </div>

              <div className="relative mb-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#e5e5e5]"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-white text-[12px] text-[#5f6368] uppercase tracking-wide">или с email</span>
                </div>
              </div>

              <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
                {authMode === 'register' && (
                  <div>
                    <label className="block text-[13px] text-[#202124] mb-1.5">Ваше имя</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-3 bg-[#f8f9fa] border-2 border-transparent rounded-xl text-[14px] text-[#202124] placeholder:text-[#9aa0a6] focus:outline-none focus:bg-white focus:border-[#ff6a39] transition-all"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-[13px] text-[#202124] mb-1.5">Email адрес</label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9aa0a6]" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@company.com"
                      className="w-full pl-12 pr-4 py-3 bg-[#f8f9fa] border-2 border-transparent rounded-xl text-[14px] text-[#202124] placeholder:text-[#9aa0a6] focus:outline-none focus:bg-white focus:border-[#ff6a39] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] text-[#202124] mb-1.5">Пароль</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Минимум 8 символов"
                      className="w-full px-4 py-3 bg-[#f8f9fa] border-2 border-transparent rounded-xl text-[14px] text-[#202124] placeholder:text-[#9aa0a6] focus:outline-none focus:bg-white focus:border-[#ff6a39] transition-all pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-white rounded-lg transition-all"
                    >
                      {showPassword ? <EyeOff size={18} className="text-[#5f6368]" /> : <Eye size={18} className="text-[#5f6368]" />}
                    </button>
                  </div>
                </div>

                {authMode === 'login' && (
                  <div className="flex items-center justify-end">
                    <button type="button" className="text-[13px] text-[#ff6a39] hover:text-[#e55a2f] transition-colors">
                      Забыли пароль?
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-[#ff6a39] hover:bg-[#e55a2f] text-white text-[15px] rounded-xl transition-all"
                >
                  {authMode === 'login' ? 'Войти' : 'Зарегистрироваться'}
                </button>
              </form>

              <div className="mt-5 text-center pb-2">
                <span className="text-[13px] text-[#5f6368]">
                  {authMode === 'login' ? 'Еще нет аккаунта?' : 'Уже есть аккаунт?'}
                </span>
                {' '}
                <button
                  onClick={() => {
                    setAuthMode(authMode === 'login' ? 'register' : 'login');
                    setEmail(''); setPassword(''); setName(''); setShowPassword(false);
                  }}
                  className="text-[13px] text-[#ff6a39] hover:text-[#e55a2f] transition-colors underline underline-offset-2"
                >
                  {authMode === 'login' ? 'Зарегистрироваться' : 'Войти'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dev Modal */}
      {showDevModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4" onClick={() => setShowDevModal(false)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[400px] p-6 md:p-8 text-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowDevModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-[#f8f9fa] rounded-xl transition-all"
            >
              <X size={18} className="text-[#5f6368]" />
            </button>
            
            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#fff3ed] rounded-2xl">
              <Bell size={28} className="text-[#ff6a39] md:w-8 md:h-8" />
            </div>

            <h3 className="text-[18px] md:text-[20px] text-[#202124] mb-2">Функция в разработке</h3>
            <p className="text-[13px] md:text-[14px] text-[#5f6368] leading-relaxed">
              Автоматическое составление списков поставщиков скоро будет готово.
            </p>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-40 w-10 h-10 md:w-11 md:h-11 bg-white border border-[#dadce0] text-[#5f6368] rounded-full shadow-md flex items-center justify-center active:scale-95 transition-transform"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
}