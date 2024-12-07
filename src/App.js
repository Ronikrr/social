
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ourservices from './components/services/ourservices';
import Servicepage from './pages/servicepage';
import Ourwork from './pages/ourwork';
import Awards from './pages/awards';
import "bootstrap-icons/font/bootstrap-icons.css";
import Clients from './pages/clients';
import Team from './pages/team';
import Career from './pages/career';
import Worksupage from './components/sliderdata/worksupage';
import Contact from './pages/contact';
import "flickity/dist/flickity.min.css";
import Loader from './components/loader';
import { useEffect, useState } from 'react';
import Comingsoon from './pages/comingsoon';
import NotFound from './pages/notfound';

function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setloading(false), 5000);
    return () => clearTimeout(timer);
  }, []);


  const Layout = ({ children }) => (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );

// return loading ? (
//   <Loader />
// ) : (
//   <Router>
//       {/* Conditionally render Header and Footer */}
//       {!noHeaderFooterRoutes.includes(currentPath) && <Header />}

  //       <Routes>
  //         <Route path='/commingsoon' element={<Home />} />
  //         <Route path='/about' element={<About />} />
  //         <Route path='/services' element={<Ourservices />} />
  //         <Route path='/ourwork' element={<Ourwork />} />
  //         <Route path='/ourwork/:slidetext' element={<Worksupage />} />
  //         <Route path='/awards' element={<Awards />} />
  //         <Route path='/clients' element={<Clients />} />
  //         <Route path='/team' element={<Team />} />
  //         <Route path='/career' element={<Career />} />
  //         <Route path='/contact' element={<Contact />} />
  //         <Route path='/' element={<Comingsoon />} />
  //       </Routes>

  //       {/* Conditionally render Footer */}
  //       {!noHeaderFooterRoutes.includes(currentPath) && <Footer />}
  //     </Router>
  // );
  return (
    <Router>
      <Routes>
        <Route path='/commingsoon' element={<Layout><Home /></Layout>} />
        <Route path='/about' element={<Layout><About /> </Layout>} />
        <Route path='/services' element={<Layout><Servicepage /> </Layout>} />
        <Route path='/ourwork' element={<Layout><Ourwork /> </Layout>} />
        <Route path='/ourwork/:slidetext' element={<Layout><Worksupage /> </Layout>} />
        <Route path='/awards' element={<Layout><Awards /> </Layout>} />
        <Route path='/clients' element={<Layout><Clients /> </Layout>} />
        <Route path='/team' element={<Layout><Team /> </Layout>} />
        <Route path='/career' element={<Layout><Career /> </Layout>} />
        <Route path='/contact' element={<Layout><Contact /> </Layout>} />
        <Route path='/' element={<Comingsoon />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
