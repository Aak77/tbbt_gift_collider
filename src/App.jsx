import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import MyGiftsPage from './pages/MyGiftsPage';
import FeedsPage from './pages/FeedsPage';
import { ensureAnonymousAuth } from './services/anonAuth';

function Protected({ user, children }) {
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('giftColliderUser');
    return raw ? JSON.parse(raw) : null;
  });

  useEffect(() => {
    // Allows Firestore rules like `request.auth != null` while we keep manual-user gating.
    ensureAnonymousAuth().catch(() => {});
  }, []);

  const auth = useMemo(
    () => ({
      user,
      login: (nextUser) => {
        localStorage.setItem('giftColliderUser', JSON.stringify(nextUser));
        setUser(nextUser);
      },
      logout: () => {
        localStorage.removeItem('giftColliderUser');
        setUser(null);
      },
    }),
    [user],
  );

  return (
    <Routes>
      <Route path="/login" element={<LoginPage auth={auth} />} />
      <Route path="/" element={<Protected user={user}><HomePage auth={auth} /></Protected>} />
      <Route path="/my-gifts" element={<Protected user={user}><MyGiftsPage auth={auth} /></Protected>} />
      <Route path="/feeds" element={<Protected user={user}><FeedsPage auth={auth} /></Protected>} />
      <Route path="*" element={<Navigate to={user ? '/' : '/login'} replace />} />
    </Routes>
  );
}
