import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { AnimatedLineSaver } from '@/components/AnimatedLineSaver';

interface PageHeroProps {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    image?: string;
    breadcrumbs?: { label: string; path?: string }[];
    children?: React.ReactNode;
}

export function PageHero({ eyebrow, title, subtitle, image, breadcrumbs, children }: PageHeroProps) {
    return (
        <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20 lg:pt-40 lg:pb-28">
            <div className="absolute inset-0">
                <img
                    src="/images/WhatsApp_Image_2026-07-30_at_11.56.57.jpeg"
                    alt=""
                    className="h-full w-full object-cover opacity-25"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/60 to-slate-950/85" />
            </div>
            {image && (
                <div className="absolute inset-0">
                    <img src={image} alt="" className="h-full w-full object-cover opacity-20" loading="eager" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
                </div>
            )}
            <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_90%_0%,rgba(220,38,38,0.12),transparent)]" />
            <AnimatedLineSaver />
            <div className="container-page relative z-10">
                {breadcrumbs && (
                    <nav className="mb-5 flex items-center gap-1.5 text-sm text-slate-400" aria-label="Breadcrumb">
                        {breadcrumbs.map((bc, i) => (
                            <span key={i} className="flex items-center gap-1.5">
                                {bc.path ? (
                                    <Link to={bc.path} className="transition-colors hover:text-white">
                                        {bc.label}
                                    </Link>
                                ) : (
                                    <span className="text-slate-300">{bc.label}</span>
                                )}
                                {i < breadcrumbs.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-slate-600" />}
                            </span>
                        ))}
                    </nav>
                )}
                {eyebrow && (
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-300 ring-1 ring-inset ring-brand-500/30">
                        {eyebrow}
                    </span>
                )}
                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
                {subtitle && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{subtitle}</p>}
                {children && <div className="mt-8">{children}</div>}
            </div>
        </section>
    );
}
