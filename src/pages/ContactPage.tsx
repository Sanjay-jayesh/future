import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { EnquiryForm } from '@/components/EnquiryForm';
import { site } from '@/data/site';

export function ContactPage() {
    return (
        <>
            <PageHero
                eyebrow="Contact Us"
                title="Book your free consultation"
                subtitle="Tell us about your study-abroad goals and we will get back to you within 24 hours. Your first consultation is completely free — no obligation, no pressure."
                image="https://images.pexels.com/photos/19063133/pexels-photo-19063133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
            />

            {/* Contact info + form */}
            <section className="py-20 lg:py-28">
                <div className="container-page grid gap-12 lg:grid-cols-5 lg:items-start">
                    {/* Info */}
                    <Reveal className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-slate-900">Get in touch</h2>
                        <p className="mt-3 text-slate-500">
                            We are here to help. Reach out via WhatsApp for the fastest response, or fill in the consultation form.
                        </p>
                        <div className="mt-8 space-y-4">
                            {contactItems.map((c) => (
                                <a
                                    key={c.label}
                                    href={c.href}
                                    target={c.external ? '_blank' : undefined}
                                    rel={c.external ? 'noopener noreferrer' : undefined}
                                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-brand-300 hover:shadow-md"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                                        <c.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">{c.label}</h3>
                                        <p className="text-sm text-slate-500">{c.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            href={`https://wa.me/${site.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-teal-600 px-6 py-4 text-white shadow-lg shadow-teal-600/25 transition-all hover:bg-teal-700 hover:-translate-y-0.5"
                        >
                            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp now
                        </a>

                        {/* Hours */}
                        <div className="mt-6 rounded-2xl bg-slate-50 p-6">
                            <div className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-brand-600" />
                                <h3 className="font-semibold text-slate-900">Office hours</h3>
                            </div>
                            <p className="mt-2 text-sm text-slate-500">{site.hours}</p>
                            <p className="mt-1 text-sm text-slate-500">{site.address}</p>
                        </div>
                    </Reveal>

                    {/* Form */}
                    <Reveal delay={150} className="lg:col-span-3">
                        <EnquiryForm
                            leadType="consultation"
                            title="Book a free consultation"
                            subtitle="Fill in the form below and we will prepare a personalised plan for you. Your details go straight to our team via WhatsApp."
                        />
                    </Reveal>
                </div>
            </section>

            {/* Map placeholder */}
            <section className="bg-slate-50 py-16 lg:py-24">
                <div className="container-page">
                    <Reveal className="mb-8 text-center">
                        <h2 className="text-2xl font-bold text-slate-900">Visit us in Tbilisi</h2>
                        <p className="mt-2 text-slate-500">{site.address}</p>
                    </Reveal>
                    <Reveal>
                        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
                            <iframe
                                title="Future Factory office location"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=44.7%2C41.7%2C44.85%2C41.75&layer=mapnik&marker=41.72%2C44.77"
                                className="h-80 w-full"
                                loading="lazy"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}

const contactItems = [
    {
        label: 'Phone',
        value: site.phone,
        href: `tel:${site.phoneRaw}`,
        icon: Phone,
        external: false,
    },
    {
        label: 'Email',
        value: site.email,
        href: `mailto:${site.email}`,
        icon: Mail,
        external: false,
    },
    {
        label: 'WhatsApp',
        value: `+${site.whatsapp}`,
        href: `https://wa.me/${site.whatsapp}`,
        icon: Send,
        external: true,
    },
    {
        label: 'Address',
        value: site.address,
        href: '#',
        icon: MapPin,
        external: false,
    },
];
