/**
 * Задание 5: Responsive дизайн
 *
 * Задачи:
 * 1. Сделайте карточки responsive (TODO: grid с breakpoints для 1/2/3 колонок)
 * 2. Скройте элемент на мобильных (TODO: используйте hidden и md:block)
 * 3. Измените размер текста (TODO: text-sm на мобильных, text-base на десктопе)
 * 4. Сделайте кнопку полной ширины на мобильных (TODO: w-full и lg:w-auto)
 */

const products = [
  { id: 1, name: 'Товар 1', price: 1990, desc: 'Описание товара', img: "https://mac77.ru/wp-content/uploads/02_apple-macbook-pro-16-2021-m1-max-big_ab9ed69fb681555d46885ee8fea3cab3.jpg" },
  { id: 2, name: 'Товар 2', price: 2990, desc: 'Описание товара', img: "https://ipixel.ru/upload/iblock/8c2/bdr0cdorwugev12trznl6uvc9sb5blck.jpg"},
  { id: 3, name: 'Товар 3', price: 3990, desc: 'Описание товара', img: "https://my-apple-store.ru/wa-data/public/shop/products/04/14/21404/images/54650/54650.500@2x.jpg"},
  { id: 4, name: 'Товар 4', price: 4990, desc: 'Описание товара', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9UOBLg0Ots1YkB3FENIoSsbtSk32Ef0XHbg&s"},
  { id: 5, name: 'Товар 5', price: 5990, desc: 'Описание товара', img: "https://my-apple-store.ru/wa-data/public/shop/products/89/79/17989/images/41074/41074.500@2x.jpg"},
  { id: 6, name: 'Товар 6', price: 6990, desc: 'Описание товара', img:"https://store.sony.ru/common/img/catalogue/312595/pxw-z150-1-big.png" },
];

function Task5() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Задание 5: Responsive дизайн</h2>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 mb-6 text-sm">
        Откройте <code className="bg-blue-100 px-1 rounded">src/tasks/Task5.tsx</code> и добавьте responsive классы.
        Измените размер окна!
      </div>

      <div className="space-y-8">
        {/* 1. Responsive grid */}
        <div>
          <h3 className="text-lg font-semibold mb-3">1. Responsive grid (1→2→3 колонки)</h3>
          {/* TODO: добавьте grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(p => (
              <div key={p.id} className="bg-white p-4 rounded shadow">
                <h4 className="font-bold">{p.name}</h4>
                <img src={p.img} alt={p.name} className="w-full h-40 object-cover rounded"/>
                <p className="text-gray-600 text-sm">{p.desc}</p>
                <p className="text-blue-600 font-bold mt-2">{p.price} ₽</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Скрыть/показать элементы */}
        <div>
          <h3 className="text-lg font-semibold mb-3">2. Скрыть на мобильных, показать на планшетах+</h3>
          <div className="bg-white p-4 rounded shadow">
            <p className="font-semibold">Основной текст (всегда виден)</p>
            {/* TODO: добавьте hidden md:block */}
            <p className="text-gray-600 mt-2 hidden md:block">
              Дополнительная информация (только на планшетах и десктопах)
            </p>
          </div>
        </div>

        {/* 3. Responsive размеры текста */}
        <div>
          <h3 className="text-lg font-semibold mb-3">3. Responsive размер текста</h3>
          <div className="bg-white p-4 rounded shadow">
            {/* TODO: добавьте text-sm md:text-base lg:text-lg */}
            <p className="text-sm md:text-base lg:text-lg">
              Этот текст меняет размер: маленький на мобильных, средний на планшетах, большой на десктопах
            </p>
          </div>
        </div>

        {/* 4. Responsive кнопка */}
        <div>
          <h3 className="text-lg font-semibold mb-3">4. Кнопка: полная ширина → обычная</h3>
          <div className="bg-white p-4 rounded shadow">
            {/* TODO: добавьте w-full lg:w-auto */}
            <button className="bg-blue-500 text-white px-6 py-2 rounded w-full lg:w-auto ">
              Купить
            </button>
          </div>
        </div>

        {/* Индикатор breakpoint */}
        <div className="mt-6 p-3 bg-gray-800 text-white rounded text-center font-semibold">
          <span className="md:hidden">📱 Mobile (&lt;768px)</span>
          <span className="hidden md:inline lg:hidden">💻 Tablet (768px-1023px)</span>
          <span className="hidden lg:inline">🖥 Desktop (≥1024px)</span>
        </div>
      </div>
    </div>
  );
}

export default Task5;
