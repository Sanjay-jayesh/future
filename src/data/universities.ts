export interface University {
  id: string;
  name: string;
  shortName: string;
  country: 'Georgia' | 'Uzbekistan' | 'Europe' | 'UK';
  city: string;
  established: number;
  image: string;
  overview: string;
  highlights: string[];
  programs: { name: string; duration: string; tuition: string; language: string }[];
  requirements: string[];
  careerOpportunities: string[];
  rating: number;
  students: number;
  featured: boolean;
}

export const universities: University[] = [
  {
    id: 'tbilisi-state-medical-university',
    name: 'Tbilisi State Medical University',
    shortName: 'TSMU',
    country: 'Georgia',
    city: 'Tbilisi',
    established: 1918,
    image:
      'https://images.pexels.com/photos/32213405/pexels-photo-32213405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    overview:
      'One of the oldest and most prestigious medical universities in the Caucasus region, TSMU has trained thousands of international doctors and dentists. Its English-taught MD and DDS programs are WHO-recognised and listed with the Medical Council of India.',
    highlights: [
      'WHO & NMC recognised',
      'English-taught MD program',
      '100+ years of medical education',
      'Clinical rotations in affiliated hospitals',
    ],
    programs: [
      { name: 'Doctor of Medicine (MD)', duration: '6 years', tuition: '$7,000/yr', language: 'English' },
      { name: 'Dentistry (DDS)', duration: '5 years', tuition: '$6,500/yr', language: 'English' },
      { name: 'Pharmacy', duration: '5 years', tuition: '$4,500/yr', language: 'English' },
      { name: 'Nursing', duration: '4 years', tuition: '$3,500/yr', language: 'English' },
    ],
    requirements: [
      'Secondary school certificate with biology and chemistry',
      'Minimum 50% in science subjects',
      'Valid passport',
      'Passport-size photographs',
    ],
    careerOpportunities: [
      'Eligible to practise medicine in India, UK, USA, and EU after licensing exams',
      'Postgraduate specialisation in Europe and the US',
      'Research roles in biomedical sciences',
    ],
    rating: 4.8,
    students: 7000,
    featured: true,
  },
  {
    id: 'georgian-technical-university',
    name: 'Georgian Technical University',
    shortName: 'GTU',
    country: 'Georgia',
    city: 'Tbilisi',
    established: 1922,
    image:
      'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    overview:
      'The leading engineering and technology institution in Georgia, GTU offers a wide range of English-taught programs in engineering, IT, and architecture, with strong industry links across the region.',
    highlights: [
      'Top-ranked engineering university',
      'English-taught IT and engineering programs',
      'Modern labs and research centres',
      'Industry internship placements',
    ],
    programs: [
      { name: 'Computer Science', duration: '4 years', tuition: '$4,000/yr', language: 'English' },
      { name: 'Civil Engineering', duration: '4 years', tuition: '$3,800/yr', language: 'English' },
      { name: 'Electrical Engineering', duration: '4 years', tuition: '$3,800/yr', language: 'English' },
      { name: 'Architecture', duration: '5 years', tuition: '$4,500/yr', language: 'English' },
    ],
    requirements: [
      'Secondary school certificate with mathematics',
      'Minimum 50% in mathematics and physics',
      'Valid passport',
      'Passport-size photographs',
    ],
    careerOpportunities: [
      'Software engineering roles across Europe',
      'Infrastructure and construction projects',
      'IT consulting and data science careers',
    ],
    rating: 4.5,
    students: 12000,
    featured: true,
  },
  {
    id: 'university-of-georgia',
    name: 'University of Georgia',
    shortName: 'UG',
    country: 'Georgia',
    city: 'Tbilisi',
    established: 2004,
    image:
      'https://images.pexels.com/photos/7972324/pexels-photo-7972324.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    overview:
      'A modern, fast-growing university with a strong international focus, UG offers business, IT, and social science programs in English with exchange opportunities across Europe.',
    highlights: [
      'Erasmus+ exchange partnerships',
      'Business school with AACSB-aligned curriculum',
      'Modern campus in central Tbilisi',
      'Diverse international student body',
    ],
    programs: [
      { name: 'Business Administration (BBA)', duration: '4 years', tuition: '$4,500/yr', language: 'English' },
      { name: 'Computer Science', duration: '4 years', tuition: '$4,500/yr', language: 'English' },
      { name: 'International Relations', duration: '4 years', tuition: '$3,800/yr', language: 'English' },
      { name: 'Tourism Management', duration: '4 years', tuition: '$3,500/yr', language: 'English' },
    ],
    requirements: [
      'Secondary school certificate',
      'Minimum 50% overall',
      'Valid passport',
      'English proficiency (interview-based)',
    ],
    careerOpportunities: [
      'Management consulting and finance',
      'International diplomacy and NGOs',
      'Tourism and hospitality leadership',
    ],
    rating: 4.6,
    students: 8000,
    featured: true,
  },
  {
    id: 'tashkent-medical-academy',
    name: 'Tashkent Medical Academy',
    shortName: 'TMA',
    country: 'Uzbekistan',
    city: 'Tashkent',
    established: 1920,
    image:
      'https://images.pexels.com/photos/30902113/pexels-photo-30902113.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    overview:
      'A century-old medical institution in the heart of Central Asia, Tashkent Medical Academy offers affordable, English-taught medical and dental degrees with modern facilities and a growing international cohort.',
    highlights: [
      'Affordable medical education',
      'English-taught MD program',
      'WHO-recognised degree',
      'Central Asian clinical exposure',
    ],
    programs: [
      { name: 'Doctor of Medicine (MD)', duration: '6 years', tuition: '$4,000/yr', language: 'English' },
      { name: 'Dentistry (DDS)', duration: '5 years', tuition: '$3,800/yr', language: 'English' },
      { name: 'Pediatrics', duration: '6 years', tuition: '$3,800/yr', language: 'English' },
    ],
    requirements: [
      'Secondary school certificate with biology',
      'Minimum 50% in science subjects',
      'Valid passport',
      'Medical fitness certificate',
    ],
    careerOpportunities: [
      'Medical practice in South Asia and the Gulf',
      'Postgraduate training in Europe',
      'Public health and research careers',
    ],
    rating: 4.4,
    students: 5000,
    featured: false,
  },
  {
    id: 'iluni-europe',
    name: 'ILUNI European Partner Network',
    shortName: 'ILUNI',
    country: 'Europe',
    city: 'Multiple cities',
    established: 1990,
    image:
      'https://images.pexels.com/photos/31039051/pexels-photo-31039051.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    overview:
      'Through our European partner network, we place students in English-taught programs across Poland, Hungary, Romania, and the Czech Republic — affordable EU destinations with post-study work rights.',
    highlights: [
      'English-taught EU degrees',
      'Post-study work visa opportunities',
      'Schengen travel access',
      'Tuition under €5,000/year',
    ],
    programs: [
      { name: 'Medicine (MD)', duration: '6 years', tuition: '€6,000/yr', language: 'English' },
      { name: 'Engineering (BSc)', duration: '4 years', tuition: '€3,500/yr', language: 'English' },
      { name: 'Business (BBA)', duration: '3 years', tuition: '€3,000/yr', language: 'English' },
    ],
    requirements: [
      'Secondary school certificate',
      'Some universities require entrance exams',
      'Valid passport',
      'Proof of English proficiency',
    ],
    careerOpportunities: [
      'Work in the EU after graduation',
      'Transferable ECTS credits across Europe',
      'Global career mobility',
    ],
    rating: 4.5,
    students: 3000,
    featured: false,
  },
  {
    id: 'uk-partner-network',
    name: 'UK Partner Universities',
    shortName: 'UK',
    country: 'UK',
    city: 'Multiple cities',
    established: 1900,
    image:
      'https://images.pexels.com/photos/5554257/pexels-photo-5554257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    overview:
      'We help students apply to a range of UK universities, from foundation year to postgraduate programs, with full support for the Student Visa process and CAS letter management.',
    highlights: [
      'Globally respected UK qualifications',
      '2-year post-study work visa',
      'Foundation year options',
      'Scholarship guidance',
    ],
    programs: [
      { name: 'Foundation Year', duration: '1 year', tuition: '£9,000/yr', language: 'English' },
      { name: 'Undergraduate (BSc)', duration: '3 years', tuition: '£14,000/yr', language: 'English' },
      { name: 'Postgraduate (MSc)', duration: '1 year', tuition: '£16,000/yr', language: 'English' },
    ],
    requirements: [
      'Secondary school certificate (A-level equivalent)',
      'IELTS 6.0–6.5 (or equivalent)',
      'Valid passport',
      'Financial proof for visa',
    ],
    careerOpportunities: [
      'Two-year graduate work visa in the UK',
      'Access to global top-employer networks',
      'Pathway to skilled worker visa',
    ],
    rating: 4.7,
    students: 2000,
    featured: false,
  },
];

export const getUniversity = (id: string) => universities.find((u) => u.id === id);
