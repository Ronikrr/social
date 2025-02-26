import Servicepage from './pages/servicepage';
import PageTitle from './components/extra/pagetitle';
import Ourwork from './pages/ourwork';
import Awards from './pages/awards';
import Client from './pages/client';
import Carrers from './pages/carrers';
import Contact from './pages/contact';
import Home from './pages/home';
import About from './pages/aboutpage';

export const ROUTES = [
    {
        "path": "/",
        "title": "Home",
        "component": <Home/>
    },
    {
        "path": "/aboutpage",
        "title": "About Page",
        "component": "About"
    },
    {
        "path": "/service",
        "title": "Service Page",
        "component": "Servicepage"
    },
    {
        "path": "/ourwork",
        "title": "Our Work Page",
        "component": "Ourwork"
    },
    {
        "path": "/awards",
        "title": "Awards Page",
        "component": "Awards"
    },
    {
        "path": "/client",
        "title": "Client Page",
        "component": "Client"
    },
    {
        "path": "/carrers",
        "title": "Careers Page",
        "component": "Carrers"
    },
    {
        "path": "/contact",
        "title": "Contact Page",
        "component": "Contact"
    }
]
