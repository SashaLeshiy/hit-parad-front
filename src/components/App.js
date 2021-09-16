import React, { useState, useEffect } from 'react';
import { Route, useHistory, Switch, Redirect } from 'react-router-dom';
import { api } from '../utils/api';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import InfoTooltip from './InfoTooltip';
import ConfirmDeletePopup from './ConfirmDeletePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Login from './Login.js';
import Register from './Register.js';
import ProtectedRoute from './ProtectedRoute';
import * as auth from '../utils/auth.js';
import MobileMenu from './MobileMenu';

function App() {
  const history = useHistory();
  const [isEditProfilePopupOpen, setProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setEmail] = useState('');
  const [loginPage, setLoginPage] = useState(true);
  const [isAuth, setIsAuth] = useState(true);
  const [isOpenMobileMenu, setOpenMobileMenu] = useState(false);
  const [isConfirmDeletePopup, setConfirmDeletePopup] = useState(false)
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem('songs')));
  const [textSubmit, setTextSubmit] = useState('Добавить');

  const handleEditAvatarClick = () => {
    setAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setPlacePopupOpen(true);
  }

  const handleCardClick = () => {
    setImagePopupOpen(true);
  }

  const handleDeleteCard = () => {
    setConfirmDeletePopup(true);
  }

  const closeAllPopups = () => {
    setProfilePopupOpen(false);
    setAvatarPopupOpen(false);
    setPlacePopupOpen(false);
    setImagePopupOpen(false);
    setInfoTooltipOpen(false);
    setConfirmDeletePopup(false);
    setIsAuth(true);
  }

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    auth.getContent(token)
      .then((res) => {
        if (res) {
          setEmail(res.email);
          setLoggedIn(true);
          history.push('/');
        }
      })
      .then(() => {
        api.getUserInfo()
          .then((res) => {
            setCurrentUser(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      // .then(() => {
      //   api.getInitialCards()
      //     .then((res) => {
      //       setCards(res);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getSongs();
    tokenCheck();
  }, [])


  function getSongs() {
    api.getInitialCards()
      .then((res) => {
        localStorage.setItem('songs', JSON.stringify(res));
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }


  function handleUpdateUser({ name, about }) {
    api.setUser(name, about)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar({ avatar }) {
    api.setAvatar(avatar)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlace({ name, link }) {
    api.setCard(name, link)
      .then((res) => {
        setCards([res, ...cards])
        closeAllPopups();
        setTextSubmit('Добавить');
      })
      .catch((err) => {
        closeAllPopups();
        setIsAuth(false);
        setInfoTooltipOpen(true);
        console.log(err);
        setTextSubmit('Добавить');
      });
      
  }

  function handleCardLike({ id, likes }) {
    const isLiked = likes.some(i => i === currentUser._id);
    let likeMethod = '';
    isLiked ? likeMethod = api.deleteLike(id) : likeMethod = api.putLike(id) ;
    likeMethod
      .then((newCard) => {
        setCards((state) => state.map((elem) => elem._id === id ? newCard : elem));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardListen({ id }) {
    api.putListen(id)
      .then((newCard) => {
        setCards((state) => state.map((elem) => elem._id === id ? newCard : elem))
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete({ id }) {
    api.deleteCard(id)
      .then(() => {
        setCards((state) => state.filter((elem) => elem._id !== id))
      })
      .catch((err) => {
        console.log(err);
      })
  }


  function onRegister(data) {
    auth.register(data)
      .then((res) => {
        if (res) {
          setInfoTooltipOpen(true);
          history.push('/signin');
          setLoginPage(true);
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
    localStorage.removeItem('token');
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
        <CurrentUserContext.Provider value={currentUser}>
          <MobileMenu loggedIn={loggedIn}
            email={userEmail}
            signOut={signOut}
            loginPage={loginPage}
            setLoginPage={setLoginPage}
            linkTo={linkTo}
            isOpenMobileMenu={isOpenMobileMenu}
          />
          <Header loggedIn={loggedIn}
            email={userEmail}
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
              <Main loggedIn={loggedIn}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              dataImage={setSelectedCard}
              openPopImage={handleCardClick}
              setCards={setCards}
              cards={cards}
              onCardLike={handleCardLike}
              onCardListen={handleCardListen}
              onCardDelete={handleCardDelete}
              onConfirmDelete={handleDeleteCard}
            />
            </Route>
            {/* <Route>
              {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
            </Route> */}
          </Switch>
          <Footer />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlace}
            textSubmit={textSubmit}
            setTextSubmit={setTextSubmit}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser} />
          <ConfirmDeletePopup
            isOpen={isConfirmDeletePopup}
            onClose={closeAllPopups}
            onCardDelete={handleCardDelete}
          />
          <EditAvatarPopup
            card={selectedCard}
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar} />
          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
            isOpen={isImagePopupOpen} />
          <InfoTooltip
            isOpen={isInfoTooltipOpen}
            onClose={closeAllPopups}
            isAuth={isAuth}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
