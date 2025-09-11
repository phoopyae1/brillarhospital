# 🏥 Brillar Hospital Website

A mock hospital website built with **Next.js 14 (App Router)** and **Tailwind CSS**.  
This project demonstrates a realistic hospital site structure with hero banners, service cards, doctor directory, room charges, and more.  
It is designed for deployment on **Vercel** or any static host.

---

## ✨ Features

- **Responsive design** using Tailwind CSS
- **Static export** (`output: "export"`) → generates `/out` for easy deployment
- **Hero banners** on all pages (local images in `/public/img/photos`)
- **Centres & Services**: 12 specialty cards with images, descriptions, highlights
- **Doctor Directory**: 20 mock doctors displayed in cards with:
  - Department tags
  - Contact info
  - Search filter by name
- **Room Charges**: table of room types, inclusions, indicative nightly rates
- **Staff/Doctor Login**: top-right button linking to the EMR portal
- **Pages included**:
  - Home
  - Patients & Visitors
  - Centres & Services
  - Conditions & Treatments
  - Find a Doctor
  - Admissions
  - Billing & Payment
  - Contact
  - Why Choose Us
  - Appointments
  - Sitemap
  - Room Charges

---

## 📂 Project Structure

```
brillar-hospital/
├── public/
│   └── img/                # Logo, hero banners, service images
├── src/
│   ├── app/                # App Router pages
│   │   ├── page.tsx        # Home page
│   │   ├── patients/...
│   │   ├── services/...
│   │   ├── doctors/...
│   │   ├── room-charges/...
│   │   └── etc.
│   └── components/         # Header, Footer, PageHero
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone <your-repo-url> brillar-hospital
cd brillar-hospital
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the dev server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production (static export)
```bash
npm run build
npx serve out
```
This generates the static site in `/out` which you can host anywhere.

---

## 🌐 Deployment on Vercel

1. Push the repo to GitHub/GitLab
2. Import into [Vercel](https://vercel.com/new)
3. Build Command:  
   ```bash
   npm run build
   ```
4. Output Directory:  
   ```
   out
   ```

---

## 🔑 Login Page

The **Staff/Doctor Login** button at the top-right of the header redirects to:

👉 [https://brillar-emr.onrender.com/](https://brillar-emr.onrender.com/)

---

## 📸 Customizing Images

- Replace hero banners in `public/img/photos/` (1600×520px recommended)
- Replace service images in `public/img/services/` (800×480px recommended)
- Logo is at `public/img/brillar-logo.png`

---

## 📜 License

This project is for **demo / educational purposes only**.  
It is not affiliated with any real hospital.
