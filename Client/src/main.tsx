import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page.tsx';
import ContactUs from './routes/ContactUs.tsx';
import About from './routes/About.tsx';
import CreateQuote from './routes/CreateQuote.tsx';
import PostQuoteProvider from './context/post/postProvider.tsx';
import AuthProvider from './context/auth/authProvider.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/create-quote/:id",
    element: <CreateQuote />,
  },
  {
    path: "/create-quote",
    element: <CreateQuote />,
  }

]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <PostQuoteProvider>
        <RouterProvider router={router} />
      </PostQuoteProvider>
    </AuthProvider>
  </StrictMode>,
)
