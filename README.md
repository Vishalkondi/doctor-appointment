🏥 Doctor Appointment Platform
🚀 Full Stack App with Next.js, Neon DB, Tailwind, Vonage & Shadcn UI
<p align="center"> <img src="https://github.com/user-attachments/assets/a0d3d443-f5e1-433a-85a7-a76a3866858d" width="100%" /> </p>
📌 Overview

A modern full-stack doctor appointment platform that allows patients to book consultations, manage schedules, and interact with healthcare providers seamlessly.

Designed with scalability, performance, and real-world usability in mind.

✨ Key Features
👤 Patient
🔐 Secure Authentication (Login/Register)
🔍 Search doctors by specialization
📅 Book & manage appointments
📜 View appointment history
❌ Cancel bookings
🩺 Doctor
🗓 Manage availability
👀 View patient appointments
✏️ Update schedules
🛠 Admin
👥 Manage users & doctors
📊 Monitor appointments
⚙️ Full system control
🧠 Advanced Capabilities
⚡ Real-time updates
📩 SMS/Notification integration (Vonage)
🎨 Modern UI with Shadcn + Tailwind
🌐 Scalable backend architecture
🔐 JWT-based authentication
🛠 Tech Stack
🚀 Frontend
⚛️ Next.js
🎨 Tailwind CSS
🧩 Shadcn UI
🔧 Backend
🟢 Node.js
🚏 Express.js
🗄 Database
🧬 Neon
📡 Integrations
📲 Vonage (SMS/Notifications)
📂 Project Structure
doctor-appointment/
│
├── app/                # Next.js app directory
├── components/         # UI components
├── lib/                # Utility functions
├── backend/            # APIs / server logic
├── database/           # DB schema & configs
├── public/             # Static assets
├── styles/             # Global styles
└── README.md
⚙️ Setup & Installation
1️⃣ Clone Repo
git clone https://github.com/Vishalkondi/doctor-appointment.git
cd doctor-appointment
2️⃣ Install Dependencies
npm install
3️⃣ Environment Variables

Create .env.local:

DATABASE_URL=your_neon_db_url
NEXT_PUBLIC_API_URL=http://localhost:3000
JWT_SECRET=your_secret
VONAGE_API_KEY=your_key
VONAGE_API_SECRET=your_secret
4️⃣ Run Project
npm run dev

👉 Open: http://localhost:3000

🔗 API Overview
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login
GET	/api/doctors	Fetch doctors
POST	/api/appointments	Book appointment
GET	/api/appointments	Get user bookings
📸 Screenshots

Add more UI images for better impact

🏠 Home Page
👨‍⚕️ Doctor Listing
📅 Booking Page
📊 Dashboard
🚀 Future Enhancements
💳 Payment Integration (Stripe/Razorpay)
🎥 Video Consultation
📧 Email + SMS Alerts
🤖 AI Health Assistant
📊 Admin Analytics Dashboard
🤝 Contributing
# Steps
1. Fork repo
2. Create branch (feature/new-feature)
3. Commit changes
4. Push code
5. Open PR
📄 License

Licensed under MIT License

👨‍💻 Author

Vishal Kondi
🔗 https://github.com/Vishalkondi

⭐ Support

If this project helped you:

⭐ Star this repo
🍴 Fork it
📢 Share it
🧠 Pro Tips (🔥 For Interviews)
Add Live Demo (Vercel)
Add API Docs (Postman/Swagger)
Add Architecture Diagram
Add CI/CD pipeline (GitHub Actions)

👉 This makes your project top 1% level

🏆 Project Value

✔ Real-world SaaS architecture
✔ Production-ready structure
✔ Strong portfolio project
