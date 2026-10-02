"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CurrentlyBuilding } from "@/components/currently-building"
import { FeaturedProjects } from "@/components/featured-projects"
import { S3RoboticsSection } from "@/components/s3-robotics-section"
import { LuisLab } from "@/components/luis-lab"
import { ImpactSection } from "@/components/impact-section"
import { StorySection } from "@/components/story-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { CommunitySection } from "@/components/community-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { GradientBackground } from "@/components/gradient-background"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <GradientBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <CurrentlyBuilding />
        <FeaturedProjects />
        <S3RoboticsSection />
        <LuisLab />
        <ImpactSection />
        <StorySection />
        <EducationSection />
        <ExperienceSection />
        <CommunitySection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
