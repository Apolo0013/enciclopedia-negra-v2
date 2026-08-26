
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './route/Route'
//scss e tailwind
import './index.scss'
import '../styles/_tailwind.css'
createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
