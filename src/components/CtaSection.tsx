import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { site } from '@/data/site';

interface CtaSectionProps {
    title?: string;
    subtitle?: string;
}

export function CtaSection({
    title = 'Ready to start your study abroad journey?',
    subtitle = 'Book a free consultation today. Our experts will guide you from university selection to your first day on campus — no obligation, no pressure.',
}: CtaSectionProps) {
    return (
        <section className="relative overflow-hidden bg-brand-700 py-20 lg:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_20%,rgba(255,255,255,0.12),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_80%,rgba(167,31,44,0.2),transparent)]" />
            <div className="container-page relative text-center">
                <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h2>
                <p className="mx-auto mt-5 max-w-xl text-lg text-brand-100">{subtitle}</p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link to="/contact" className="btn-accent">
                        <Phone className="h-4 w-4" /> Book a Free Consultation
                    </Link>
                    <a
                        href={`https://wa.me/${site.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
                    >
                        <MessageCircle className="h-4 w-4" /> WhatsApp Us
                    </a>
                </div>
                <p className="mt-6 text-sm text-brand-200">
                    Or explore our{' '}
                    <Link to="/universities" className="font-semibold text-white underline-offset-2 hover:underline">
                        partner universities
                    </Link>{' '}
                    and{' '}
                    <Link to="/courses" className="font-semibold text-white underline-offset-2 hover:underline">
                        courses
                    </Link>
                    <ArrowRight className="ml-1 inline h-3.5 w-3.5" />
                </p>
            </div>
        </section>
    );
}
