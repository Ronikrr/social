import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';

// Lazy-loaded components
const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/aboutpage'));
const Servicepage = lazy(() => import('./pages/servicepage'));
const PageTitle = lazy(() => import('./components/extra/pagetitle'));
const Ourwork = lazy(() => import('./pages/ourwork'));
const Awards = lazy(() => import('./pages/awards'));
const Client = lazy(() => import('./pages/client'));
const Careers = lazy(() => import('./pages/carrers'));
const Contact = lazy(() => import('./pages/contact'));
function App() {

  const Layout = ({ children }) => (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>} >

      <main>{children}</main>
      </Suspense>
      <Footer />
    </>
  );

  useEffect(() => {
    const detectScreenCapture = () => {
      document.body.style.filter = "blur(10px)";
      setTimeout(() => {
        document.body.style.filter = "none";
      }, 3000); // Remove blur after 3 seconds
    };

    document.addEventListener("keydown", (e) => {
      if (e.key === "PrintScreen") {
        detectScreenCapture();
      }
    });

    return () => {
      document.removeEventListener("keydown", detectScreenCapture);
    };
  }, []);




  return (
    <div id="scroll-container">
      <Router>

        <Routes>

          <Route path='/' element={
            <Layout>
              <PageTitle title="Home" />
              <Home />
            </Layout>
          } />
          <Route path='/aboutpage' element={
            <Layout>
              <PageTitle title="About Page" />
              <About />
            </Layout>
          } />
          <Route path='/service' element={
            <Layout>
              <PageTitle title="Service page" />
              <Servicepage />
            </Layout>
          } />
          <Route path='/ourwork' element={
            <Layout>
              <PageTitle title="Ourwork page" />
              <Ourwork />
            </Layout>
          } />
          <Route path='/awards' element={
            <Layout>
              <PageTitle title="Awards page" />
              <Awards />
            </Layout>
          } />
          <Route path='/client' element={
            <Layout>
              <PageTitle title="Client page" />
              <Client />
            </Layout>
          } />
          <Route path='/carrers' element={
            <Layout>
              <PageTitle title="Carrer page" />
              <Careers />
            </Layout>
          } />
          <Route path='/contact' element={
            <Layout>
              <PageTitle title="Contact page" />
              <Contact />
            </Layout>
          } />
        </Routes>
      </Router>
    </div>


  );
}

export default App;

