# My React Node App

Una aplicación web creada con React para el frontend y Node.js/Express para el backend.

## Requisitos

- Node.js
- npm

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/juanjomp85/my-react-node-app.git
2. Instala las dependencias del servidor:
   - cd server
   - npm install
3. Instala las dependencias del cliente:
   - cd ../client
   - npm install
4. Inicia el servidor:
   - cd server
   - npm run dev
5. Inicia el cliente:
   - cd ../client
   - npm start
6. Accede a la aplicación en tu navegador:
   - http://localhost:3000

## Estructura del Proyecto

my-react-node-app/
├── server/                # Código del backend
│   ├── models/            # Modelos de base de datos (Mongoose)
│   ├── routes/            # Rutas de la API
│   ├── node_modules/      # Dependencias del servidor
│   ├── index.js           # Archivo principal del servidor
│   └── package.json       # Dependencias del servidor
│
├── client/                # Código del frontend
│   ├── public/            # Archivos estáticos del frontend
│   ├── src/               # Código fuente de React
│   ├── node_modules/      # Dependencias del cliente
│   └── package.json       # Dependencias del cliente
│
└── README.md              # Documentación del proyecto

## Rutas de la API

Productos
 - GET /api/products - Obtiene todos los productos
 - GET /api/products/:id - Obtiene un producto por su ID
 - POST /api/products - Crea un nuevo producto (requiere datos en formato JSON)

## Características

 - Frontend: Interfaz de usuario en React que permite listar productos y ver sus detalles.
 - Backend: Servidor en Node.js con Express que maneja la lógica de la API RESTful.
 - Base de Datos: MongoDB para almacenar la información de los productos.

## Herramientas y Librerias Usadas

 - Frontend: React, React Router DOM
 - Backend: Node.js, Express, Mongoose
 - Base de Datos: MongoDB
 - Autenticación (futura): JWT (JSON Web Tokens)
 - Dependencias de Desarrollo: nodemon para reiniciar el servidor automáticamente durante el desarrollo

## Contribuir

1. Haz un fork del proyecto.
2. Crea tu feature branch (git checkout -b feature/nueva-funcionalidad).
3. Realiza tus cambios y haz commit (git commit -am 'Agrega nueva funcionalidad').
4. Haz push a la branch (git push origin feature/nueva-funcionalidad).
5. Crea un nuevo Pull Request.