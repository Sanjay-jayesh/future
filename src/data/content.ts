export interface University {
  id: string;
  name: string;
  location: string;
  country: string;
  image: string;
  programs: string[];
  tuition: string;
  rating: number;
  featured: boolean;
  description: string;
  highlights: string[];
  established: string;
  students: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  origin: string;
  university: string;
  course: string;
  country: string;
  image: string;
  year: string;
  quote: string;
  rating: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const universities: University[] = [
  {
    id: 'tbilisi-state',
    name: 'Tbilisi State University',
    location: 'Tbilisi',
    country: 'Georgia',
    image: 'https://images.pexels.com/photos/35314982/pexels-photo-35314982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    programs: ['Medicine (MD)', 'Dentistry', 'Computer Science', 'Business Administration', 'International Relations'],
    tuition: '$4,500 – $6,000 / year',
    rating: 4.7,
    featured: true,
    description: 'Founded in 1918, Tbilisi State University is the oldest and most prestigious university in Georgia, offering globally recognised degrees across multiple faculties.',
    highlights: ['WHO recognised medical program', 'English-taught courses', '100+ years of academic excellence', 'Erasmus+ exchange partners'],
    established: '1918',
    students: '22,000+',
  },
  {
    id: 'tbilisi-medical',
    name: 'Tbilisi State Medical University',
    location: 'Tbilisi',
    country: 'Georgia',
    image: 'https://images.pexels.com/photos/11932106/pexels-photo-11932106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    programs: ['Medicine (MD)', 'Dentistry', 'Pharmacy', 'Nursing', 'Public Health'],
    tuition: '$5,000 – $7,500 / year',
    rating: 4.8,
    featured: true,
    description: 'The leading medical university in Georgia, with WHO, ECFMG, and NMC recognition. Graduates practise medicine worldwide including the UK, USA, and India.',
    highlights: ['WHO & ECFMG recognised', 'USMLE & PLAB eligible', 'Clinical rotations in EU', 'NMC approved for India'],
    established: '1922',
    students: '7,000+',
  },
  {
    id: 'georgian-tech',
    name: 'Georgian Technical University',
    location: 'Tbilisi',
    country: 'Georgia',
    image: 'https://images.pexels.com/photos/27907978/pexels-photo-27907978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    programs: ['Civil Engineering', 'Computer Engineering', 'Architecture', 'Mechanical Engineering', 'IT'],
    tuition: '$3,500 – $5,000 / year',
    rating: 4.5,
    featured: true,
    description: 'Georgia\'s premier engineering and technology institution, with strong industry partnerships and modern research facilities.',
    highlights: ['ABET-style curriculum', 'Industry internship programs', 'Modern engineering labs', 'English-medium IT programs'],
    established: '1922',
    students: '18,000+',
  },
  {
    id: 'cau',
    name: 'Caucasus University',
    location: 'Tbilisi',
    country: 'Georgia',
    image: 'https://images.pexels.com/photos/2793444/pexels-photo-2793444.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    programs: ['Business Administration', 'Economics', 'Law', 'International Relations', 'Tourism'],
    tuition: '$4,000 – $5,500 / year',
    rating: 4.4,
    featured: false,
    description: 'A leading private university known for its business school, international partnerships, and modern campus in the heart of Tbilisi.',
    highlights: ['AACSB-style business school', 'Dual degree options', '200+ international partners', 'Modern campus facilities'],
    established: '2004',
    students: '5,000+',
  },
  {
    id: 'samarkand-state',
    name: 'Samarkand State University',
    location: 'Samarkand',
    country: 'Uzbekistan',
    image: 'https://images.pexels.com/photos/19439173/pexels-photo-19439173.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    programs: ['Medicine', 'Information Technology', 'International Relations', 'Linguistics', 'History'],
    tuition: '$2,500 – $4,000 / year',
    rating: 4.3,
    featured: false,
    description: 'One of Central Asia\'s oldest universities, offering affordable, high-quality education in the historic city of Samarkand.',
    highlights: ['Very affordable tuition', 'Rich cultural heritage', 'Growing English programs', 'Central Asia focus'],
    established: '1927',
    students: '12,000+',
  },
  {
    id: 'westminster-tbilisi',
    name: 'University of Westminster (Tbilisi)',
    location: 'Tbilisi',
    country: 'Georgia',
    image: 'https://images.pexels.com/photos/36770755/pexels-photo-36770755.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    programs: ['Business Management', 'Media & Communications', 'Psychology', 'Computer Science', 'Law'],
    tuition: '$5,500 – $8,000 / year',
    rating: 4.6,
    featured: true,
    description: 'A branch campus of the prestigious UK university, offering British-standard degrees in Tbilisi with the option to transfer to London.',
    highlights: ['UK-accredited degrees', 'Transfer to London campus', 'British teaching standards', 'Global alumni network'],
    established: '2014',
    students: '3,000+',
  },
];

export const successStories: SuccessStory[] = [
  {
    id: 'story1',
    name: 'Priya Sharma',
    origin: 'Mumbai, India',
    university: 'Tbilisi State Medical University',
    course: 'Medicine (MD)',
    country: 'Georgia',
    image: 'https://images.pexels.com/photos/13771314/pexels-photo-13771314.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2024',
    quote: 'Future Factory made the entire process seamless — from application to visa to landing in Tbilisi. I\'m now in my third year and have already done clinical rotations at a top hospital. The team stayed in touch throughout.',
    rating: 5,
  },
  {
    id: 'story2',
    name: 'David Okoye',
    origin: 'Lagos, Nigeria',
    university: 'Georgian Technical University',
    course: 'Computer Engineering',
    country: 'Georgia',
    image: 'https://images.pexels.com/photos/27670041/pexels-photo-27670041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2023',
    quote: 'I was nervous about studying abroad, but Future Factory handled everything. They found me a scholarship, sorted my visa, and even helped me find an apartment. I couldn\'t have done it without them.',
    rating: 5,
  },
  {
    id: 'story3',
    name: 'Ananya Patel',
    origin: 'Ahmedabad, India',
    university: 'Caucasus University',
    course: 'Business Administration',
    country: 'Georgia',
    image: 'https://images.pexels.com/photos/5538605/pexels-photo-5538605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2024',
    quote: 'The consultation was eye-opening. They understood my goals and matched me with the right program. The accommodation support was fantastic — I had a place to live before I even landed.',
    rating: 5,
  },
  {
    id: 'story4',
    name: 'Michael Chen',
    origin: 'Singapore',
    university: 'University of Westminster (Tbilisi)',
    course: 'Media & Communications',
    country: 'Georgia',
    image: 'https://images.pexels.com/photos/16476674/pexels-photo-16476674.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2023',
    quote: 'Getting a UK-accredited degree while studying in Georgia was the perfect balance. Future Factory guided me through the transfer option, and I spent a year in London. Life-changing.',
    rating: 5,
  },
  {
    id: 'story5',
    name: 'Fatima Al-Zahra',
    origin: 'Dubai, UAE',
    university: 'Tbilisi State University',
    course: 'Dentistry',
    country: 'Georgia',
    image: 'https://images.pexels.com/photos/1310461/pexels-photo-1310461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2024',
    quote: 'The dentistry program at TSU is exceptional. Future Factory\'s team was always available on WhatsApp whenever I had questions. They truly care about each student\'s journey.',
    rating: 5,
  },
  {
    id: 'story6',
    name: 'James Mwangi',
    origin: 'Nairobi, Kenya',
    university: 'Samarkand State University',
    course: 'Information Technology',
    country: 'Uzbekistan',
    image: 'https://images.pexels.com/photos/6140710/pexels-photo-6140710.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2023',
    quote: 'Affordable tuition, rich culture, and great education. Future Factory opened my eyes to Uzbekistan as a study destination. The whole experience has been incredible.',
    rating: 5,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh Kumar',
    role: 'Parent of medical student',
    text: 'As a parent, I was worried about sending my daughter abroad. The Future Factory team gave us complete transparency and support. She\'s thriving in Tbilisi now.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/6140710/pexels-photo-6140710.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    id: 't2',
    name: 'Sarah Williams',
    role: 'MBBS Graduate, 2023',
    text: 'From application to graduation, they were with me every step. Now I\'m preparing for the USMLE and couldn\'t be more grateful for the foundation they helped me build.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/13771314/pexels-photo-13771314.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    id: 't3',
    name: 'Aisha Mohammed',
    role: 'Engineering Student',
    text: 'The visa process seemed impossible until Future Factory took over. They made it stress-free and I had my visa in three weeks. Highly recommend their services.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/5538605/pexels-photo-5538605.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog1',
    title: 'Complete Guide to the Georgia Student Visa Process (2025)',
    excerpt: 'Everything you need to know about obtaining your Georgian student visa — documents required, processing times, and tips for a smooth application.',
    category: 'Visa Guides',
    date: 'Aug 15, 2025',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/8061949/pexels-photo-8061949.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    author: 'Future Factory Team',
  },
  {
    id: 'blog2',
    title: 'Scholarship Opportunities for International Students in Georgia',
    excerpt: 'Discover the scholarships, grants, and financial aid options available to international students studying at Georgian universities.',
    category: 'Scholarships',
    date: 'Aug 10, 2025',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/7972324/pexels-photo-7972324.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    author: 'Future Factory Team',
  },
  {
    id: 'blog3',
    title: 'Cost of Living in Tbilisi: A Student\'s Budget Guide',
    excerpt: 'A detailed breakdown of monthly expenses in Tbilisi — accommodation, food, transport, and entertainment — to help you plan your budget.',
    category: 'Student Life',
    date: 'Aug 5, 2025',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/7539985/pexels-photo-7539985.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    author: 'Future Factory Team',
  },
  {
    id: 'blog4',
    title: 'Study Medicine in Georgia: Is It Right for You?',
    excerpt: 'A deep dive into studying MBBS/MD in Georgia — program quality, global recognition, costs, and career prospects after graduation.',
    category: 'Study Programs',
    date: 'Jul 28, 2025',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/32662455/pexels-photo-32662455.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    author: 'Future Factory Team',
  },
  {
    id: 'blog5',
    title: 'Student Accommodation in Georgia: Dorms vs Apartments',
    excerpt: 'Comparing university dormitories and private apartments in Georgia — pros, cons, costs, and how Future Factory helps you find the right place.',
    category: 'Accommodation',
    date: 'Jul 20, 2025',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/30094324/pexels-photo-30094324.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    author: 'Future Factory Team',
  },
  {
    id: 'blog6',
    title: 'Packing Checklist for Your Move to Georgia',
    excerpt: 'The ultimate packing list for international students moving to Georgia — what to bring, what to leave, and what you can buy locally.',
    category: 'Student Life',
    date: 'Jul 15, 2025',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/16562841/pexels-photo-16562841.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    author: 'Future Factory Team',
  },
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Do I need to know Georgian to study in Georgia?',
    answer: 'No. Most programs we recommend are taught entirely in English. While learning basic Georgian will help with daily life, it is not required for your studies. Many universities offer free Georgian language classes for international students.',
    category: 'General',
  },
  {
    id: 'faq2',
    question: 'Are Georgian medical degrees recognised internationally?',
    answer: 'Yes. Georgian medical universities are recognised by the World Health Organization (WHO), the Educational Commission for Foreign Medical Graduates (ECFMG), and the National Medical Commission (NMC) of India. Graduates are eligible to practise in the UK (PLAB), USA (USMLE), India (NEXT/FMGE), and many other countries.',
    category: 'Medical Studies',
  },
  {
    id: 'faq3',
    question: 'How much does it cost to study in Georgia?',
    answer: 'Tuition fees range from $2,500 to $8,000 per year depending on the university and program. Living costs in Georgia are very affordable — approximately $300–$500 per month for accommodation, food, and transport combined.',
    category: 'Fees & Costs',
  },
  {
    id: 'faq4',
    question: 'What is the visa process for studying in Georgia?',
    answer: 'International students need a student visa (D3) or residence permit. The process involves submitting your university acceptance letter, passport, financial proof, and other documents. Future Factory handles the entire visa process for you, and it typically takes 2–4 weeks.',
    category: 'Visa',
  },
  {
    id: 'faq5',
    question: 'Can I work while studying in Georgia?',
    answer: 'International students on a student residence permit can work part-time in Georgia. However, we recommend focusing on your studies, especially in the first year. Some universities offer on-campus work opportunities and paid internships.',
    category: 'General',
  },
  {
    id: 'faq6',
    question: 'Does Future Factory charge students for its services?',
    answer: 'Our core consultation services are free for students. We earn through partnerships with universities, not by charging students. You get expert guidance, application support, visa assistance, and accommodation help at no cost to you.',
    category: 'Our Services',
  },
  {
    id: 'faq7',
    question: 'What countries does Future Factory help students study in?',
    answer: 'We currently specialise in Georgia and Uzbekistan, with expanding partnerships across Europe and the UK. We also help students explore transfer pathways to UK universities and EU institutions.',
    category: 'General',
  },
  {
    id: 'faq8',
    question: 'How early should I start the application process?',
    answer: 'We recommend starting 3–6 months before your intended intake. Georgian universities have two main intakes: Fall (September) and Spring (February). Starting early gives you ample time for applications, visa processing, and accommodation arrangements.',
    category: 'Admissions',
  },
];

export const stats = [
  { label: 'Students Placed', value: '2,500+', icon: 'users' },
  { label: 'Visa Success Rate', value: '98%', icon: 'check-circle' },
  { label: 'Partner Universities', value: '25+', icon: 'building' },
  { label: 'Countries Covered', value: '4', icon: 'globe' },
];

export const heroSlides = [
  {
    image: 'https://images.pexels.com/photos/7539985/pexels-photo-7539985.jpeg?auto=compress&cs=tinysrgb&w=1920',
    label: 'Georgia',
    sublabel: 'Study in the heart of the Caucasus',
  },
  {
    image: 'https://images.pexels.com/photos/19439173/pexels-photo-19439173.jpeg?auto=compress&cs=tinysrgb&w=1920',
    label: 'Uzbekistan',
    sublabel: 'Affordable education in Central Asia',
  },
  {
    image: 'https://images.pexels.com/photos/14944496/pexels-photo-14944496.jpeg?auto=compress&cs=tinysrgb&w=1920',
    label: 'United Kingdom',
    sublabel: 'World-class British degrees',
  },
  {
    image: 'https://images.pexels.com/photos/36770755/pexels-photo-36770755.jpeg?auto=compress&cs=tinysrgb&w=1920',
    label: 'Europe',
    sublabel: 'Study across the European Union',
  },
];

export const WHY_GEORGIA_POINTS = [
  {
    icon: 'badge-check',
    title: 'Globally Recognised Degrees',
    description: 'Georgian universities are recognised by WHO, ECFMG, NMC, and other international bodies. Graduates practise worldwide.',
  },
  {
    icon: 'wallet',
    title: 'Affordable Tuition & Living',
    description: 'Tuition from $2,500/year and living costs of $300–$500/month make Georgia one of the most budget-friendly study destinations.',
  },
  {
    icon: 'languages',
    title: 'English-Taught Programs',
    description: 'No language barrier — most programs are taught entirely in English, with free Georgian classes available.',
  },
  {
    icon: 'file-check',
    title: 'Simple Visa Process',
    description: 'Straightforward student visa process with high approval rates. We handle the paperwork for you.',
  },
  {
    icon: 'home',
    title: 'Safe & Welcoming Environment',
    description: 'Georgia is one of the safest countries in the region, known for its hospitality and low crime rates.',
  },
  {
    icon: 'plane',
    title: 'Gateway to Europe',
    description: 'Strategic location between Europe and Asia, with easy travel access to EU countries and beyond.',
  },
];

export const ADMISSION_STEPS = [
  {
    step: '01',
    title: 'Free Consultation',
    description: 'Book a free session with our experts. We\'ll understand your goals and recommend the best universities and programs.',
  },
  {
    step: '02',
    title: 'University Selection',
    description: 'We shortlist universities based on your budget, field of study, and career goals. You choose your preferred option.',
  },
  {
    step: '03',
    title: 'Application & Documents',
    description: 'We handle your university application, prepare and translate all required documents, and submit on your behalf.',
  },
  {
    step: '04',
    title: 'Acceptance Letter',
    description: 'Receive your official acceptance letter from the university, typically within 2–3 weeks of application.',
  },
  {
    step: '05',
    title: 'Visa Processing',
    description: 'We guide you through the student visa process — document preparation, submission, and embassy follow-up.',
  },
  {
    step: '06',
    title: 'Travel & Settle In',
    description: 'We arrange your airport pickup, accommodation, and university registration. You\'re ready to start your journey.',
  },
];
