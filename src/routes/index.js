import { createBrowserRouter} from 'react-router-dom';
import App from '../App';
import { Home } from '../pages/Home/Home';
import { About } from '../pages/About/About.js';
import { Skill } from '../pages/Skill/Skill';
import { Resume } from '../pages/Resume/Resume';
import { Contact } from '../pages/Contact/Contact';
import { Project } from '../pages/Project/Project.js';


const router = createBrowserRouter([{
    path:'/',
    element:<App/>,
    children: [
        {
            path:"/",
            element: <Home/>
        },
        {
            path:"/about",
            element: <About/>       
        },
        {
            path:"/skill",
            element: <Skill/>
        },
        {
            path:"/resume",
            element: <Resume/>
        },
        {
            path:"/contact",
            element: <Contact/>
        },
        {
            path:"/project",
            element: <Project/>
        }
    ]
}
]);

export default router;