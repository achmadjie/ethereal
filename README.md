# Ethereal

Ethereal is a sleek, futuristic Web3 project where art meets decentralized finance. The project combines modern design, smooth animations, and interactive components to deliver a premium user experience.

## Features

- **Modern, Minimalistic UI:** Inspired by designs from [godly.website](https://godly.website) and [minimal.gallery](https://minimal.gallery).
- **Responsive Design:** Built with Next.js and Tailwind CSS to ensure seamless viewing on all devices.
- **Smooth Animations:** Utilizes Framer Motion for engaging animations and transitions.
- **Glassmorphism & Gradient Effects:** Enhanced UI components (Navbar, Hero, Features, CTA, Footer) with modern design effects.

## Setup Instructions

1. **Clone the repository:**
   
   ```bash
   git clone https://github.com/achmadjie/ethereal.git
   cd ethereal
   
2. **Install dependencies::**
   
   ```bash
   npm install

3. **Run the development server:**
   
   ```bash
   npm run dev

4. **Open your browser:**

   Visit http://localhost:3000 to view the application.

## Design Decisions

- **Next.js with App Router**: Chosen for its performance and modern routing capabilities.
- **Tailwind CSS**: Provides a utility-first approach for rapid and responsive design.
- **Framer Motion**: Adds smooth and dynamic animations to enhance user experience.

## Challenges Faced

- **Component Export/Import Issues**: Initial problems with component exports and paths were resolved by standardizing the use of default exports and proper import paths.   
- **Client vs. Server Components**: Ensured interactive components were marked with "use client"; to avoid issues in the Next.js App Router.
- **Animation Performance**: Balancing complex animations with performance across devices required careful optimization.
- **Responsive Design**: Adapting a rich animated interface to various screen sizes was challenging but achieved with Tailwind’s responsive utilities.   
