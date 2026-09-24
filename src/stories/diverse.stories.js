import React from "react";
import Game1 from "../Diverse/Game-xo/Game5";
import PaymentForm from "../Diverse/UsefulComp/CreditCard";
import { ListExample, ColumnExample } from "../Diverse/UsefulComp/ListExample";
import { TabSimple, TabComponent } from "../Diverse/UsefulComp/Tabs";
import { SidebarComp, RespSidebar } from "../Diverse/UsefulComp/Sidebar";
import { Toastify, Toastify2 } from "../Diverse/UsefulComp/Toastify";
import { Modal1 } from "../Diverse/Modal/Modal1";
import { GMap } from "../Diverse/GoogleMap/GMap";
import { FetchEx } from "../Diverse/FetchBootstrap/FetchEx";
import StarRating from "../Diverse/StarRating/App";
import { TypeWritter } from "../Diverse/UsefulComp/TypeWritter";
import { TypeWritter2 } from "../Diverse/UsefulComp/TypeWritter2";

const meta = {
  title: "Diverse/Div",
};
export default meta;

export const GameXo = {
  name: "game-xo",
  render: () => <Game1 />,
};

export const PaymentFormStory = {
  name: "paymentForm",
  render: () => <PaymentForm />,
};

export const ListExampleStory = {
  name: "listExample",
  render: () => <ListExample />,
};

export const ColumnExampleStory = {
  name: "columnExample",
  render: () => <ColumnExample />,
};

export const Tabs = {
  name: "tabs",
  args: {
    title: "Banner Title",
  },
  render: ({ title }) => <TabSimple title={title} />,
};

export const Tabs2 = {
  name: "tabs2",
  render: () => <TabComponent />,
};

export const Sidebar = {
  name: "sidebar",
  render: () => <SidebarComp />,
};

export const ResponsiveSidebar = {
  name: "responsiveSidebar",
  render: () => <RespSidebar />,
};

export const ToastifyStory = {
  name: "toastify",
  render: () => <Toastify />,
};

export const Toastify2Story = {
  name: "toastify2",
  render: () => <Toastify2 />,
};

export const Modal1Story = {
  name: "modal1",
  render: () => <Modal1 />,
};

export const GoogleMap = {
  name: "googleMap",
  render: () => <GMap />,
};

export const FetchBootstrap = {
  name: "fetchBoostrap",
  render: () => <FetchEx />,
};

export const StarRatingStory = {
  name: "starRating",
  render: () => <StarRating />,
};

export const TypeWritterStory = {
  name: "typeWritter",
  render: () => <TypeWritter />,
};

export const TypeWritter2Story = {
  name: "typeWritter2",
  render: () => <TypeWritter2 />,
};
