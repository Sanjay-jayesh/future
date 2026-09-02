import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
    const navigate = useNavigate();

    const handleNav = (to: string) => {
        navigate(to);
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };

    return (
        <footer className="bg-dark-navbar text-gray-400 border-t border-gray-800">
            <div className="container-page py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div>
                        <div className="mb-4">
                            <img
                                src="/assets/images/futurefactory_white.png"
                                alt="Future Factory"
                                className="w-36 h-auto"
                            />
                        </div>
                        <p className="text-sm leading-relaxed mb-4">
                            Your trusted partner for studying in Georgia, Uzbekistan, Canada, and the UK. We turn your study-abroad dreams into reality.
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="https://wa.me/995555123456" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#25D366] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200">
                                <MessageCircle className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-2.5 text-sm">
                            {[
                                { to: '/about', label: 'About Us' },
                                { to: '/why-georgia', label: 'Why Study in Georgia' },
                                { to: '/universities', label: 'Partner Universities' },
                                { to: '/visa', label: 'Visa Guide' },
                                { to: '/gallery', label: 'Events Gallery' },
                                { to: '/success-stories', label: 'Success Stories' },
                                { to: '/blog', label: 'Blog & Resources' },
                                { to: '/faq', label: 'FAQs' },
                            ].map((link) => (
                                <li key={link.to}>
                                    <button onClick={() => handleNav(link.to)} className="hover:text-primary-400 transition-colors inline-flex items-center gap-1 group">
                                        <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Study Destinations</h4>
                        <ul className="space-y-2.5 text-sm">
                            {[
                                { label: 'Study in Georgia', to: '/universities?country=Georgia' },
                                { label: 'Study Medicine in Georgia', to: '/universities?country=Georgia' },
                                { label: 'Study in Uzbekistan', to: '/universities?country=Uzbekistan' },
                                { label: 'Study in Canada', to: '/universities?country=Canada' },
                                { label: 'Study in the UK', to: '/universities?country=UK' },
                                { label: 'Student Visa for Georgia', to: '/visa' },
                            ].map((link) => (
                                <li key={link.label}>
                                    <button onClick={() => handleNav(link.to)} className="hover:text-primary-400 transition-colors">{link.label}</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Get in Touch</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                                <span>17 Vake Park, Tbilisi 0179, Georgia</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                                <a href="tel:+995555123456" className="hover:text-primary-400 transition-colors">+995 555 123 456</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                                <a href="mailto:hello@futurefactory.ge" className="hover:text-primary-400 transition-colors">hello@futurefactory.ge</a>
                            </li>
                        </ul>
                        <button onClick={() => handleNav('/contact')} className="btn-primary mt-5 w-full text-sm">
                            Book Free Consultation
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Future Factory. All rights reserved.</p>
                    <p>Empowering students to study abroad with confidence.</p>
                </div>
            </div>
        </footer>
    );
}
