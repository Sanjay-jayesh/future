import { CheckCircle2, Home as HomeIcon, Building, BedDouble, ShieldCheck, MapPin } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';
import { EnquiryForm } from '@/components/EnquiryForm';

export function AccommodationPage() {
    return (
        <>
            <PageHero
                eyebrow="Accommodation Support"
                title="A confirmed place to stay before you land"
                subtitle="We arrange university hostels and private apartments before you arrive — inspected, safe, and close to campus. You will have a confirmed address before you board your flight."
                image="https://images.pexels.com/photos/8146330/pexels-photo-8146330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Accommodation' }]}
            />

            {/* Options */}
            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="mb-12 text-center">
                        <span className="section-eyebrow">Your options</span>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                            Three accommodation types
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
                            Whether you want the social life of a hostel or the privacy of your own apartment, we have an option that
                            fits your budget and lifestyle.
                        </p>
                    </Reveal>
                    <div className="grid gap-6 lg:grid-cols-3">
                        {accommodationOptions.map((opt, i) => (
                            <Reveal key={opt.title} delay={i * 100}>
                                <div className={`card h-full p-8 ${opt.popular ? 'ring-2 ring-brand-500' : ''}`}>
                                    {opt.popular && (
                                        <span className="mb-4 inline-block rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white">
                                            Most popular
                                        </span>
                                    )}
                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                                        <opt.icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">{opt.title}</h3>
                                    <div className="mt-2 text-2xl font-bold text-brand-700">{opt.price}</div>
                                    <p className="mt-3 text-sm text-slate-500">{opt.desc}</p>
                                    <ul className="mt-5 space-y-2">
                                        {opt.features.map((f) => (
                                            <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* How we help */}
            <section className="bg-slate-50 py-20 lg:py-28">
                <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
                    <Reveal>
                        <span className="section-eyebrow">Our process</span>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                            How we arrange your accommodation
                        </h2>
                        <p className="mt-4 text-slate-600">
                            We do not just give you a list of addresses. Our team in Tbilisi physically inspects every property,
                            checks the lease, and confirms the location is safe and convenient — before you commit.
                        </p>
                        <div className="mt-8 space-y-4">
                            {processSteps.map((s, i) => (
                                <div key={s.title} className="flex items-start gap-4">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">{s.title}</h3>
                                        <p className="mt-0.5 text-sm text-slate-500">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={150}>
                        <div className="overflow-hidden rounded-3xl shadow-xl">
                            <img
                                src="https://images.pexels.com/photos/7587828/pexels-photo-7587828.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                                alt="Modern student apartment"
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Popular areas */}
            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="mb-12 text-center">
                        <span className="section-eyebrow">Where students live</span>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                            Popular student areas in Tbilisi
                        </h2>
                    </Reveal>
                    <div className="grid gap-6 sm:grid-cols-3">
                        {areas.map((a, i) => (
                            <Reveal key={a.name} delay={i * 100}>
                                <div className="card p-6">
                                    <div className="mb-3 flex items-center gap-2">
                                        <MapPin className="h-5 w-5 text-brand-600" />
                                        <h3 className="text-lg font-bold text-slate-900">{a.name}</h3>
                                    </div>
                                    <p className="text-sm text-slate-500">{a.desc}</p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {a.tags.map((t) => (
                                            <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enquiry */}
            <section className="bg-slate-50 py-20 lg:py-28">
                <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
                    <Reveal>
                        <span className="section-eyebrow">Book your accommodation</span>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                            Secure your place to stay
                        </h2>
                        <p className="mt-4 text-slate-600">
                            Tell us your budget and preferences, and we will send you inspected, available options within 48 hours.
                        </p>
                        <div className="mt-8 space-y-3">
                            {[
                                'Inspected properties — no surprises on arrival',
                                'Lease reviewed by our team before you sign',
                                'Photos and details sent before you commit',
                            ].map((p) => (
                                <div key={p} className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                                    <span className="text-sm text-slate-700">{p}</span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={150}>
                        <EnquiryForm leadType="enquiry" title="Accommodation Enquiry" />
                    </Reveal>
                </div>
            </section>

            <CtaSection />
        </>
    );
}

const accommodationOptions = [
    {
        title: 'University Hostel',
        price: '$80–$150/mo',
        desc: 'The most affordable option. Shared rooms on or near campus, perfect for first-year students who want to meet people.',
        icon: BedDouble,
        features: ['Shared room (2–4 students)', 'Walking distance to campus', 'Utilities included', 'Basic furnished'],
        popular: false,
    },
    {
        title: 'Shared Apartment',
        price: '$120–$200/mo',
        desc: 'Rent a 2–3 bedroom apartment with other students. You get your own room with shared kitchen and bathroom.',
        icon: HomeIcon,
        features: ['Private bedroom', 'Shared kitchen & bathroom', 'Wi-Fi and utilities', 'Social but independent'],
        popular: true,
    },
    {
        title: 'Studio Apartment',
        price: '$250–$350/mo',
        desc: 'Complete independence with your own kitchen, bathroom, and living space. Ideal for postgraduates or those who prefer solitude.',
        icon: Building,
        features: ['Fully private space', 'Own kitchen & bathroom', 'Furnished', 'Quiet and focused'],
        popular: false,
    },
];

const processSteps = [
    {
        title: 'Tell us your preferences',
        desc: 'Share your budget, preferred area, and accommodation type. We match you with available options.',
    },
    {
        title: 'We inspect the property',
        desc: 'Our team in Tbilisi visits the property, checks the condition, and takes photos for you.',
    },
    {
        title: 'You review and approve',
        desc: 'We send you photos, details, and the lease. You approve before anything is signed.',
    },
    {
        title: 'Confirmed before you fly',
        desc: 'Your accommodation is booked and confirmed. You arrive with a verified address waiting for you.',
    },
];

const areas = [
    {
        name: 'Vake',
        desc: 'An upscale, green neighbourhood with parks, cafes, and the University of Georgia nearby. Popular with international students.',
        tags: ['Safe', 'Cafes', 'Parks', 'University of Georgia'],
    },
    {
        name: 'Saburtalo',
        desc: 'A well-connected residential district with affordable rent and easy metro access to most universities.',
        tags: ['Affordable', 'Metro access', 'Shops'],
    },
    {
        name: 'Vera',
        desc: 'A charming, central neighbourhood with a vibrant cafe culture and walking distance to the Old Town.',
        tags: ['Central', 'Cafe culture', 'Walkable'],
    },
];
