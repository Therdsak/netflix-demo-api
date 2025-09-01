# Netflix Demo Project 📽️

รวมทั้ง **Frontend (Next.js)** และ **Backend (NestJS API)** สำหรับระบบ Netflix Demo

---

## Frontend

# Nexflix Demo Frontend 🎬

โปรเจกต์นี้เป็น **Frontend Web App** ที่สร้างด้วย [Next.js](https://nextjs.org/) (เวอร์ชัน 15.x) โดยโครงสร้างและ dependencies ถูกออกแบบมาเพื่อรองรับ **State Management, i18n, UI Styling, Data Fetching** และการพัฒนาแบบโมดูลาร์

---

## 📂 โครงสร้างโปรเจกต์

```
nexflix-demo-frontend/
│
├── public/                # Static files (favicon, images, etc.)
│
├── src/
│   ├── app/               # Next.js App Router (layout.tsx, page.tsx, not-found.tsx)
│   ├── data/              # Data access layer
│   │   ├── adapters/      # Adapter แปลงข้อมูล
│   │   ├── datasources/   # แหล่งข้อมูล เช่น API / local storage
│   │   └── repositories/  # Repository pattern เชื่อม usecases กับ datasource
│   ├── domain/            # Business logic (models, usecases)
│   ├── presentation/      # Layer ที่เกี่ยวกับ UI
│   │   ├── components/    # UI Components
│   │   ├── context/       # React Context Providers
│   │   ├── hooks/         # Custom hooks
│   │   ├── providers/     # Provider wrappers
│   │   └── store/         # Zustand store สำหรับ state management
│   ├── i18n/              # Internationalization config (next-i18next, locales)
│   ├── utils/             # ฟังก์ชัน helper ต่าง ๆ
│   └── middleware.ts      # Next.js Middleware
│
├── .env                   # Environment variables
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Scripts และ Dependencies
└── README.md              # เอกสารโปรเจกต์
```

---

## 🛠 เทคโนโลยีที่ใช้

- **Framework**
  - [Next.js 15](https://nextjs.org/) – React Framework (App Router, Server/Client Components)
  - [React 19](https://react.dev/) – UI Library

- **UI & Styling**
  - [Tailwind CSS v4](https://tailwindcss.com/) – Utility-first CSS framework
  - [Framer Motion](https://www.framer.com/motion/) – Animation library
  - [Geist](https://vercel.com/font) – Font จาก Vercel

- **State Management**
  - [Zustand](https://zustand-demo.pmnd.rs/) – Lightweight state management

- **Data Fetching**
  - [TanStack React Query](https://tanstack.com/query/latest) – Server state management + caching

- **Internationalization (i18n)**
  - [i18next](https://www.i18next.com/) + [next-i18next](https://github.com/i18next/next-i18next) – รองรับหลายภาษา
  - [react-i18next](https://react.i18next.com/) – integration กับ React

- **Linting & Type Checking**
  - [ESLint](https://eslint.org/) – Linting
  - [TypeScript](https://www.typescriptlang.org/) – Type safety

---

## 🚀 วิธีการรัน

### 1. ติดตั้ง dependencies

```bash
npm install
# หรือ
yarn install
# หรือ
pnpm install
```

### 2. รัน development server

```bash
npm run dev
```

แล้วเปิด [http://localhost:3000](http://localhost:3000) ใน browser

### 3. Build โปรเจกต์สำหรับ production

```bash
npm run build
```

### 4. รัน production server

```bash
npm run start
```

### 5. ตรวจสอบ lint

```bash
npm run lint
```

---

## 📦 Scripts ที่ใช้บ่อย (จาก `package.json`)

- `dev` → `next dev --turbopack`
- `build` → `next build --turbopack`
- `start` → `next start`
- `lint` → `eslint`

---

## ✨ Features

- **Authentication Flow (รองรับการเข้าสู่ระบบ/ออกจากระบบ)**  
  ใช้ร่วมกับ Next.js Middleware และ State Management (Zustand)

- **Internationalization (i18n)**  
  ใช้ `next-i18next`, `i18next`, `react-i18next` รองรับหลายภาษา

- **Responsive UI & Styling**  
  ใช้ `Tailwind CSS v4` และ `Framer Motion` เพื่อทำ UI ที่สวยงามและมี Animation

- **State Management แบบเบา**  
  ใช้ [Zustand](https://zustand-demo.pmnd.rs/) จัดการ Global State แบบ minimal

- **Data Fetching & Caching**  
  ใช้ `TanStack React Query` สำหรับการจัดการ API calls และ caching

- **Modular Architecture**  
  แบ่งโครงสร้างออกเป็น Layer ชัดเจน
  - `data` (repositories, datasources, adapters)
  - `domain` (models, usecases)
  - `presentation` (components, context, store, hooks, providers)

- **Error Handling & Loading State**  
  Integrate ผ่าน React Query + Zustand เพื่อจัดการ UX เวลาโหลด/เกิด error

- **Scalable Project Structure**  
  ออกแบบรองรับการขยาย feature ใหม่ ๆ ได้ง่าย เช่นเพิ่ม usecase, component, หรือภาษาที่รองรับ

---

## Backend

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
