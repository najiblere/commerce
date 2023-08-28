import ContactPage from './pages/contact'
import Home from './pages/home'
import About from './pages/about'
import { BrowserRouter as Routery, Route, Routes, HashRouter as Router } from 'react-router-dom';
import './styles/App.scss';
import Members from './pages/members';
import MemberDetails from './pages/memberDetails';
import LatestNews from './pages/latestNews';

function App() {

  return (
    <div>
     <Router>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/testimonies" element={<Home/>}/>
           
          <Route exact path="/appointments" element={<ContactPage/>}/>
          <Route exact path="/news" element={<LatestNews/>}/>
          <Route exact path="/news/:id" element={<LatestNews/>}/>
          <Route exact path="/members" element={<Members/>}/>
          <Route exact path="/members/:uname" element={<MemberDetails/>}/>
           
          <Route exact path="/home" element={<Home/>}/>
          <Route path="/*" element={<Home />} />

        </Routes>
      </Router>
      {//<SupportButton/>
}
    </div>
  );
}

export default App;
