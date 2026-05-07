import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('./pages/HomePage'))
const BlogIndexPage = lazy(() => import('./pages/BlogIndexPage'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'))
const StudioPage = lazy(() => import('./pages/StudioPage'))
const TermsAndConditionsPage = lazy(() => import('./pages/TermsAndConditionsPage'))
const AccountDeletionPage = lazy(() => import('./pages/AccountDeletionPage'))

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/studio/*" element={<StudioPage />} />
        <Route path="/terms" element={<TermsAndConditionsPage />} />
        <Route path="/account-deletion" element={<AccountDeletionPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

export default App
