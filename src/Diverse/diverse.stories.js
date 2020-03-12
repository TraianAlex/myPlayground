import React from 'react';
import { storiesOf } from '@storybook/react';
import { Game1 } from './Game-xo/Game1';
import PaymentForm from './UsefulComp/CreditCard';
import { ListExample, ColumnExample } from './UsefulComp/ListExample';
import { TabSimple, TabComponent } from './UsefulComp/Tabs';
import { SidebarComp, RespSidebar } from './UsefulComp/Sidebar';
import { Toastify, Toastify2 } from './UsefulComp/Toastify';
import { Modal1 } from './Modal/Modal1';
import { GMap } from './GoogleMap/GMap';
import { FetchEx } from './FetchBootstrap/FetchEx';
import StarRating from './StarRating/App';

storiesOf('Diverse', module)
  .add('game-xo', () => <Game1 />)
  .add('paymentForm', () => <PaymentForm />)
  .add('listExample', () => <ListExample />)
  .add('columnExample', () => <ColumnExample />)
  .add('tabs', () => <TabSimple />)
  .add('tabs2', () => <TabComponent />)
  .add('sidebar', () => <SidebarComp />)
  .add('responsiveSidebar', () => <RespSidebar />)
  .add('toastify', () => <Toastify />)
  .add('toastify2', () => <Toastify2 />)
  .add('modal1', () => <Modal1 />)
  .add('googleMap', () => <GMap />)
  .add('fetchBoostrap', () => <FetchEx />)
  .add('starRating', () => <StarRating />)
 ;
