import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';
import { EnquiryForm } from '@/components/EnquiryForm';
import { getBlogPost, blogPosts } from '@/data/blog';

export function BlogDetailPage() {
  const { id } = useParams();
  const post = id ? getBlogPost(id) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);
  const fallbackRelated = related.length > 0 ? related : blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  const renderContent = (content: string) => {
    const sections = content.split(/^## /m).filter(Boolean);
    return sections.map((section, i) => {
      const lines = section.trim().split('\n');
      const heading = lines[0];
      const body = lines.slice(1).join('\n').trim();

      if (i === 0 && !content.startsWith('## ')) {
        const introLines = section.trim().split('\n');
        const introText = introLines.join('\n').trim();
        return (
          <div key={i} className="prose-ff max-w-none">
            <p className="text-lg leading-relaxed text-slate-600">{introText}</p>
          </div>
        );
      }

      const listItems = body.match(/^- .+$/gm);
      const paragraphs = body.replace(/^- .+$/gm, '').trim().split(/\n\n+/);

      return (
        <div key={i} className="mt-8">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">{heading}</h2>
          {paragraphs.filter(Boolean).map((p, j) => (
            <p key={j} className="mb-4 leading-relaxed text-slate-600">
              {p.replace(/\*\*(.+?)\*\*/g, '$1')}
            </p>
          ))}
          {listItems && (
            <ul className="mb-4 space-y-2 pl-5">
              {listItems.map((item, k) => (
                <li key={k} className="list-disc text-slate-600">
                  {item.replace(/^- /, '').replace(/\*\*(.+?)\*\*/g, '$1')}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    });
  };

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        subtitle={post.excerpt}
        image={post.image}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Blog', path: '/blog' },
          { label: post.category },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-brand-400" /> {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-brand-400" /> {post.readTime}
          </span>
        </div>
      </PageHero>

      {/* Article body */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="mb-8">
                <Link to="/blog" className="btn-secondary">
                  <ArrowLeft className="h-4 w-4" /> Back to blog
                </Link>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <article className="mt-10">{renderContent(post.content)}</article>
              <div className="mt-10 flex items-center gap-2">
                <Tag className="h-4 w-4 text-slate-400" />
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                  {post.category}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="section-eyebrow">Want personalised help?</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Reading is good. Doing is better.
            </h2>
            <p className="mt-4 text-slate-600">
              Book a free consultation and we will apply the guidance from this article to your specific situation —
              university selection, visa timeline, costs, and all.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <EnquiryForm leadType="enquiry" compact title="Get personalised advice" />
          </Reveal>
        </div>
      </section>

      {/* Related posts */}
      <section className="py-16 lg:py-24">
        <div className="container-page">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">Related articles</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {fallbackRelated.map((p) => (
              <Link key={p.id} to={`/blog/${p.id}`} className="card group flex flex-col overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-brand-600">{p.category}</span>
                  <h3 className="mt-2 font-bold leading-snug text-slate-900 group-hover:text-brand-700 line-clamp-2">
                    {p.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2">
                    Read <ArrowRight className="h-3.5 w-3.5 transition-all" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}
