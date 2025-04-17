import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { ErrorPage } from './pages/ErrorPage';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/contact' element={<ContactUsPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </main>
  );
}

export default App;
