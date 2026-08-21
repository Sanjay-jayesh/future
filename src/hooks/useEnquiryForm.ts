import { useState } from 'react';
import { site } from '@/data/site';

export interface EnquiryData {
  name: string;
  email: string;
  phone: string;
  countryOfInterest: string;
  courseInterest: string;
  message: string;
  preferredDate?: string;
  leadType: 'enquiry' | 'consultation';
}

export function useEnquiryForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function submit(data: EnquiryData): Promise<boolean> {
    setStatus('submitting');
    setError(null);
    try {
      const lines = [
        `*New ${data.leadType === 'consultation' ? 'Consultation Booking' : 'Enquiry'} — Future Factory*`,
        '',
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        data.countryOfInterest ? `Country of interest: ${data.countryOfInterest}` : '',
        data.courseInterest ? `Course interest: ${data.courseInterest}` : '',
        data.preferredDate ? `Preferred date: ${data.preferredDate}` : '',
        data.message ? `Message: ${data.message}` : '',
      ].filter(Boolean);

      const text = encodeURIComponent(lines.join('\n'));
      const url = `https://wa.me/${site.whatsapp}?text=${text}`;

      window.open(url, '_blank');
      setStatus('success');
      return true;
    } catch (err) {
      setError('Something went wrong. Please try again or contact us on WhatsApp directly.');
      setStatus('error');
      return false;
    }
  }

  function reset() {
    setStatus('idle');
    setError(null);
  }

  return { status, error, submit, reset };
}
