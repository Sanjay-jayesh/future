import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-400">
            <div className="container-page py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div>
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white">
                                <GraduationCap className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-display font-bold text-lg text-white">Future Factory</p>
                                <p className="text-[10px] font-medium tracking-wider uppercase text-gray-500">Study Abroad Consultancy</p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-4">
                            Your trusted partner for studying in Georgia, Uzbekistan, Europe, and the UK. We turn your study-abroad dreams into reality.
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
                                { to: '/success-stories', label: 'Success Stories' },
                                { to: '/blog', label: 'Blog & Resources' },
                                { to: '/faq', label: 'FAQs' },
                            ].map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to} className="hover:text-primary-400 transition-colors inline-flex items-center gap-1 group">
                                        <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Study Destinations</h4>
                        <ul className="space-y-2.5 text-sm">
                            {['Study in Georgia', 'Study Medicine in Georgia', 'Study in Uzbekistan', 'Study in the UK', 'Study in Europe', 'Student Visa for Georgia'].map((label) => (
                                <li key={label}>
                                    <Link to="/universities" className="hover:text-primary-400 transition-colors">{label}</Link>
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
                        <Link to="/contact" className="btn-primary mt-5 w-full text-sm">
                            Book Free Consultation
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/5">
                <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Future Factory. All rights reserved.</p>
                    <p>Empowering students to study abroad with confidence.</p>
                </div>
            </div>
        </footer>
    );
}
