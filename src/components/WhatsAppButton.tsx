import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppButton() {
    const [visible, setVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            <AnimatePresence>
                {visible && expanded && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-dark-box rounded-2xl shadow-2xl border border-gray-800 p-4 w-72"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-white">Chat with us</p>
                                    <p className="text-xs text-gray-500">Typically replies in minutes</p>
                                </div>
                            </div>
                            <button onClick={() => setExpanded(false)} className="text-gray-500 hover:text-gray-300">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-sm text-gray-400 mb-3 bg-gray-800/50 rounded-lg p-3"
                        >
                            Hi! Have questions about studying abroad? We're here to help. Send us a message on WhatsApp.
                        </motion.p>
                        <a
                            href="https://wa.me/995555123456?text=Hi%20Future%20Factory,%20I%27d%20like%20to%20know%20more%20about%20studying%20abroad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp w-full text-sm"
                        >
                            Start WhatsApp Chat
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {visible && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.92 }}
                        onClick={() => setExpanded(!expanded)}
                        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1da851] text-white shadow-lg shadow-green-500/30 flex items-center justify-center"
                        aria-label="WhatsApp"
                    >
                        <AnimatePresence mode="wait">
                            {expanded ? (
                                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                    <X className="w-6 h-6" />
                                </motion.span>
                            ) : (
                                <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                    <MessageCircle className="w-7 h-7" />
                                </motion.span>
                            )}
                        </AnimatePresence>
                        {!expanded && (
                            <motion.span
                                className="absolute inset-0 rounded-full bg-[#25D366]"
                                initial={{ scale: 1, opacity: 0.4 }}
                                animate={{ scale: 1.6, opacity: 0 }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                            />
                        )}
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
