/**
 * Задание 1: Стилизация карточек
 *
 * Задачи:
 * 1. Карточка: bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow
 * 2. Изображение: rounded w-full h-40 object-cover
 * 3. Название: text-lg font-bold mt-3
 * 4. Цена: text-xl font-bold text-blue-600 mt-2
 */

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Наушники',
    price: 5990,
    image: 'https://www.yablochko.ru/upload/iblock/07e/airpods-max-hero-select-202011_FMT_WHH.jpg'
  },
  {
    id: 2,
    name: 'Смарт-часы',
    price: 12990,
    image: 'https://best-magazin.com/image/cache/catalog/product/Apple%20iWatch/SE%202/umnye-chasy-apple-watch-se-2-gps-44mm-starlight-%D1%81halk-pink-solo-loop-800x800.jpg'
  }
];

function Task1() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Задание 1: Стилизация карточек</h2>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 mb-4 text-sm">
        Откройте <code className="bg-blue-100 px-1 rounded">src/tasks/Task1.tsx</code> и добавьте классы
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map(product => (
          <div key={product.id} >

            <div className='bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow'>

              <img src={product.image} alt={product.name} className="rounded w-full h-40 object-cover"/>

              <h3 className="text-lg font-bold mt-3">{product.name}</h3>

              <p className="text-xl font-bold text-blue-600 mt-2 ">{product.price.toLocaleString('ru-RU')} ₽</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task1;
