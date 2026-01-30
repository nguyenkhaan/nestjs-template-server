# 🟢 NestJS Template Server

## 1. Features

- **Base Model**: Docker + PostgreSQL + Prisma  
- **Authentication**: Login / Auth with Guards  
- **JWT Passport**: Coming Soon  
- **Guards**: Custom Guards for authentication & roles  
- **Validation**: Pipes for input validation  
- **Decorators**: `@Public()`, `@Role()`  
- **Interceptors**: Logging Interceptors for Tracking 

---

## 2. Requirements

- [Node.js](https://nodejs.org/)  
- [NestJS CLI](https://docs.nestjs.com/)  
- [Bun v1.3+](https://bun.sh/)  

---

## 3. Installation & Setup

### Step 1: Install Dependencies

```bash
bun install
```
### Step 2:  
- Copy .env.example to .env with your configuration 
### Step 3: 
- Run the database : 
`sudo docker compose up -d` 
- Push Prisma schema to the database:

`bunx prisma db push`

- Seed initial data:

`bunx prisma db seed`
### Step 4: Run the server 
`bun start:dev`
