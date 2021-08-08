
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages';
import BlogsSection from './pages/blogs';
import Terms from './pages/term';
import Privacy from './pages/privacy';
import BookNow from './pages/list';
import PalakKaur from './pages/psychologist1';
import ShivaniNaghnoor from './pages/psychologist2';
import AameyParekh from './pages/psychologist3';
import ShristhiAsthana from './pages/psychologist4';
import PallabiSen from './pages/psychologist5';
import blog1 from './pages/blog1';
import blog2 from './pages/blog2';
import blog3 from './pages/blog3';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/blogs" component={BlogsSection} exact />
        <Route path="/terms" component={Terms} exact />
        <Route path="/privacy" component={Privacy} exact />
        <Route path="/booknow" component={BookNow} exact />
        <Route path="/palakkaur" component={PalakKaur} exact />
        <Route path="/shivaninaghnoor" component={ShivaniNaghnoor} exact />
        <Route path="/aameyparekh" component={AameyParekh} exact />
        <Route path="/shristhiasthana" component={ShristhiAsthana} exact />
        <Route path="/pallabisen" component={PallabiSen} exact />
        <Route path="/depressiondifferfromsadness" component={blog1} exact />
        <Route path="/anxiety" component={blog2} exact />
        <Route path="/uncomfortabletalking" component={blog3} exact />
      </Switch>
    </Router>
  );
}

export default App;
