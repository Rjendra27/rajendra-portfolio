import type { SkillCategory } from '../types/portfolio';

export const skillsData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconName: 'Code',
    skills: [
      { name: 'Python', badge: 'Core' },
      { name: 'Java', badge: 'OOP' }
    ]
  },
  {
    title: 'Web Development',
    iconName: 'Globe',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'React.js', badge: 'Frontend' },
      { name: 'Flask', badge: 'Backend' },
      { name: 'REST APIs' }
    ]
  },
  {
    title: 'Machine Learning / AI',
    iconName: 'Cpu',
    skills: [
      { name: 'scikit-learn' },
      { name: 'Pandas' },
      { name: 'OpenCV', badge: 'Vision' },
      { name: 'PyTorch' }
    ]
  },
  {
    title: 'Database & Storage',
    iconName: 'Database',
    skills: [
      { name: 'MySQL' },
      { name: 'DBMS Fundamentals' }
    ]
  },
  {
    title: 'Tools & Platforms',
    iconName: 'Wrench',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Power BI', badge: 'Analytics' },
      { name: 'Excel' }
    ]
  }
];
