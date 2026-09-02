import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Facebook, Instagram, Linkedin, Navigation, Building2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import EnquiryForm from '@/components/EnquiryForm';
import { Reveal, StaggerGroup, StaggerItem, motion, fadeInUp, slideInLeft, slideInRight } from '@/lib/motion';

const contactInfo = [
    { icon: MapPin, title: 'Visit Us', lines: ['17 Vake Park', 'Tbilisi 0179, Georgia'], color: 'primary' },
    { icon: Phone, title: 'Call Us', lines: ['+995 555 123 456', 'Mon–Sat, 9am–7pm GST'], color: 'accent' },
    { icon: Mail, title: 'Email Us', lines: ['hello@futurefactory.ge', 'We reply within 24 hours'], color: 'secondary' },
    { icon: Clock, title: 'Office Hours', lines: ['Monday – Friday: 9am – 7pm', 'Saturday: 10am – 4pm'], color: 'success' },
];

const offices = [
    {
        city: 'Tbilisi',
        country: 'Georgia',
        address: ['Street address line 1', 'Tbilisi, Georgia'],
        phone: '+995 555 123 456',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tbilisi+Georgia',
    },
    {
        city: 'Samarkand',
        country: 'Uzbekistan',
        address: ['Street address line 1', 'Samarkand, Uzbekistan'],
        phone: '+998 71 123 4567',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Samarkand+Uzbekistan',
    },
    {
        city: 'Toronto',
        country: 'Canada',
        address: ['Street address line 1', 'Toronto, ON, Canada'],
        phone: '+1 416 555 0199',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Toronto+Canada',
    },
    {
        city: 'London',
        country: 'United Kingdom',
        address: ['Street address line 1', 'London, United Kingdom'],
        phone: '+44 20 7946 0999',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=London+United+Kingdom',
    },
];

const colorMap: Record<string, { bg: string; text: string; hoverBg: string; hoverText: string }> = {
    primary: { bg: 'bg-primary-600/15', text: 'text-primary-400', hoverBg: 'group-hover:bg-primary-600', hoverText: 'group-hover:text-white' },
    accent: { bg: 'bg-accent-500/15', text: 'text-accent-400', hoverBg: 'group-hover:bg-accent-600', hoverText: 'group-hover:text-white' },
    secondary: { bg: 'bg-secondary-500/15', text: 'text-secondary-400', hoverBg: 'group-hover:bg-secondary-600', hoverText: 'group-hover:text-white' },
    success: { bg: 'bg-success-500/15', text: 'text-success-400', hoverBg: 'group-hover:bg-success-600', hoverText: 'group-hover:text-white' },
};

export default function Contact() {
    return (
        <>
            <PageHero
                label="Get in Touch"
                title="Contact Future Factory"
                subtitle="Have questions about studying abroad? We're here to help. Reach out via phone, email, WhatsApp, or fill out the form below."
                image="https://images.pexels.com/photos/27550030/pexels-photo-27550030.jpeg?auto=compress&cs=tinysrgb&w=1920"
                breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
            />

            <section className="py-16 lg:py-24">
                <div className="container-page">
                    <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" fast>
                        {contactInfo.map((info) => {
                            const c = colorMap[info.color];
                            return (
                                <StaggerItem key={info.title} variants={fadeInUp}>
                                    <motion.div
                                        whileHover={{ y: -6 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                        className="card p-6 text-center group"
                                    >
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${c.bg} ${c.text} ${c.hoverBg} ${c.hoverText}`}>
                                            <info.icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="font-bold text-white mb-2">{info.title}</h3>
                                        {info.lines.map((line, j) => (
                                            <p key={j} className="text-sm text-gray-400">{line}</p>
                                        ))}
                                    </motion.div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerGroup>

                    <Reveal className="mb-16" amount={0.1}>
                        <div className="text-center mb-10">
                            <span className="section-label mb-4">Our Offices</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                                Visit Us Across the Globe
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                Future Factory has offices in four countries — click any location to open it in Google Maps and get directions.
                            </p>
                        </div>

                        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" fast>
                            {offices.map((office) => (
                                <StaggerItem key={office.city} variants={fadeInUp}>
                                    <motion.a
                                        href={office.mapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -8 }}
                                        whileTap={{ scale: 0.97 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                        className="card p-6 group block h-full cursor-pointer"
                                    >
                                        <div className="flex items-center justify-between mb-5">
                                            <div className="w-12 h-12 rounded-2xl bg-primary-600/15 text-primary-400 group-hover:bg-primary-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
                                                <Building2 className="w-6 h-6" />
                                            </div>
                                            <span className="flex items-center gap-1.5 text-xs font-medium text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <Navigation className="w-3.5 h-3.5" />
                                                Open Map
                                            </span>
                                        </div>

                                        <h3 className="font-display font-bold text-xl text-white mb-0.5">{office.city}</h3>
                                        <p className="text-xs font-medium uppercase tracking-wider text-primary-400 mb-4">{office.country}</p>

                                        <div className="space-y-1 mb-4">
                                            {office.address.map((line, j) => (
                                                <p key={j} className="text-sm text-gray-400">{line}</p>
                                            ))}
                                        </div>

                                        <div className="pt-4 border-t border-gray-800">
                                            <p className="flex items-center gap-2 text-sm text-gray-400">
                                                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                                                {office.phone}
                                            </p>
                                        </div>
                                    </motion.a>
                                </StaggerItem>
                            ))}
                        </StaggerGroup>
                    </Reveal>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <Reveal variants={slideInLeft}>
                            <span className="section-label mb-4">Send a Message</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                Book Your Free Consultation
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Fill out the form and we'll get back to you within 24 hours with personalised recommendations.
                                Or reach us instantly on WhatsApp — we're always just a message away.
                            </p>

                            <StaggerGroup className="space-y-4" fast>
                                {[
                                    { href: 'https://wa.me/995555123456?text=Hi%20Future%20Factory,%20I%27d%20like%20to%20book%20a%20free%20consultation', bg: 'bg-[#25D366]/5', border: 'border-[#25D366]/20', hover: 'hover:bg-[#25D366]/10', iconBg: 'bg-[#25D366]', icon: <MessageCircle className="w-6 h-6" />, title: 'Chat on WhatsApp', subtitle: 'Fastest response — typically within minutes', trailing: <Send className="w-5 h-5 text-gray-500 group-hover:text-[#25D366] transition-colors" /> },
                                    { href: 'tel:+995555123456', bg: 'bg-primary-600/5', border: 'border-primary-600/20', hover: 'hover:bg-primary-600/10', iconBg: 'bg-primary-600', icon: <Phone className="w-6 h-6" />, title: 'Call Us Directly', subtitle: '+995 555 123 456', trailing: null },
                                    { href: 'mailto:hello@futurefactory.ge', bg: 'bg-accent-500/5', border: 'border-accent-500/20', hover: 'hover:bg-accent-500/10', iconBg: 'bg-accent-600', icon: <Mail className="w-6 h-6" />, title: 'Email Us', subtitle: 'hello@futurefactory.ge', trailing: null },
                                ].map((item, i) => (
                                    <StaggerItem key={i} variants={fadeInUp}>
                                        <motion.a
                                            href={item.href}
                                            target={item.href.startsWith('http') ? '_blank' : undefined}
                                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.99 }}
                                            className={`flex items-center gap-4 p-5 rounded-2xl ${item.bg} border ${item.border} ${item.hover} transition-all group`}
                                        >
                                            <div className={`w-12 h-12 rounded-xl ${item.iconBg} text-white flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                                {item.icon}
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-bold text-white">{item.title}</p>
                                                <p className="text-sm text-gray-400">{item.subtitle}</p>
                                            </div>
                                            {item.trailing}
                                        </motion.a>
                                    </StaggerItem>
                                ))}
                            </StaggerGroup>

                            <div className="mt-8">
                                <p className="text-sm font-medium text-gray-300 mb-3">Follow us on social media</p>
                                <div className="flex items-center gap-3">
                                    {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                                        <motion.a
                                            key={i}
                                            href="#"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-primary-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                                        >
                                            <Icon className="w-5 h-5" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        <Reveal variants={slideInRight} delay={0.15}>
                            <EnquiryForm title="Quick Enquiry Form" subtitle="All fields marked * are required." />
                        </Reveal>
                    </div>
                </div>
            </section>


        </>
    );
}
