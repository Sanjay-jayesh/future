import { useState } from 'react';
import { CheckCircle2, Loader2, AlertCircle, Send, MessageCircle } from 'lucide-react';
import { useEnquiryForm } from '@/hooks/useEnquiryForm';
import { site } from '@/data/site';

interface EnquiryFormProps {
    leadType?: 'enquiry' | 'consultation';
    compact?: boolean;
    title?: string;
    subtitle?: string;
}

const countryOptions = ['Georgia', 'Uzbekistan', 'Europe', 'UK'];
const courseOptions = [
    'Medicine (MD)',
    'Dentistry (DDS)',
    'Computer Science',
    'Engineering',
    'Business Administration',
    'Pharmacy',
    'Nursing',
    'Other',
];

export function EnquiryForm({
    leadType = 'enquiry',
    compact = false,
    title = 'Quick Enquiry',
    subtitle = 'Fill in your details and we will get back to you within 24 hours.',
}: EnquiryFormProps) {
    const { status, error, submit } = useEnquiryForm();
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        countryOfInterest: '',
        courseInterest: '',
        message: '',
        preferredDate: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await submit({
            name: form.name,
            email: form.email,
            phone: form.phone,
            countryOfInterest: form.countryOfInterest,
            courseInterest: form.courseInterest,
            message: form.message,
            preferredDate: form.preferredDate || undefined,
            leadType,
        });
    };

    if (status === 'success') {
        return (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-100">
                    <CheckCircle2 className="h-7 w-7 text-brand-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">Thank you, {form.name.split(' ')[0]}!</h3>
                <p className="mb-5 max-w-sm text-sm text-slate-600">
                    Your enquiry has been prepared in WhatsApp. Please press send in the WhatsApp window that just opened so we
                    can respond to you immediately. We will get back to you within 24 hours.
                </p>
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <MessageCircle className="h-4 w-4" /> Open WhatsApp again
                </a>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            aria-label="Enquiry form"
        >
            {!compact && (
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
                </div>
            )}
            <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" required>
                        <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                        />
                    </Field>
                    <Field label="Phone / WhatsApp" required>
                        <input
                            type="tel"
                            name="phone"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                        />
                    </Field>
                </div>
                <Field label="Email" required>
                    <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                    />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Country of interest">
                        <select
                            name="countryOfInterest"
                            value={form.countryOfInterest}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                        >
                            <option value="">Select a country</option>
                            {countryOptions.map((c) => (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                        </select>
                    </Field>
                    <Field label="Course interest">
                        <select
                            name="courseInterest"
                            value={form.courseInterest}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                        >
                            <option value="">Select a course</option>
                            {courseOptions.map((c) => (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                        </select>
                    </Field>
                </div>
                {leadType === 'consultation' && (
                    <Field label="Preferred consultation date">
                        <input
                            type="date"
                            name="preferredDate"
                            value={form.preferredDate}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                        />
                    </Field>
                )}
                <Field label="Message">
                    <textarea
                        name="message"
                        rows={3}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your goals, questions, or anything else..."
                        className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                    />
                </Field>
                {error && (
                    <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        {error}
                    </div>
                )}
                <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full">
                    {status === 'submitting' ? (
                        <>
                            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                        </>
                    ) : (
                        <>
                            <Send className="h-4 w-4" /> Send Enquiry
                        </>
                    )}
                </button>
                <p className="text-center text-xs text-slate-400">
                    By submitting, you agree to be contacted by Future Factory. We never share your data.
                </p>
            </div>
        </form>
    );
}

function Field({
    label,
    required,
    children,
}: {
    label: string;
    required?: boolean;
    children: React.ReactNode;
}) {
    return (
        <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-slate-700">
                {label}
                {required && <span className="text-accent-500"> *</span>}
            </span>
            {children}
        </label>
    );
}
