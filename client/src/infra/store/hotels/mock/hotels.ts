import type Hotel from '@/domain/entities/Hotel'
import Thumbnails from '@/infra/store/thumbs/thumbs.json'

const hotelsMock = [
  {
    id: 1,
    title: 'Отель "Закат на пляже"',
    subtitle: 'Отдохните и расслабьтесь в нашем роскошном курорте на берегу моря.',
    description: 'Наш отель расположен на прекрасном пляже "Закат", где вы можете наслаждаться потрясающими закатами и широким спектром водных развлечений. Наши роскошные номера и люксы созданы для обеспечения максимального комфорта и релаксации, с захватывающими видами на океан.',
    address: '1234 бульвар Закат, Пляж Закат, Калифорния',
    rating: {
      votesCount: '2.4K',
      rating: 4.6,
      stars: 4,
    },
    ratingsCount: Math.floor(Math.random() * 9801) + 200,
    award: {
      name: 'Лучший 2022 года',
      section: 'Пляжный',
    },
    chart: {
      place: 3,
      category: 'Пляжный',
    },
    price: Math.floor(Math.random() * 311) + 90,
    picture: '/pics/hotel-1.jpg',
    rooms: [
      {
        id: 1,
        title: 'Делюкс номер с видом на океан',
        subtitle: 'Наслаждайтесь потрясающими видами на океан с вашего личного балкона.',
        price: Math.floor(Math.random() * 951) + 50,
        picture: '/pics/room-1-1.jpg',
      },
      {
        id: 2,
        title: 'Люкс',
        subtitle: 'Погрузитесь в роскошь и изысканность в наших просторных люксах.',
        price: Math.floor(Math.random() * 951) + 50,
        picture: '/pics/room-1-2.jpg',
      },
    ],
  },
  {
    id: 2,
    title: 'Горная Вид Лодж',
    subtitle: 'Сбегите в горы и наслаждайтесь потрясающими видами и свежим воздухом.',
    description: 'Наш лодж расположен в самом сердце гор, окруженный захватывающими видами и свежим воздухом. Наши уютные номера и домики созданы для обеспечения максимального комфорта и релаксации, с деревенским декором и современными удобствами.',
    address: '5678 Горная дорога, Горный Вид, Колорадо',
    rating: {
      votesCount: '1.7K',
      rating: 4.3,
      stars: 4,
    },
    ratingsCount: Math.floor(Math.random() * 9801) + 200,
    award: {
      name: 'Лучший 2022 года',
      section: 'Горный вид',
    },
    chart: {
      place: 1,
      category: 'Горный вид',
    },
    price: Math.floor(Math.random() * 311) + 90,
    picture: '/pics/hotel-2.jpg',
    rooms: [
      {
        id: 1,
        title: 'Уютный домик',
        subtitle: 'Испытайте великолепие природы в наших уютных домиках.',
        price: Math.floor(Math.random() * 951) + 50,
        picture: '/pics/room-2-1.jpg',
      },
      {
        id: 2,
        title: 'Люкс с видом на горы',
        subtitle: 'Наслаждайтесь потрясающими видами на горы с вашего личного балкона.',
        price: Math.floor(Math.random() * 951) + 50,
        picture: '/pics/room-2-2.jpg',
      },
      {
        id: 3,
        title: 'Деревенский номер',
        subtitle: 'Испытайте деревенское очарование наших уютных номеров.',
        price: Math.floor(Math.random() * 951) + 50,
        picture: '/pics/room-2-3.jpg',
      },
    ],
  },
  {
    id: 3,
    title: 'Приморский курорт',
    subtitle: 'Испытайте красоту океана и отдохните в роскоши.',
    description: 'Наш курорт расположен прямо на пляже, с потрясающими видами на океан и роскошными удобствами. Наши номера и люксы созданы для обеспечения максимального комфорта и релаксации, с современным декором и первоклассными удобствами.',
    address: '1234 Океанский бульвар, Приморский, Калифорния',
    rating: {
      votesCount: '2.3K',
      rating: 4.5,
      stars: 4.5,
    },
    ratingsCount: Math.floor(Math.random() * 9801) + 200,
    award: {
      name: 'Лучший 2022 года',
      section: 'Приморский',
    },
    chart: {
      place: 2,
      category: 'Приморский',
    },
    price: Math.floor(Math.random() * 311) + 90,
    picture: '/pics/hotel-3.jpg',
    rooms: [
      {
        id: 1,
        title: 'Люкс с видом на океан',
        subtitle: 'Наслаждайтесь потрясающими видами на океан с вашего личного балкона.',
        price: Math.floor(Math.random() * 951) + 50,
        picture: '/pics/room-3-1.jpg',
      },
      {
        id: 2,
        title: 'Пляжное бунгало',
        subtitle: 'Испытайте красоту океана вблизи в наших пляжных бунгало.',
        price: Math.floor(Math.random() * 951) + 50,
        picture: '/pics/room-3-2.jpg',
      },
      {
        id: 3,
        title: 'Роскошный люкс',
        subtitle: 'Погрузитесь в роскошь в наших просторных и элегантных люксах.',
        price: Math.floor(Math.random() * 951) + 50,
        picture: '/pics/room-3-3.jpg',
      },
    ],
  },
  {
    id: 4,
    title: 'Отель в центре города',
    subtitle: 'Испытайте возбуждение городской жизни и останьтесь в самом центре всего.',
    description: 'Наш отель расположен в оживленном центре города, с легким доступом ко всем главным достопримечательностям и развлечениям. Наши номера и люксы созданы для обеспечения максимального комфорта и удобства, с современным декором и всеми необходимыми удобствами.',
    address: '4567 Главная улица, Центр Города, Нью-Йорк',
    rating: {
      votesCount: '1.2K',
      rating: 4.1,
      stars: 4,
    },
    ratingsCount: Math.floor(Math.random() * 9801) + 200,
    award: {
      name: 'Лучший 2022 года',
      section: 'Центр города',
    },
    chart: {
      place: 3,
      category: 'Центр города',
    },
    price: Math.floor(Math.random() * 311) + 90,
    picture: '/pics/hotel-4.jpg',
    rooms: [
      {
        id: 1,
        title: 'Люкс с видом на город',
        subtitle: 'Наслаждайтесь потрясающими видами на город с вашего личного балкона.',
        price: Math.floor(Math.random() * 951) + 50,
        picture: '/pics/room-4-1.jpg',
      },
      {
        id: 2,
        title: 'Роскошный номер',
        subtitle: 'Погрузитесь в роскошь в наших просторных и элегантных номерах.',
        price: Math.floor(Math.random() * 951) + 50,
        picture: '/pics/room-4-2.jpg',
      },
      {
        id: 3,
        title: 'Уютный номер',
        subtitle: 'Испытайте комфорт наших уютных номеров.',
        price: Math.floor(Math.random() * 951) + 50,
        picture: '/pics/room-4-3.jpg',
      },
    ],
  },
  {
    id: 5,
    title: 'Курорт "Оазис в пустыне"',
    subtitle: 'Сбегите в пустыню и насладитесь абсолютным расслаблением и спокойствием.',
    description: 'Наш курорт расположен в самом сердце пустыни, окруженный потрясающими пейзажами и захватывающими видами. Наши номера и люксы созданы для обеспечения максимального комфорта и релаксации, с современным декором и первоклассными удобствами.',
    address: '7890 Пустынная дорога, Оазис в пустыне, Аризона',
    rating: {
      votesCount: '1.5K',
      rating: 4.4,
      stars: 4.5,
    },
    ratingsCount: Math.floor(Math.random() * 9801) + 200,
    award: {
      name: 'Лучший 2022 года',
      section: 'Оазис в пустыне',
    },
    chart: {
      place: 4,
      category: 'Оазис в пустыне',
    },
    price: Math.floor(Math.random() * 311) + 90,
    picture: '/pics/hotel-5.jpg',
    rooms: [
      {
        id: 1,
        title: 'Люкс с видом на пустыню',
        subtitle: 'Наслаждайтесь потрясающими видами на пустыню с вашего личного балкона.',
        price: Math.floor(Math.random() * 951) + 50,
        picture: '/pics/room-5-1.jpg',
      },
      {
        id: 2,
        title: 'Роскошное бунгало',
        subtitle: 'Погрузитесь в роскошь в наших просторных и элегантных бунгало.',
        price: Math.floor(Math.random() * 951) + 50,
        picture: '/pics/room-5-2.jpg',
      },
    ],
  },
  {
    id: 6,
    title: 'Курорт "Тропический рай"',
    subtitle: 'Сбегите в тропический рай и наслаждайтесь солнцем, песком и морем.',
    description: 'Наш курорт расположен на красивом тропическом острове, окруженном кристально-чистыми водами и белыми песчаными пляжами. Наши роскошные номера и люксы созданы для обеспечения максимального комфорта и релаксации, с современным декором и первоклассными удобствами.',
    address: '1234 бульвар Пальмовых Деревьев, Тропический Остров',
    rating: {
      votesCount: '3.5K',
      rating: 4.8,
      stars: 5,
    },
    ratingsCount: Math.floor(Math.random() * 9801) + 200,
    award: {
      name: 'Лучший 2022 года',
      section: 'Тропический остров',
    },
    chart: {
      place: 1,
      category: 'Тропический остров',
    },
    price: Math.floor(Math.random() * 311) + 90,
    picture: '/pics/hotel-6.jpg',
    rooms: [
      {
        id: 1,
        title: 'Люкс на берегу моря',
        subtitle: 'Испытайте красоту океана вблизи в наших пляжных люксах.',
        price: Math.floor(Math.random() * 951) + 50,
        picture: '/pics/room-6-1.jpg',
      },
      {
        id: 2,
        title: 'Тропическая вилла',
        subtitle: 'Погрузитесь в роскошь в наших просторных и элегантных виллах.',
        price: Math.floor(Math.random() * 951) + 50,
        picture: '/pics/room-6-2.jpg',
      },
      {
        id: 3,
        title: 'Номер с видом на океан',
        subtitle: 'Наслаждайтесь потрясающими видами на океан с вашего личного балкона.',
        price: Math.floor(Math.random() * 951) + 50,
        picture: '/pics/room-6-3.jpg',
      },
    ],
  },
  {
    id: 7,
    title: 'Исторический отель',
    subtitle: 'Вернитесь во времени и испытайте очарование ушедшей эпохи.',
    description: 'Наш исторический отель расположен в живописном городке, окруженном красивой архитектурой и богатой историей. Наши уютные номера и люксы созданы для обеспечения максимального комфорта и релаксации, с антикварным декором и современными удобствами.',
    address: '7890 Главная улица, Исторический Город, Массачусетс',
    rating: {
      votesCount: '1.2K',
      rating: 4.1,
      stars: 4,
    },
    ratingsCount: Math.floor(Math.random() * 9801) + 200,
    award: {
      name: 'Лучший 2022 года',
      section: 'Исторический город',
    },
    chart: {
      place: 3,
      category: 'Исторический город',
    },
    price: Math.floor(Math.random() * 311) + 90,
    picture: '/pics/hotel-7.jpg',
    rooms: [
      {
        id: 1,
        title: 'Антикварный номер',
        subtitle: 'Испытайте очарование ушедшей эпохи в наших антикварных номерах.',
        price: Math.floor(Math.random() * 951) + 50,
        picture: '/pics/room-7-1.jpg',
      },
      {
        id: 2,
        title: 'Исторический люкс',
        subtitle: 'Погрузитесь в роскошь в наших просторных и элегантных люксах.',
        price: Math.floor(Math.random() * 951) + 50,
        picture: '/pics/room-7-2.jpg',
      },
    ],
  },
]

/**
 * Add picture thumb to an entity based on the picture name
 *
 * @param entity - something with "picture" property
 */
function addThumb<T extends { picture: string }>(entity: T): T & { pictureThumb: string } {
  const pictureName = entity.picture.split('/').pop() as keyof typeof Thumbnails.thumbs

  return {
    ...entity,
    pictureThumb: Thumbnails.thumbs[pictureName],
  }
}

/**
 * Add picture thumbs to hotels based on the picture name
 */
function addThumbs(hotels: Hotel[]): Hotel[] {
  return hotels.map((hotel) => {
    /**
     * Add picture thumb to rooms as well
     */
    hotel.rooms = hotel.rooms.map(addThumb)

    return addThumb(hotel)
  })
}

export const hotels = addThumbs(hotelsMock)
