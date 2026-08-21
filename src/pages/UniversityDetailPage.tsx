import { useParams, Link, Navigate } from 'react-router-dom';
import { Star, MapPin, CheckCircle2, ArrowRight, GraduationCap, Users, Calendar, Briefcase } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';
import { EnquiryForm } from '@/components/EnquiryForm';
import { getUniversity, universities } from '@/data/universities';

export function UniversityDetailPage() {
  const { id } = useParams();
  const uni = id ? getUniversity(id) : undefined;

  if (!uni) return <Navigate to="/universities" replace />;

  const related = universities.filter((u) => u.country === uni.country && u.id !== uni.id).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${uni.country} · ${uni.city}`}
        title={uni.name}
        subtitle={uni.overview}
        image={uni.image}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Universities', path: '/universities' },
          { label: uni.shortName },
        ]}
      >
        <div className="flex flex-wrap gap-5">
          {[
            { icon: Star, label: `${uni.rating} rating` },
            { icon: Users, label: `${uni.students.toLocaleString()} students` },
            { icon: Calendar, label: `Est. ${uni.established}` },
            { icon: MapPin, label: uni.city },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2 text-sm text-slate-300">
              <s.icon className="h-4 w-4 text-brand-400" /> {s.label}
            </div>
          ))}
        </div>
      </PageHero>

      {/* Highlights */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {uni.highlights.map((h) => (
              <div key={h} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span className="text-sm font-medium text-slate-700">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="container-page">
          <Reveal className="mb-10">
            <span className="section-eyebrow">Programs</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Available programs</h2>
            <p className="mt-3 text-slate-500">English-taught programs at {uni.name}. Click apply to start your application.</p>
          </Reveal>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-5 py-4 font-semibold text-slate-700">Program</th>
                  <th className="px-5 py-4 font-semibold text-slate-700">Duration</th>
                  <th className="px-5 py-4 font-semibold text-slate-700">Tuition</th>
                  <th className="px-5 py-4 font-semibold text-slate-700">Language</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {uni.programs.map((p) => (
                  <tr key={p.name} className="transition-colors hover:bg-slate-50">
                    <td className="px-5 py-4 font-medium text-slate-800">{p.name}</td>
                    <td className="px-5 py-4 text-slate-600">{p.duration}</td>
                    <td className="px-5 py-4 font-semibold text-brand-700">{p.tuition}</td>
                    <td className="px-5 py-4 text-slate-600">{p.language}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Requirements & Careers */}
      <section className="py-16 lg:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Admission requirements</h2>
            </div>
            <ul className="mt-6 space-y-3">
              {uni.requirements.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-sm text-slate-700">{r}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-500">
              We handle the entire application process — document verification, submission, and follow-up.{' '}
              <Link to="/admission-process" className="font-semibold text-brand-600 hover:underline">
                See how it works
              </Link>
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                <Briefcase className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Career opportunities</h2>
            </div>
            <ul className="mt-6 space-y-3">
              {uni.careerOpportunities.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  <span className="text-sm text-slate-700">{c}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-500">
              Want to learn about licensing exams and post-study work options?{' '}
              <Link to="/contact" className="font-semibold text-brand-600 hover:underline">
                Talk to our team
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Apply */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <span className="section-eyebrow">Apply now</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Interested in {uni.shortName}?
            </h2>
            <p className="mt-4 text-slate-600">
              Fill in the form and our team will get back to you within 24 hours with next steps, a personalised cost
              breakdown, and your application roadmap.
            </p>
            <div className="mt-8 space-y-3">
              {[
                `Personalised cost breakdown for ${uni.shortName}`,
                'Document checklist tailored to your nationality',
                'Visa timeline and accommodation options',
              ].map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-sm text-slate-700">{p}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <EnquiryForm
              leadType="consultation"
              title={`Apply to ${uni.shortName}`}
              subtitle="Start your application today — no obligation."
            />
          </Reveal>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container-page">
            <h2 className="mb-8 text-2xl font-bold text-slate-900">Other universities in {uni.country}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((u) => (
                <Link key={u.id} to={`/universities/${u.id}`} className="card group flex flex-col overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={u.image}
                      alt={u.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 group-hover:text-brand-700">{u.name}</h3>
                    <p className="mt-1 text-xs text-slate-500">
                      {u.city} &middot; {u.rating} ★
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2">
                      View <ArrowRight className="h-3.5 w-3.5 transition-all" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection />
    </>
  );
}
