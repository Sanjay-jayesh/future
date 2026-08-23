import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, Search, Tag } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { blogPosts } from '@/data/content';

const categories = ['All', 'Visa Guides', 'Scholarships', 'Student Life', 'Study Programs', 'Accommodation'];

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [search, setSearch] = useState('');

    const filtered = blogPosts.filter((post) => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.excerpt.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featured = blogPosts[0];

    return (
        <>
            <PageHero
                label="Blog & Resources"
                title="Study Abroad Resources"
                subtitle="Guides, tips, and insights to help you navigate your study-abroad journey. From visa applications to packing lists — we've got you covered."
                image="https://images.pexels.com/photos/6549598/pexels-photo-6549598.jpeg?auto=compress&cs=tinysrgb&w=1920"
                breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Blog' }]}
            />

            <section className="py-16 lg:py-24">
                <div className="container-page">
                    {/* Featured Post */}
                    <div className="card overflow-hidden mb-12 group cursor-pointer">
                        <div className="grid lg:grid-cols-2 gap-0">
                            <div className="relative h-64 lg:h-80 overflow-hidden">
                                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-secondary-500 text-white text-xs font-bold">Featured</span>
                            </div>
                            <div className="p-8 flex flex-col justify-center">
                                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-primary-50 text-primary-700 text-xs font-medium">
                                        <Tag className="w-3 h-3" /> {featured.category}
                                    </span>
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {featured.date}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {featured.readTime}</span>
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                                    {featured.title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-5">{featured.excerpt}</p>
                                <p className="text-sm text-gray-400 mb-5">By {featured.author}</p>
                                <span className="inline-flex items-center gap-1 text-primary-600 font-medium text-sm group-hover:gap-2 transition-all">
                                    Read More <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Search + Filters */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
                        <div className="flex items-center gap-2 flex-wrap">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeCategory === cat
                                            ? 'bg-primary-600 text-white shadow-sm shadow-primary-600/30'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm w-full lg:w-64 focus:outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all"
                            />
                        </div>
                    </div>

                    {/* Blog Grid */}
                    {filtered.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filtered.map((post, i) => (
                                <div key={post.id} className="card overflow-hidden group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
                                    <div className="relative h-48 overflow-hidden">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium">
                                            {post.category}
                                        </span>
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors leading-snug">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{post.excerpt}</p>
                                        <span className="inline-flex items-center gap-1 text-primary-600 font-medium text-sm group-hover:gap-2 transition-all">
                                            Read More <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No articles found. Try a different search or category.</p>
                        </div>
                    )}

                    {/* Newsletter CTA */}
                    <div className="mt-16 bg-gradient-to-br from-primary-900 to-accent-800 rounded-2xl p-10 text-center">
                        <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>
                        <p className="text-white/80 mb-6 max-w-xl mx-auto">
                            Get the latest study-abroad guides, scholarship alerts, and tips delivered to your inbox.
                        </p>
                        <Link to="/contact" className="btn-accent">
                            Subscribe via Consultation
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
