export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'Visa Guides' | 'Scholarships' | 'Cost of Living' | 'Student Life' | 'Admissions' | 'Career';
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'georgia-student-visa-guide-2024',
    title: 'The Complete Georgia Student Visa Guide (2024)',
    excerpt:
      'Everything you need to know about the Georgian student visa — required documents, processing times, fees, and how to avoid common rejection reasons.',
    category: 'Visa Guides',
    date: '2024-08-15',
    readTime: '8 min read',
    image:
      'https://images.pexels.com/photos/33497885/pexels-photo-33497885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content: `## Who needs a student visa for Georgia?

If you are not a Georgian citizen and plan to study at a recognised university in Georgia for longer than 90 days, you need a **D3 student visa** and a subsequent residence permit. Citizens of many countries — including India, Nigeria, and the UAE — must apply at a Georgian embassy or consulate before travel.

## Required documents

- Valid passport (at least 6 months beyond your intended stay)
- University admission letter (official invitation)
- Completed visa application form
- Passport-size photographs
- Proof of financial means (bank statement)
- Medical insurance certificate
- HIV test certificate (for stays over 3 months)

## Processing time and fees

A D3 visa typically takes **10–15 working days** to process. The fee is approximately $60 for a single-entry visa and $90 for a multiple-entry visa. Expedited processing is available at some embassies for an additional fee.

## Common rejection reasons — and how to avoid them

1. **Incomplete documentation** — always cross-check with our checklist before submitting.
2. **Insufficient funds** — your bank statement should clearly cover tuition and living costs.
3. **Unclear admission letter** — we ensure your invitation letter meets the embassy's format requirements.

## After you arrive

Once in Georgia, you must apply for a **residence permit** at the Public Service Hall within 45 days. We assist with this process as part of our visa support package — you are never left to figure it out alone.

## How Future Factory helps

We handle the entire visa process end-to-end: document checklist, application review, embassy appointment booking, and post-arrival residence permit filing. Your job is to gather the basics — ours is to make sure nothing is missed.`,
  },
  {
    id: 'scholarships-for-studying-in-georgia',
    title: 'Scholarships and Funding Options for Studying in Georgia',
    excerpt:
      'Tuition in Georgia is already affordable — but there are additional scholarships and funding routes that can lower your costs further. Here is what is available.',
    category: 'Scholarships',
    date: '2024-07-28',
    readTime: '6 min read',
    image:
      'https://images.pexels.com/photos/8106623/pexels-photo-8106623.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content: `## Why Georgia is already budget-friendly

Annual tuition at top Georgian universities ranges from **$3,000 to $7,000**, and monthly living costs in Tbilisi are around $300–$500. For many families, this is achievable without a scholarship — but every reduction helps.

## University merit scholarships

Several Georgian universities offer **merit-based tuition discounts** of 10–30% for students with strong academic records. These are typically assessed during the application process — we help you present your transcript in the strongest way.

## Government of Georgia scholarships

The Georgian government offers a limited number of scholarships for international students through bilateral agreements. Eligibility depends on your country of origin and field of study.

## Erasmus+ and exchange programs

If you are enrolled at a Georgian university that participates in Erasmus+, you may be eligible for a funded semester abroad at a European partner university. The University of Georgia and Ilia State University both have active Erasmus+ partnerships.

## Education loans from your home country

Many of our students from India and Nigeria use education loans to fund their studies. We provide the documentation your bank needs — admission letters, fee structures, and cost-of-living estimates — to support your loan application.

## Our advice

Apply early. Scholarship deadlines are often **2–3 months before the standard admission deadline**. During your free consultation, we identify every funding route you are eligible for.`,
  },
  {
    id: 'cost-of-living-in-tbilisi',
    title: 'Cost of Living in Tbilisi: A Realistic Monthly Budget',
    excerpt:
      'How much does it actually cost to live as a student in Tbilisi? We break down rent, food, transport, and lifestyle costs with real numbers.',
    category: 'Cost of Living',
    date: '2024-06-10',
    readTime: '7 min read',
    image:
      'https://images.pexels.com/photos/6605240/pexels-photo-6605240.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content: `## Overview

Tbilisi is one of the most affordable European capitals for international students. A comfortable student lifestyle costs **$300–$500 per month**, excluding tuition. Here is the breakdown.

## Accommodation — $100–$250/month

- **University hostel**: $80–$150/month (shared room)
- **Shared private apartment**: $120–$200/month per person
- **Studio apartment**: $250–$350/month

We inspect and arrange all accommodation before you arrive, so you know exactly what you are getting.

## Food — $100–$150/month

Groceries from local markets are inexpensive. A weekly shop at the Carrefour or Agrohub costs around $25–$35. Eating out is affordable too — a khachapuri and coffee at a local cafe is about $4–$6.

## Transport — $15–$25/month

A monthly MetroBus pass costs approximately $15 and covers the entire city. Taxis (via Bolt or Yandex) start at around $1.50 per ride.

## Utilities and internet — $30–$50/month

This includes electricity, water, heating (in winter), and high-speed home internet. Most shared apartments split this between housemates.

## Lifestyle and extras — $50–$100/month

Gym memberships ($25–$40/month), cinema tickets ($5), weekend trips to the mountains, and mobile data ($10/month) all add up to a modest, enjoyable lifestyle.

## Total realistic budget

| Category | Monthly cost |
| --- | --- |
| Accommodation | $150 |
| Food | $120 |
| Transport | $20 |
| Utilities | $40 |
| Lifestyle | $70 |
| **Total** | **$400** |

This is a comfortable, not a bare-minimum, budget. Many of our students live well on less.`,
  },
  {
    id: 'student-accommodation-in-georgia',
    title: 'Student Accommodation in Georgia: Hostels vs Private Apartments',
    excerpt:
      'Should you choose a university hostel or a private apartment? We compare costs, comfort, and convenience to help you decide.',
    category: 'Student Life',
    date: '2024-05-22',
    readTime: '5 min read',
    image:
      'https://images.pexels.com/photos/4134782/pexels-photo-4134782.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content: `## University hostels

Hostels are the most affordable option, costing $80–$150 per month for a shared room. They are usually located on or near campus, which means a short walk to class. The trade-off is less privacy and shared bathrooms.

**Best for**: First-year students who want to meet people and keep costs low.

## Shared private apartments

Renting a 2–3 bedroom apartment with other students costs $120–$200 per person per month. You get your own room, a shared kitchen, and a bathroom. This is the most popular choice among our students.

**Best for**: Students who value privacy and independence but still want a social setup.

## Studio apartments

A private studio costs $250–$350 per month. This gives you complete independence — your own kitchen, bathroom, and living space.

**Best for**: Postgraduate students or those who prefer to live alone.

## How we help

We arrange your accommodation **before you arrive in Georgia**. Our team in Tbilisi inspects every property, checks the lease, and confirms the location is safe and convenient. You will have photos and a confirmed address before you board your flight — no last-minute scrambles.

## What to bring

Georgia has cold winters and warm summers. Pack for both. We provide a full packing checklist during your pre-departure briefing.`,
  },
  {
    id: 'life-in-tbilisi-student-guide',
    title: 'Life in Tbilisi: A Student Guide to the City',
    excerpt:
      'From the Old Town to the mountains, Tbilisi is a city that surprises you. Here is what to expect as an international student living in the Georgian capital.',
    category: 'Student Life',
    date: '2024-04-18',
    readTime: '6 min read',
    image:
      'https://images.pexels.com/photos/32998602/pexels-photo-32998602.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content: `## A city between Europe and Asia

Tbilisi sits at the crossroads of Europe and Asia, and you feel it everywhere — in the food, the architecture, the languages on the street. It is a city where a 19th-century balcony sits next to a glass bridge, and where khinkali and flat whites coexist happily.

## Getting around

The city has a clean, cheap metro and bus network. A monthly pass costs about $15. Bolt and Yandex taxis are everywhere and affordable. Most universities are within 20–30 minutes of central neighbourhoods.

## Where students live

Popular student areas include **Vake**, **Saburtalo**, and **Vera** — all safe, well-connected, and full of cafes, gyms, and grocery stores. We help you choose the right neighbourhood based on your campus.

## Food and social life

Georgian food is legendary — khachapuri, khinkali, lobio, and churchkhela are student staples. International cuisine is widely available too. Cafe culture is strong: a coffee and study session at a Vake cafe is a weekly ritual for most students.

## Weekend escapes

Tbilisi is surrounded by mountains. In winter, **Gudauri** offers affordable skiing. In summer, **Kazbegi** and **Sighnaghi** make perfect day trips. The Black Sea coast at Batumi is a 5-hour train ride away.

## Safety

Georgia is one of the safest countries in the region. Violent crime is rare and students regularly walk home late at night without issue. The locals are warm and helpful, even if you do not speak Georgian.

## Community

There is a growing international student community in Tbilisi, with active Indian, African, and Middle Eastern student groups. You will find cultural events, festivals, and places of worship for major religions. You are never far from a community that feels like home.`,
  },
  {
    id: 'packing-checklist-for-georgia',
    title: 'The Ultimate Packing Checklist for Studying in Georgia',
    excerpt:
      'Not sure what to pack for your move to Georgia? We have compiled a complete checklist based on what our students actually use.',
    category: 'Student Life',
    date: '2024-03-05',
    readTime: '4 min read',
    image:
      'https://images.pexels.com/photos/8146330/pexels-photo-8146330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content: `## Documents (in your carry-on)

- Passport with student visa
- University admission letter
- Original academic certificates and transcripts
- Passport-size photographs (at least 12)
- Medical insurance documents
- HIV test certificate
- Cash for the first week ($200–$300)

## Clothing

Georgia has four distinct seasons. Winters can drop to -5°C and summers reach 35°C.

- Warm winter jacket and thermals
- Sweaters and hoodies
- Light summer clothing
- Formal outfit for university events
- Comfortable walking shoes and boots
- Traditional outfit from home (for cultural events)

## Electronics

- Laptop and charger
- Universal power adapter (Georgia uses Type C/F sockets, 220V)
- Power bank
- Phone (unlocked) and charger
- Basic headphones

## Toiletries and medical

- Prescription medications (with doctor's note)
- Basic first-aid kit
- Your preferred skincare products (some brands may be hard to find)

## What NOT to pack

- Kitchen utensils — easily and cheaply available in Tbilisi
- Bedding — usually provided or inexpensive to buy locally
- Heavy textbooks — most are digital or available at the university library
- Too many clothes — local shopping is affordable

## Our pre-departure briefing

Before you fly, we schedule a pre-departure call to walk you through this checklist, answer your questions, and make sure you are fully prepared for your new life in Georgia.`,
  },
];

export const getBlogPost = (id: string) => blogPosts.find((p) => p.id === id);
