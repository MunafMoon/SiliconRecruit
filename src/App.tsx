import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import TeamsCondition from './pages/TeamsCondition';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Login from './pages/Login';
import TeamsConditionCheck from './pages/TeamsConditionCheck';
import Layout from './components/Layout';
import ScrollToTop from './ScrollToTop'; // Import your custom component
import './index.css';
import Permanent from './pages/Services/permanent'
import Temporary from './pages/Services/temporary'
import Contract from './pages/Services/contract'

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add your custom scroll to top component here */}
      <Layout>
        <Routes>
          <Route path="/SiliconRecruit" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms-conditions" element={<TeamsCondition />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/permanent" element={<Permanent/>} />
          <Route path="/services/temporary" element={<Temporary />} />
          <Route path="/services/contract" element={<Contract />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/get-started" element={<TeamsConditionCheck />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;