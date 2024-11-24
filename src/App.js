import React, { Fragment } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { routes } from './routes';

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          {
            routes.map((item, index) => {
              const Page = item.page;
              const Layout = item.isShowHeader ? DefaultComponent : Fragment;

              return (
                <Route key={index} path={item.path} element={
                  <Layout>
                    <Page />
                  </Layout>
                } />
              )
            })
          }
        </Routes>
      </Router>
    </>
  )
}