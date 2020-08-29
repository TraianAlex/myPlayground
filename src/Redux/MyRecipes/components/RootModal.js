import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmModal from "./ConfirmModal";
import { hideModal } from "../actions/modals";

const MODAL_TYPES = {
  CONFIRM_MODAL: ConfirmModal,
};

const RootModal = ({ modalType, modalProps, hideModal }) => {
  if (!modalType) {
    return null;
  }
  const Modal = MODAL_TYPES[modalType];

  return <Modal onClose={hideModal} {...modalProps} />;
};
/* eslint no-shadow: "off" */
RootModal.propTypes = {
  modalType: PropTypes.string,
  modalProps: PropTypes.object,
  hideModal: PropTypes.func,
};

const mapStateToProps = (state) => ({
  modalType: state.modals.modalType,
  modalProps: state.modals.modalProps,
});

export default connect(mapStateToProps, { hideModal })(RootModal);
