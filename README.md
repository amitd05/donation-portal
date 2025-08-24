# 🩸 Donation Portal – Empowering Connectivity  

A fullstack web application designed to improve connectivity between donors and recipients. Built with **React.js** for the frontend, **Spring Boot** for the backend, and **MySQL** as the database.  

---

## 🚀 Tech Stack  
- **Frontend:** React.js  
- **Backend:** Spring Boot (Java)  
- **Database:** MySQL  
- **Tools:** Maven, npm, GitHub  

---

## ✨ Features  
- 🔹 User registration and login  
- 🔹 Donor can add, update, and delete donations  
- 🔹 Recipients can browse available donations  
- 🔹 Secure data management with MySQL  
- 🔹 REST APIs for CRUD operations  
- 🔹 Responsive and user-friendly UI  

---

## 📂 Project Structure  
```
donation-portal/
 ├── backend/   # Spring Boot + MySQL
 └── frontend/  # React.js
```

---

## ⚙️ Installation and Setup  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/YOUR_USERNAME/donation-portal.git
cd donation-portal
```

---

### 2️⃣ Backend Setup (Spring Boot)  
```bash
cd backend
# Import into your IDE (IntelliJ/Eclipse/VS Code) as Maven project
# Update application.properties with your MySQL credentials
mvn spring-boot:run
```

**application.properties example:**  
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/donation_portal
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
```

---

### 3️⃣ Frontend Setup (React.js)  
```bash
cd ../frontend
npm install
npm start
```

This will start the frontend on `http://localhost:3000/`  

---

## 📌 Future Enhancements  
- Role-based access (Admin, Donor, Recipient)  
- Email notifications for new donations  
- Cloud deployment (AWS/Heroku)  

---

## 🧑‍💻 Author  
**Amit Raikar**  
- [LinkedIn](https://www.linkedin.com/in/amit-raikar-a06464265)  
- [GitHub](https://github.com/amitd05)  
