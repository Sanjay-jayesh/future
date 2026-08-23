import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Facebook, Instagram, Linkedin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import EnquiryForm from '@/components/EnquiryForm';
import { Reveal, StaggerGroup, StaggerItem, motion, fadeInUp, scaleIn, slideInLeft, slideInRight } from '@/lib/motion';

const contactInfo = [
    { icon: MapPin, title: 'Visit Us', lines: ['17 Vake Park', 'Tbilisi 0179, Georgia'], color: 'primary' },
    { icon: Phone, title: 'Call Us', lines: ['+995 555 123 456', 'Mon–Sat, 9am–7pm GST'], color: 'accent' },
    { icon: Mail, title: 'Email Us', lines: ['hello@futurefactory.ge', 'We reply within 24 hours'], color: 'secondary' },
    { icon: Clock, title: 'Office Hours', lines: ['Monday – Friday: 9am – 7pm', 'Saturday: 10am – 4pm'], color: 'success' },
];

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
                        {contactInfo.map((info) => (
                            <StaggerItem key={info.title} variants={fadeInUp}>
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                    className="card p-6 text-center group"
                                >
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 bg-${info.color}-50 text-${info.color}-600 group-hover:bg-${info.color}-600 group-hover:text-white`}>
                                        <info.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                                    {info.lines.map((line, j) => (
                                        <p key={j} className="text-sm text-gray-600">{line}</p>
                                    ))}
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerGroup>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <Reveal variants={slideInLeft}>
                            <span className="section-label mb-4">Send a Message</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Book Your Free Consultation
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Fill out the form and we'll get back to you within 24 hours with personalised recommendations.
                                Or reach us instantly on WhatsApp — we're always just a message away.
                            </p>

                            <StaggerGroup className="space-y-4" fast>
                                {[
                                    { href: 'https://wa.me/995555123456?text=Hi%20Future%20Factory,%20I%27d%20like%20to%20book%20a%20free%20consultation', bg: 'bg-[#25D366]/5', border: 'border-[#25D366]/20', hover: 'hover:bg-[#25D366]/10', iconBg: 'bg-[#25D366]', icon: <MessageCircle className="w-6 h-6" />, title: 'Chat on WhatsApp', subtitle: 'Fastest response — typically within minutes', trailing: <Send className="w-5 h-5 text-gray-400 group-hover:text-[#25D366] transition-colors" /> },
                                    { href: 'tel:+995555123456', bg: 'bg-primary-50', border: 'border-primary-100', hover: 'hover:bg-primary-100', iconBg: 'bg-primary-600', icon: <Phone className="w-6 h-6" />, title: 'Call Us Directly', subtitle: '+995 555 123 456', trailing: null },
                                    { href: 'mailto:hello@futurefactory.ge', bg: 'bg-accent-50', border: 'border-accent-100', hover: 'hover:bg-accent-100', iconBg: 'bg-accent-600', icon: <Mail className="w-6 h-6" />, title: 'Email Us', subtitle: 'hello@futurefactory.ge', trailing: null },
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
                                                <p className="font-bold text-gray-900">{item.title}</p>
                                                <p className="text-sm text-gray-500">{item.subtitle}</p>
                                            </div>
                                            {item.trailing}
                                        </motion.a>
                                    </StaggerItem>
                                ))}
                            </StaggerGroup>

                            <div className="mt-8">
                                <p className="text-sm font-medium text-gray-700 mb-3">Follow us on social media</p>
                                <div className="flex items-center gap-3">
                                    {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                                        <motion.a
                                            key={i}
                                            href="#"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-primary-600 flex items-center justify-center text-gray-600 hover:text-white transition-all"
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

            <Reveal className="pb-20" amount={0.1}>
                <div className="container-page">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-96"
                    >
                        <iframe
                            title="Future Factory Location"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=44.7%2C41.69%2C44.85%2C41.73&amp;layer=mapnik"
                            className="w-full h-full"
                            loading="lazy"
                        />
                    </motion.div>
                </div>
            </Reveal>
        </>
    );
}
