import './App.css';
import './pages/HomePage.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import About from './pages/About.js';
import ArticlesPage from './pages/ArticlesPage.js';
import Article from './pages/Article.js'
import Navbar from './Navbar.js'
import NotFound from './pages/NotFound'
import '@fontsource/roboto';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/About" component={About} />
            <Route path="/ArticlesPage" component={ArticlesPage} />
            <Route path="/Article/:name" component={Article} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
