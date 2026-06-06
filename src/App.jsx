import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import CourseDetail from './pages/CourseDetail'
import Lesson from './pages/Lesson'
import Quiz from './pages/Quiz'
import Profile from './pages/Profile'
import DashboardLayout from './components/layout/DashboardLayout'

function LandingWrapper() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  )
}

const router = createBrowserRouter([
  {
    element: <LandingWrapper />,
    children: [
      { path: '/', element: <Landing /> },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/course/:id', element: <CourseDetail /> },
      { path: '/lesson/:id', element: <Lesson /> },
      { path: '/quiz/:courseId', element: <Quiz /> },
      { path: '/profile', element: <Profile /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
