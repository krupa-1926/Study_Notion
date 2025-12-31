![React](https://img.shields.io/badge/Frontend-React-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![Express](https://img.shields.io/badge/Framework-Express-lightgrey)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Deployment](https://img.shields.io/badge/Deploy-Render-purple)
![Deployment](https://img.shields.io/badge/Deploy-Vercel-orange)

# StudyNotion - LMS

## Overview 

A seamless and interactive learning experience for students, making education more accessible and engaging.
A platform for instructors to showcase their expertise and connect with learners across the globe.

🔗 **Live Demo**: [Frontend Link](https://studynotionfrontend-seven.vercel.app)  
🔗 **Backend API**: [Backend Link](https://study-notion-sptp.onrender.com)  

---

## Table of Contents


| Section                 | Description                                  |
|-------------------------|----------------------------------------------|
| [Getting Started](#getting-started)        |  Overview of StudyNotion project           |
| [Tech Stack](#tech-stack-)             | Technologies used in the project         |
| [Folder Structure](#folder-structure)    |  Overview of the folder structure      |
| [Architecture Diagram](#architecture-diagram)   |  Diagram illustrating the architecture   |
| [Schema](#schema)                  |  Explanation of data schemas used          |
| [React Library](#react-library)         |  Overview of React Libraries used        |
| [Screenshots](#screenshots)         |  Screen Preview        |
| [Deployment](#deployment)         |  Deployment steps        |
| [Author](#author)         |  Author Details        |

---

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/krupa-1926/Study_Notion.git
   cd Study_Notion

   ```

2. **Install dependencies:**

   Navigate to frontend directory and install frontend dependencies using npm

   ```
   npm install
   ```

   Similary navigate to backend directory and install backend dependencies

   ```
   npm install
   ```

3. **ENV variables:**

   - create .env file in the frontend folder and add these variables

     #### VITE_APP_BASE_URL= http://localhost:4000

     #### VITE_APP_RAZORPAY_KEY=your razorpay key

   - create .env file in the backend folder and add these variables

     #### PORT=5000

     #### DATABASE_URL=your db url

     #### JWT_SECRET=your secret (string)

     #### JWT_EXPIRY=20d

     #### COOKIE_TIME=7

     #### SESSION_SECRET=your secret session (string)

     #### CLOUD_NAME=your cloudinary cloud name

     #### API_KEY=your cloudinary key

     #### API_SECRET=your cloudinary api secret

     #### RAZORPAY_KEY=your razorpay api 

     #### RAZORPAY_SECRET=your razorpay secret

     #### BREVO_API_KEY=your brevo api 

     #### BREVO_SMTP_HOST=your brevo SMTP hostname

     #### BREVO_SMTP_PORT=your brevo port

     #### BREVO_SMTP_USER=your brevo SMTP username

     #### BREVO_SMTP_PASS=your brevo SMTP password


4. **Run project:**
   - Open terminal, navigate to frontend directory and run below command to start frontend
   ```
       npm run dev
   ```
   - Open another terminal, navigate to backend directory and run this command to start backend server
   ```
       npm start
   ```

---

## Tech Stack 💻🔧 

- **MongoDB:** NoSQL database for storing user data, listings.
- **Express.js:** Web application framework for building the backend server.
- **React.js:** JavaScript library for building the user interface.
- **Node.js:** JavaScript runtime environment for executing server-side code.
- **Tailwind CSS:** A utility-first CSS framework
- **Shadcn:** UI library for styling based on Tailwind CSS
- **JWT:** JSON Web Tokens for secure user authentication.
- **Cloudinary:** Cloud-based image management for storing and serving images.
- **Google Cloud:** For gmail based authentication

---

## Folder Structure

```plaintext
Study_Notion/
│
├── backend/                     # Backend (Node.js + Express)
│   ├── config/                  # DB config, Cloudinary, etc.
│   ├── controllers/             # API controllers (Auth, Place, Booking)
│   ├── middleware/              # Auth, error handlers
│   ├── models/                  # Mongoose schemas
│   ├── routes/                  # Express routes
│   ├── utils/                   # Helper functions
│   │
│   ├── server.js                # Backend entry point
│   ├── package.json
│   ├── package-lock.json
│   ├── .env                     # Environment variables (ignored)
│   
│
├── frontend/                    # Frontend (React)
│   ├── public
│   │
│   ├── src/
│   │   ├── assets/              # Images, icons
│   │   ├── components/          # Reusable components
│   │   ├── lib/                 # Util files
│   │   ├── pages/               # Pages (Home, Place, Booking, Profile)
│   │   ├── styles/              # CSS / Tailwind styles
│   │   ├── utils/               # Utility functions (withAuth, helpers)
│   │   ├── App.jsx
│   │   ├── main.jsx             # React entry point
│   │
│   ├── .env                     # Frontend env vars
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   └── tailwind.config.js
│
├── .gitignore
├── README.md                    # Project overview

```
---

## Architecture Diagram

Here is a high-level diagram that illustrates the architecture of the StudyNotion ed-tech platform:
<img width='60%' src='./screenshots/Architecture Diagram.png' />

---

#### The front end of StudyNotion has all the necessary pages that an ed-tech platform should have. Some of these pages are: 

For Students:
- **Homepage 🏠:** A brief introduction to the platform with links to the course list and user details and random background.
- **Course List 📚:** A list of all the courses available on the platform, along with their descriptions and ratings.
- **Wishlist 💡:** Displays all the courses that a student has added to their wishlist.
- **Cart Checkout 🛒 :** Allows the user to complete course purchases.
- **Course Content 🎓:** Presents the course content for a particular course, including videos and related material.
- **User Details 👤:** Provides details about the student's account, including their name, email, and other relevant information.
- **User Edit Details ✏️:** Allows students to edit their account details.

For Instructors:
- **Dashboard 📊:** Offers an overview of the instructor's courses, along with ratings and feedback for each course.
- **Insights 📈:** Provides detailed insights into the instructor's courses, including the number of views, clicks, and other relevant metrics.
- **Course Management Pages 🛠️:** Enables instructors to create, update, and delete courses, as well as manage course content and pricing.
- **View and Edit Profile Details 👀:** Allows instructors to view and edit their account details.

---

### Back-end ⚙️

The back-end of the platform is built using NodeJS and ExpressJS, providing APIs for the front-end to consume. These APIs include functionalities such as user authentication, course creation, and course consumption. The back-end also handles the logic for processing and storing the course content and user data.

#### Back-end Features

- **User Authentication and Authorization 🔐:** Students and instructors can sign up and log in to the platform using their email addresses and passwords. The platform also supports OTP (One-Time Password) verification and forgot password functionality for added security.
- **Course Management 🛠️:** Instructors can create, read, update, and delete courses, as well as manage course content and media. Students can view and rate courses.
- **Payment Integration 💳:** Students will purchase and enroll in courses by completing the checkout flow, followed by Razorpay integration for payment handling.
- **Cloud-based Media Management ☁️ :** StudyNotion uses Cloudinary, a cloud-based media management service, to store and manage all media content, including images, videos, and documents.
- **Markdown Formatting ✍️:** Course content in document format is stored in Markdown format, allowing for easier display and rendering on the front-end.

---

## Schema 
<img width='100%' src='./screenshots/Schema.png' />

---

##  **React Library**:

-  **Lazy Loading**: Enhance performance by lazily loading images using the react-lazy-load-image library.
-  **Chart.js:**  Versatile charting library for creating interactive and visually appealing charts.
- **Framer Motion:**  Animation library for React, providing smooth and expressive motion.
-  **React Dropzone:**  Drag-and-drop file uploader for React applications.
-  **React Hot Toast:**  Elegant and customizable toast notifications for React applications.
-  **React OTP Input:**  Input component for one-time password entry in React forms.
-  **React Super Responsive Table:**  Highly responsive and feature-rich table component for React.
-  **Swiper:**  Modern touch slider for mobile and desktop browsers.
-  **React Type Animation:**  Simple and configurable typing animation component for React.
-  **Video React:**  React-based video player for building rich multimedia experiences in web applications.

--- 

## Screenshots 

# Random Home Page Background 
<img width='100%' src='./screenshots/home1.png' />
<img width='100%' src='./screenshots/home2.png' />

# About Page
<img width='100%' src='./screenshots/about.png' />

# Contact Page
<img width='100%' src='./screenshots/contact.png' />

# Forgot passwornd
<img width='100%' src='./screenshots/forgot pass.png' />

# Dashboard
<img width='100%' src='./screenshots/dashboard.png' />

# Edit Profile
<img width='100%' src='./screenshots/edit profile.png' />

# Add Course
<img width='100%' src='./screenshots/add course.png' />

# Edit Course
<img width='100%' src='./screenshots/edit course.png' />

# Course Details 1
<img width='100%' src='./screenshots/course details1.png' />

# Course Details 2
<img width='100%' src='./screenshots/course details2.png' />

# Add Review
<img width='100%' src='./screenshots/add review.png' />

# Cart1
<img width='100%' src='./screenshots/cart1.png' />

# Enrolled Courses
<img width='100%' src='./screenshots/enrolled courses2.png' />

# Instructor Data
<img width='100%' src='./screenshots/instrctor data2.png' />

# My Courses 
<img width='100%' src='./screenshots/myCourses2.png' />

# View Courses 1
<img width='100%' src='./screenshots/view course1.png' />

# View Courses 2
<img width='100%' src='./screenshots/view course2.png' />


# Delete Account
<img width='100%' src='./screenshots/delete account.png' />

# Footer
<img width='100%' src='./screenshots/footer.png' />

---

##  Deployment

### Backend (Render)
  - Push repo to GitHub

  - Create a Web Service on Render with backend/ as root

  - Add Environment Variables in Render dashboard (MONGO_URI, JWT_SECRET, etc.)

  - Deploy

### Frontend (vercel)
  - Push repo to GitHub

  - Create a New Project on Vercel with frontend/ as root

  - Deploy the frontend/ folder

  - Update API base URL to point to your deployed backend

--- 

## Author 
  Built by Krupa Patel