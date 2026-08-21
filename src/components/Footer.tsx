import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Mail, MapPin, Instagram, Facebook, Youtube, Linkedin, ArrowRight } from 'lucide-react';
import { site, navLinks } from '@/data/site';

const seoLinks = [
    { label: 'Study in Georgia', path: '/seo/study-in-georgia' },
    { label: 'Study Medicine in Georgia', path: '/seo/study-medicine-in-georgia' },
    { label: 'Study Dentistry in Georgia', path: '/seo/study-dentistry-in-georgia' },
    { label: 'Study Engineering in Georgia', path: '/seo/study-engineering-in-georgia' },
    { label: 'Georgia Student Visa', path: '/seo/georgia-student-visa' },
    { label: 'Georgia University Admissions', path: '/seo/georgia-university-admissions' },
    { label: 'Study in Tbilisi', path: '/seo/study-in-tbilisi' },
    { label: 'For Indian Students', path: '/seo/study-in-georgia-for-indian-students' },
    { label: 'For International Students', path: '/seo/study-in-georgia-for-international-students' },
];

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400">
            <div className="container-page py-16">
                <div className="grid gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-2.5">
                            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700">
                                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white">
                                    <path d="M12 2L3 7v6c0 5 3.8 9.5 9 11 5.2-1.5 9-6 9-11V7l-9-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="font-display text-lg font-bold text-white">Future Factory</span>
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-400">
                                    Study Abroad Experts
                                </span>
                            </div>
                        </div>
                        <p className="mt-4 max-w-sm text-sm leading-relaxed">{site.description}</p>
                        <div className="mt-6 flex gap-3">
                            <SocialLink href={site.social.instagram} label="Instagram">
                                <Instagram className="h-4 w-4" />
                            </SocialLink>
                            <SocialLink href={site.social.facebook} label="Facebook">
                                <Facebook className="h-4 w-4" />
                            </SocialLink>
                            <SocialLink href={site.social.youtube} label="YouTube">
                                <Youtube className="h-4 w-4" />
                            </SocialLink>
                            <SocialLink href={site.social.linkedin} label="LinkedIn">
                                <Linkedin className="h-4 w-4" />
                            </SocialLink>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Explore</h4>
                        <ul className="space-y-2.5 text-sm">
                            {navLinks.slice(0, 7).map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="transition-colors hover:text-white">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Popular Guides</h4>
                        <ul className="space-y-2.5 text-sm">
                            {seoLinks.slice(0, 7).map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="flex items-center gap-1.5 transition-colors hover:text-white">
                                        <ArrowRight className="h-3 w-3 text-brand-400" /> {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Get in touch</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                                <span>{site.address}</span>
                            </li>
                            <li>
                                <a href={`tel:${site.phoneRaw}`} className="flex items-center gap-3 transition-colors hover:text-white">
                                    <Phone className="h-4 w-4 shrink-0 text-brand-400" />
                                    {site.phone}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${site.email}`} className="flex items-center gap-3 transition-colors hover:text-white">
                                    <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                                    {site.email}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`https://wa.me/${site.whatsapp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 transition-colors hover:text-white"
                                >
                                    <MessageCircle className="h-4 w-4 shrink-0 text-green-400" />
                                    Chat on WhatsApp
                                </a>
                            </li>
                        </ul>
                        <Link to="/contact" className="btn-primary mt-5 w-full">
                            Book a Free Consultation
                        </Link>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-800 pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 text-xs sm:flex-row">
                        <p>&copy; {new Date().getFullYear()} Future Factory. All rights reserved.</p>
                        <p>Helping students study in Georgia, Uzbekistan, Europe &amp; the UK.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-all hover:bg-brand-600 hover:text-white"
        >
            {children}
        </a>
    );
}
