import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';
import { EnquiryForm } from '@/components/EnquiryForm';
import { faqs } from '@/data/site';

export function FaqsPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <>
            <PageHero
                eyebrow="FAQs"
                title="Frequently asked questions"
                subtitle="Everything you need to know about studying in Georgia, Uzbekistan, Europe, and the UK with Future Factory. Have a question we have not answered? Just ask us on WhatsApp."
                breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'FAQs' }]}
            />

            <section className="py-20 lg:py-28">
                <div className="container-page grid gap-12 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <div className="space-y-3">
                            {faqs.map((f, i) => (
                                <Reveal key={i} delay={i * 50}>
                                    <div
                                        className={`overflow-hidden rounded-2xl border transition-all ${openIndex === i ? 'border-brand-200 bg-brand-50/30 shadow-md' : 'border-slate-200 bg-white shadow-sm'
                                            }`}
                                    >
                                        <button
                                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                            className="flex w-full items-center justify-between gap-4 p-5 text-left"
                                            aria-expanded={openIndex === i}
                                        >
                                            <span className="font-semibold text-slate-900">{f.q}</span>
                                            <ChevronDown
                                                className={`h-5 w-5 shrink-0 text-brand-500 transition-transform ${openIndex === i ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                        <div
                                            className={`grid transition-all duration-300 ${openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{f.a}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                                <h3 className="text-lg font-bold text-slate-900">Still have questions?</h3>
                                <p className="mt-2 text-sm text-slate-500">
                                    Our team is happy to help. Send us a quick enquiry and we will get back to you within 24 hours.
                                </p>
                            </div>
                            <div className="mt-6">
                                <EnquiryForm leadType="enquiry" compact title="Ask a question" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
}
