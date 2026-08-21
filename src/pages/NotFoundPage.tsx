import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

export function NotFoundPage() {
    return (
        <section className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-5 pt-20">
            <div className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                    <Home className="h-10 w-10" />
                </div>
                <h1 className="text-6xl font-bold text-slate-900 lg:text-7xl">404</h1>
                <h2 className="mt-4 text-2xl font-bold text-slate-800">Page not found</h2>
                <p className="mx-auto mt-3 max-w-md text-slate-500">
                    The page you are looking for does not exist or may have been moved. Let us get you back on track.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link to="/" className="btn-primary">
                        Back to home <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link to="/contact" className="btn-secondary">
                        Contact us
                    </Link>
                </div>
            </div>
        </section>
    );
}
