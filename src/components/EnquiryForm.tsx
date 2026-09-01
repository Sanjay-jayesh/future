import { useState } from 'react';
import type { FormEvent } from 'react';
import { supabase } from '@/lib/supabase';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnquiryFormProps {
    compact?: boolean;
    title?: string;
    subtitle?: string;
}

export default function EnquiryForm({ compact = false, title, subtitle }: EnquiryFormProps) {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        country_of_interest: '',
        course_interest: '',
        message: '',
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const { error } = await supabase.from('enquiries').insert([formData]);
            if (error) throw error;
            setStatus('success');
            setFormData({ full_name: '', email: '', phone: '', country_of_interest: '', course_interest: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className={`bg-dark-box rounded-2xl shadow-xl border border-gray-800 p-6 sm:p-8 ${compact ? '' : 'max-w-lg mx-auto'}`}>
            <AnimatePresence mode="wait">
                {status === 'success' ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 15 }}
                            className="w-16 h-16 rounded-full bg-success-500/15 flex items-center justify-center mx-auto mb-4"
                        >
                            <CheckCircle2 className="w-8 h-8 text-success-500" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-white mb-2">Thank you!</h3>
                        <p className="text-gray-400 mb-6">
                            We've received your enquiry. One of our consultants will reach out to you within 24 hours.
                        </p>
                        <button onClick={() => setStatus('idle')} className="btn-secondary">
                            Send another enquiry
                        </button>
                    </motion.div>
                ) : (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {(title || subtitle) && (
                            <div className="mb-6">
                                {title && <h3 className="text-xl font-bold text-white mb-1">{title}</h3>}
                                {subtitle && <p className="text-gray-400 text-sm">{subtitle}</p>}
                            </div>
                        )}
                        <AnimatePresence>
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mb-4 p-3 rounded-lg bg-error-500/10 border border-error-500/30 flex items-center gap-2 text-sm text-error-400 overflow-hidden"
                                >
                                    <AlertCircle className="w-4 h-4 shrink-0" />
                                    Something went wrong. Please try again or WhatsApp us directly.
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.full_name}
                                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                                        className="input-field"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Email *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="input-field"
                                        placeholder="you@email.com"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Phone / WhatsApp</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="input-field"
                                        placeholder="+995 555 000 000"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Country of Interest</label>
                                    <select
                                        value={formData.country_of_interest}
                                        onChange={(e) => setFormData({ ...formData, country_of_interest: e.target.value })}
                                        className="input-field"
                                    >
                                        <option value="">Select...</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Canada">Canada</option>
                                        <option value="UK">United Kingdom</option>
                                        <option value="Europe">Europe</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1.5">Course Interest</label>
                                <select
                                    value={formData.course_interest}
                                    onChange={(e) => setFormData({ ...formData, course_interest: e.target.value })}
                                    className="input-field"
                                >
                                    <option value="">Select...</option>
                                    <option value="Medicine">Medicine (MD/MBBS)</option>
                                    <option value="Dentistry">Dentistry</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Business">Business & Management</option>
                                    <option value="IT">IT & Computer Science</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1.5">Message</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={compact ? 3 : 4}
                                    className="input-field resize-none"
                                    placeholder="Tell us about your study goals..."
                                />
                            </div>
                            <motion.button
                                type="submit"
                                disabled={status === 'loading'}
                                whileHover={{ scale: status === 'loading' ? 1 : 1.01 }}
                                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                                className="btn-primary w-full disabled:opacity-60"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Send Enquiry
                                    </>
                                )}
                            </motion.button>
                            <p className="text-xs text-gray-500 text-center">
                                We'll respond within 24 hours. Your information is kept confidential.
                            </p>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
