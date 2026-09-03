import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import About from '@/pages/About';
import WhyGeorgia from '@/pages/WhyGeorgia';
import Universities from '@/pages/Universities';
import UniversityDetail from '@/pages/UniversityDetail';
import MbbsNursing from '@/pages/MbbsNursing';
import SuccessStories from '@/pages/SuccessStories';
import Gallery from '@/pages/Gallery';
import Visa from '@/pages/Visa';
import Contact from '@/pages/Contact';
import FAQ from '@/pages/FAQ';
import Blog from '@/pages/Blog';
import NotFound from '@/pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/why-georgia" element={<WhyGeorgia />} />
                        <Route path="/universities" element={<Universities />} />
                        <Route path="/universities/:id" element={<UniversityDetail />} />
                        <Route path="/mbbs-nursing" element={<MbbsNursing />} />
                        <Route path="/success-stories" element={<SuccessStories />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/visa" element={<Visa />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
                <WhatsAppButton />
            </div>
        </BrowserRouter>
    );
}

export default App;
