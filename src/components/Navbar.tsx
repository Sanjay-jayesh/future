import { useState, useEffect } from 'react';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/why-georgia', label: 'Why Georgia' },
    { to: '/universities', label: 'Universities' },
    { to: '/success-stories', label: 'Success Stories' },
    { to: '/blog', label: 'Blog' },
    { to: '/faq', label: 'FAQs' },
    { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        } else {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        }
    };

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-sm' : 'bg-dark-navbar/80 backdrop-blur-sm'
                }`}
        >
            <nav className="container-page flex items-center justify-between h-16 lg:h-20">
                <button onClick={handleLogoClick} className="flex items-center gap-2.5 group">
                    <motion.div
                        whileHover={{ scale: 1.08, rotate: -5 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white shadow-lg shadow-primary-600/20"
                    >
                        <GraduationCap className="w-5 h-5" />
                    </motion.div>
                    <div className="flex flex-col leading-none">
                        <span className="font-display font-bold text-lg text-white transition-colors">
                            Future Factory
                        </span>
                        <span className="text-[10px] font-medium tracking-wider uppercase text-gray-400 transition-colors">
                            Study Abroad Consultancy
                        </span>
                    </div>
                </button>

                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.to === '/'}
                            className={({ isActive }) =>
                                `relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                    ? 'bg-primary-600/15 text-primary-400'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {link.label}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-primary-500 rounded-full"
                                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>

                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href="tel:+995555123456"
                        className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                    >
                        <Phone className="w-4 h-4" />
                        +995 555 123 456
                    </a>
                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        <button onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }} className="btn-primary !py-2.5 !px-5 text-sm">
                            Free Consultation
                        </button>
                    </motion.div>
                </div>

                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileTap={{ scale: 0.9 }}
                    className="lg:hidden p-2 rounded-lg text-white"
                    aria-label="Menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:hidden bg-dark-navbar border-t border-gray-800 overflow-hidden"
                    >
                        <div className="container-page py-4 flex flex-col gap-1">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.to}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <NavLink
                                        to={link.to}
                                        end={link.to === '/'}
                                        className={({ isActive }) =>
                                            `px-4 py-3 rounded-lg text-sm font-medium transition-colors block ${isActive ? 'bg-primary-600/15 text-primary-400' : 'text-gray-300 hover:bg-gray-800'
                                            }`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                </motion.div>
                            ))}
                            <button onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }} className="btn-primary mt-3 w-full">
                                Book Free Consultation
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
