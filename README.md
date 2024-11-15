
# Library Management System API

## Project Name & Description
This project is a **Library Management System API** developed using modern backend technologies. The API allows library staff and members to manage books, memberships, and borrowing activities efficiently. Key features include CRUD operations for books, members, and borrow records, along with functionalities to handle book borrowing and returning. The project utilizes UUID for unique identification across all tables.

## Live URL
https://library-management-api.example.com

## Technology Stack & Packages
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building the API.
- **Prisma ORM**: For interacting with the PostgreSQL database.
- **PostgreSQL**: Database used to store all the data.
- **TypeScript**: Programming language to add type safety to the project.

## Setup Instructions
Follow these steps to run the application locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/mdshohed/Library-Management-API-Prisma.git
   ```
2. **Navigate to the Project Directory**
   ```bash
   cd Library-Management-API-Prisma
   ```
3. **Install Dependencies**
   ```bash
   npm install
   ```
4. **Set Up Environment Variables**
  - Create a `.env` file in the root directory and add the following:
    ```
    DATABASE_URL=your_postgresql_connection_string
    NODE_ENV="development"
    PORT=5000
    ```
5. **Run Prisma Migrations**
   ```bash
   npx prisma migrate dev
    ```
6. **Run Prisma Studio**
   ```bash
   npx prisma studio
   ```
7. **Start the Server**
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:5000` by default.

## Key Features & Functionality
- **CRUD Operations**:
  - Manage books, members, and borrow records with Create, Read, Update, and Delete endpoints.
- **Borrowing & Returning**:
  - Endpoints for borrowing books and returning them, with due date calculations and fine handling for overdue books.
- **UUID Identification**:
  - All tables use UUIDs for unique identification to ensure data consistency and security.

## Known Issues/Bugs
- Prisma Response issues
- Database Connection Errors
- Validation Failures
- Data Consistency Issues