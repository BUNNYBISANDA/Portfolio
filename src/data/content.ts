// All editable content and links live here.

export type Socials = {
  github?: string
  linkedin?: string
  whatsapp?: string
  discord?: string
}

export type Profile = {
  name: string
  nickname: string
  role: string
  tagline: string
  location: string
  email: string
  socials: Socials
}

export type Project = {
  title: string
  blurb: string
  tech: string[]
  image: string // vite import path or URL
  links: { github?: string; live?: string }
}

export type CoachingPlan = {
  name: string
  priceNote: string
  features: string[]
}

export type Testimonial = {
  quote: string
  author: string
  role?: string
}

export type Content = {
  profile: Profile
  stats: string[]
  skills: { tech: string[]; coaching: string[] }
  projects: Project[]
  coachingPlans: CoachingPlan[]
  testimonials: Testimonial[]
  profileImage?: string
}

// Image imports
import meUrl from '@/assets/avatar.jpg'
import project1 from '@/assets/project-1.png'
import project2 from '@/assets/project-2.jpg'
import project3 from '@/assets/project-3.jpg'
import project4 from '@/assets/project-4.jpg'

export const content: Content = {
  profile: {
    name: 'Bisanda Jayathilaka',
    nickname: 'Bunny',
    role: 'IT Student & Badminton Coach',
    tagline: 'I build useful software and coach athletes with data-aware training.',
    location: 'Bangkok',
    email: 'hello@example.com',
    socials: {
      github: 'https://github.com/dashboard',
      linkedin: 'https://www.linkedin.com/in/bisanda-jayathilaka-373635311/',
      whatsapp: 'https://wa.me/66807747475',
      discord: 'https://discord.com/users/placeholder'
    }
  },
  stats: [
    '10+ Projects',
    '2+ Years Coaching',
    'AWS Foundational',
    'Bangkok-based'
  ],
  skills: {
    tech: ['Python', 'JavaScript', 'TypeScript', 'React', 'Node', 'SQL', 'Power BI', 'Git/GitHub', 'Linux basics', 'AWS (Foundational)'],
    coaching: ['Footwork drills', 'Tactical analysis', 'Youth development', 'Injury-aware training', 'Performance tracking']
  },
  projects: [
    {
      title: 'Villa De Jojo Official Website',
      blurb: 'Track training attendance and visualize participation trends for programs.',
      tech: ['JS', 'HTML', 'CSS'],
      image: project1,
      links: { github: 'https://github.com/BUNNYBISANDA/Villadejojo', live: 'https://bunnybisanda.github.io/Villadejojo/' }
    },
    {
      title: 'LCIC Student Tracker',
      blurb: 'Simple student progress tracker with MySQL backend and analytics.',
      tech: ['Node', 'MySQL'],
      image: project2,
      links: { github: '#', live: '#' }
    },
    {
      title: 'Sports E-Commerce (SDLC demo)',
      blurb: 'A demo store built to practice SDLC and teamwork workflows.',
      tech: ['React', 'Node', 'Stripe'],
      image: project3,
      links: { github: '#', live: '#' }
    },
    {
      title: 'Modern Portfolio',
      blurb: 'This site — fast, accessible, and minimal with smooth interactions.',
      tech: ['Vite', 'React', 'Tailwind'],
      image: project4,
      links: { github: '#', live: '#' }
    }
  ],
  coachingPlans: [
    {
      name: 'Junior',
      priceNote: 'Intro level • 60 min • up to 8 students',
      features: [
        'Foundational footwork and grips',
        'Fun skill games and rallies',
        'Age-appropriate conditioning',
        'Technique cues and safety',
        'Weekly progress notes'
      ]
    },
    {
      name: 'Basic',
      priceNote: 'Skill building • 75 min • up to 6 students',
      features: [
        'Drills for consistency and power',
        'Tactical shot selection',
        'Doubles/solo rotations',
        'Video review on request',
        'Seasonal goals & tracking'
      ]
    },
    {
      name: 'Private',
      priceNote: 'Performance focus • 90 min • 1–2 students',
      features: [
        'Personalized training plan',
        'Match strategy and tempo',
        'Data-informed progress tracking',
        'Injury-aware load management',
        'Tournament prep & mindset'
      ]
    }
  ],
  testimonials: [
    { quote: 'Bunny is patient, structured, and makes sessions engaging for kids.', author: 'Parent, GTBA Junior Program' },
    { quote: 'Clear improvements in footwork and confidence within weeks.', author: 'Player, Basic Group' },
    { quote: 'Great balance of technique and tactics — highly recommended.', author: 'Amateur Doubles Player' }
  ],
  profileImage: meUrl
}

