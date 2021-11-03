import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Route, useHistory, Switch } from 'react-router-dom';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup';
// import EditProfilePopup from './EditProfilePopup';
// import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import InfoTooltip from './InfoTooltip';
import ConfirmDeletePopup from './ConfirmDeletePopup';
import Login from './Login.js';
import Register from './Register.js';
import * as auth from '../utils/auth.js';
import MobileMenu from './MobileMenu';
import { getCards } from "../../src/store/actions/cardActions";
import { userInfo, getUser } from "../store/actions/userActions";
import * as actions from "../store/actions/index";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const [isEditProfilePopupOpen, setProfilePopupOpen] = useState(false); // ЕСЛИ ПОНАДОБИТСЯ 
  // const [isEditAvatarPopupOpen, setAvatarPopupOpen] = useState(false); // ДЕЛАТЬ ЛК С АВОЙ И ПРОФИЛЕМ
  const [isAddPlacePopupOpen, setPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginPage, setLoginPage] = useState(true);
  const [isAuth, setIsAuth] = useState(true);
  const [isOpenMobileMenu, setOpenMobileMenu] = useState(false);
  const [isConfirmDeletePopup, setConfirmDeletePopup] = useState(false)
  const [textSubmit, setTextSubmit] = useState('Добавить');
  const [isLoading, setIsLoading] = useState(false);

  const cards = useSelector((state) => state.cardReducer.cards);

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    dispatch(getUser(token));
    dispatch(userInfo());
    setLoggedIn(true);
    history.push('/');
  }

  useEffect(() => {
    dispatch(getCards());
    tokenCheck();
  }, [dispatch])

  // const handleEditAvatarClick = () => {
  //   setAvatarPopupOpen(true);
  // }

  // const handleEditProfileClick = () => {
  //   setProfilePopupOpen(true);
  // }

  const handleAddPlaceClick = () => {
    setTextSubmit('Добавить');
    setPlacePopupOpen(true);
  }

  const handleCardClick = () => {
    setImagePopupOpen(true);
  }

  const handleDeleteCard = (id) => {
    setConfirmDeletePopup(true);
  }

  const closeAllPopups = () => {
    // setProfilePopupOpen(false);
    // setAvatarPopupOpen(false);
    setPlacePopupOpen(false);
    setImagePopupOpen(false);
    setInfoTooltipOpen(false);
    setConfirmDeletePopup(false);
    dispatch({ type: actions.ADD_CARD_FAILURE, cardError: false });
  }

  function showLoader() {
    setIsLoading(!isLoading);
  }


  function onRegister(data) {
    auth.register(data)
      .then((res) => {
        if (res) {
          setInfoTooltipOpen(true);
          history.push('/signin');
          setLoginPage(true);
          setIsAuth(true);
        }
      })
      .catch((err) => {
        setIsAuth(false);
        setInfoTooltipOpen(true);
      });
  };

  function onLogin(data) {
    auth.authorize(data)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          tokenCheck();
        }
      })
      .catch((err) => {
        setIsAuth(false);
        setInfoTooltipOpen(true);
      });
  };

  const signOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    history.push('/signin');
    setLoginPage(true);
  }

  function linkTo() {
    if (loginPage) {
      history.push('/signup');
      setLoginPage(false);
    } else {
      history.push('/signin');
      setLoginPage(true);
    }
  }

  function openMobileMenu() {
    isOpenMobileMenu ? setOpenMobileMenu(false) : setOpenMobileMenu(true);
  }

  return (
    <div className="page">
      <div className="page__container">
        <MobileMenu loggedIn={loggedIn}
          signOut={signOut}
          loginPage={loginPage}
          setLoginPage={setLoginPage}
          linkTo={linkTo}
          isOpenMobileMenu={isOpenMobileMenu}
        />
        <Header loggedIn={loggedIn}
          signOut={signOut}
          loginPage={loginPage}
          setLoginPage={setLoginPage}
          linkTo={linkTo}
          openMobileMenu={openMobileMenu}
          isOpenMobileMenu={isOpenMobileMenu}
        />
        <Switch >
          <Route exact path="/signup">
            <Register onRegister={onRegister} setLoginPage={setLoginPage} />
          </Route>
          <Route exact path="/signin" >
            <Login onLogin={onLogin} />
          </Route>
          <Route exact path="/">
            <Main
              loggedIn={loggedIn}
              // onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              // onEditAvatar={handleEditAvatarClick}
              dataImage={setSelectedCard}
              openPopImage={handleCardClick}
              cards={cards}
              onConfirmDelete={handleDeleteCard}
            />
          </Route>
        </Switch>
        {/* <Route exact path="/*" >
              <Error404 linkToBack={linkToBack} 
              // setHeadlessPage={setHeadlessPage} 
              />
            </Route> */}
        <Footer />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          textSubmit={textSubmit}
          setTextSubmit={setTextSubmit}
          closeAllPopups={closeAllPopups}
        />
        {/* <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          /> */}
        <ConfirmDeletePopup
          isOpen={isConfirmDeletePopup}
          onClose={closeAllPopups}
          isConfirmDeletePopup={isConfirmDeletePopup}
        />
        {/* <EditAvatarPopup
            card={selectedCard}
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          /> */}
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isImagePopupOpen}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
          showLoader={showLoader}
        />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          setIsAuth={setIsAuth}
          isAuth={isAuth}
        />
      </div>
    </div>
  );
}

export default App;