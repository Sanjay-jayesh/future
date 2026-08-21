export interface SeoPage {
  id: string;
  slug: string;
  title: string;
  headline: string;
  metaDescription: string;
  keyword: string;
  heroImage: string;
  intro: string;
  sections: { heading: string; body: string; points?: string[] }[];
  ctaText: string;
}

export const seoPages: SeoPage[] = [
  {
    id: 'study-in-georgia',
    slug: 'study-in-georgia',
    title: 'Study in Georgia — Complete Guide for International Students',
    headline: 'Study in Georgia',
    metaDescription:
      'Everything you need to study in Georgia — affordable tuition, globally recognised degrees, and full support from Future Factory. Free consultation available.',
    keyword: 'study in Georgia',
    heroImage:
      'https://images.pexels.com/photos/36314350/pexels-photo-36314350.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'Georgia has become one of the most popular destinations for international students seeking affordable, high-quality education in a safe and welcoming European environment. With tuition starting at $3,000 per year and degrees recognised worldwide, it is an excellent choice for medicine, engineering, and business studies.',
    sections: [
      {
        heading: 'Why choose Georgia for your studies?',
        body: 'Georgia offers a unique combination of affordability, safety, and academic quality that is hard to match. Here is why thousands of international students choose Georgia every year:',
        points: [
          'Globally recognised degrees — WHO, NMC, and ECFMG listed universities',
          'Affordable tuition — $3,000 to $7,000 per year',
          'Low cost of living — $300–$500 per month in Tbilisi',
          'English-taught programs in medicine, engineering, and business',
          'No IELTS required at most universities',
          'Safe, welcoming environment with a growing international community',
        ],
      },
      {
        heading: 'Popular programs in Georgia',
        body: 'Georgian universities offer a wide range of English-taught programs. The most popular fields among international students are:',
        points: [
          'Medicine (MD) — 6-year program at Tbilisi State Medical University',
          'Dentistry (DDS) — 5-year program with modern clinical facilities',
          'Computer Science and IT — 4-year programs at GTU and University of Georgia',
          'Business Administration — 4-year BBA with Erasmus+ exchange options',
          'Engineering — civil, electrical, and mechanical programs',
        ],
      },
      {
        heading: 'The admission process',
        body: 'Applying to a Georgian university is straightforward. We handle the entire process for you: university selection, document preparation, application submission, and follow-up. Most students receive an admission decision within 2–3 weeks.',
      },
      {
        heading: 'Student visa for Georgia',
        body: 'Once you have your admission letter, we manage your D3 student visa application. Processing takes 10–15 working days. We provide a complete document checklist, review every form, and book your embassy appointment. After arrival, we assist with your residence permit filing.',
      },
    ],
    ctaText: 'Book your free consultation',
  },
  {
    id: 'study-medicine-in-georgia',
    slug: 'study-medicine-in-georgia',
    title: 'Study Medicine in Georgia — MD Programs for International Students',
    headline: 'Study Medicine in Georgia',
    metaDescription:
      'Study medicine in Georgia with English-taught MD programs at WHO-recognised universities. Affordable tuition, no IELTS, and full visa support from Future Factory.',
    keyword: 'study medicine in Georgia',
    heroImage:
      'https://images.pexels.com/photos/32213405/pexels-photo-32213405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'Studying medicine in Georgia is one of the most cost-effective pathways to becoming a globally recognised doctor. Georgian medical universities offer 6-year English-taught MD programs that are listed with the WHO and recognised by the Medical Council of India, ECFMG, and medical councils across the Gulf and Europe.',
    sections: [
      {
        heading: 'Why study medicine in Georgia?',
        body: 'Georgian medical universities combine rigorous academic training with practical clinical exposure, all at a fraction of the cost of private medical colleges in India or the West.',
        points: [
          'WHO and NMC-recognised medical degrees',
          'English-taught 6-year MD program',
          'Tuition from $5,000–$7,000 per year',
          'No IELTS or entrance exams at most universities',
          'Clinical rotations in affiliated teaching hospitals',
          'Eligible for USMLE, PLAB, and FMGE licensing exams',
        ],
      },
      {
        heading: 'Top medical universities in Georgia',
        body: 'We partner with the most reputable medical universities, including Tbilisi State Medical University, one of the oldest medical schools in the Caucasus. All our partner universities have modern labs, international faculty, and strong clinical training networks.',
      },
      {
        heading: 'Career after graduation',
        body: 'Graduates of Georgian medical universities are practising medicine across India, the UK, the USA, the Gulf, and the EU. After passing the relevant licensing exam (FMGE, USMLE, or PLAB), you can apply for residency or medical practice in your chosen country. We advise you on exam preparation pathways throughout your studies.',
      },
      {
        heading: 'Admission requirements',
        body: 'To apply for an MD program in Georgia, you need a secondary school certificate with biology and chemistry and a minimum of 50% in science subjects. We handle the rest — document verification, application, visa, and accommodation.',
      },
    ],
    ctaText: 'Start your medical journey',
  },
  {
    id: 'study-dentistry-in-georgia',
    slug: 'study-dentistry-in-georgia',
    title: 'Study Dentistry in Georgia — DDS Programs for International Students',
    headline: 'Study Dentistry in Georgia',
    metaDescription:
      'Study dentistry in Georgia with 5-year English-taught DDS programs at recognised universities. Affordable tuition and full support from Future Factory.',
    keyword: 'study dentistry in Georgia',
    heroImage:
      'https://images.pexels.com/photos/30902113/pexels-photo-30902113.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'A dentistry degree from Georgia opens doors to dental practice worldwide. The 5-year English-taught DDS program combines theoretical foundations with extensive hands-on clinical training in modern dental facilities, all at an affordable cost.',
    sections: [
      {
        heading: 'Why study dentistry in Georgia?',
        body: 'Georgian dental schools offer a practical, clinically focused education that prepares you for licensing exams and dental practice in multiple countries.',
        points: [
          '5-year English-taught DDS program',
          'WHO-recognised dental degree',
          'Tuition from $5,000–$6,500 per year',
          'Modern dental clinics and simulation labs',
          'Hands-on patient treatment from year 3',
          'Recognised for dental licensing in India, the Gulf, and Europe',
        ],
      },
      {
        heading: 'Clinical training',
        body: 'From the third year onwards, students begin treating patients in university-affiliated dental clinics under faculty supervision. This early clinical exposure is a major advantage — graduates enter practice with real patient experience, not just theoretical knowledge.',
      },
      {
        heading: 'Career pathways',
        body: 'After graduation, you can pursue dental licensing in your home country or apply for postgraduate specialisation in Europe and the UK. Many of our graduates open private practices or join dental hospital networks. We advise on licensing requirements for your target country.',
      },
    ],
    ctaText: 'Apply for dentistry',
  },
  {
    id: 'study-engineering-in-georgia',
    slug: 'study-engineering-in-georgia',
    title: 'Study Engineering in Georgia — BSc Programs for International Students',
    headline: 'Study Engineering in Georgia',
    metaDescription:
      'Study engineering in Georgia with English-taught BSc programs in computer science, civil, and electrical engineering. Affordable tuition and full support.',
    keyword: 'study engineering in Georgia',
    heroImage:
      'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'Georgia is an increasingly popular destination for engineering students, offering English-taught BSc programs in computer science, civil engineering, electrical engineering, and architecture at a fraction of Western tuition costs — with strong industry connections and modern facilities.',
    sections: [
      {
        heading: 'Why study engineering in Georgia?',
        body: 'Georgian technical universities combine a strong theoretical foundation with practical, project-based learning and industry internships.',
        points: [
          'English-taught 4-year BSc programs',
          'Tuition from $3,500–$4,500 per year',
          'Modern labs and research centres',
          'Industry internship placements',
          'ECTS credits recognised across Europe',
          'Growing tech and startup ecosystem in Tbilisi',
        ],
      },
      {
        heading: 'Popular engineering fields',
        body: 'The most popular engineering programs among international students are computer science, civil engineering, electrical engineering, and architecture. Georgian Technical University is the leading institution, with a 100-year history of engineering education.',
      },
      {
        heading: 'Career after graduation',
        body: 'Engineering graduates from Georgian universities work across Europe, the Gulf, and South Asia. The ECTS credit system makes it easy to pursue a masters degree in the EU. Many of our CS graduates have secured remote roles with European tech companies while still studying.',
      },
    ],
    ctaText: 'Explore engineering programs',
  },
  {
    id: 'georgia-student-visa',
    slug: 'georgia-student-visa',
    title: 'Georgia Student Visa — Requirements, Process & Support',
    headline: 'Georgia Student Visa',
    metaDescription:
      'Complete guide to the Georgia student visa — documents, processing times, fees, and how Future Factory handles the entire process for you.',
    keyword: 'Georgia student visa',
    heroImage:
      'https://images.pexels.com/photos/33497885/pexels-photo-33497885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'The Georgian student visa (D3 category) is your gateway to studying in one of Europe most affordable and welcoming countries. We handle the entire visa process — from document checklist to embassy appointment — so you can focus on preparing for your studies.',
    sections: [
      {
        heading: 'Visa requirements',
        body: 'To apply for a Georgian student visa, you need the following documents. We provide a personalised checklist and review every document before submission:',
        points: [
          'Valid passport (6+ months validity)',
          'Official university invitation letter',
          'Completed visa application form',
          'Passport-size photographs',
          'Proof of financial means',
          'Medical insurance certificate',
          'HIV test certificate (for stays over 3 months)',
        ],
      },
      {
        heading: 'Processing time and fees',
        body: 'The D3 visa typically takes 10–15 working days to process. Single-entry visas cost approximately $60 and multiple-entry visas $90. We ensure your application is complete to avoid any delays.',
      },
      {
        heading: 'Common rejection reasons',
        body: 'Most visa rejections are due to incomplete documentation or insufficient proof of funds. We pre-screen every application to eliminate these risks — our visa success rate is 98%.',
      },
      {
        heading: 'Post-arrival residence permit',
        body: 'After arriving in Georgia, you must apply for a residence permit at the Public Service Hall within 45 days. We accompany you or provide step-by-step guidance so this is handled smoothly.',
      },
    ],
    ctaText: 'Get visa support',
  },
  {
    id: 'georgia-university-admissions',
    slug: 'georgia-university-admissions',
    title: 'Georgia University Admissions — How to Apply with Future Factory',
    headline: 'Georgia University Admissions',
    metaDescription:
      'Step-by-step guide to Georgia university admissions. We handle applications, documents, and follow-ups for medicine, engineering, and business programs.',
    keyword: 'Georgia university admissions',
    heroImage:
      'https://images.pexels.com/photos/7972324/pexels-photo-7972324.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'Applying to a Georgian university is simpler than you might think — but getting it right the first time saves you weeks of delay. We manage the entire admission process, from choosing the right university to receiving your official admission letter.',
    sections: [
      {
        heading: 'The admission process',
        body: 'We have streamlined the application process into five clear steps:',
        points: [
          'Free consultation — we understand your goals and budget',
          'University shortlisting — we recommend the best-fit programs',
          'Document preparation — we verify and translate if needed',
          'Application submission — we apply and follow up with the university',
          'Admission letter — you receive your official invitation letter',
        ],
      },
      {
        heading: 'Documents you need',
        body: 'The standard document set for Georgian university admissions includes your secondary school certificate, transcripts, passport copy, and photographs. Some programs require additional documents — we provide the exact list for your chosen university.',
      },
      {
        heading: 'Timeline',
        body: 'Most students receive an admission decision within 2–3 weeks of submitting a complete application. We recommend starting the process 3–4 months before your intended intake to allow time for visa processing.',
      },
    ],
    ctaText: 'Start your application',
  },
  {
    id: 'study-in-tbilisi',
    slug: 'study-in-tbilisi',
    title: 'Study in Tbilisi — Student Life in the Georgian Capital',
    headline: 'Study in Tbilisi',
    metaDescription:
      'Study in Tbilisi, the vibrant capital of Georgia. Affordable living, safe streets, and a growing international student community. Learn more with Future Factory.',
    keyword: 'study in Tbilisi',
    heroImage:
      'https://images.pexels.com/photos/19063133/pexels-photo-19063133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'Tbilisi is a city where ancient history meets modern energy. For international students, it offers an unbeatable combination of affordability, safety, and culture — all set against the backdrop of the Caucasus mountains.',
    sections: [
      {
        heading: 'A student-friendly capital',
        body: 'Tbilisi is compact, walkable, and well-connected by metro and bus. Most universities are within 20–30 minutes of popular student neighbourhoods like Vake, Saburtalo, and Vera.',
        points: [
          'Monthly transport pass: ~$15',
          'Average rent (shared): $120–$200/month',
          'Over 50 national cuisines available',
          'Growing startup and tech scene',
          'Mountains and ski resorts within 2 hours',
        ],
      },
      {
        heading: 'Culture and community',
        body: 'Tbilisi has a thriving cafe culture, a lively Old Town, music and film festivals year-round, and an increasingly international community. There are active Indian, African, and Middle Eastern student groups, as well as places of worship for all major religions.',
      },
      {
        heading: 'Safety',
        body: 'Georgia is one of the safest countries in the region. Students regularly walk home late at night without issue. The crime rate is low and the locals are known for their hospitality.',
      },
    ],
    ctaText: 'Plan your move to Tbilisi',
  },
  {
    id: 'study-in-georgia-for-indian-students',
    slug: 'study-in-georgia-for-indian-students',
    title: 'Study in Georgia for Indian Students — Complete Guide',
    headline: 'Study in Georgia for Indian Students',
    metaDescription:
      'A complete guide for Indian students to study in Georgia — NMC-recognised medical degrees, affordable fees, Indian food, and full support from Future Factory.',
    keyword: 'study in Georgia for Indian students',
    heroImage:
      'https://images.pexels.com/photos/34890727/pexels-photo-34890727.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'Georgia is one of the top destinations for Indian students seeking quality education abroad — especially in medicine, dentistry, and engineering. With NMC-compliant medical degrees, affordable fees, and a growing Indian community, it is a smart choice for Indian families.',
    sections: [
      {
        heading: 'Why Indian students choose Georgia',
        body: 'Georgia offers Indian students a combination that is hard to beat: NMC-recognised medical degrees, no IELTS requirement, affordable tuition, and a safe environment with Indian food and community readily available.',
        points: [
          'NMC-compliant MD programs (for FMGE/NExT eligibility)',
          'No IELTS or TOEFL required',
          'Tuition from $3,000–$7,000 per year',
          'Indian restaurants and grocery stores in Tbilisi',
          'Active Indian student community and cultural events',
          'Direct flights from Delhi and Mumbai to Tbilisi',
        ],
      },
      {
        heading: 'NMC compliance and FMGE',
        body: 'The National Medical Commission (NMC) requires that Indian students studying medicine abroad attend a university that offers a minimum 54-month MD program with 12 months of internship. Georgian medical universities meet these criteria. Graduates must pass the FMGE/NExT to practise in India — we advise on exam preparation throughout your studies.',
      },
      {
        heading: 'Financing your studies',
        body: 'Many Indian students fund their Georgia education through education loans. We provide all the documentation your bank needs — admission letters, fee structures, and cost-of-living estimates — to support your loan application. Some universities also offer merit scholarships for strong academic records.',
      },
      {
        heading: 'Indian life in Tbilisi',
        body: 'Tbilisi has several Indian restaurants, spice shops, and a Hindu temple. The Indian student community organises Diwali, Holi, and other cultural events. You will feel at home while experiencing a new culture.',
      },
    ],
    ctaText: 'Talk to an Indian student advisor',
  },
  {
    id: 'study-in-georgia-for-international-students',
    slug: 'study-in-georgia-for-international-students',
    title: 'Study in Georgia for International Students — Global Guide',
    headline: 'Study in Georgia for International Students',
    metaDescription:
      'A complete guide for international students to study in Georgia — programs, visas, costs, and full support from Future Factory wherever you are from.',
    keyword: 'study in Georgia for international students',
    heroImage:
      'https://images.pexels.com/photos/32998602/pexels-photo-32998602.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'Georgia welcomes thousands of international students each year from over 80 countries. Whether you are from India, Nigeria, the UAE, or anywhere else, Georgia offers an affordable, high-quality education in a safe and multicultural environment.',
    sections: [
      {
        heading: 'A global student community',
        body: 'Georgian universities have a diverse international student body. You will study alongside peers from South Asia, the Middle East, Africa, and Europe — a truly global classroom experience.',
        points: [
          'Students from 80+ countries',
          'English-taught programs across all major fields',
          'Multicultural campus life and events',
          'Affordable tuition and living costs',
          'Globally recognised degrees',
        ],
      },
      {
        heading: 'Visa support for all nationalities',
        body: 'We handle the student visa process for students from any country. Our team is experienced with the specific requirements of Georgian embassies across India, Africa, the Middle East, and Southeast Asia. We provide a tailored document checklist for your nationality.',
      },
      {
        heading: 'Post-arrival support',
        body: 'Our support does not end when you land. We assist with residence permits, SIM cards, bank accounts, and settling in. Our team in Tbilisi is available throughout your studies — you always have a local contact you can trust.',
      },
    ],
    ctaText: 'Start your journey',
  },
];

export const getSeoPage = (slug: string) => seoPages.find((p) => p.slug === slug);
