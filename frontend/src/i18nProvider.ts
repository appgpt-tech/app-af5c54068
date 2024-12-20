//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';
import grOriginal from 'ra-language-greek';

const enResources = {
  resources: {
    Game: {
      name: 'Game',
      fields: {
        Title: 'Title',
        Genre: 'Genre',
        ReleaseDate: 'Release Date',
        Description: 'Description',
        id: 'id',
      },
    },
    Player: {
      name: 'Player',
      fields: {
        Name: 'Name',
        Age: 'Age',
        Email: 'Email',
        Username: 'Username',
        id: 'id',
      },
    },
    GameSession: {
      name: 'Game Session',
      fields: {
        Game: 'Game',
        Players: 'Players',
        Date: 'Date',
        Duration: 'Duration',
        id: 'id',
      },
    },
    Score: {
      name: 'Score',
      fields: {
        gameSession: 'Game Session',
        player: 'Player',
        scoreValue: 'Score Value',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    Game: {
      name: 'Game (fr)',
      fields: {
        Title: 'Title (fr)',
        Genre: 'Genre (fr)',
        ReleaseDate: 'Release Date (fr)',
        Description: 'Description (fr)',
        id: 'id',
      },
    },
    Player: {
      name: 'Player (fr)',
      fields: {
        Name: 'Name (fr)',
        Age: 'Age (fr)',
        Email: 'Email (fr)',
        Username: 'Username (fr)',
        id: 'id',
      },
    },
    GameSession: {
      name: 'Game Session (fr)',
      fields: {
        Game: 'Game (fr)',
        Players: 'Players (fr)',
        Date: 'Date (fr)',
        Duration: 'Duration (fr)',
        id: 'id',
      },
    },
    Score: {
      name: 'Score (fr)',
      fields: {
        gameSession: 'Game Session (fr)',
        player: 'Player (fr)',
        scoreValue: 'Score Value (fr)',
        id: 'id',
      },
    },
  },
};
const grResources = {
  resources: {
    Game: {
      name: 'Game (gr)',
      fields: {
        Title: 'Title (gr)',
        Genre: 'Genre (gr)',
        ReleaseDate: 'Release Date (gr)',
        Description: 'Description (gr)',
        id: 'id',
      },
    },
    Player: {
      name: 'Player (gr)',
      fields: {
        Name: 'Name (gr)',
        Age: 'Age (gr)',
        Email: 'Email (gr)',
        Username: 'Username (gr)',
        id: 'id',
      },
    },
    GameSession: {
      name: 'Game Session (gr)',
      fields: {
        Game: 'Game (gr)',
        Players: 'Players (gr)',
        Date: 'Date (gr)',
        Duration: 'Duration (gr)',
        id: 'id',
      },
    },
    Score: {
      name: 'Score (gr)',
      fields: {
        gameSession: 'Game Session (gr)',
        player: 'Player (gr)',
        scoreValue: 'Score Value (gr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);
const gr = mergeTranslations(grOriginal, grResources);

const translations = { en, fr, gr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
    { locale: 'gr', name: 'Ελληνικά' },
  ],
);
