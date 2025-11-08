export interface SkillCategory {
  category: string
  skills: string[]
  icon: string
}

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['Dart', 'JavaScript', 'PHP', 'Java'],
    icon: '💻'
  },
  {
    category: 'Mobile Development',
    skills: ['Flutter', 'App Store Deployment', 'Play Store Deployment'],
    icon: '📱'
  },
  {
    category: 'State Management',
    skills: ['GetX', 'BLoC', 'Provider', 'Riverpod'],
    icon: '🔄'
  },
  {
    category: 'Backend',
    skills: ['Laravel', 'Node.js', 'Prisma', 'REST APIs'],
    icon: '⚙️'
  },
  {
    category: 'Database',
    skills: ['Firebase', 'MongoDB', 'MySQL'],
    icon: '🗄️'
  },
  {
    category: 'Tools',
    skills: ['Git', 'Postman', 'Figma', 'Docker'],
    icon: '🛠️'
  }
]
