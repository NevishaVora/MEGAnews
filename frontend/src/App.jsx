import { useEffect, useState } from 'react';
import './App.css';
import './style/style.css';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

import Home from './Components/Home/Index';
import PostDetail from './Components/PostDetail/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoriesSection from './Components/CategoriesSection/Index';
import Writer from './Components/Writer/Index';
import ContactUs from './Components/ContactUs/Index';
import AboutUs from './Components/AboutUs/Index';
import Profile from './Components/Profile/Index';
import ProfileSendPost from './Components/ProfileSendPost/Index';
import ProfilePost from './Components/ProfilePost/Index';
import EditProfile from './Components/EditProfile';
import PageNotFound from './Components/PageNotFound';
import Dashboard from './Components/Dashboard';
import { applyMiddleware, createStore } from 'redux';

import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import { ToastContainer } from 'react-toastify';
import User from './Components/User';
import Wrapper from './Components/Wrapper';
import rootReducer from './Components/redux/Reducers/Index.reducer';
import CategoryAdd from './Components/CategoryAdd';
import ContactDashboard from './Components/ContactDashboard';
import CategoryPost from './Components/CategoryPost';
import Admin from './Components/Admin/Index';
import SavePost from './Components/SavePost';
import ProtectedRoute from './Components/ProtectedRoute/Index';


function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/PostDetail/:id" element={<PostDetail />} />
            <Route path="/CategoriesSection" element={<CategoriesSection />} />
            <Route path="/Writer" element={<Writer />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/AboutUs" element={<AboutUs />} />

            {/* Protected Routes for All Authenticated Users */}
            <Route element={<ProtectedRoute />}>
              <Route path="/Profile" element={<Profile />} />
              <Route path="/ProfileSendPost" element={<ProfileSendPost />} />
              <Route path="/ProfilePost" element={<ProfilePost />} />
              <Route path="/SavePost" element={<SavePost />} />
              <Route path="/EditProfile" element={<EditProfile />} />
            </Route>

            {/* Protected Routes for Admin Only */}
            <Route element={<ProtectedRoute adminOnly={true} />}>
              <Route path="/dashboard" element={<Wrapper><Dashboard /></Wrapper>} />
              <Route path="/User" element={<Wrapper><User /></Wrapper>} />
              <Route path="/CategoryAdd" element={<Wrapper><CategoryAdd /></Wrapper>} />
              <Route path="/ContactDashboard" element={<Wrapper><ContactDashboard /></Wrapper>} />
            </Route>

            <Route path="/*" element={<PageNotFound />} />
          </Routes>

        </BrowserRouter>
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
