// we need a main layout
// then after main layout all the pages
import MainLayout from "../components/layouts/MainLayout"
import Dashboard from "../pages/Dashboard"
import Profiles from "../pages/Employees"
import Roster from "../pages/Roster"
import Feedback from "../pages/Feedback"
import ContactUs from "../pages/ContactUs"
import Announcements from "../pages/Announcements"
import AboutUs from "../pages/AboutUs"
const AdminRoute = [
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: "",
                element: <Dashboard/>
            },
            {
                path: "/employees",
                element: <Profiles/>
            },
            {
                path: "/roster",
                element: <Roster/>
            },
            {
                path: "/feedback",
                element: <Feedback/>
            },
            {
                path: "/contact",
                element: <ContactUs/>
            },
            {
                path: "/about",
                element: <AboutUs/>
            },
            {
                path: "/announcements",
                element: <Announcements/>
            },
        ]
    }
]

export default AdminRoute