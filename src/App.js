import './App.css';
import Home from './pages/home';
import About from './pages/aboutpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Servicepage from './pages/servicepage';
import PageTitle from './components/extra/pagetitle';
import Ourwork from './pages/ourwork';
import Awards from './pages/awards';
import Client from './pages/client';
import Carrers from './pages/carrers';
import Contact from './pages/contact';
import Footer from './components/footer';
import { useEffect } from 'react';
function App() {

  const Layout = ({ children }) => (
    <>
      <Header />
      <main>{children}</main>
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
              <Carrers />
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

