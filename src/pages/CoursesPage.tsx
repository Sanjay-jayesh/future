import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Stethoscope,
    Smile,
    Code,
    Building,
    Zap,
    Briefcase,
    Pill,
    HeartPulse,
    Globe,
    BarChart,
    ArrowRight,
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';
import { courses, type Course } from '@/data/courses';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    stethoscope: Stethoscope,
    smile: Smile,
    code: Code,
    building: Building,
    zap: Zap,
    briefcase: Briefcase,
    pill: Pill,
    'heart-pulse': HeartPulse,
    globe: Globe,
    'bar-chart': BarChart,
};

const categories = ['All', 'Medicine', 'Dentistry', 'Engineering', 'IT', 'Business', 'Pharmacy', 'Nursing', 'Humanities'];

export function CoursesPage() {
    const [category, setCategory] = useState('All');

    const filtered = category === 'All' ? courses : courses.filter((c) => c.category === category);

    return (
        <>
            <PageHero
                eyebrow="Courses & Programs"
                title="Find the right course for your career"
                subtitle="From medicine to computer science, explore English-taught programs across Georgia, Uzbekistan, Europe, and the UK. Filter by field and compare tuition, duration, and destinations."
                image="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Courses' }]}
            />

            {/* Category filter */}
            <section className="border-b border-slate-100 py-6">
                <div className="container-page flex flex-wrap gap-2">
                    {categories.map((c) => (
                        <button
                            key={c}
                            onClick={() => setCategory(c)}
                            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${category === c
                                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </section>

            {/* Course grid */}
            <section className="py-16 lg:py-24">
                <div className="container-page">
                    <div className="mb-6 text-sm text-slate-500">
                        Showing {filtered.length} {filtered.length === 1 ? 'course' : 'courses'}
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((course, i) => (
                            <Reveal key={course.id} delay={(i % 3) * 100}>
                                <CourseCard course={course} />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular fields */}
            <section className="bg-slate-50 py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="mb-12 text-center">
                        <span className="section-eyebrow">Most popular</span>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                            Fields students choose most
                        </h2>
                    </Reveal>
                    <div className="grid gap-6 sm:grid-cols-3">
                        {popularFields.map((f, i) => (
                            <Reveal key={f.title} delay={i * 100}>
                                <Link
                                    to={f.link}
                                    className="group relative block overflow-hidden rounded-2xl shadow-lg"
                                >
                                    <img
                                        src={f.image}
                                        alt={f.title}
                                        className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />
                                    <div className="absolute bottom-0 p-6">
                                        <h3 className="text-xl font-bold text-white">{f.title}</h3>
                                        <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
                                        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-300 group-hover:gap-2">
                                            Learn more <ArrowRight className="h-3.5 w-3.5 transition-all" />
                                        </span>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection
                title="Need help choosing a course?"
                subtitle="Our experts will recommend the best programs based on your academic background, career goals, and budget."
            />
        </>
    );
}

function CourseCard({ course }: { course: Course }) {
    const Icon = iconMap[course.icon] ?? Briefcase;
    return (
        <div className="card flex h-full flex-col p-6">
            <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-6 w-6" />
                </div>
                {course.popular && (
                    <span className="rounded-full bg-accent-100 px-2.5 py-1 text-xs font-semibold text-accent-700">Popular</span>
                )}
            </div>
            <h3 className="text-lg font-bold text-slate-900">{course.name}</h3>
            <p className="mt-2 text-sm text-slate-500">{course.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{course.level}</span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{course.duration}</span>
            </div>
            <div className="mt-4 border-t border-slate-100 pt-4">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Tuition</span>
                    <span className="font-bold text-brand-700">{course.tuitionRange}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-slate-500">Available in</span>
                    <span className="font-medium text-slate-700">{course.countries.join(', ')}</span>
                </div>
            </div>
            <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:gap-2"
            >
                Enquire about this course <ArrowRight className="h-3.5 w-3.5 transition-all" />
            </Link>
        </div>
    );
}

const popularFields = [
    {
        title: 'Medicine in Georgia',
        desc: '6-year MD programs at WHO-recognised universities.',
        image: 'https://images.pexels.com/photos/32213405/pexels-photo-32213405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        link: '/seo/study-medicine-in-georgia',
    },
    {
        title: 'Dentistry in Georgia',
        desc: '5-year DDS with hands-on clinical training.',
        image: 'https://images.pexels.com/photos/30902113/pexels-photo-30902113.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        link: '/seo/study-dentistry-in-georgia',
    },
    {
        title: 'Engineering in Georgia',
        desc: 'BSc programs in CS, civil, and electrical engineering.',
        image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        link: '/seo/study-engineering-in-georgia',
    },
];
