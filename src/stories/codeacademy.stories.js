import React from 'react';
import { App } from '../CodeAcademy/App';
import { AppEnthused } from '../CodeAcademy/Enthused/AppEnthused';
import Forecast from '../CodeAcademy/hooks/Forecast';
import Shop from '../CodeAcademy/hooks/Shop';
import SocialNetwork from '../CodeAcademy/hooks/SocialNetwork';

const meta = {
  title: 'CodeAcademy',
};
export default meta;

export const TopNumber = {
  name: 'topNumber',
  render: () => <App />,
};

export const Enthused = {
  name: 'enthused',
  render: () => <AppEnthused />,
};

export const ForecastStory = {
  name: 'forecast',
  render: () => <Forecast />,
};

export const Clothes = {
  name: 'clothes',
  render: () => <Shop />,
};

export const Social = {
  name: 'social',
  render: () => <SocialNetwork />,
};
