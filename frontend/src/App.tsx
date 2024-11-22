//Source code generated by AppGPT (www.appgpt.tech)
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { customDataProvider } from './dataProvider';
import fakeDataProvider from 'ra-data-fakerest';
import { Dashboard } from './dashboard';
import { authProvider, apInitialize } from './authProvider';
import { i18nProvider } from './i18nProvider';
import LoginPage, { Login } from './Login';
import data from './data';
import { GameList, GameCreate, GameEdit } from './resources/Game';
import { PlayerList, PlayerCreate, PlayerEdit } from './resources/Player';
import {
  GameSessionList,
  GameSessionCreate,
  GameSessionEdit,
} from './resources/GameSession';
import { ScoreList, ScoreCreate, ScoreEdit } from './resources/Score';
import GameIcon from '@mui/icons-material/SportsEsports';
import PlayerIcon from '@mui/icons-material/Person';
import GameSessionIcon from '@mui/icons-material/AccessTime';
import ScoreIcon from '@mui/icons-material/Score';
// SUPERTOKENS
import React from 'react';
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from 'supertokens-auth-react';
import ThirdPartyPasswordless from 'supertokens-auth-react/recipe/thirdpartypasswordless';
import Session from 'supertokens-auth-react/recipe/session';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as reactRouterDom from 'react-router-dom';
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + '/auth',
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: 'EMAIL',
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === 'true') {
  dataProvider = customDataProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      '/proxy',
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/af5c54068">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != 'DEV' ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
      >
        <Resource
          name="Game"
          options={{ label: 'Game' }}
          list={GameList}
          create={GameCreate}
          edit={GameEdit}
          recordRepresentation="Title"
          icon={GameIcon}
        />
        <Resource
          name="Player"
          options={{ label: 'Player' }}
          list={PlayerList}
          create={PlayerCreate}
          edit={PlayerEdit}
          recordRepresentation="Name"
          icon={PlayerIcon}
        />
        <Resource
          name="GameSession"
          options={{ label: 'Game Session' }}
          list={GameSessionList}
          create={GameSessionCreate}
          edit={GameSessionEdit}
          recordRepresentation="Date"
          icon={GameSessionIcon}
        />
        <Resource
          name="Score"
          options={{ label: 'Score' }}
          list={ScoreList}
          create={ScoreCreate}
          edit={ScoreEdit}
          recordRepresentation="id"
          icon={ScoreIcon}
        />
        <CustomRoutes noLayout>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          {/*Your app routes*/}
        </CustomRoutes>
      </Admin>
    </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;