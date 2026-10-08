import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState, createContext, useContext } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import Industries from './Pages/Industries';
import FAQ from './Pages/FAQ';
import Blog from './Pages/Blog';
import ProductDetail from './Pages/ProductDetail';

export const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

function SEO({ title, description }) {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = description;
  }, [title, description]);
  return null;
}

function App() {
  const [language, setLanguage] = useState('en');
  const value = { language, setLanguage };
  return (
    <LanguageContext.Provider value={value}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </LanguageContext.Provider>
  );
}

export { SEO };
export default App;
