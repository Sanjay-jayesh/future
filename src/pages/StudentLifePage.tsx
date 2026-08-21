import { Link } from 'react-router-dom';
import { Coffee, Mountain, Bus, ShieldCheck, Utensils, Users, Music, Camera, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';

export function StudentLifePage() {
    return (
        <>
            <PageHero
                eyebrow="Student Life"
                title="Life in Tbilisi — your home away from home"
                subtitle="Georgia is safe, affordable, and culturally rich. From the Old Town to the Caucasus mountains, Tbilisi offers an incredible student experience. Here is what to expect."
                image="https://images.pexels.com/photos/32998602/pexels-photo-32998602.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Student Life' }]}
            />

            {/* Overview stats */}
            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="mb-12 text-center">
                        <span className="section-eyebrow">At a glance</span>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                            What makes Tbilisi great for students
                        </h2>
                    </Reveal>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {lifeStats.map((s, i) => (
                            <Reveal key={s.label} delay={i * 100}>
                                <div className="rounded-2xl border border-slate-200 p-6 text-center">
                                    <s.icon className="mx-auto mb-3 h-8 w-8 text-brand-600" />
                                    <div className="text-2xl font-bold text-slate-900">{s.value}</div>
                                    <div className="mt-1 text-sm text-slate-500">{s.label}</div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Life sections */}
            <section className="bg-slate-50 py-20 lg:py-28">
                <div className="container-page">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <Reveal>
                            <div className="overflow-hidden rounded-3xl shadow-xl">
                                <img
                                    src="https://images.pexels.com/photos/6605240/pexels-photo-6605240.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                                    alt="Cafe life in Tbilisi"
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </Reveal>
                        <Reveal delay={150}>
                            <span className="section-eyebrow">Food &amp; cafe culture</span>
                            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">A foodie's paradise</h2>
                            <p className="mt-4 text-slate-600">
                                Georgian cuisine is legendary — khachapuri, khinkali, and churchkhela are student staples. International
                                food is everywhere too, from Indian curries to Italian pasta. Tbilisi's cafe culture is strong: a coffee
                                and study session at a Vake cafe is a weekly ritual.
                            </p>
                            <div className="mt-6 space-y-3">
                                {[
                                    { icon: Coffee, text: 'Coffee and khachapuri for under $6' },
                                    { icon: Utensils, text: 'Indian, Middle Eastern, and African restaurants available' },
                                    { icon: Users, text: 'Cafes are student-friendly with Wi-Fi and power outlets' },
                                ].map((item) => (
                                    <div key={item.text} className="flex items-start gap-3">
                                        <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                                        <span className="text-sm text-slate-700">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Weekend escapes */}
            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="mb-12 text-center">
                        <span className="section-eyebrow">Weekend escapes</span>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                            Explore Georgia beyond the city
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
                            Georgia is a small country with big landscapes. On weekends, you can ski, hike, or relax by the sea — all
                            within a few hours of Tbilisi.
                        </p>
                    </Reveal>
                    <div className="grid gap-6 md:grid-cols-3">
                        {escapes.map((e, i) => (
                            <Reveal key={e.name} delay={i * 100}>
                                <div className="card group overflow-hidden">
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={e.image}
                                            alt={e.name}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                                        <div className="absolute bottom-0 p-5">
                                            <h3 className="text-xl font-bold text-white">{e.name}</h3>
                                            <p className="text-sm text-slate-300">{e.distance}</p>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <p className="text-sm text-slate-500">{e.desc}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Safety & community */}
            <section className="bg-slate-50 py-20 lg:py-28">
                <div className="container-page">
                    <div className="grid gap-6 lg:grid-cols-3">
                        {communityCards.map((c, i) => (
                            <Reveal key={c.title} delay={i * 100}>
                                <div className="card h-full p-8">
                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                                        <c.icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">{c.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-500">{c.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="mb-12 text-center">
                        <span className="section-eyebrow">Gallery</span>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                            A glimpse of Tbilisi
                        </h2>
                    </Reveal>
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                        {gallery.map((g, i) => (
                            <Reveal key={i} delay={(i % 4) * 80}>
                                <div className="group overflow-hidden rounded-2xl shadow-md">
                                    <img
                                        src={g}
                                        alt="Tbilisi life"
                                        className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110 lg:h-56"
                                        loading="lazy"
                                    />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection
                title="Ready to experience Tbilisi?"
                subtitle="Book a free consultation and we will tell you everything you need to know about student life in Georgia."
            />
        </>
    );
}

const lifeStats = [
    { icon: ShieldCheck, value: 'Top 10', label: 'Safest country in the region' },
    { icon: Bus, value: '~$15', label: 'Monthly transport pass' },
    { icon: Coffee, value: '$4–6', label: 'A meal and coffee' },
    { icon: Users, value: '80+', label: 'Nationalities on campus' },
];

const escapes = [
    {
        name: 'Gudauri',
        distance: '2 hours from Tbilisi',
        desc: 'Affordable skiing and snowboarding in the Caucasus mountains. The season runs from December to April.',
        image: 'https://images.pexels.com/photos/34890727/pexels-photo-34890727.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    {
        name: 'Kazbegi',
        distance: '2.5 hours from Tbilisi',
        desc: 'Hiking trails, the famous Gergeti Trinity Church, and stunning mountain views. Perfect for a day trip.',
        image: 'https://images.pexels.com/photos/36314350/pexels-photo-36314350.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    {
        name: 'Batumi',
        distance: '5 hours from Tbilisi',
        desc: 'The Black Sea coast. Beaches, boulevards, and a lively summer scene. Great for a weekend getaway.',
        image: 'https://images.pexels.com/photos/19063133/pexels-photo-19063133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
];

const communityCards = [
    {
        title: 'Safety',
        desc: 'Georgia is one of the safest countries in the region. Violent crime is rare and students walk home late at night without issue. The locals are known for their warmth and hospitality.',
        icon: ShieldCheck,
    },
    {
        title: 'International community',
        desc: 'There is a growing international student community with active Indian, African, and Middle Eastern groups. Cultural events, festivals, and places of worship for all major religions are available.',
        icon: Users,
    },
    {
        title: 'Culture & entertainment',
        desc: 'Tbilisi has a thriving music and arts scene, film festivals, the Old Town with its famous balconies, and a growing startup ecosystem. There is always something to do.',
        icon: Music,
    },
];

const gallery = [
    'https://images.pexels.com/photos/36314350/pexels-photo-36314350.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/32998602/pexels-photo-32998602.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/6605240/pexels-photo-6605240.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/19063133/pexels-photo-19063133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];
