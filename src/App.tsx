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
      name: 'OptPart',
      description: 'Оптовая продажа торгового оборудования и расходных материалов для маркировки',
      location: 'Москва',
      phone: '+7 (800) 302-18-84',
      email: 'zakaz@optpart.ru',
      website: 'optpart.ru',
    },
    {
      id: 2,
      name: 'Риббонс',
      description: 'Производство риббонов (термотрансферных лент) и самоклеящихся этикеток',
      location: 'Санкт-Петербург',
      phone: '+7 (800) 555-97-03',
      email: 'zapros@ribbons.ru',
      website: 'ribbons.ru',
    },
    {
      id: 3,
      name: 'Полиграф Эксперт',
      description: 'Изготовление самоклеящихся этикеток оптом, поставка риббонов и принтеров',
      location: 'Одинцово',
      phone: '+7 (495) 374-80-18',
      email: 'info@pe-print.ru',
      website: 'pe-print.ru',
    },
    {
      id: 4,
      name: 'Промэтик',
      description: 'Поставка этикеток, расходных материалов и оборудования для маркировки и автоматизации учёта',
      location: 'Нижний Новгород',
      phone: '+7 (831) 215-11-80',
      email: 'zakaz@prometik.ru',
      website: 'prometik.ru',
    },
    {
      id: 5,
      name: 'Prodeco Company',
      description: 'Поставка упаковочных материалов, самоклеящихся этикеток и оборудования для печати',
      location: 'Москва',
      phone: '+7 (495) 109-20-34',
      email: 'info@prodeco-company.ru',
      website: 'prodeco-company.ru',
    },
    {
      id: 6,
      name: 'Топэтикетка',
      description: 'Производство и оптовая продажа термоэтикеток и термотрансферных самоклеящихся этикеток',
      location: 'Москва',
      phone: '+7 (903) 003-73-77',
      email: 'topetiketka.rf@mail.ru',
      website: 'xn--80ajiibuhwcd0j.xn--p1ai',
    },
    {
      id: 7,
      name: 'Форинтек',
      description: 'Производство самоклеящихся этикеток и поставка оборудования для маркировки',
      location: 'Москва',
      phone: '+7 (495) 781-61-46',
      email: 'forintek@forintek.ru',
      website: 'forintek.ru',
    },
    {
      id: 8,
      name: 'ProffEtiketki',
      description: 'Производство этикеток на заказ из бумаги и плёнки для различных отраслей',
      location: 'Москва',
      phone: '+7 (495) 476-56-57',
      email: 'info@proffetiketki.ru',
      website: 'proffetiketki.ru',
    },
    {
      id: 9,
      name: 'Upakovkatorg',
      description: 'Производство упаковки и печать этикеток, разработка дизайна',
      location: 'Москва',
      phone: '+7 (861) 991-47-16',
      email: 'info@upakovkatorg.ru',
      website: 'upakovkatorg.ru',
    },
    {
      id: 10,
      name: '77Labels',
      description: 'Оптовая продажа самоклеящихся рулонных этикеток',
      location: 'Москва',
      phone: '+7 (495) 320-55-93',
      email: 'sale@77labels.com',
      website: '77labels.com',
    },
    {
      id: 11,
      name: 'Праймлейбл',
      description: 'Производство самоклеящихся этикеток, бирок и билетов флексо и цифровой печатью',
      location: 'Санкт-Петербург',
      phone: '+7 (800) 555-91-97',
      email: 'info@primelabel.ru',
      website: 'primelabel.ru',
    },
    {
      id: 12,
      name: 'Фабрика этикеток',
      description: 'Производство и оптовая продажа самоклеящихся этикеток',
      location: 'Подольск',
      phone: '+7 (495) 135-00-59',
      email: 'info@optlabel.ru',
      website: 'optlabel.ru',
    },
    {
      id: 13,
      name: 'BOSLA',
      description: 'Производство самоклеящихся термо- и термотрансферных этикеток и комплектующих',
      location: 'Москва',
      phone: '+7 (495) 109-29-79',
      email: 'info@bosla.ru',
      website: 'bosla.ru',
    },
    {
      id: 14,
      name: 'Ролснаб',
      description: 'Производство и продажа термоэтикеток, риббонов и оборудования для маркировки',
      location: 'Ижевск',
      phone: '+7 (909) 060-69-97',
      email: 'zakaz@rolsnab.ru',
      website: 'rolsnab.ru',
    },
    {
      id: 15,
      name: 'ВОСТЕКС',
      description: 'Производство этикеток для одежды (жаккардовых, печатных, кожаных, ПВХ) и бирок',
      location: '',
      phone: '+7 (910) 301-43-91',
      email: 'sales@vosteks.com',
      website: 'vosteks.com',
    },
    {
      id: 16,
      name: 'Всеэтикетки.рф',
      description: 'Производство самоклеящихся этикеток на листах А4 для маркетплейсов и маркировки',
      location: 'Москва',
      phone: '',
      email: 'vseetiketki@mail.ru',
      website: 'xn--b1agalbkb5ckd0j.xn--p1ai',
    },
    {
      id: 17,
      name: 'TopEtiketka',
      description: 'Продажа чековых лент, термоэтикеток и расходных материалов для маркировки',
      location: 'Москва',
      phone: '+7 (499) 841-02-00',
      email: 'zakaz@topetiketka.ru',
      website: 'topetiketka.ru',
    },
    {
      id: 18,
      name: 'Мослейбл',
      description: 'Производство тканых и печатных этикеток, шевронов, ярлыков для одежды',
      location: 'Москва',
      phone: '+7 (495) 787-89-94',
      email: 'info@moslabel.com',
      website: 'moslabel.com',
    },
    {
      id: 19,
      name: 'BestLabel',
      description: 'Производство жаккардовых, печатных и картонных этикеток и нашивок для одежды',
      location: 'Москва',
      phone: '+7 (495) 507-10-38',
      email: 'info@bestlabel.ru',
      website: 'bestlabel.ru',
    },
    {
      id: 20,
      name: 'ООО «ИМФЛЕКС»',
      description: 'Производство и резка самоклеящихся флексографических материалов для этикеток',
      location: 'Ступино',
      phone: '+7 (916) 951-00-52',
      email: 'aparova@imflex.ru',
      website: 'imflex.ru',
    },
    {
      id: 21,
      name: 'Салют',
      description: 'Производство текстильных этикеток, шелкография и пошив футболок',
      location: 'Иваново',
      phone: '+7 (800) 550-31-30',
      email: 'salut37@yandex.ru',
      website: 'salut37.ru',
    },
    {
      id: 22,
      name: 'АО ФСТ',
      description: 'Промышленная маркировка, этикетки, термоусаживаемые трубки и маркировка кабеля',
      location: 'Москва',
      phone: '+7 (495) 775-45-57',
      email: 'info@aofst.ru',
      website: 'aofst.ru',
    },
    {
      id: 23,
      name: 'ТМарк',
      description: 'Производство и поставка решений для промышленной маркировки (этикетки, принтеры, материалы для кабелей)',
      location: 'Москва',
      phone: '+7 (936) 301-30-07',
      email: 'info@tmark.ru',
      website: 'tmark.ru',
    },
    {
      id: 24,
      name: 'Prilepi',
      description: 'Печать наклеек, этикеток, стикерпаков, магнитов и термонаклеек на ткань',
      location: 'Анапа',
      phone: '+7 (977) 026-52-67',
      email: 'admin@prilepi.com',
      website: 'prilepi.com',
    },
    {
      id: 25,
      name: 'ООО «Лейблпак»',
      description: 'Производство самоклеящихся этикеток и упаковки флексографической печатью',
      location: 'Тимашевск',
      phone: '+7 (909) 462-04-38',
      email: 'leiblpak@yandex.ru',
      website: 'leiblpak.ru',
    },
    {
      id: 26,
      name: 'ДатаМарк',
      description: 'Производство рулонных этикеток и поставка оборудования для маркировки',
      location: 'Самара',
      phone: '+7 (846) 278-41-01',
      email: 'sales@datamark.ru',
      website: 'datamark.ru',
    },
    {
      id: 27,
      name: 'Printack',
      description: 'Производство этикеток для маркировки растений и ПО для печати',
      location: 'Внуково (Московская область)',
      phone: '+7 (916) 821-21-21',
      email: 'info@printack.ru',
      website: 'printack.ru',
    },
    {
      id: 28,
      name: 'Mnogopak',
      description: 'Производство полиэтиленовых, бумажных и крафт-пакетов с печатью',
      location: 'Москва',
      phone: '+7 (495) 122-21-77',
      email: 'info@mnogopak.ru',
      website: 'mnogopak.ru',
    },
    {
      id: 29,
      name: 'Ribbon A',
      description: 'Производство самоклеящихся этикеток и термотрансферных лент (риббонов)',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 209-95-45',
      email: 'dir@rastergroup.ru',
      website: 'ribbon-a.ru',
    },
    {
      id: 30,
      name: 'Labelprof',
      description: 'Оптовая поставка самоклеящихся этикеток, чековой ленты, риббонов и расходных материалов для маркировки',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 309-89-59',
      email: 'lns@labelprof.ru',
      website: 'labelprof.ru',
    },
    {
      id: 31,
      name: 'MarketTD',
      description: 'Производство и печать самоклеящихся этикеток, термоэтикеток и риббонов',
      location: 'Москва',
      phone: '+7 (495) 198-06-55',
      email: 'info@markettd.ru',
      website: 'markettd.ru',
    },
    {
      id: 32,
      name: 'ООО "Ультралейбл"',
      description: 'Производство этикеток, бирок, ярлыков и швейной фурнитуры для одежды',
      location: 'Орехово-Зуево',
      phone: '+7 (495) 589-31-22',
      email: 'info@labeltex.ru',
      website: 'labeltex.ru',
    },
    {
      id: 33,
      name: 'Этикетно',
      description: 'Производство тканых и печатных этикеток, бирок, нашивок и шевронов для одежды',
      location: 'Иваново',
      phone: '+7 (910) 987-26-29',
      email: 'labeltrand@yandex.ru',
      website: 'etiketno.ru',
    },
    {
      id: 34,
      name: 'Полисам',
      description: 'Производство самоклеящихся рулонных материалов для этикеток',
      location: 'Москва',
      phone: '+7 (495) 984-91-46',
      email: 'info@polysam.ru',
      website: 'polysam.ru',
    },
    {
      id: 35,
      name: 'ГК Алита',
      description: 'Производство и поставка упаковочных материалов: стретч-пленки, скотча, термоэтикеток и чековой ленты',
      location: 'Красногорск',
      phone: '+7 (495) 431-99-80',
      email: 'flem2002@yandex.ru',
      website: 'fleimina.ru',
    },
    {
      id: 36,
      name: 'NOVAROLL',
      description: 'Производство транспортной и потребительской упаковки, химических решений и этикеточных материалов',
      location: 'Москва',
      phone: '+7 (800) 500-87-67',
      email: 'info@novaroll.ru',
      website: 'novaroll.ru',
    },
    {
      id: 37,
      name: 'Рекламное агентство «Студия КИТ»',
      description: 'Полный спектр рекламных услуг: наружная реклама, широкоформатная печать, полиграфия и дизайн',
      location: 'Владимир',
      phone: '+7 (492) 232-48-90',
      email: 'stkit33@gmail.com',
      website: 'stkit.ru',
    },
    {
      id: 38,
      name: 'Колортек',
      description: 'Производство совместимых картриджей для принтеров и расходных материалов для маркировки',
      location: 'Санкт-Петербург',
      phone: '+7 (800) 555-97-03',
      email: 'office@colortek.ru',
      website: 'colortek.ru',
    },
    {
      id: 39,
      name: 'КММ Бисс',
      description: 'Производство самоклеящихся термо- и термотрансферных этикеток',
      location: 'Москва',
      phone: '+7 (926) 360-14-41',
      email: 'kmmbis@mail.ru',
      website: 'kmmbiss.ru',
    },
    {
      id: 40,
      name: 'IZI Time',
      description: 'Производство и печать самоклеящихся термоэтикеток для маркетплейсов и розницы',
      location: 'Москва',
      phone: '+7 (985) 490-99-22',
      email: 'info@izitime.ru',
      website: 'izitime.ru',
    },
    {
      id: 41,
      name: 'ООО "ТК Азтек"',
      description: 'Поставка оборудования для автоматизации бизнеса и расходных материалов для маркировки и штрихкодирования',
      location: 'Реутов',
      phone: '+7 (800) 500-25-29',
      email: 'aztek-info@supershtrih.ru',
      website: 'supershtrih.ru',
    },
    {
      id: 42,
      name: 'ФЛАВИО',
      description: 'Производство и печать самоклеящихся этикеток, риббонов и чековой ленты',
      location: 'Санкт-Петербург',
      phone: '+7 (905) 268-22-50',
      email: 'flaviochat@yandex.ru',
      website: 'xn--80aesjs5a.xn--p1ai',
    },
    {
      id: 43,
      name: 'Олимия',
      description: 'Печать самоклеящихся этикеток и стикеров, в том числе с кодами Data Matrix',
      location: 'Екатеринбург',
      phone: '+7 (343) 361-24-69',
      email: 'order@olimia.ru',
      website: 'olimia.ru',
    },
    {
      id: 44,
      name: 'ГК КУРТ',
      description: 'Производство упаковки из картона, бумаги и пластика: коробки, конверты, этикетки, курьерские пакеты',
      location: 'Москва',
      phone: '+7 (495) 660-38-48',
      email: 'info@kurt-k.ru',
      website: 'envelopes.ru',
    },
    {
      id: 45,
      name: 'Onlabel',
      description: 'Производство самоклеящихся термо- и термотрансферных этикеток и риббонов',
      location: 'Москва',
      phone: '+7 (991) 688-88-01',
      email: 'zakaz@onlabel.ru',
      website: 'onlabel.ru',
    },
    {
      id: 46,
      name: 'ООО "Фуртек"',
      description: 'Поставка швейной фурнитуры, бирок, ярлыков и этикеток для одежды',
      location: 'Москва',
      phone: '+7 (980) 177-02-71',
      email: 'info@furtek.ru',
      website: 'furtek.ru',
    },
    {
      id: 47,
      name: 'Print label',
      description: 'Производство самоклеящихся этикеток, бирок и поставка оборудования для маркировки',
      location: 'Москва',
      phone: '+7 (495) 532-00-62',
      email: 'order@prlabel.ru',
      website: 'prlabel.ru',
    },
    {
      id: 48,
      name: 'Mmslabel',
      description: 'Печать текстильных этикеток, бирок, ярлыков и самоклеящихся стикеров оптом',
      location: 'Москва',
      phone: '+7 (495) 963-13-00',
      email: 'manager@mmslabel.ru',
      website: 'mmslabel.ru',
    },
    {
      id: 49,
      name: 'Прайс Этикетка',
      description: 'Производство расходных материалов для маркировки: самоклеящихся этикеток, риббонов и текстильных лент',
      location: 'Москва',
      phone: '+7 (861) 991-46-47',
      email: 'info@price-etiketka.ru',
      website: 'price-etiketka.ru',
    },
    {
      id: 50,
      name: 'ООО "Этикетка Маркет"',
      description: 'Производство самоклеящихся этикеток, термоэтикеток и термотрансферных риббонов',
      location: 'Подольск',
      phone: '+7 (964) 723-60-00',
      email: 'info@etiketkamarket.ru',
      website: 'etiketkamarket.ru',
    },
    {
      id: 51,
      name: 'Яркая Этикетка',
      description: 'Производство самоклеящихся этикеток и стикеров на бумаге и пленке',
      location: 'Санкт-Петербург',
      phone: '+7 (800) 333-18-59',
      email: 'zakaz@yaetiketka.ru',
      website: 'yaetiketka.ru',
    },
    {
      id: 52,
      name: 'ООО "Лейбл-стик"',
      description: 'Производство термоэтикеток ЭКО, ТОП, термотрансферных этикеток и риббонов',
      location: 'Рязань',
      phone: '+7 (920) 978-08-78',
      email: 'info@label-stick.ru',
      website: 'label-stick.ru',
    },
    {
      id: 53,
      name: 'Арте-Флекс',
      description: 'Производство самоклеящихся этикеток и стикеров (флексо, цифровая, шелкография, УФ-печать)',
      location: 'Москва',
      phone: '',
      email: 'info@arte-flex.ru',
      website: 'arte-flex.ru',
    },
    {
      id: 54,
      name: 'Торгмонтаж',
      description: 'Комплексное оснащение магазинов и ресторанов торговым оборудованием, автоматизация бизнеса',
      location: 'Нижний Новгород',
      phone: '+7 (831) 429-00-99',
      email: 'info@tmnn.ru',
      website: 'torgmontag.ru',
    },
    {
      id: 55,
      name: 'Типография «Наклейки-тут.рф»',
      description: 'Изготовление наклеек, этикеток и табличек для авто, офисов и магазинов',
      location: '',
      phone: '+7 (920) 461-18-04',
      email: 'nakleiki-vsem@yandex.ru',
      website: 'xn----7sbpmeecfp2dal.xn--p1ai',
    },
    {
      id: 56,
      name: 'Et7',
      description: 'Печать самоклеящихся этикеток, стикеров и гибкой упаковки (флексо, цифровая, офсет)',
      location: 'Москва',
      phone: '+7 (495) 211-87-38',
      email: 'info@et7.ru',
      website: 'et7.ru',
    },
    {
      id: 57,
      name: 'Бирка Маркет',
      description: 'Производство бирок и этикеток для одежды с логотипом (жаккард, сатин, шелк, картон)',
      location: 'Москва',
      phone: '+7 (495) 003-88-81',
      email: 'prod@birka-market.ru',
      website: 'birka-market.ru',
    },
    {
      id: 58,
      name: 'Варнис (Москва)',
      description: 'Производство этикеток, лент, пломб-наклеек и поставка оборудования для маркировки',
      location: 'Москва',
      phone: '+7 (495) 792-09-22',
      email: 'info@varnis.ru',
      website: 'varnis.ru',
    },
    {
      id: 59,
      name: 'Руспак',
      description: 'Производство полимерной упаковки, плёнки, пакетов и картонных этикеток',
      location: 'Нижний Новгород',
      phone: '+7 (800) 350-84-56',
      email: 'info@rospacks.ru',
      website: 'rospacks.ru',
    },
    {
      id: 60,
      name: 'Just Lable',
      description: 'Производство и печать этикеток всех видов (тканых, ПВХ, картонных, пломб)',
      location: 'Москва',
      phone: '+7 (495) 532-12-17',
      email: 'info@justlable.ru',
      website: 'justlable.ru',
    },
    {
      id: 61,
      name: 'ЮниПринт',
      description: 'Типография полного цикла: полиграфия, сувениры, наружная реклама',
      location: 'Калуга',
      phone: '+7 (484) 220-07-18',
      email: 'zakaz@up40.com',
      website: 'up40.com',
    },
    {
      id: 62,
      name: 'Starless',
      description: 'Производство самоклеящихся этикеток, чековой ленты и бумажной продукции',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 335-08-77',
      email: 'info@starless.ru',
      website: 'starless.ru',
    },
    {
      id: 63,
      name: 'Arena Label',
      description: 'Дизайн и производство этикеток, нашивок и лент с логотипом',
      location: 'Санкт-Петербург',
      phone: '+7 (930) 333-50-70',
      email: 'zakaz@arena-label.ru',
      website: 'arena-label.ru',
    },
    {
      id: 64,
      name: 'Онлидер',
      description: 'Оптовая продажа упаковки, расходных материалов и торгового оборудования',
      location: 'Москва',
      phone: '+7 (495) 926-59-84',
      email: 'msk@onlider.ru',
      website: 'onlider.ru',
    },
    {
      id: 65,
      name: 'СТЭП',
      description: 'Производство самоклеящихся этикеток, картонной упаковки и полиграфии',
      location: 'Москва',
      phone: '+7 (495) 646-25-45',
      email: 'etiketki@bk.ru',
      website: 'etiketki.ru',
    },
    {
      id: 66,
      name: 'GALILEO NOVAROLL',
      description: 'Флексографическая печать этикеток и полиграфической продукции',
      location: 'Калуга',
      phone: '+7 (495) 783-52-07',
      email: 'info@galileonovaroll.ru',
      website: 'galileonovaroll.ru',
    },
    {
      id: 67,
      name: 'Этикетка Калуга',
      description: 'Типография в Калуге: изготовление этикеток и полиграфии',
      location: 'Калуга',
      phone: '+7 (991) 215-32-50',
      email: 'l-print2011@mail.ru',
      website: 'xn----7sbbaoiuqbcm9edu2l.xn--p1ai',
    },
    {
      id: 68,
      name: 'Фабрика этикеток',
      description: 'Производство и продажа маркировочной продукции и этикеток',
      location: 'Москва',
      phone: '+7 (495) 223-40-56',
      email: 'info@fabrikaetiketok.ru',
      website: 'fabrikaetiketok.ru',
    },
    {
      id: 69,
      name: 'Этикеточный Завод Красновой',
      description: 'Производство этикеток и бумажной упаковки с 1997 года',
      location: 'Красноярск',
      phone: '+7 (391) 241-91-66',
      email: 'pd-k@mail.ru',
      website: 'ezk.su',
    },
    {
      id: 70,
      name: 'ОКИЛ (Okil)',
      description: 'Производство самоклеящихся этикеток, лидер российского рынка',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 327-57-37',
      email: 'mail@okil-sato.ru',
      website: 'okil.ru',
    },
    {
      id: 71,
      name: 'Новый Век',
      description: 'Производство самоклеящихся этикеток и поставка риббонов',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 748-23-72',
      email: 'info@pancltd.com',
      website: 'pancltd.ru',
    },
    {
      id: 72,
      name: 'Кабояши',
      description: 'Производство и упаковка брендированных соевого соуса, васаби, имбиря и палочек',
      location: 'Изобильный',
      phone: '+7 (919) 742-98-06',
      email: 'kaboyashi26@mail.ru',
      website: 'kaboyashiug.ru',
    },
    {
      id: 73,
      name: 'Tavro',
      description: 'Производство и печать самоклеящихся этикеток, поставка оборудования',
      location: 'Коломна',
      phone: '+7 (495) 981-04-22',
      email: 'tavrokolomna@mail.ru',
      website: 'tavro.ru',
    },
    {
      id: 74,
      name: 'RuRoll',
      description: 'Оптовая продажа упаковочных материалов, плёнок и клейких лент',
      location: 'Москва',
      phone: '+7 (495) 825-98-70',
      email: 'info@ruroll.ru',
      website: 'ruroll.ru',
    },
    {
      id: 75,
      name: 'Ruslabel',
      description: 'Производство жаккардовых этикеток и фурнитуры для швейных изделий',
      location: 'Иваново',
      phone: '+7 (920) 357-18-98',
      email: 'rus.etiketka@mail.ru',
      website: 'ruslabel.com',
    },
    {
      id: 76,
      name: 'Этикетки СПб',
      description: 'Производство и печать самоклеящихся этикеток различных типов',
      location: 'Санкт-Петербург',
      phone: '+7 (962) 707-02-16',
      email: 'maratkanov_s82@mail.ru',
      website: 'etiketkispb.ru',
    },
    {
      id: 77,
      name: 'НБК',
      description: 'Производство чековой ленты, этикеток и продукции из термобумаги',
      location: 'Нижний Новгород',
      phone: '+7 (831) 296-11-99',
      email: 'nnov@nbk.ru',
      website: 'nbk.ru',
    },
    {
      id: 78,
      name: 'FlexMaster',
      description: 'Производство самоклеящихся этикеток и наклеек в рулонах',
      location: 'Москва',
      phone: '+7 (495) 928-69-92',
      email: 'mail@flexm.ru',
      website: 'flexm.ru',
    },
    {
      id: 79,
      name: 'Сольвипак',
      description: 'Печать самоклеящихся этикеток на заказ',
      location: 'Химки',
      phone: '+7 (495) 540-53-04',
      email: 'sales@solvipak.ru',
      website: 'solvipak.ru',
    },
    {
      id: 80,
      name: 'ООО "Флексознак"',
      description: 'Производство бумажных стаканов, этикеток и упаковки',
      location: 'Москва',
      phone: '',
      email: 'info@flexoznak.ru',
      website: 'flexoznak.ru',
    },
    {
      id: 81,
      name: 'Печатный Экспресс PEF',
      description: 'Печать самоклеящихся, термоусадочных и IML-этикеток, гибкой упаковки',
      location: 'Москва',
      phone: '+7 (495) 739-99-33',
      email: 'office@pe-f.ru',
      website: 'pe-f.ru',
    },
    {
      id: 82,
      name: 'Типография Липкая Этикетка',
      description: 'Печать самоклеящихся этикеток в рулонах на заказ',
      location: 'Москва',
      phone: '+7 (495) 414-13-90',
      email: 'print@glabel.ru',
      website: 'xn----7sbocomb5ac6abd1d1dq.xn--p1ai',
    },
    {
      id: 83,
      name: 'Бирки-Этикетки',
      description: 'Производство швейной маркировки: бирок, этикеток и ярлыков для одежды',
      location: 'Москва',
      phone: '+7 (925) 800-82-84',
      email: 'zakaz@birki-etiketki.ru',
      website: 'birki-etiketki.ru',
    },
    {
      id: 84,
      name: 'БелыйЗонт',
      description: 'Производство и продажа самоклеящихся этикеток, термоэтикеток и чековой ленты',
      location: 'Видное',
      phone: '+7 (499) 444-01-26',
      email: 'zontbelyj@gmail.com',
      website: 'xn--90aighjog7a6e.xn--p1ai',
    },
    {
      id: 85,
      name: 'Типография Рост',
      description: 'Производство самоклеящихся этикеток любой сложности',
      location: 'Нижний Новгород',
      phone: '+7 (831) 220-50-31',
      email: 'rost@rost.nnov.ru',
      website: 'pressrost.ru',
    },
    {
      id: 86,
      name: 'Гексагон',
      description: 'Поставка оборудования, этикеток и расходных материалов для маркировки',
      location: 'Москва',
      phone: '+7 (495) 105-97-13',
      email: 'info@geksagon.ru',
      website: 'geksagon.ru',
    },
    {
      id: 87,
      name: 'Flexo',
      description: 'Производство и печать самоклеящихся этикеток большими тиражами',
      location: 'Москва',
      phone: '+7 (495) 323-96-96',
      email: 'info@flexo.ru',
      website: 'flexo.ru',
    },
    {
      id: 88,
      name: 'Реклама33',
      description: 'Рекламное агентство и типография полного цикла, производство полиграфии и этикеток',
      location: 'Владимир',
      phone: '+7 (904) 037-22-33',
      email: 'reklama33.rf@mail.ru',
      website: 'xn--33-6kcax4ahj5a.xn--p1ai',
    },
    {
      id: 89,
      name: 'Good Print (Пермь)',
      description: 'Цифровая типография, оперативная печать полиграфии, наклеек и упаковки',
      location: 'Пермь',
      phone: '+7 (800) 555-90-58',
      email: 'info@gprint.su',
      website: 'perm.gprint.ru',
    },
    {
      id: 90,
      name: 'ЧИП и ДИП',
      description: 'Продажа электронных компонентов, измерительных приборов и радиодеталей',
      location: 'Москва',
      phone: '+7 (812) 404-51-00',
      email: 'sales@chipdip.ru',
      website: 'chipdip.ru',
    },
    {
      id: 91,
      name: 'Пром-Максимум',
      description: 'Поставка и внедрение оборудования для промышленной маркировки товаров',
      location: 'Москва',
      phone: '+7 (499) 289-90-82',
      email: 'avtoinfo@mact.ru',
      website: 'prom-mact.ru',
    },
    {
      id: 92,
      name: 'TPPack (ТППак)',
      description: 'Производство самоклеящихся этикеток в рулонах',
      location: 'Москва',
      phone: '+7 (910) 333-22-44',
      email: 'toppress-zakaz@yandex.ru',
      website: 'tppack.ru',
    },
    {
      id: 93,
      name: 'Типография Этикетка Плюс',
      description: 'Производство самоклеящихся этикеток флексопечатью',
      location: 'Москва',
      phone: '+7 (916) 039-80-09',
      email: 'info@etiketkiplus.ru',
      website: 'etiketkiplus.ru',
    },
    {
      id: 94,
      name: 'Агропринт',
      description: 'Флексографическая печать самоклеящихся этикеток',
      location: 'Подольск',
      phone: '+7 (964) 723-17-23',
      email: 'info@agroprint.ru',
      website: 'agroprint.ru',
    },
    {
      id: 95,
      name: 'CheckArt',
      description: 'Производство самоклеящихся этикеток флексопечатью',
      location: 'Подольск',
      phone: '+7 (495) 514-19-97',
      email: 'print.checkart@gmail.com',
      website: 'checkart.ru',
    },
    {
      id: 96,
      name: 'ГалаПолиграф',
      description: 'Изготовление этикеток, ярлыков и маркировочной фурнитуры',
      location: 'Москва',
      phone: '+7 (495) 777-01-98',
      email: 'info@gala-poly.ru',
      website: 'gala-poly.ru',
    },
    {
      id: 97,
      name: 'Еврочек',
      description: 'Производство чековой ленты, термоэтикеток и риббонов',
      location: 'Красноярск',
      phone: '+7 (913) 532-88-89',
      email: 'dir@eurocheck.ru',
      website: 'eurocheck.ru',
    },
    {
      id: 98,
      name: 'Finelabel',
      description: 'Печать самоклеящихся этикеток, наклеек и стикеров',
      location: 'Химки',
      phone: '+7 (495) 540-56-50',
      email: 'finelabel@mail.ru',
      website: 'finelabel.ru',
    },
    {
      id: 99,
      name: 'spektropak',
      description: 'Производство и поставка упаковочных материалов (стрейч-пленка, пакеты, скотч)',
      location: 'Чехов',
      phone: '+7 (495) 998-98-56',
      email: 'spektropak@mail.ru',
      website: 'spektropak.ru',
    },
    {
      id: 100,
      name: 'Stickers-Print',
      description: 'Производство самоклеящихся этикеток под ключ',
      location: 'Москва',
      phone: '+7 (495) 190-74-09',
      email: 'stickersprint@yandex.ru',
      website: 'stickers-print.ru',
    },
    {
      id: 101,
      name: 'РЕАЛ КОМПЛЕКТ',
      description: 'Поставка фасовочно-упаковочного и маркировочного оборудования',
      location: 'Воронеж',
      phone: '+7 (910) 248-55-55',
      email: 'realkomplekt@mail.ru',
      website: 'realkomplekt.ru',
    },
    {
      id: 102,
      name: 'Etiketki25',
      description: 'Производство самоклеящихся этикеток, наклеек и стикеров',
      location: 'Москва',
      phone: '+7 (495) 920-09-42',
      email: 'info@etiketki25.ru',
      website: 'etiketki25.ru',
    },
    {
      id: 103,
      name: 'Prometiketka',
      description: 'Производство промышленных этикеток, бирок и термоэтикеток',
      location: 'Москва',
      phone: '',
      email: 'zakaz@prometiketka.ru',
      website: 'prometiketka.ru',
    },
    {
      id: 104,
      name: 'Технология печати',
      description: 'Флексографическая печать самоклеящихся этикеток в рулонах',
      location: 'Москва',
      phone: '+7 (926) 903-32-00',
      email: 'promo@tpbp.ru',
      website: 'tpbp.ru',
    },
    {
      id: 105,
      name: 'Exprinto',
      description: 'Онлайн-печать этикеток, наклеек и стикерпаков малыми тиражами',
      location: 'Калуга',
      phone: '+7 (800) 300-65-12',
      email: 'info@exprinto.ru',
      website: 'kaluga.exprinto.ru',
    },
    {
      id: 106,
      name: 'Самоклейка',
      description: 'Печать самоклеящихся этикеток и наклеек на заказ',
      location: 'Москва',
      phone: '+7 (495) 150-70-21',
      email: 'sales@samokleika.ru',
      website: 'samokleika.ru',
    },
    {
      id: 107,
      name: 'BuyPack (Буипак)',
      description: 'Оптовая торговля упаковочными материалами и картонными коробками',
      location: 'Москва',
      phone: '+7 (495) 744-65-86',
      email: 'mail@buypack.ru',
      website: 'buypack.ru',
    },
    {
      id: 108,
      name: 'Pack24',
      description: 'Интернет-гипермаркет упаковочных материалов оптом и в розницу',
      location: 'Москва',
      phone: '+7 (800) 700-56-83',
      email: 'sales@pack24.ru',
      website: 'pack24.ru',
    },
    {
      id: 109,
      name: 'Ив-Упаковка',
      description: 'Поставка упаковочных материалов для маркетплейсов и интернет-магазинов',
      location: 'Иваново',
      phone: '+7 (980) 680-51-61',
      email: 'info@iv-upakovka.ru',
      website: 'iv-upakovka.ru',
    },
    {
      id: 110,
      name: 'Inter ID',
      description: 'Поставка оборудования для автоматизации торговли, маркировки и идентификации',
      location: 'Москва',
      phone: '+7 (499) 226-23-06',
      email: 'info@interid.ru',
      website: 'interid.ru',
    },
    {
      id: 111,
      name: 'Star Tex',
      description: 'Оптово-розничная продажа тканей и текстильной фурнитуры',
      location: 'Екатеринбург',
      phone: '+7 (800) 505-21-21',
      email: 'hello@star-tex.ru',
      website: 'star-tex.ru',
    },
    {
      id: 112,
      name: 'ГК МАКТ',
      description: 'Поставка торгового и маркировочного оборудования, автоматизация бизнеса',
      location: 'Москва',
      phone: '+7 (800) 351-29-50',
      email: 'business@mact.ru',
      website: 'gk-mact.ru',
    },
    {
      id: 113,
      name: 'LigaMarket',
      description: 'Производство самоклеящихся этикеток и поставка материалов для маркировки и упаковки',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 209-50-65',
      email: 'zakaz@ligamarket.com',
      website: 'ligamarket.su',
    },
    {
      id: 114,
      name: 'Opti-Com',
      description: 'Оптовая поставка упаковочных, хозяйственных и расходных материалов для бизнеса',
      location: 'Москва',
      phone: '+7 (495) 980-06-48',
      email: 'info@opti-com.ru',
      website: 'opti-com.ru',
    },
    {
      id: 115,
      name: 'Greenea',
      description: 'Поставка упаковочных материалов, этикеток и тары для бизнеса',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 467-88-66',
      email: 'sale@greenea.ru',
      website: 'greenea.ru',
    },
    {
      id: 116,
      name: 'Scanberry',
      description: 'Продажа оборудования для автоматизации торговли и расходных материалов (этикетки, ленты)',
      location: 'Москва',
      phone: '+7 (499) 322-15-32',
      email: 'manager@scanberry.ru',
      website: 'scanberry.ru',
    },
    {
      id: 117,
      name: 'Триал Маркет',
      description: 'Оптовая продажа одноразовой посуды, пищевой упаковки и расходных материалов для HoReCa',
      location: 'Москва',
      phone: '+7 (495) 308-90-10',
      email: 'semlv@trial-market.ru',
      website: 'kaluga.trial-market.ru',
    },
    {
      id: 118,
      name: 'Дом Упаковки',
      description: 'Производство и продажа картонной упаковки, коробок, пакетов и конвертов с брендированием',
      location: 'Москва',
      phone: '+7 (800) 222-17-15',
      email: 'sale@domupack.ru',
      website: 'domupack.ru',
    },
    {
      id: 119,
      name: 'ИНТЕЛИС',
      description: 'Интернет-магазин торгового оборудования: принтеры этикеток, сканеры штрих-кодов, кассовая техника',
      location: 'Москва',
      phone: '+7 (495) 771-02-91',
      email: 'info@pos-shop.ru',
      website: 'pos-shop.ru',
    },
    {
      id: 120,
      name: 'Stickeronline',
      description: 'Печать и изготовление наклеек, стикеров и этикеток на заказ (DTF, UV DTF, виниловые)',
      location: 'Москва',
      phone: '+7 (495) 135-36-74',
      email: 'info@stickeronline.ru',
      website: 'stickeronline.ru',
    },
    {
      id: 121,
      name: 'Label Printer (ПОСТАК)',
      description: 'Производство почтовых конвертов и картонной упаковки с печатью логотипов',
      location: 'Калуга',
      phone: '+7 (800) 500-79-42',
      email: 'sales@postrade.ru',
      website: 'labelprinter.ru',
    },
    {
      id: 122,
      name: 'Комус-Опт',
      description: 'Оптовый поставщик канцтоваров, бумаги, упаковки и товаров для бизнеса',
      location: 'Москва',
      phone: '+7 (495) 784-64-32',
      email: 'info@komus-opt.ru',
      website: 'komus-opt.ru',
    },
    {
      id: 123,
      name: 'Bong',
      description: 'Производство и продажа почтовых конвертов и упаковочных материалов',
      location: 'Москва',
      phone: '+7 (800) 444-68-94',
      email: 'zakaz@bong.ru',
      website: 'bong.ru',
    },
    {
      id: 124,
      name: 'РОНБЕЛ',
      description: 'Производство картонных коробок, пакетов и упаковочных материалов',
      location: 'Москва',
      phone: '+7 (495) 278-02-09',
      email: 'zakaz@ronbel.ru',
      website: 'vladimir.ronbel.ru',
    },
    {
      id: 125,
      name: 'АлефОпт',
      description: 'Оптовая продажа игрушек, канцтоваров, посуды и подарочной продукции',
      location: 'Томск',
      phone: '+7 (800) 200-85-87',
      email: 'hello@ilikegift.ru',
      website: 'ilikegift.ru',
    },
    {
      id: 126,
      name: 'Этикетки24',
      description: 'Производство самоклеящихся этикеток, стикеров и наклеек (цифровая и флексопечать)',
      location: 'Москва',
      phone: '+7 (495) 925-98-81',
      email: 'info@etiketki24.ru',
      website: 'etiketki24.ru',
    },
    {
      id: 127,
      name: 'Dispak',
      description: 'Оптовая продажа упаковочных материалов: стрейч-пленка, скотч, коробки, пузырчатая пленка',
      location: 'Москва',
      phone: '+7 (499) 495-20-45',
      email: 'info@optplenka.com',
      website: 'optplenka.com',
    },
    {
      id: 128,
      name: 'РуссКартон',
      description: 'Производство и продажа картонных коробок, гофрокартона и упаковочных материалов',
      location: 'Москва',
      phone: '+7 (495) 796-94-41',
      email: 'info@russcarton.ru',
      website: 'russcarton.ru',
    },
    {
      id: 129,
      name: 'Упаковка-37',
      description: 'Интернет-магазин упаковки для маркетплейсов: пакеты, пленка, термоэтикетки, коробки',
      location: 'Иваново',
      phone: '+7 (930) 360-13-19',
      email: 'upakovka-37@bk.ru',
      website: 'upakovka-37.ru',
    },
    {
      id: 130,
      name: 'Юнипроффи',
      description: 'Производство гибкой полимерной упаковки: дой-пак, вакуумные, реторт- и курьерские пакеты',
      location: 'Санкт-Петербург',
      phone: '+7 (800) 775-41-80',
      email: 'sales@uniproffi.ru',
      website: 'uniproffi.ru',
    },
    {
      id: 131,
      name: 'ZIPPACK.RU',
      description: 'Оптовая продажа профессиональной упаковки: zip-lock, дой-пак, ПВД, БОПП с брендированием',
      location: 'Москва',
      phone: '+7 (499) 346-63-39',
      email: 'info@zippack.ru',
      website: 'zippack.ru',
    },
    {
      id: 132,
      name: 'Термолейбл',
      description: 'Производство термоэтикеток и самоклеящихся этикеток в рулонах оптом',
      location: 'Новосибирск',
      phone: '+7 (800) 101-33-65',
      email: '9100008262@mail.ru',
      website: 'thermal-label.ru',
    },
    {
      id: 133,
      name: 'SJ Company',
      description: 'Поставка торгового оборудования: принтеры этикеток, сканеры штрих-кодов, ТСД, расходные материалы',
      location: 'Москва',
      phone: '+7 (495) 123-38-46',
      email: 'zakaz@sj-company.ru',
      website: 'sj-company.ru',
    },
    {
      id: 134,
      name: 'Anpack',
      description: 'Оптовая продажа упаковочных материалов для продавцов маркетплейсов',
      location: 'Москва',
      phone: '+7 (925) 859-52-89',
      email: 'zakaz@anpack.ru',
      website: 'anpack.ru',
    },
    {
      id: 135,
      name: 'УПАКОВЫЧ',
      description: 'Производство и продажа упаковки: коробки, пленка, пакеты, пузырчатая пленка',
      location: 'Санкт-Петербург',
      phone: '+7 (992) 185-48-01',
      email: '7795@upakovych.ru',
      website: 'upakovych.ru',
    },
    {
      id: 136,
      name: 'ММтекс (Маркет Плюс)',
      description: 'Оптовая продажа тканей и фурнитуры для швейного производства',
      location: 'Москва',
      phone: '+7 (800) 700-22-81',
      email: 'sales@mmtex.ru',
      website: 'mmtex.ru',
    },
    {
      id: 137,
      name: 'Агропак',
      description: 'Производство пластиковой тары, ёмкостей и упаковки с самоклеящимися этикетками',
      location: 'Москва',
      phone: '+7 (495) 128-95-44',
      email: '1071441@agropak.net',
      website: 'agropak.net',
    },
    {
      id: 138,
      name: 'RusPrintMedia',
      description: 'Типография: печать этикеток, наклеек, бирок и производство картонной упаковки',
      location: 'Калуга',
      phone: '+7 (800) 707-62-98',
      email: 'rusprintmedia@yandex.ru',
      website: 'kaluga.rusprintmedia.ru',
    },
    {
      id: 139,
      name: 'Flaconrf (FLX)',
      description: 'Оптовая продажа флаконов, атомайзеров и аксессуаров для парфюмерии и косметики',
      location: 'Москва',
      phone: '+7 (995) 360-12-82',
      email: 'info@flaconrf.ru',
      website: 'flaconrf.ru',
    },
    {
      id: 140,
      name: 'Qifa',
      description: 'B2B цифровая экосистема для оптовой торговли и импорта товаров из Китая в Россию',
      location: 'Москва',
      phone: '+7 (800) 555-07-65',
      email: 'support@qifa.ru',
      website: 'qifa.ru',
    },
    {
      id: 141,
      name: 'EdaProf.ru',
      description: 'Поставка пищевых ингредиентов, добавок, упаковки и оборудования для пищевой промышленности',
      location: 'Москва',
      phone: '+7 (495) 123-30-01',
      email: 'info@edaprof.ru',
      website: 'edaprof.ru',
    },
    {
      id: 142,
      name: 'Pack-Store',
      description: 'Оптовая продажа упаковочных материалов и оборудования: коробки, пакеты, плёнка',
      location: 'Москва',
      phone: '+7 (800) 350-07-26',
      email: 'mail@pack-store.ru',
      website: 'pack-store.ru',
    },
    {
      id: 143,
      name: 'Аксесс',
      description: 'Оптовые поставки товаров из Китая и Тайваня с услугами OEM/ODM',
      location: 'Москва',
      phone: '+7 (926) 300-00-05',
      email: 'a.andreev@aksess.ru',
      website: 'aksess.ru',
    },
    {
      id: 144,
      name: 'Cargo-Avto (Тара для товара)',
      description: 'Продажа упаковочных материалов: коробки, скотч, пузырчатая плёнка, стрейч, крафт-бумага',
      location: 'Москва',
      phone: '+7 (495) 504-37-89',
      email: 'shop@cargo-avto.ru',
      website: 'shop.cargo-avto.ru',
    },
    {
      id: 145,
      name: 'Label4U',
      description: 'Производство самоклеящихся этикеток на заказ (термо, термотрансфер, для маркетплейсов)',
      location: 'Москва',
      phone: '+7 (495) 120-10-49',
      email: 'zakaz@label4u.ru',
      website: 'label4u.ru',
    },
    {
      id: 146,
      name: 'DA-office',
      description: 'Интернет-магазин офисной техники, мебели, канцтоваров и расходных материалов',
      location: 'Москва',
      phone: '+7 (495) 143-50-52',
      email: 'sales@da-office.ru',
      website: 'da-office.ru',
    },
    {
      id: 147,
      name: 'AsiaOptom',
      description: 'Интернет-магазин оптовых поставок товаров из Китая',
      location: 'Магнитогорск',
      phone: '+7 (800) 700-65-89',
      email: 'info@asiaoptom.com',
      website: 'asiaoptom.com',
    },
    {
      id: 148,
      name: 'OFSI',
      description: 'Интернет-магазин канцелярских и хозяйственных товаров оптом и в розницу',
      location: 'Москва',
      phone: '+7 (495) 215-28-10',
      email: 'info@ofsi.ru',
      website: 'ofsi.ru',
    },
    {
      id: 149,
      name: 'Делокс',
      description: 'Интернет-магазин канцелярских, бумажных и хозяйственных товаров для офиса и дома',
      location: 'Москва',
      phone: '+7 (495) 788-05-20',
      email: 'info@deloks.ru',
      website: 'deloks.ru',
    },
    {
      id: 150,
      name: 'МЕГАПАК',
      description: 'Производство и оптово-розничные поставки упаковки, тары и хозяйственно-бытовых товаров',
      location: 'Калининград',
      phone: '+7 (401) 266-60-00',
      email: 'info@megapack-russia.ru',
      website: 'megapack-russia.ru',
    },
    {
      id: 151,
      name: 'Сдисконтом.ру',
      description: 'Розничная и оптовая продажа канцелярских и бытовых товаров',
      location: 'Москва',
      phone: '+7 (499) 460-48-40',
      email: 'info@sdiskontom.ru',
      website: 'sdiskontom.ru',
    },
    {
      id: 152,
      name: 'Самсон-опт',
      description: 'Федеральный оптовый дистрибьютор канцтоваров, товаров для офиса, школы и дома',
      location: 'Воронеж',
      phone: '+7 (473) 250-29-54',
      email: 'partners@samsonpost.ru',
      website: 'samsonopt.ru',
    },
    {
      id: 153,
      name: 'Markerovka',
      description: 'Производство и продажа расходных материалов для маркировки: этикетки, риббоны, термобумага',
      location: 'Москва',
      phone: '+7 (495) 123-36-00',
      email: 'info@markerovka.ru',
      website: 'markerovka.ru',
    },
    {
      id: 154,
      name: 'BRAUBERG',
      description: 'Производитель и поставщик канцелярских товаров для офиса, школы и дома',
      location: 'Москва',
      phone: '+7 (499) 110-91-16',
      email: 'info@brauberg-rus.ru',
      website: 'brauberg-rus.ru',
    },
    {
      id: 155,
      name: 'ПолиграфТорг',
      description: 'Производство самоклеящихся этикеток в рулонах и поставка расходных материалов для печати',
      location: 'Москва',
      phone: '+7 (495) 249-33-02',
      email: 'info@poligraftorg.ru',
      website: 'poligraftorg.ru',
    },
    {
      id: 156,
      name: 'Цифровая Этикетка (DigLabel)',
      description: 'Производство и печать самоклеящихся этикеток, наклеек и стикеров',
      location: 'Москва',
      phone: '+7 (495) 772-79-58',
      email: 'sale@diglabel.ru',
      website: 'diglabel.ru',
    },
    {
      id: 157,
      name: 'Dobus',
      description: 'Оптовая и розничная продажа торгового, кассового и банковского оборудования, расходных материалов',
      location: 'Москва',
      phone: '',
      email: 'info@dobus.ru',
      website: 'kaluga.dobus.ru',
    },
    {
      id: 158,
      name: 'IQ Code',
      description: 'Производство самоклеящихся этикеток и поставка расходных материалов для маркировки и штрихкодирования',
      location: 'Москва',
      phone: '+7 (495) 568-16-88',
      email: 'sale@iqcode.ru',
      website: 'iqcode.ru',
    },
    {
      id: 159,
      name: 'Fervet',
      description: 'Интернет-магазин упаковочных материалов: почтовые пакеты, коробки, этикетки, пленка',
      location: 'Москва',
      phone: '+7 (800) 444-06-18',
      email: 'zakaz12@fervet.ru',
      website: 'fervet.ru',
    },
    {
      id: 160,
      name: 'Brandselect',
      description: 'Сервисный центр и системный интегратор торгового оборудования для автоматизации торговли',
      location: 'Москва',
      phone: '+7 (495) 229-30-84',
      email: 'info@brandselect.ru',
      website: 'brandselect.ru',
    },
    {
      id: 161,
      name: 'Стандартпак',
      description: 'Упаковочные и расходные материалы для маркировки и работы с маркетплейсами',
      location: 'Москва',
      phone: '+7 (495) 646-44-77',
      email: 'info@standartpak.ru',
      website: 'standartpak.ru',
    },
    {
      id: 162,
      name: 'ООО «ФТК Трейд»',
      description: 'Торговое оборудование и расходные материалы для автоматизации торговли и общепита',
      location: 'Москва',
      phone: '+7 (495) 673-68-13',
      email: 'sale@ftktrade.ru',
      website: 'ftkt.ru',
    },
    {
      id: 163,
      name: 'MAXICODE',
      description: 'Продажа самоклеящихся этикеток, риббонов, принтеров и сканеров штрихкода',
      location: 'Москва',
      phone: '+7 (495) 988-31-91',
      email: 'mail@maxicode.ru',
      website: 'maxicode.ru',
    },
    {
      id: 164,
      name: 'Компания "Берег"',
      description: 'Оптовая торговля бумагой, картоном и материалами для полиграфии',
      location: 'Москва',
      phone: '+7 (495) 232-26-10',
      email: 'chbereg@bk.ru',
      website: 'bereg.net',
    },
    {
      id: 165,
      name: 'OMG-GIFT.RU',
      description: 'Оптовая продажа подарочной и сувенирной упаковки',
      location: 'Москва',
      phone: '+7 (499) 398-13-59',
      email: 'omg.business@mail.ru',
      website: 'omg-gift.ru',
    },
    {
      id: 166,
      name: 'Артпласт',
      description: 'Производство и оптовая продажа одноразовой упаковки и посуды',
      location: 'Москва',
      phone: '+7 (800) 770-09-29',
      email: 'artplast@artplast.ru',
      website: 'artplast.ru',
    },
    {
      id: 167,
      name: 'МКФ Group',
      description: 'Производство картонных коробок и упаковочных материалов (Московская картонная фабрика)',
      location: 'Москва',
      phone: '+7 (495) 197-83-07',
      email: 'info@mkfgroup.ru',
      website: 'mkfgroup.ru',
    },
    {
      id: 168,
      name: 'PACK MARKET',
      description: 'Производство гофрокартонной упаковки и картонных коробок на заказ',
      location: 'Москва',
      phone: '+7 (495) 165-75-79',
      email: 'zakaz@packmarket.ru',
      website: 'packmarket.ru',
    },
    {
      id: 169,
      name: 'Новотрейд',
      description: 'Производство бумажных расходных материалов, чековой ленты и самоклеящихся этикеток',
      location: 'Новосибирск',
      phone: '+7 (800) 707-11-55',
      email: 'office@novotrade.ru',
      website: 'novotrade.ru',
    },
    {
      id: 170,
      name: 'Eko-Time',
      description: 'Типография полного цикла: производство самоклеящихся этикеток, наклеек и стикеров',
      location: 'Москва',
      phone: '+7 (495) 741-14-35',
      email: 'info@eko-time.ru',
      website: 'eko-time.ru',
    },
    {
      id: 171,
      name: 'ТЕРМОПАК',
      description: 'Производство термоусадочной упаковки и поставка упаковочного оборудования',
      location: '',
      phone: '+7 (981) 218-30-00',
      email: 'pakterra@mail.ru',
      website: 'pakterra.ru',
    },
    {
      id: 172,
      name: 'МаксС',
      description: 'Продажа, обслуживание и ремонт касс, весов, торгового оборудования и расходных материалов',
      location: 'Владимир',
      phone: '+7 (492) 253-77-99',
      email: 'kassa@maks-s.ru',
      website: 'maks-s.ru',
    },
    {
      id: 173,
      name: 'ООО «Гектор»',
      description: 'Оптово-розничная продажа упаковочных и расходных материалов для бизнеса',
      location: 'Москва',
      phone: '+7 (495) 925-57-11',
      email: 'trade@hector.ru',
      website: 'hector.ru',
    },
    {
      id: 174,
      name: 'ООО «Гофромир»',
      description: 'Производство упаковки из гофрокартона, воздушно-пузырьковой и стрейч-пленки',
      location: 'Москва',
      phone: '+7 (812) 223-47-75',
      email: 'lon@gofromir.ru',
      website: 'gofromir.ru',
    },
    {
      id: 175,
      name: 'Аксель Пак',
      description: 'Производство гофротары и картонной упаковки',
      location: 'Мытищи',
      phone: '+7 (495) 374-79-68',
      email: 'order@axelpack.ru',
      website: 'axelpack.ru',
    },
    {
      id: 176,
      name: 'Etiketka Eco',
      description: 'Производство самоклеящихся этикеток (термо- и термотрансферных)',
      location: 'Москва',
      phone: '+7 (926) 773-77-00',
      email: 'info@etiketka-eco.ru',
      website: 'etiketka-eco.ru',
    },
    {
      id: 177,
      name: 'Мир пакетов',
      description: 'Оптово-розничная продажа упаковочных материалов и пакетов',
      location: 'Москва',
      phone: '+7 (495) 766-16-75',
      email: 'info@mir-paketov.ru',
      website: 'mir-paketov.ru',
    },
    {
      id: 178,
      name: 'РИКС',
      description: 'Поставка чековой ленты, термоэтикеток и расходников для POS-оборудования',
      location: 'Москва',
      phone: '+7 (495) 778-15-09',
      email: 'riks2010@yandex.ru',
      website: 'riks.su',
    },
    {
      id: 179,
      name: 'ЦентрПак',
      description: 'Оптовая продажа одноразовой посуды и упаковочных материалов',
      location: 'Москва',
      phone: '+7 (917) 517-17-09',
      email: 'centrpak@centrpak.ru',
      website: 'centrpak.ru',
    },
    {
      id: 180,
      name: 'Рустехпром',
      description: 'Продажа и обслуживание кассового и торгового оборудования',
      location: 'Москва',
      phone: '+7 (495) 984-06-15',
      email: 'msk@digitalserv.ru',
      website: 'fd.digitalserv.ru',
    },
    {
      id: 181,
      name: 'Korsaj (Kantex)',
      description: 'Резка ткани, поставка упаковки, производство бейки и текстильных этикеток',
      location: 'Москва',
      phone: '+7 (495) 796-27-30',
      email: 'korsaj@kantex.ru',
      website: 'korsaj.ru',
    },
    {
      id: 182,
      name: 'Печать32',
      description: 'Типография и рекламное агентство полного цикла',
      location: 'Брянск',
      phone: '+7 (483) 232-03-33',
      email: 'print32bk@yandex.ru',
      website: 'xn--80antj7do.xn--32-6kct3cu7a5b.xn--p1ai',
    },
    {
      id: 183,
      name: 'Элайтс (Smartcode)',
      description: 'Поставка оборудования и расходников для автоматизации торговли',
      location: 'Калуга',
      phone: '+7 (800) 700-78-24',
      email: 'info@smartcode.ru',
      website: 'kaluga.smartcode.ru',
    },
    {
      id: 184,
      name: 'Софмикс',
      description: 'Поставка решений для маркировки и идентификации товаров',
      location: 'Одинцово',
      phone: '+7 (495) 120-25-64',
      email: 'info@sofmix.ru',
      website: 'sofmix-shop.ru',
    },
    {
      id: 185,
      name: 'Aveza',
      description: 'Комплексное снабжение предприятий маркировочным оборудованием и расходниками',
      location: 'Санкт-Петербург',
      phone: '+7 (800) 333-41-78',
      email: 'info@aveza.ru',
      website: 'aveza.ru',
    },
    {
      id: 186,
      name: 'Coral Print',
      description: 'Типография полного цикла (визитки, наклейки, POS-материалы, полиграфия)',
      location: 'Москва',
      phone: '+7 (495) 663-73-81',
      email: 'info@coral-print.ru',
      website: 'coral-print.ru',
    },
    {
      id: 187,
      name: 'ПромЭтикет',
      description: 'Производство самоклеящихся этикеток флексопечатью',
      location: 'Москва',
      phone: '+7 (909) 641-36-01',
      email: 'info@prometiket.ru',
      website: 'prometiket.ru',
    },
    {
      id: 188,
      name: 'Pack-Craft',
      description: 'Продажа упаковки и упаковочных материалов, индивидуальные комплекты',
      location: 'Ногинск',
      phone: '+7 (800) 250-76-65',
      email: 'office@pack-craft.ru',
      website: 'pack-craft.ru',
    },
    {
      id: 189,
      name: 'Этикетка А4',
      description: 'Оптовое изготовление самоклеящихся этикеток А4, А5 и в рулонах',
      location: 'Санкт-Петербург',
      phone: '',
      email: 'info@etiketkia4.ru',
      website: 'etiketkia4.ru',
    },
    {
      id: 190,
      name: 'Сима-ленд',
      description: 'Оптово-розничная торговая и производственная компания широкого профиля',
      location: 'Екатеринбург',
      phone: '',
      email: 'support@sima-land.ru',
      website: 'sima-land.ru',
    },
    {
      id: 191,
      name: 'ForOffice',
      description: 'Поставка оргтехники, канцтоваров, полиграфического и банковского оборудования',
      location: 'Москва',
      phone: '+7 (800) 333-10-11',
      email: 'shop@foroffice.ru',
      website: 'foroffice.ru',
    },
    {
      id: 192,
      name: 'Копирка',
      description: 'Сеть копировальных центров и мини-типографий',
      location: 'Москва',
      phone: '+7 (812) 509-66-44',
      email: 'b2c-spb@kopirka.ru',
      website: 'kopirka.ru',
    },
    {
      id: 193,
      name: 'Факел',
      description: 'Производство упаковки из гофрокартона',
      location: 'Москва',
      phone: '+7 (495) 120-26-06',
      email: 'order@fkfd.ru',
      website: 'fkfd.ru',
    },
    {
      id: 194,
      name: 'Gut Farbe (Хороший цвет)',
      description: 'Онлайн-типография: печать этикеток, наклеек и полиграфии',
      location: 'Санкт-Петербург',
      phone: '+7 (800) 250-93-39',
      email: 'sales@gut-farbe.ru',
      website: 'gut-farbe.ru',
    },
    {
      id: 195,
      name: 'Telecom Sales',
      description: 'Продажа серверного и сетевого оборудования',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 448-39-55',
      email: 'sales@telecom-sales.ru',
      website: 'telecom-sales.ru',
    },
    {
      id: 196,
      name: 'OfficePage',
      description: 'Интернет-магазин канцтоваров, мебели и техники для офиса',
      location: 'Москва',
      phone: '+7 (495) 142-33-22',
      email: 'info@officepage.ru',
      website: 'officepage.ru',
    },
    {
      id: 197,
      name: 'ТМграфика',
      description: 'Производство самоклеящихся этикеток и наклеек (цифровая и флексопечать)',
      location: 'Москва',
      phone: '+7 (495) 229-62-05',
      email: 'zakaz@twinmaster.ru',
      website: 'twinmaster.ru',
    },
    {
      id: 198,
      name: '7Labels (Престиж)',
      description: 'Производство самоклеящихся этикеток флексопечатью',
      location: 'Москва',
      phone: '+7 (499) 754-39-59',
      email: 'info@7labels.ru',
      website: '7labels.ru',
    },
    {
      id: 199,
      name: 'МастерКод',
      description: 'Продажа самоклеящихся этикеток, риббонов, бирок и пломб',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 425-68-08',
      email: 'zakaz@mastercode.ru',
      website: 'mastercode.ru',
    },
    {
      id: 200,
      name: 'Дэкспринт',
      description: 'Типография и рекламное агентство (полиграфия, широкоформатная печать)',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 372-69-75',
      email: 'zakaz@dex-print.ru',
      website: 'dex-print.ru',
    },
    {
      id: 201,
      name: 'ПроРМ',
      description: 'Производство и продажа расходников для маркировки и упаковки',
      location: 'Москва',
      phone: '+7 (495) 789-11-80',
      email: 'prormmail@list.ru',
      website: 'xn--l1adceb.xn--p1ai',
    },
    {
      id: 202,
      name: 'ПроСнаб',
      description: 'Поставка самоклеящихся этикеток, текстильных лент и риббонов',
      location: 'Кострома',
      phone: '+7 (953) 654-24-94',
      email: 'markirovka-opt@mail.ru',
      website: 'markirovka-opt.ru',
    },
    {
      id: 203,
      name: 'Yarus-Market',
      description: 'Поставка упаковочных материалов и расходников для торгового оборудования',
      location: 'Москва',
      phone: '+7 (861) 991-48-35',
      email: 'krasnodar@yarus-market.ru',
      website: 'yarus-market.ru',
    },
    {
      id: 204,
      name: 'Онлайн-касса',
      description: 'Продажа и обслуживание онлайн-касс, автоматизация торговли, поставка оборудования для маркировки',
      location: 'Москва',
      phone: '+7 (800) 550-54-67',
      email: 'info@online-kassa.ru',
      website: 'online-kassa.ru',
    },
    {
      id: 205,
      name: 'Marker Land',
      description: 'Интернет-магазин товаров для промышленной маркировки: принтеры этикеток, маркеры, самоклеящиеся этикетки',
      location: 'Москва',
      phone: '+7 (495) 234-26-00',
      email: 'info@marker-land.ru',
      website: 'marker-land.ru',
    },
    {
      id: 206,
      name: 'Saby',
      description: 'Экосистема сервисов для бизнеса: бухгалтерия, ЭДО, маркировка, отчётность, CRM',
      location: 'Москва',
      phone: '+7 (812) 679-10-15',
      email: 'tensor@tensor.ru',
      website: 'saby.ru',
    },
    {
      id: 207,
      name: 'Avery Zweckform',
      description: 'Производство самоклеящихся этикеток и расходных материалов для печати',
      location: 'Москва',
      phone: '+7 (985) 226-34-76',
      email: 'info-ru@avery.com',
      website: 'avery-zweckform.ru',
    },
    {
      id: 208,
      name: 'Wbarcode',
      description: 'Онлайн-сервис генерации и печати этикеток со штрихкодами для маркетплейсов',
      location: '',
      phone: '',
      email: 'info@wbarcode.ru',
      website: 'wbarcode.ru',
    },
    {
      id: 209,
      name: 'КЛЕН',
      description: 'Поставщик профессионального оборудования и расходных материалов для общепита',
      location: 'Москва',
      phone: '+7 (862) 225-79-22',
      email: 'krasnodar@klenmarket.ru',
      website: 'klenmarket.ru',
    },
    {
      id: 210,
      name: 'Markznak',
      description: 'Сервис автоматизации работы с системой «Честный знак» и маркировкой товаров',
      location: '',
      phone: '',
      email: 'info@markznak.ru',
      website: 'markznak.ru',
    },
    {
      id: 211,
      name: 'OLIPACK',
      description: 'Поставка оборудования и расходных материалов для маркировки продукции',
      location: 'Москва',
      phone: '+7 (495) 795-59-62',
      email: 'info@olipack.ru',
      website: 'olipack.ru',
    },
    {
      id: 212,
      name: 'Okpack',
      description: 'Интернет-магазин упаковочных материалов и расходников для маркировки товаров',
      location: 'Иваново',
      phone: '+7 (908) 562-20-40',
      email: 'ok.pack@mail.ru',
      website: 'okpack.ru',
    },
    {
      id: 213,
      name: 'Где наклейки',
      description: 'Типография по изготовлению виниловых и бумажных наклеек на заказ',
      location: 'Москва',
      phone: '+7 (499) 705-11-85',
      email: 'zakaz@gdenakleiki.ru',
      website: 'gdenakleiki.ru',
    },
    {
      id: 214,
      name: 'МАРКИУМ',
      description: 'Сервис по маркировке товаров и работе с системой «Честный знак»',
      location: '',
      phone: '',
      email: 'info@markium.ru',
      website: 'markium.ru',
    },
    {
      id: 215,
      name: 'Superyarlik',
      description: 'Производство дизайнерских этикеток и бирок (жаккардовых, тканых) для одежды',
      location: 'Москва',
      phone: '+7 (800) 250-70-57',
      email: 'zakaz@superyarlik.ru',
      website: 'superyarlik.ru',
    },
    {
      id: 216,
      name: 'Элайтс',
      description: 'Поставка оборудования для автоматизации торговли: сканеры штрих-кодов, принтеры этикеток, ТСД',
      location: 'Москва',
      phone: '+7 (800) 700-78-24',
      email: 'mike@smartcode.ru',
      website: 'smartcode.ru',
    },
    {
      id: 217,
      name: 'Бирки - Этикетки',
      description: 'Производство швейной маркировки: бирки, этикетки, ленты, нашивки для одежды и обуви',
      location: 'Москва',
      phone: '+7 (925) 800-01-23',
      email: 'birki-etiketki@yandex.ru',
      website: 'xn----9sbnkabbldb3d1ad3m.xn--p1ai',
    },
    {
      id: 218,
      name: 'Artpolygraf',
      description: 'Типография: печать этикеток, наклеек, фотообоев и интерьерной полиграфии',
      location: 'Москва',
      phone: '+7 (495) 649-48-76',
      email: 'zakaz@artpolygraf.ru',
      website: 'artpolygraf.ru',
    },
    {
      id: 219,
      name: 'Типография PMG',
      description: 'Полиграфические услуги: печать этикеток, наклеек, упаковки и стикерпаков',
      location: 'Москва',
      phone: '+7 (495) 023-25-51',
      email: 'zakaz@pmg.ru',
      website: 'pmg.ru',
    },
    {
      id: 220,
      name: 'ОптПолиграф',
      description: 'Круглосуточная онлайн-типография: печать этикеток и полиграфии с доставкой по России',
      location: 'Москва',
      phone: '+7 (800) 500-06-91',
      email: 'partner@optpoligraf.ru',
      website: 'opt-poligraf.ru',
    },
    {
      id: 221,
      name: 'Flexografica',
      description: 'Флексографическая печать цветных самоклеящихся этикеток в рулоне и на листах',
      location: 'Санкт-Петербург',
      phone: '+7 (812) 209-50-64',
      email: 'zakaz@flexografica.ru',
      website: 'flexografica.ru',
    },
    {
      id: 222,
      name: 'ПикПро',
      description: 'Производство самоклеящихся этикеток: термоэтикеток, матовых, глянцевых, полипропиленовых',
      location: 'Москва',
      phone: '+7 (495) 795-01-19',
      email: 'zakaz1@prometiketka.ru',
      website: 'picpro.ru',
    },
    {
      id: 223,
      name: 'Борус',
      description: 'Типография: печать этикеток, упаковки, цифровая и офсетная полиграфия',
      location: 'Москва',
      phone: '+7 (905) 620-13-13',
      email: 'web@borus.ru',
      website: 'borus.ru',
    },
    {
      id: 224,
      name: 'Glloss',
      description: 'Производство и печать самоклеящихся этикеток для косметики, парфюмерии и потребтоваров',
      location: 'Москва',
      phone: '+7 (925) 771-06-11',
      email: 'zakaz@glloss.ru',
      website: 'glloss.ru',
    },
    {
      id: 225,
      name: 'LabelLand (Лейбл Лэнд)',
      description: 'Производство самоклеящихся этикеток, термоэтикеток, бирок и голограмм',
      location: 'Москва',
      phone: '+7 (499) 394-42-39',
      email: 'zakaz@labelland.ru',
      website: 'labelland.ru',
    },
    {
      id: 226,
      name: 'МДМ Флекс (Уфа)',
      description: 'Типография: флексографическая и цифровая печать этикеток в рулонах',
      location: 'Уфа',
      phone: '+7 (800) 250-55-71',
      email: 'zayavka@mdm-flex.ru',
      website: 'mdm-flex.ru',
    },
    {
      id: 227,
      name: 'ООО «ПРОэтикетка»',
      description: 'Производство самоклеящихся этикеток и печать на рулонных материалах',
      location: 'Протвино',
      phone: '+7 (496) 771-24-13',
      email: 'proetiketka@mail.ru',
      website: 'proetiketka.com',
    },
    {
      id: 228,
      name: 'Доброфлекс',
      description: 'Типография: производство рулонных самоклеящихся этикеток, наклеек и стикеров',
      location: 'Краснодар',
      phone: '+7 (961) 281-10-65',
      email: 'ae@dobroflex.ru',
      website: 'dobroflex.ru',
    },
    {
      id: 229,
      name: 'Типография Ремас',
      description: 'Производство этикеток и гибкой упаковки с 1992 года',
      location: 'Ижевск',
      phone: '+7 (800) 551-10-98',
      email: 'info@remas.ru',
      website: 'remas.ru',
    },
    {
      id: 230,
      name: 'Авалон Диджитал',
      description: 'Типография: печать этикеток и наклеек любой сложности, цифровая и флексопечать',
      location: 'Москва',
      phone: '+7 (800) 600-54-75',
      email: 'zakaz@avld.ru',
      website: 'avld.ru',
    },
    {
      id: 231,
      name: 'АО «Флексо Принт»',
      description: 'Производство самоклеящихся этикеток и гибкой рулонной упаковки',
      location: 'Волгоград',
      phone: '+7 (844) 297-90-20',
      email: 'info@fleksoprint.ru',
      website: 'fleksoprint.ru',
    },
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