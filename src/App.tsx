import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { ScrollToTop } from '@/components/ScrollToTop';

import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { WhyGeorgiaPage } from '@/pages/WhyGeorgiaPage';
import { UniversitiesPage } from '@/pages/UniversitiesPage';
import { UniversityDetailPage } from '@/pages/UniversityDetailPage';
import { CoursesPage } from '@/pages/CoursesPage';
import { AdmissionProcessPage } from '@/pages/AdmissionProcessPage';
import { VisaAssistancePage } from '@/pages/VisaAssistancePage';
import { AccommodationPage } from '@/pages/AccommodationPage';
import { StudentLifePage } from '@/pages/StudentLifePage';
import { SuccessStoriesPage } from '@/pages/SuccessStoriesPage';
import { StoryDetailPage } from '@/pages/StoryDetailPage';
import { FaqsPage } from '@/pages/FaqsPage';
import { BlogPage } from '@/pages/BlogPage';
import { BlogDetailPage } from '@/pages/BlogDetailPage';
import { ContactPage } from '@/pages/ContactPage';
import { SeoPage } from '@/pages/SeoPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/why-georgia" element={<WhyGeorgiaPage />} />
                        <Route path="/universities" element={<UniversitiesPage />} />
                        <Route path="/universities/:id" element={<UniversityDetailPage />} />
                        <Route path="/courses" element={<CoursesPage />} />
                        <Route path="/admission-process" element={<AdmissionProcessPage />} />
                        <Route path="/visa-assistance" element={<VisaAssistancePage />} />
                        <Route path="/accommodation" element={<AccommodationPage />} />
                        <Route path="/student-life" element={<StudentLifePage />} />
                        <Route path="/success-stories" element={<SuccessStoriesPage />} />
                        <Route path="/success-stories/:id" element={<StoryDetailPage />} />
                        <Route path="/faqs" element={<FaqsPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/blog/:id" element={<BlogDetailPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/seo/:slug" element={<SeoPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer />
                <FloatingWhatsApp />
            </div>
        </BrowserRouter>
    );
}

export default App;
