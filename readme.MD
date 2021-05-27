## REST API documentation

`javascript const base_url = "https://online-shoppp.herokuapp.com" `

### Products

- get products in special category, for main page, METHOD: GET
- url: base_url/api/products/:categoryId
- где :categoryId это айди категории, например 609e5fef04005f1b0811fdf0

- Response:

```
{
      success: true,
      data: [
        {
          category: 'Аксесcуары',
          products: [
            {
             "price": "8000",
              "rate": 0,
              "_id": "60a267b0a922ad14b460352b",
              "name": "AirPods",
              "category": "60993eaee6317c402c173736",
              "__v": 0
            }
          ]
        }
      ]
}
```

- create one product for main page, METHOD: POST
- url: base_url/api/product

```
- Response если нету дубликата продукта, проверка по названию товара и цене
{
    "message": "Продукт успешно создан",
    "status": "success",
    "data": {
        "price": "2000",
        "rate": 0,
        "_id": "60a3b8b07f8ee7399473a422",
        "name": "Motorolla v3",
        "category": "609947ad60a45b243823974e",
        "__v": 0
    }
}

```

```
- Response если товар был добавлен ранее (цена либо название товара идентичное)

{
    "message": "Данная позиция была добавлена ранее!",
    "status": "failed",
    "data": {}
}

```

- get one product by it's Id, METHOD: GET
- url: base_url/api/product/:productId
- где productId это id товара, например 609e5fef04005f1b0811fdf0

```

- Response if product found:
{
    "price": "2000",
    "rate": 0,
    "_id": "60a3b8b07f8ee7399473a422",
    "name": "Motorolla v3",
    "category": "609947ad60a45b243823974e",
    "__v": 0
}

```

```
- Response if product haven't found:
{
    "message": "product not found"
}
```

- delete product by it's Id, METHOD: DELETE
- url: base_url/api/product/:productId
- где productId это Id товара

```
- Response if product found:
{
    "message": "Продукт успешно удален"
}
```

```
- Response if product haven't found:
{
    "message": "Product haven't deleted"
}
```

- Edit product, METHOD: PATCH
- url: base_url/api/product/:productId
- где productId это айди товара, например 609bdc3b14cb6a120c8d4bef


```
- Response:
{
    "message": "Продукт успешно изменен..."
}
```

```
- Response if product not found:

{
    "message": "Попытка изменения несуществующей позиции!"
}

```

### Categories

- Создание категории, METHOD: POST
- url: base_url/api/category

```
- Response если создание категории прошло успешно

```
```
- Response если запрос неуспешен

```
- Получение всех категорий, METHOD: GET
- url: base_url/api/categories

```
{
    "message": "Получены все категории",
    "data": [
        {
            "_id": "60993eaee6317c402c173736",
            "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1200px-Flat_tick_icon.svg.png",
            "title": "iPhone",
            "__v": 0
        },
        {
            "_id": "609947ad60a45b243823974e",
            "icon": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AFlat_tick_icon.svg&psig=AOvVaw3qc8ogFXKYeDCl_w1szxOg&ust=1620744435368000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjp8tStv_ACFQAAAAAdAAAAABAD",
            "title": "phones",
            "__v": 0
        },
        {
            "_id": "60a4ea86f5b6600804dbafd6",
            "title": "iphone2",
            "icon": "adssda",
            "__v": 0
        },
        {
            "_id": "60a4f889237a1130205a3cb9",
            "title": "iphone2",
            "icon": "adssda",
            "__v": 0
        },
        {
            "_id": "60a4f8e1237a1130205a3cba",
            "title": "EarPhones\n",
            "icon": "adssda",
            "__v": 0
        }
    ]
}

```

- Получение всех категорий вместе с их товарами, METHOD: GET
- url: base_url/api/category

- Response:

```
{
    "success": true,
    "data": [
        {
            "category": "iPhone",
            "products": [
                {
                    "price": "10000",
                    "rate": 0,
                    "_id": "609e5fef04005f1b0811fdf0",
                    "name": "Nokia 6320",
                    "category": "60993eaee6317c402c173736",
                    "picture": "C:\\Users\\user\\Desktop\\Neolabs\\projects\\online-shop-backend\\files\\images\\file-1621515644416.png",
                    "__v": 0
                },
                {
                    "price": "23 000",
                    "rate": 0,
                    "_id": "609e88dbb7555d19b0b5795d",
                    "name": "Samsung S15",
                    "category": "60993eaee6317c402c173736",
                    "picture": "C:\\Users\\user\\Desktop\\Neolabs\\projects\\online-shop-backend\\files\\images\\file-1621002459369.jpg",
                    "__v": 0
                },
                {
                    "price": "5050",
                    "rate": 0,
                    "_id": "60a267b0a922ad14b460352b",
                    "name": "Sony Ericcsonn",
                    "category": "60993eaee6317c402c173736",
                    "__v": 0
                },
                {
                    "price": "3000",
                    "rate": 0,
                    "_id": "60a4d57b040d2a00155c43e2",
                    "name": "Nokia 6300",
                    "category": "60993eaee6317c402c173736",
                    "__v": 0
                },
                {
                    "price": "1000",
                    "rate": 0,
                    "_id": "60abbea5a3c3df0015afb449",
                    "name": "NewProductForHeroku",
                    "category": "60993eaee6317c402c173736",
                    "picture": "/app/files/images/file-1621868197021.jpg",
                    "__v": 0
                }
            ]
        }
    ]
} 
```

- Получение категории по айди без товаров, METHOD: GET
- url: base_url/api/category/:categoryId

- Response if category found: 

```
{
    "message": "Получена категория по указанной id",
    "data": {
        "_id": "60a4fea7c8459a00157a19d0",
        "title": "iphone2",
        "icon": "adssda",
        "__v": 0
    }
}

```

- Response if product haven't found: 

```
{
    "message": "Product not found"
}

```

 - Редактирование категории по id, METHOD: PATCH
 - url: base_url/api/category/:categoryId
  
 - Response: 

 ```
 {
    "message": "Категория успешно обновлена...",
    "data": {
        "_id": "60a639f0ab80b128109212f4",
        "title": "Updated",
        "icon": "C:\\Users\\user\\Desktop\\Neolabs\\projects\\online-shop-backend\\files\\images\\file-1621522197044.png",
        "__v": 0
    }
}

```

- Response if category not found: 

```
{
    "message": "Попытка изменения несуществующей категории!"
}

```

### Orders

- Создание заказа, METHOD: POST
- url: base_url/create-order

- Response: 

```
{
    "message": "Заказ успешно принят"
}

```
