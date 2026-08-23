import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const staggerContainerFast: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
};

interface RevealProps {
    children: ReactNode;
    variants?: Variants;
    className?: string;
    delay?: number;
    once?: boolean;
    amount?: number;
}

export function Reveal({ children, variants = fadeInUp, className, delay, once = true, amount = 0.2 }: RevealProps) {
    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            transition={delay ? { delay } : undefined}
        >
            {children}
        </motion.div>
    );
}

interface StaggerGroupProps {
    children: ReactNode;
    className?: string;
    fast?: boolean;
    once?: boolean;
    amount?: number;
}

export function StaggerGroup({ children, className, fast = false, once = true, amount = 0.15 }: StaggerGroupProps) {
    return (
        <motion.div
            className={className}
            variants={fast ? staggerContainerFast : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
        >
            {children}
        </motion.div>
    );
}

interface StaggerItemProps {
    children: ReactNode;
    className?: string;
    variants?: Variants;
}

export function StaggerItem({ children, className, variants = fadeInUp }: StaggerItemProps) {
    return (
        <motion.div className={className} variants={variants}>
            {children}
        </motion.div>
    );
}

export { motion };
