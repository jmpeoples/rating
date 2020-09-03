import React from 'react';
import { Link, Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

import RatingPage from './pages/rating/rating-page';
import RatingsListPage from './pages/rating/rating-list/rating-list';
import './App.css';

function App() {
  return (
   <div className="App">
     <nav>
       <Link to="/">Home</Link>
       <Link to="/rating">Rate</Link>
       <Link to="/ratinglist">My Ratings</Link>
     </nav>
     <main>
       <Route exact path="/" component={() => 'Home Page'} />
       <SecureRoute exact path="/rating" component={RatingPage} />
       <SecureRoute exact path="/ratinglist" component={RatingsListPage} />
       <Route path="/implicit/callback" component={ImplicitCallback} />
     </main>
   </div>
  );
}

export default App;
