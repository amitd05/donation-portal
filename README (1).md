# 🩸 Donation Portal – Empowering Connectivity  

A fullstack web application to connect **donors and recipients**, built with **React.js (frontend)** and **Spring Boot (backend)** using **MySQL** for secure data storage.  

---

## 🚀 Tech Stack  
- Frontend: React.js  
- Backend: Spring Boot (Java)  
- Database: MySQL / H2  
- Tools: Maven, npm  

---

## 📂 Project Structure  
```
donation-portal/
 ├── backend/   # Spring Boot + MySQL/H2 (previously "demo")
 └── frontend/  # React.js (previously inside frontend/my-app)
```

---

## ⚙️ Setup Instructions  

### 1️⃣ Clone Repository  
```bash
git clone https://github.com/YOUR_USERNAME/donation-portal.git
cd donation-portal
```

---

### 2️⃣ Backend Setup (Spring Boot)  
```bash
cd backend
mvn spring-boot:run
```

➡️ Update `src/main/resources/application.properties` with DB credentials.  

**MySQL Example:**  
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/donation_portal
spring.datasource.username=your-username
spring.datasource.password=your-password
spring.jpa.hibernate.ddl-auto=update
```

**H2 Example (in-memory DB):**  
```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=update
```

---

### 3️⃣ Frontend Setup (React.js)  
```bash
cd ../frontend
npm install
npm start
```
Runs on `http://localhost:3000/`  

---

## 📌 Future Enhancements  
- Role-based access (Admin, Donor, Recipient)  
- Email notifications for donations  
- Cloud deployment (AWS/Heroku)  

---

## 👨‍💻 Author  
**Amit Raikar**  
- [LinkedIn](https://www.linkedin.com/in/amit-raikar-a06464265)  
- [GitHub](https://github.com/amitd05)  
