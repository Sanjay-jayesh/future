export interface StudentStory {
  id: string;
  name: string;
  origin: string;
  university: string;
  course: string;
  country: 'Georgia' | 'Uzbekistan' | 'Europe' | 'UK';
  image: string;
  year: string;
  quote: string;
  story: string;
}

export const studentStories: StudentStory[] = [
  {
    id: 'ananya-sharma',
    name: 'Ananya Sharma',
    origin: 'Mumbai, India',
    university: 'Tbilisi State Medical University',
    course: 'Doctor of Medicine (MD)',
    country: 'Georgia',
    image:
      'https://images.pexels.com/photos/6311668/pexels-photo-6311668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2024',
    quote: 'Future Factory made the whole process feel effortless — from application to landing in Tbilisi.',
    story:
      'I dreamed of studying medicine abroad but was overwhelmed by the paperwork. The team at Future Factory guided me at every step — university selection, document verification, visa filing, and even picking me up from the airport. Today I am in my second year at TSMU and I could not be happier. The English-taught program is excellent and the cost of living is very manageable for my family.',
  },
  {
    id: 'rahul-patel',
    name: 'Rahul Patel',
    origin: 'Ahmedabad, India',
    university: 'Georgian Technical University',
    course: 'Computer Science',
    country: 'Georgia',
    image:
      'https://images.pexels.com/photos/11091224/pexels-photo-11091224.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2023',
    quote: 'They helped me choose the right engineering program and sorted my visa in two weeks.',
    story:
      'I wanted to study computer science in an affordable, safe country. Future Factory recommended GTU and walked me through the entire admission process. The visa was approved in just two weeks. The labs here are modern and I have already landed a remote internship with a European tech company. The accommodation team found me a great shared apartment near campus.',
  },
  {
    id: 'fatima-naser',
    name: 'Fatima Naser',
    origin: 'Dubai, UAE',
    university: 'University of Georgia',
    course: 'Business Administration',
    country: 'Georgia',
    image:
      'https://images.pexels.com/photos/31470506/pexels-photo-31470506.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2024',
    quote: 'I felt supported from day one. Tbilisi is vibrant, safe, and full of opportunity.',
    story:
      'Coming from Dubai, I wanted a European education experience that was affordable but still high quality. Future Factory introduced me to the University of Georgia and helped me secure an Erasmus+ exchange semester in Poland. The city of Tbilisi is incredibly welcoming — great food, friendly people, and a growing startup scene where I now intern part-time.',
  },
  {
    id: 'david-okafor',
    name: 'David Okafor',
    origin: 'Lagos, Nigeria',
    university: 'Tashkent Medical Academy',
    course: 'Doctor of Medicine (MD)',
    country: 'Uzbekistan',
    image:
      'https://images.pexels.com/photos/38165826/pexels-photo-38165826.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2023',
    quote: 'Affordable tuition and a WHO-recognised degree — exactly what I was looking for.',
    story:
      'Studying medicine in Nigeria was competitive and expensive. Future Factory showed me an alternative path in Uzbekistan with very reasonable fees and a WHO-recognised degree. The team handled my documents and visa smoothly. The campus is modern and my professors are supportive. I plan to practise in the UK after graduation and Future Factory is already advising me on that journey.',
  },
  {
    id: 'priya-iyer',
    name: 'Priya Iyer',
    origin: 'Chennai, India',
    university: 'Tbilisi State Medical University',
    course: 'Dentistry (DDS)',
    country: 'Georgia',
    image:
      'https://images.pexels.com/photos/33222686/pexels-photo-33222686.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2024',
    quote: 'From my first consultation to my first day of class, I never felt alone in the process.',
    story:
      'I was nervous about studying dentistry abroad, but Future Factory paired me with a mentor who had gone through the same program. They helped me compare universities, understand the fee structure, and prepare for my visa interview. The dental clinics at TSMU are well-equipped and I get hands-on practice from the third year. My family back home is relieved that I am safe and thriving.',
  },
  {
    id: 'arjun-mehta',
    name: 'Arjun Mehta',
    origin: 'Delhi, India',
    university: 'UK Partner Universities',
    course: 'MSc Data Science',
    country: 'UK',
    image:
      'https://images.pexels.com/photos/7625292/pexels-photo-7625292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    year: '2023',
    quote: 'They made the UK application and Student Visa process completely stress-free.',
    story:
      'I wanted to do my masters in the UK but the visa process felt daunting. Future Factory helped me shortlist universities, write a strong statement of purpose, and manage my CAS letter. I am now studying at a top-30 UK university and have a part-time job on campus. The two-year graduate visa gives me time to build my career here. I cannot thank the team enough.',
  },
];

export const getStory = (id: string) => studentStories.find((s) => s.id === id);
