import { Link } from 'react-router-dom';
import {
  FileText,
  CalendarClock,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Plane,
  ArrowRight,
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';
import { EnquiryForm } from '@/components/EnquiryForm';

export function VisaAssistancePage() {
  return (
    <>
      <PageHero
        eyebrow="Visa Assistance"
        title="Your visa, handled end-to-end"
        subtitle="We manage the complete student visa process — from document checklist to embassy appointment to post-arrival residence permit. Our pre-screening gives us a 98% success rate."
        image="https://images.pexels.com/photos/33497885/pexels-photo-33497885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Visa Assistance' }]}
      />

      {/* What we handle */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <Reveal className="mb-12 text-center">
            <span className="section-eyebrow">Our visa service</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              We handle every step of your visa
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visaServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="card h-full p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Documents required */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <span className="section-eyebrow">Required documents</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Documents for a Georgian student visa
            </h2>
            <p className="mt-4 text-slate-600">
              The D3 student visa requires a specific set of documents. We provide a personalised checklist based on your
              nationality and review every item before submission.
            </p>
            <div className="mt-6 space-y-3">
              {visaDocuments.map((d) => (
                <div key={d} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  <span className="text-sm text-slate-700">{d}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <CalendarClock className="h-6 w-6 text-brand-600" />
                  <h3 className="text-lg font-bold text-slate-900">Processing time</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  The D3 visa typically takes <strong>10–15 working days</strong> to process. We recommend applying at
                  least 4 weeks before your intended travel date to allow for any delays.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-brand-600" />
                  <h3 className="text-lg font-bold text-slate-900">Visa fees</h3>
                </div>
                <div className="mt-3 space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Single-entry visa</span>
                    <span className="font-semibold text-slate-800">~$60</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Multiple-entry visa</span>
                    <span className="font-semibold text-slate-800">~$90</span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-brand-600" />
                  <h3 className="text-lg font-bold text-slate-900">Post-arrival residence permit</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  After arriving in Georgia, you must apply for a residence permit within 45 days. We guide you through
                  this process at the Public Service Hall — no stress, no confusion.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Common rejection reasons */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <Reveal className="mb-12 text-center">
            <span className="section-eyebrow">Stay safe</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Common visa rejection reasons — and how we prevent them
            </h2>
          </Reveal>
          <div className="mx-auto max-w-4xl space-y-4">
            {rejectionReasons.map((r, i) => (
              <Reveal key={r.reason} delay={i * 80}>
                <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900">{r.reason}</h3>
                    <p className="mt-1 text-sm text-slate-500">{r.problem}</p>
                  </div>
                  <div className="flex items-start gap-2 sm:max-w-xs">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                    <p className="text-sm text-slate-700">{r.solution}</p>
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
            <span className="section-eyebrow">Get started</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Let us handle your visa application
            </h2>
            <p className="mt-4 text-slate-600">
              Fill in the form and our visa team will get back to you within 24 hours with a personalised document
              checklist and timeline.
            </p>
            <div className="mt-8 space-y-3">
              {[
                'Personalised visa document checklist',
                'Embassy appointment booking',
                'Application pre-screening for 98% success',
              ].map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-sm text-slate-700">{p}</span>
                </div>
              ))}
            </div>
            <Link to="/seo/georgia-student-visa" className="btn-secondary mt-8">
              Read our full visa guide <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <EnquiryForm leadType="enquiry" title="Visa Enquiry" subtitle="Get your personalised visa checklist." />
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

const visaServices = [
  {
    title: 'Document Checklist',
    desc: 'A personalised checklist based on your nationality and university, so nothing is missed.',
    icon: FileText,
  },
  {
    title: 'Application Filing',
    desc: 'We complete and review every form, then submit your application on your behalf.',
    icon: ShieldCheck,
  },
  {
    title: 'Embassy Appointment',
    desc: 'We book your embassy appointment at the earliest available date and prep you for the interview.',
    icon: CalendarClock,
  },
  {
    title: 'Post-Arrival Permit',
    desc: 'We guide you through the residence permit process at the Public Service Hall after you arrive.',
    icon: Plane,
  },
];

const visaDocuments = [
  'Valid passport (at least 6 months beyond your stay)',
  'Official university invitation letter',
  'Completed visa application form',
  'Passport-size photographs',
  'Proof of financial means (bank statement)',
  'Medical insurance certificate',
  'HIV test certificate (for stays over 3 months)',
  'Visa fee payment receipt',
];

const rejectionReasons = [
  {
    reason: 'Incomplete documentation',
    problem: 'Missing or incorrectly formatted documents are the #1 reason for visa rejection.',
    solution: 'We cross-check every document against embassy requirements before submission.',
  },
  {
    reason: 'Insufficient proof of funds',
    problem: 'Your bank statement must clearly cover tuition and living costs for the visa period.',
    solution: 'We advise on the exact amount needed and the format your bank statement should take.',
  },
  {
    reason: 'Unclear admission letter',
    problem: 'Some invitation letters do not meet the embassy format requirements.',
    solution: 'We verify your admission letter meets the required format before you apply.',
  },
  {
    reason: 'Inconsistent information',
    problem: 'Differences between your application form and supporting documents raise red flags.',
    solution: 'We review every document for consistency before your application is filed.',
  },
];
