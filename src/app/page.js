import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AchievementsSection from './components/AchievementsSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import Head from 'next/head'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class='container mt-24 mx-auto px-12 py-4'>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  )
}
