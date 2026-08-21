export interface Course {
  id: string;
  name: string;
  category: 'Medicine' | 'Engineering' | 'Business' | 'Dentistry' | 'Pharmacy' | 'Nursing' | 'IT' | 'Humanities';
  level: 'Undergraduate' | 'Postgraduate' | 'Foundation';
  duration: string;
  tuitionRange: string;
  description: string;
  descriptionLong: string;
  countries: string[];
  popular: boolean;
  icon: string;
}

export const courses: Course[] = [
  {
    id: 'medicine-md',
    name: 'Doctor of Medicine (MD)',
    category: 'Medicine',
    level: 'Undergraduate',
    duration: '6 years',
    tuitionRange: '$4,000–$7,000/yr',
    description: 'A 6-year English-taught medical degree recognised by WHO, NMC, and ECFMG.',
    descriptionLong:
      'The MD program provides comprehensive medical training — from foundational sciences to clinical rotations in affiliated hospitals. Graduates are eligible to sit licensing exams in India (FMGE/NExT), the UK (PLAB), and the USA (USMLE).',
    countries: ['Georgia', 'Uzbekistan', 'Europe'],
    popular: true,
    icon: 'stethoscope',
  },
  {
    id: 'dentistry-dds',
    name: 'Dentistry (DDS)',
    category: 'Dentistry',
    level: 'Undergraduate',
    duration: '5 years',
    tuitionRange: '$3,800–$6,500/yr',
    description: 'A 5-year dental surgery degree with hands-on clinical training from year 3.',
    descriptionLong:
      'The DDS program combines theoretical dentistry with extensive clinical practice in university dental clinics. Students begin treating patients under supervision from the third year, graduating with real clinical experience.',
    countries: ['Georgia', 'Uzbekistan', 'Europe'],
    popular: true,
    icon: 'smile',
  },
  {
    id: 'computer-science-bsc',
    name: 'Computer Science (BSc)',
    category: 'IT',
    level: 'Undergraduate',
    duration: '4 years',
    tuitionRange: '$3,500–$4,500/yr',
    description: 'A 4-year program covering algorithms, software engineering, AI, and data science.',
    descriptionLong:
      'The BSc in Computer Science covers programming, algorithms, databases, machine learning, and software engineering. Students work on real-world projects and internships with tech companies. ECTS credits are recognised across Europe.',
    countries: ['Georgia', 'Europe', 'UK'],
    popular: true,
    icon: 'code',
  },
  {
    id: 'civil-engineering-bsc',
    name: 'Civil Engineering (BSc)',
    category: 'Engineering',
    level: 'Undergraduate',
    duration: '4 years',
    tuitionRange: '$3,500–$3,800/yr',
    description: 'Structural, geotechnical, and infrastructure engineering with lab and field training.',
    descriptionLong:
      'The Civil Engineering program covers structural analysis, geotechnics, hydraulics, and construction management. Students gain practical experience through lab work and site visits, preparing for careers in construction and infrastructure.',
    countries: ['Georgia'],
    popular: false,
    icon: 'building',
  },
  {
    id: 'electrical-engineering-bsc',
    name: 'Electrical Engineering (BSc)',
    category: 'Engineering',
    level: 'Undergraduate',
    duration: '4 years',
    tuitionRange: '$3,500–$3,800/yr',
    description: 'Power systems, electronics, and renewable energy engineering.',
    descriptionLong:
      'The Electrical Engineering BSc covers circuit design, power systems, electronics, and renewable energy technologies. Graduates work in energy, manufacturing, and technology sectors across Europe and Asia.',
    countries: ['Georgia'],
    popular: false,
    icon: 'zap',
  },
  {
    id: 'business-administration-bba',
    name: 'Business Administration (BBA)',
    category: 'Business',
    level: 'Undergraduate',
    duration: '4 years',
    tuitionRange: '$3,500–$4,500/yr',
    description: 'Management, finance, marketing, and entrepreneurship with Erasmus+ exchanges.',
    descriptionLong:
      'The BBA program covers management, finance, marketing, and entrepreneurship with a global perspective. Students can participate in Erasmus+ exchange semesters at European partner universities. Graduates pursue careers in consulting, finance, and management.',
    countries: ['Georgia', 'Europe'],
    popular: true,
    icon: 'briefcase',
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy (BPharm)',
    category: 'Pharmacy',
    level: 'Undergraduate',
    duration: '5 years',
    tuitionRange: '$4,000–$4,500/yr',
    description: 'Pharmaceutical sciences, pharmacology, and clinical pharmacy practice.',
    descriptionLong:
      'The BPharm program covers pharmaceutical chemistry, pharmacology, and clinical pharmacy. Graduates are qualified to work in community and hospital pharmacies, the pharmaceutical industry, and research.',
    countries: ['Georgia', 'Uzbekistan'],
    popular: false,
    icon: 'pill',
  },
  {
    id: 'nursing',
    name: 'Nursing (BSc)',
    category: 'Nursing',
    level: 'Undergraduate',
    duration: '4 years',
    tuitionRange: '$3,000–$3,500/yr',
    description: 'Patient care, clinical practice, and community health nursing.',
    descriptionLong:
      'The BSc Nursing program combines theoretical nursing science with extensive clinical placements. Graduates are qualified to work in hospitals, community health, and care settings globally.',
    countries: ['Georgia'],
    popular: false,
    icon: 'heart-pulse',
  },
  {
    id: 'international-relations',
    name: 'International Relations (BA)',
    category: 'Humanities',
    level: 'Undergraduate',
    duration: '4 years',
    tuitionRange: '$3,500–$3,800/yr',
    description: 'Diplomacy, global politics, and international law.',
    descriptionLong:
      'The BA in International Relations covers diplomacy, global politics, international law, and political economy. Graduates pursue careers in diplomacy, NGOs, international business, and policy research.',
    countries: ['Georgia', 'Europe'],
    popular: false,
    icon: 'globe',
  },
  {
    id: 'data-science-msc',
    name: 'Data Science (MSc)',
    category: 'IT',
    level: 'Postgraduate',
    duration: '1 year',
    tuitionRange: '£14,000–£16,000/yr',
    description: 'Advanced machine learning, statistical modelling, and big data analytics.',
    descriptionLong:
      'The MSc in Data Science is a one-year postgraduate program covering advanced machine learning, statistical modelling, and big data analytics. Offered through our UK partner universities, it includes a major industry project.',
    countries: ['UK'],
    popular: true,
    icon: 'bar-chart',
  },
];

export const getCourse = (id: string) => courses.find((c) => c.id === id);
