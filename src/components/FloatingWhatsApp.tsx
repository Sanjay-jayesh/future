import { MessageCircle } from 'lucide-react';
import { site } from '@/data/site';

export function FloatingWhatsApp() {
    return (
        <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-teal-600 text-white shadow-xl shadow-teal-600/40 transition-all hover:scale-110 hover:bg-teal-700"
        >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-40" />
            <MessageCircle className="relative h-7 w-7" />
        </a>
    );
}
