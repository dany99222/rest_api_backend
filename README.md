# 🛍️ Product Manager — Backend

> REST API for product management built with Node.js, Express, TypeScript and PostgreSQL.

---

## 📖 Description

REST API that handles full CRUD operations for products. Features input validation, HTTP logging, API documentation with Swagger, and automated testing with Jest. Database hosted on Render using PostgreSQL and Sequelize as ORM.

---

## 🚀 Technologies & Tools

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)

---

## 📁 Project Structure

```
rest-api-node-ts-server/
├── src/
│   ├── config/         # Database configuration
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Middlewares (validation, etc.)
│   ├── models/         # Sequelize models
│   ├── routes/         # API routes
│   ├── data/           # Seed / test data scripts
│   └── index.ts        # Entry point
├── dist/               # Compiled build
├── tsconfig.json
└── package.json
```

---

## ⚙️ Installation & Usage

### Prerequisites

- Node.js >= 18
- PostgreSQL database (local or Render)
- npm

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/dany99222/rest-api-node-ts-server.git
cd rest-api-node-ts-server

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env

# 4. Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev            # Start with nodemon + ts-node
npm run build          # Compile TypeScript
npm start              # Run production build
npm test               # Run tests with Jest
npm run test:coverage  # Run tests with coverage report
```

---

## 🌍 Environment Variables

```env
PORT=4000
DATABASE_URL=postgresql://user:password@host:5432/dbname
```

---

## 📚 API Documentation

Once the server is running, Swagger docs are available at:

```
http://localhost:4000/api-docs
```

---

## 🔗 API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get product by ID |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/:id` | Update a product |
| PATCH | `/api/products/:id` | Partially update a product |
| DELETE | `/api/products/:id` | Delete a product |

---

## 🧪 Testing

This project includes automated tests using **Jest** and **Supertest**.

```bash
# Run all tests
npm test

# Run with coverage report
npm run test:coverage
```

---

## 👤 Author

**Luis Daniel Villalpando Hurtado**
- GitHub: [@dany99222](https://github.com/dany99222)
- Email: dany070100@hotmail.com
- LinkedIn: [luisdanielvillalpandohurtado](https://www.linkedin.com/in/luisdanielvillalpandohurtado)

---

## 📄 License

ISC
