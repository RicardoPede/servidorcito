# Clase 05 - Actividad
Desarrolle un servidor back-end con express utilizando ES6+ para una REST API de E-Commerce.
1. La API debe contar con los siguientes módulos:

    Usuario
    Producto
    Compra
    Venta
    Carrito

2. Los controladores deben implementar instancias de clases de servicios para cada caso de uso.
3. Validar todas las rutas con express-validator.
4. Los módulos deben de producto deben contar con funcionalidad para cada rol de usuario, cliente, vendedor, admin.
5. Utilizar base de datos a elección.

## Resolución: En cuando al proyecto:
Se ha creado un servidor back-end con express utilizando ES6+ para una REST API de E-Commerce. Se han creado los módulos de Usuario, Producto, Compra, Venta y Carrito. Los controladores implementan instancias de clases de servicios para cada caso de uso. Se han validado todas las rutas con express-validator. Los módulos de producto cuentan con funcionalidad para cada rol de usuario, cliente, vendedor, admin. Se ha utilizado una base de datos MongoDB.
Está construida utilizando Node.js y Express, y sigue los principios de la Programación Orientada a Objetos (POO). Es por ello que merece la explicación del por qué se ha optado por la utilización de 
cinco módulos y no uno solo que contenga todas las funcionalidades.
***
### Razón para el Uso de Diferentes Módulos:
Se han utilizado diferentes módulos como ProductClass, ProductObjet, BuyObjet, SalesObjet y CartObjet para representar los distintos estados y contextos en los que se encuentran los productos. Aunque todos son productos, se diferencian en su estado y propósito dentro de la aplicación:
ProductClass: Define la estructura básica de un producto.
ProductObjet: Representa un producto en el inventario.
BuyObjet: Representa un producto que ha sido comprado.
SalesObjet: Representa un producto que ha sido vendido.
CartObjet: Representa un producto que está en el carrito de compra de un usuario.
Esta separación permite una mayor modularidad y claridad en el código, facilitando la gestión de cada entidad según su contexto específico. Además, sigue los principios de la POO, donde cada clase tiene una responsabilidad única y bien definida.
***

## Herramientas Utilizadas
Node.js: Plataforma de desarrollo para construir aplicaciones de red rápidas y escalables.
Express: Framework web para Node.js que facilita la creación de aplicaciones web y APIs.
Mongoose: Librería de modelado de datos para MongoDB y Node.js.
Express-Validator: Middleware para la validación de datos en Express.
JWT (JSON Web Tokens): Para la autenticación y autorización de usuarios.
dotenv: Para la gestión de variables de entorno. (no se han ignorado los archivos .env)

## Seguridad Aplicada
Autenticación y Autorización: El middleware authotize se encarga de verificar si el usuario está autenticado y si tiene los roles necesarios para acceder a ciertos recursos.
Validación de Datos: Se utiliza express-validator para validar y sanitizar los datos de entrada en las rutas de la API, asegurando que los datos sean correctos antes de ser procesados.

## Validación con Express-Validator
En las rutas de la API, se utilizan validadores para asegurar que los datos recibidos cumplen con los requisitos esperados. Por ejemplo, en la creación de un usuario, se valida que el email sea válido y que la contraseña tenga una longitud mínima.

## Roles de Usuarios
La aplicación maneja diferentes roles de usuarios (administrador, cliente y vendedor) para controlar el acceso a ciertos recursos y operaciones. Esto se gestiona mediante el middleware de autorización que verifica el rol del usuario antes de permitir el acceso a una ruta específica.

## Instancias de Clases para Cada Caso de Uso
Para cada entidad (producto, compra, venta, carrito), se han creado servicios específicos que encapsulan la lógica de negocio. Por ejemplo:

ProductService: Gestiona las operaciones CRUD para los productos.
BuyService: Gestiona las operaciones CRUD para las compras.
CartServices: Gestiona las operaciones CRUD para los carritos de compra.

## Ejecución del Proyecto:
Ejecutando el servidor con el comando `npm run start` y probando las distintas rutas se obtienen las siguientes salidas:
```bash
Restarting 'index.js'
Server running on http://localhost:4000
Database connected
GET /api/user 404 4.829 ms - 29
GET /api/user/us 404 1.122 ms - 29
GET /api/users 200 21.259 ms - 2
GET /api/products 200 5.095 ms - 2
GET /api/buy 200 30.942 ms - 2
GET /api/sale 404 0.600 ms - 29
GET /api/sales 200 15.639 ms - 2
GET /api/cart 200 7.258 ms - 2
```