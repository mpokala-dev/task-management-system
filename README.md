# Task Management System

A production-style enterprise Task Management System built with React, TypeScript, Redux Toolkit, Node.js, Express, MongoDB, and JWT Authentication.

# Repository Topics

react
typescript
redux-toolkit
vite
nodejs
express
mongodb
jwt-authentication
axios
responsive-design
rest-api
enterprise-application
task-management

# Frontend Architecture

task-management-system/
│
├── app/
│ ├── App.tsx
│ └── store.ts
│
├── assets/
│ ├── fonts/
│ ├── icons/
│ ├── images/
│ └── svg/
│
├── components/
│ └── common/
│ ├── Button/
│ │ ├── Button.tsx
│ │ ├── Button.module.css
│ │ ├── Button.types.ts
│ │ └── index.ts
│ │
│ ├── Card/
│ │ ├── Card.tsx
│ │ ├── Card.module.css
│ │ ├── Card.types.ts
│ │ └── index.ts
│ │
│ ├── Input/
│ │ ├── Input.tsx
│ │ ├── Input.module.css
│ │ ├── Input.types.ts
│ │ └── index.ts
│ │
│ ├── Loader/
│ │ ├── Loader.tsx
│ │ ├── Loader.module.css
│ │ ├── Loader.types.ts
│ │ └── index.ts
│ │
│ ├── Modal/
│ │ ├── Modal.tsx
│ │ ├── Modal.module.css
│ │ ├── Modal.types.ts
│ │ └── index.ts
│ │
│ └── Spinner/
│ ├── Spinner.tsx
│ ├── Spinner.module.css
│ ├── Spinner.types.ts
│ └── index.ts
│
├── config/
│ ├── axios.ts
│ ├── env.ts
│ └── theme.ts
│
├── constants/
│ ├── api.ts
│ ├── messages.ts
│ ├── routes.ts
│ └── storage.ts
│
├── features/
│ ├── auth/
│ │ ├── components/
│ │ ├── hooks/
│ │ │ └── useAuth.ts
│ │ ├── pages/
│ │ ├── services/
│ │ ├── store/
│ │ │ └── authSlice.ts
│ │ └── types/
│ │
│ ├── dashboard/
│ │ ├── components/
│ │ ├── hooks/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── store/
│ │ └── types/
│ │
│ ├── profile/
│ │ ├── components/
│ │ ├── hooks/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── store/
│ │ └── types/
│ │
│ └── tasks/
│ ├── components/
│ ├── hooks/
│ ├── pages/
│ ├── services/
│ ├── store/
│ │ └── taskSlice.ts
│ └── types/
│
├── layouts/
│ ├── AuthLayout/
│ └── MainLayout/
│
├── routes/
│ ├── AppRoutes.tsx
│ ├── ProtectedRoute.tsx
│ └── PublicRoute.tsx
│
├── services/
│ └── api.ts
│
├── styles/
│
├── types/
│
├── utils/
│ ├── date.ts
│ ├── formatters.ts
│ ├── helpers.ts
│ └── validation.ts
│
├── main.tsx
└── README.md
