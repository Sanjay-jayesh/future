export const site = {
  name: 'Future Factory',
  tagline: 'Study in Georgia with Expert Guidance',
  description:
    'Future Factory is an international education consultancy helping students study in Georgia, Uzbekistan, Europe, and the UK — from university selection to visas, accommodation, and life abroad.',
  phone: '+995 555 12 34 56',
  phoneRaw: '+995555123456',
  whatsapp: '995555123456',
  email: 'hello@futurefactory.edu',
  address: '12 Vake Park, Tbilisi, Georgia',
  hours: 'Mon–Sat, 10:00–19:00 (GMT+4)',
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    linkedin: 'https://linkedin.com',
  },
};

export const countries = [
  {
    id: 'georgia',
    name: 'Georgia',
    flag: '🇬🇪',
    blurb:
      'Affordable tuition, globally recognised degrees, and a safe, welcoming environment in the heart of the Caucasus.',
    image:
      'https://images.pexels.com/photos/36314350/pexels-photo-36314350.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'uzbekistan',
    name: 'Uzbekistan',
    flag: '🇺🇿',
    blurb:
      'A rapidly growing higher-education hub with modern campuses and competitive medical and engineering programs.',
    image:
      'https://images.pexels.com/photos/32998602/pexels-photo-32998602.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'europe',
    name: 'Europe',
    flag: '🇪🇺',
    blurb:
      'Access world-class universities across the EU with English-taught programs and post-study work opportunities.',
    image:
      'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    blurb:
      'Study at prestigious UK institutions with globally respected qualifications and strong graduate prospects.',
    image:
      'https://images.pexels.com/photos/5554257/pexels-photo-5554257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
] as const;

export const stats = [
  { label: 'Students placed', value: '1,200+' },
  { label: 'Visa success rate', value: '98%' },
  { label: 'Partner universities', value: '40+' },
  { label: 'Countries served', value: '4' },
];

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Why Georgia', path: '/why-georgia' },
  { label: 'Universities', path: '/universities' },
  { label: 'Courses', path: '/courses' },
  { label: 'Admissions', path: '/admission-process' },
  { label: 'Visa', path: '/visa-assistance' },
  { label: 'Accommodation', path: '/accommodation' },
  { label: 'Student Life', path: '/student-life' },
  { label: 'Success Stories', path: '/success-stories' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const faqs = [
  {
    q: 'Do I need IELTS or TOEFL to study in Georgia?',
    a: 'Most Georgian universities do not require IELTS or TOEFL for admission. Programs are taught in English, and some universities conduct a simple online interview instead. We confirm the exact requirements for your chosen university during your free consultation.',
  },
  {
    q: 'How much does it cost to study in Georgia?',
    a: 'Tuition fees typically range from $3,000 to $7,000 per year depending on the university and program. Living costs in Tbilisi are affordable — around $300–$500 per month including accommodation, food, and transport.',
  },
  {
    q: 'Is a Georgian medical degree recognised internationally?',
    a: 'Yes. Georgian medical universities are listed in the World Directory of Medical Schools and recognised by the Medical Council of India (MCI/NMC), WHO, and ECFMG, making graduates eligible to practise in many countries.',
  },
  {
    q: 'How long does the visa process take?',
    a: 'A Georgian student visa usually takes 10–15 working days once all documents are submitted. We handle the complete application and provide a document checklist so there are no delays.',
  },
  {
    q: 'Can I work while studying in Georgia?',
    a: 'International students can work part-time in Georgia. Many students take up internships or freelance work. We advise on the legal requirements and help you understand your options.',
  },
  {
    q: 'Do you provide accommodation support?',
    a: 'Yes. We arrange university hostels and private apartments before you arrive, so you have a confirmed place to stay from day one. Our team in Tbilisi inspects every property.',
  },
  {
    q: 'Which countries do you help students apply to?',
    a: 'We currently focus on Georgia, Uzbekistan, Europe, and the United Kingdom. Each destination has dedicated support for university selection, applications, visas, and post-arrival services.',
  },
  {
    q: 'How much do your consultancy services cost?',
    a: 'Your first consultation is completely free. Our application and visa support packages are transparent and tailored to your destination — we share full pricing during your consultation with no hidden fees.',
  },
];
