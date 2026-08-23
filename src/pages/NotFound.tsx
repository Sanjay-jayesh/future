import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="text-center">
                <div className="relative inline-block mb-8">
                    <p className="text-[120px] sm:text-[180px] font-bold font-display bg-gradient-to-br from-primary-600 to-accent-500 bg-clip-text text-transparent leading-none">
                        404
                    </p>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Home className="w-16 h-16 text-primary-200" />
                    </div>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Page Not Found</h1>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    The page you\'re looking for doesn\'t exist or has been moved. Let\'s get you back on track.
                </p>
                <Link to="/" className="btn-primary">
                    Back to Home
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
