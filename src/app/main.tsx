
import { createRoot } from 'react-dom/client'
import './index.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './route/Route'
import data from '../data'
console.log(data.A)
createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
