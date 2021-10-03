import UserPage from "./components.js/UserPage"
import TimeSharePage from './components.js/TimeSharePage';
import FinishedRealEstatePage from './components.js/FinishedRealEstatePage';
import RealEstateUnderConstructionPage from './components.js/RealEstateUnderConstructionPage';
import ContactsPage from './components.js/ContactsPage';
import FAQPage from './components.js/FAQPage';
import AuthorisationPage from './components.js/AuthorisationPage';
import HomePage from './components.js/HomePage';
import Error404Page from './components.js/Error404Page';
import ProjectCardPage from './components.js/ProjectCardPage';
import LoginPage from "./components.js/LoginPage";

export const authRoutes = [
    {
        path: '/personalAccount',
        Component: UserPage
    }
]

export const publicRoutes = [
    {
        path: '/TimeShare',
        Component: TimeSharePage
    },
    {
        path: '/FinishedRealEstate',
        Component: FinishedRealEstatePage
    },
    {
        path: '/RealEstate',
        Component: RealEstateUnderConstructionPage
    },
    {
        path: '/Contacts',
        Component: ContactsPage
    },
    {
        path: '/FAQ',
        Component: FAQPage
    },
    {
        path: '/Authorisation',
        Component: AuthorisationPage
    },
    {
        path: '/404',
        Component: Error404Page
    },
    {
        path: '/ProjectPage/:projectId',
        Component: ProjectCardPage
    },
    {
        path: '/Login',
        Component: LoginPage
    },
    {
        path: '/',
        Component: HomePage
    }

]