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
- где productIt это айди товара, например 609bdc3b14cb6a120c8d4bef


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
- Response если создание категории прошло успешно:
```
