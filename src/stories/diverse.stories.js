import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { Game1 } from '../Diverse/Game-xo/Game1';
import PaymentForm from '../Diverse/UsefulComp/CreditCard';
import { ListExample, ColumnExample } from '../Diverse/UsefulComp/ListExample';
import { TabSimple, TabComponent } from '../Diverse/UsefulComp/Tabs';
import { SidebarComp, RespSidebar } from '../Diverse/UsefulComp/Sidebar';
import { Toastify, Toastify2 } from '../Diverse/UsefulComp/Toastify';
import { Modal1 } from '../Diverse/Modal/Modal1';
import { GMap } from '../Diverse/GoogleMap/GMap';
import { FetchEx } from '../Diverse/FetchBootstrap/FetchEx';
import StarRating from '../Diverse/StarRating/App';

storiesOf('Diverse/Div', module)
  .add('game-xo', () => <Game1 />)
  .add('paymentForm', () => <PaymentForm />)
  .add('listExample', () => <ListExample />)
  .add('columnExample', () => <ColumnExample />)
  .add('tabs', () => {
    const title = text('Title', 'Banner Title');
    return <TabSimple title={title} />
  })
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
