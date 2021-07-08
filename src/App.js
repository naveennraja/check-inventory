import React from 'react';
import './App.css';
import './css_vendor/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import useFetch from './fetch/useFetch';
import Loading from './components/UIComponents/Loading/Loading';
import ListContainer from './container/ListContainer';
import DetailPage from './page/DetailPage';
import { INVENTORY_URL } from './Const_URL';

function App() {
  const { loading, data } = useFetch(INVENTORY_URL);

  return (
    <div className='App'>
      {/* Check if reaquest is still loading */}
      {loading && <Loading />}
      {/* Check if Data is loaded and pass the data to required components */}
      {data && data.length > 0 && (
        <>
          <HashRouter>
            <h1 className='main-heading'>Joe's Garage</h1>
            <div className='jumbotron container'>
              <Route
                exact
                path='/'
                component={() => <ListContainer contents={data} />}
              />
              <Route path='/car-detail:id' component={() => <DetailPage />} />
            </div>
          </HashRouter>
        </>
      )}
    </div>
  );
}
export default App;
