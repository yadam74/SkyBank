import Header from './components/Header';
import GlobalStyle from './globalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accounts from './components/pages/Accounts';
import Home from './components/pages/Home';
import Payments from './components/pages/Payments';
import Messages from './components/pages/Messages';
import OpenAccount from './components/pages/OpenAccount';
import Profile from './components/pages/Profile';
import Help from './components/pages/Help';
import Footer from './components/Footer';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import { useEffect } from 'react';
import { useAppDispatch } from './shared/hooks';
import { setUser } from './shared/UserSlicer';
import UpdateProfile from './components/pages/UpdateProfile';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = window.localStorage.getItem('user');
    if (user !== null) dispatch(setUser(JSON.parse(user)));
  }, [dispatch]);

  return (
    <div className='App'>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/accounts' element={<Accounts />} />
          <Route path='/payments' element={<Payments />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/openaccount' element={<OpenAccount />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/help' element={<Help />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/updateprofile' element={<UpdateProfile />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
