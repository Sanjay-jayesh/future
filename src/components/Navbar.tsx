import { useState, useEffect, useRef } from 'react';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Top-level links stay as-is. Related pages are grouped under a dropdown
// so the desktop bar isn't trying to fit 12 separate items in one row.
const navLinks = [
    { to: '/', label: 'Home' },
    {
        label: 'About',
        children: [
            { to: '/about', label: 'About Us' },
            { to: '/founder', label: 'Founder' },
        ],
    },
    {
        label: 'Study in Georgia',
        children: [
            { to: '/why-georgia', label: 'Why Georgia' },
            { to: '/mbbs-nursing', label: 'MBBS & Nursing' },
        ],
    },
    { to: '/universities', label: 'Universities' },
    { to: '/visa', label: 'Visa' },
    {
        label: 'Resources',
        children: [
            { to: '/gallery', label: 'Gallery' },
            { to: '/success-stories', label: 'Success Stories' },
            { to: '/blog', label: 'Blog' },
            { to: '/faq', label: 'FAQs' },
        ],
    },
    { to: '/contact', label: 'Contact' },
];

// Flat list is still used for the mobile menu, where a full list reads fine.
const mobileLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/founder', label: 'Founder' },
    { to: '/why-georgia', label: 'Why Georgia' },
    { to: '/universities', label: 'Universities' },
    { to: '/mbbs-nursing', label: 'MBBS & Nursing' },
    { to: '/visa', label: 'Visa' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/success-stories', label: 'Success Stories' },
    { to: '/blog', label: 'Blog' },
    { to: '/faq', label: 'FAQs' },
    { to: '/contact', label: 'Contact' },
];

function DesktopDropdown({ label, children }: { label: string; children: { to: string; label: string }[] }) {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const isChildActive = children.some((c) => location.pathname === c.to);

    const handleEnter = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setOpen(true);
    };
    const handleLeave = () => {
        closeTimer.current = setTimeout(() => setOpen(false), 120);
    };

    return (
        <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <button
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-[15px] font-medium whitespace-nowrap transition-all duration-200 ${isChildActive
                        ? 'bg-primary-600/15 text-primary-400'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                aria-haspopup="true"
                aria-expanded={open}
            >
                {label}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 min-w-[200px] rounded-xl bg-dark-navbar border border-gray-800 shadow-xl overflow-hidden py-1.5"
                    >
                        {children.map((child) => (
                            <NavLink
                                key={child.to}
                                to={child.to}
                                className={({ isActive }) =>
                                    `block px-4 py-2.5 text-sm font-medium transition-colors ${isActive
                                        ? 'bg-primary-600/15 text-primary-400'
                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`
                                }
                            >
                                {child.label}
                            </NavLink>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

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
            <nav className="container-page flex items-center justify-between h-16 xl:h-20 gap-4">
                <motion.button
                    onClick={handleLogoClick}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="flex items-center group shrink-0"
                    aria-label="Future Factory home"
                >
                    <img
                        src="/assets/images/futurefactory_white.png"
                        alt="Future Factory"
                        className="w-28 sm:w-32 xl:w-36 h-auto"
                    />
                </motion.button>

                {/* Desktop nav */}
                <div className="hidden xl:flex items-center gap-1 flex-1 justify-center">
                    {navLinks.map((link) =>
                        'children' in link ? (
                            <DesktopDropdown key={link.label} label={link.label} children={link.children} />
                        ) : (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.to === '/'}
                                className={({ isActive }) =>
                                    `relative px-4 py-2.5 rounded-lg text-[15px] font-medium whitespace-nowrap transition-all duration-200 ${isActive
                                        ? 'bg-primary-600/15 text-primary-400'
                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.label}
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-underline"
                                                className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary-500 rounded-full"
                                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        )
                    )}
                </div>

                <div className="hidden xl:flex items-center gap-4 shrink-0">
                    <a
                        href="tel:+91-9447349896"
                        className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                    >
                        <Phone className="w-4 h-4" />
                        +91 94473 49896
                    </a>
                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        <button
                            onClick={() => {
                                navigate('/contact');
                                window.scrollTo(0, 0);
                            }}
                            className="btn-primary !py-2.5 !px-5 text-sm whitespace-nowrap"
                        >
                            Free Consultation
                        </button>
                    </motion.div>
                </div>

                {/* Mobile / tablet menu toggle */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileTap={{ scale: 0.9 }}
                    className="xl:hidden p-2 rounded-lg text-white shrink-0"
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
                        className="xl:hidden bg-dark-navbar border-t border-gray-800 overflow-hidden"
                    >
                        <div className="container-page py-4 flex flex-col gap-1 max-h-[75vh] overflow-y-auto">
                            {mobileLinks.map((link, i) => (
                                <motion.div
                                    key={link.to}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                >
                                    <NavLink
                                        to={link.to}
                                        end={link.to === '/'}
                                        className={({ isActive }) =>
                                            `px-4 py-3 rounded-lg text-sm font-medium transition-colors block ${isActive
                                                ? 'bg-primary-600/15 text-primary-400'
                                                : 'text-gray-300 hover:bg-gray-800'
                                            }`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                </motion.div>
                            ))}
                            <a
                                href="tel:+91-9447349896"
                                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-300"
                            >
                                <Phone className="w-4 h-4" />
                                +91 94473 49896
                            </a>
                            <button
                                onClick={() => {
                                    navigate('/contact');
                                    window.scrollTo(0, 0);
                                }}
                                className="btn-primary mt-3 w-full"
                            >
                                Book Free Consultation
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}