# Netflix Demo API 🍿

โปรเจกต์นี้เป็น **Backend API** ที่สร้างด้วย [NestJS](https://nestjs.com/) เพื่อทำหน้าที่เป็น **API Gateway สำหรับ Movie Data (เช่น TMDB API)** และเปิดใช้งาน Swagger UI สำหรับการทดสอบ API

---

## 📂 โครงสร้างโปรเจกต์

```
netflix-demo-api/
│
├── .github/workflows/        # GitHub Actions (CI/CD)
├── dist/                     # Build output (auto-generated)
├── node_modules/             # Dependencies
│
├── src/                      # Source code หลัก
│   ├── movie/                # โมดูลเกี่ยวกับ Movie
│   │   ├── data/             # Data Layer
│   │   │   └── movie.repository.impl.ts   # Implement Repository
│   │   ├── domain/           # Domain Layer (Business Logic)
│   │   │   ├── entities/     # Entity (Movie)
│   │   │   │   └── movie.entity.ts
│   │   │   └── usecases/     # Usecases
│   │   │       └── get-movies.usecase.ts
│   │   ├── interfaces/       # Interfaces
│   │   │   └── movie.repository.ts
│   │   └── presentation/     # Presentation Layer (Controller, DTO)
│   │       ├── dto/          # Data Transfer Object
│   │       │   └── get-movies.dto.ts
│   │       ├── movie.controller.ts
│   │       ├── movie.module.ts
│   │       └── movie.service.ts
│   │
│   ├── utils/                # Helper utilities
│   ├── app.module.ts         # Root Module
│   ├── app.service.ts        # Root Service
│   ├── app.controller.ts     # Root Controller
│   └── main.ts               # Entry point ของ NestJS
│
├── test/                     # Test files
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
│
├── docker-compose.yml        # Docker Compose สำหรับ container
├── .env                      # Environment variables
├── tsconfig.json             # TypeScript config
├── package.json              # Scripts และ Dependencies
└── README.md                 # เอกสารโปรเจกต์
```

---

## 🚀 วิธีการรัน

### 1. ติดตั้ง Dependencies

```bash
npm install
```

### 2. รัน Development Server

```bash
npm run start:dev
```

API จะเปิดที่:

- **http://localhost:3000** → API Endpoint
- **http://localhost:3000/api** → Swagger UI

### 3. รัน Production Mode

```bash
npm run build
npm run start:prod
```

### 4. รันทดสอบ

```bash
# Unit Test
npm run test

# e2e Test
npm run test:e2e

# Coverage
npm run test:cov
```

### 5. รันด้วย Docker

```bash
docker-compose up --build
```

---

## ✨ Features

- **Movie Module**
  - ดึงข้อมูลภาพยนตร์จาก TMDB API
  - ใช้ **Repository Pattern** เชื่อม Usecase ↔ Data Source
  - ใช้ **DTO (Data Transfer Object)** ในการ validate/request/response

- **Domain Layer (Business Logic)**
  - มี **Entities** และ **Usecases** แยกชัดเจน
  - ตัวอย่าง Usecase: `get-movies.usecase.ts` สำหรับดึงรายการหนัง

- **Swagger API Documentation**
  - เปิด Swagger UI ที่ `/api`
  - ง่ายต่อการทดสอบ API

- **Architecture แบบ Clean**
  - Layered Architecture:
    - `data` → จัดการข้อมูล (เช่นเรียก API ภายนอก)
    - `domain` → Logic และ Usecase
    - `presentation` → Controller, DTO

- **Testing**
  - มีทั้ง **Unit Test** (`.spec.ts`) และ **e2e Test**

- **Environment Configuration**
  - ใช้ `.env` จัดเก็บ API Key หรือ Config ต่าง ๆ
