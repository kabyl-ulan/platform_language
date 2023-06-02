import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React, { Component } from "react";

type ModalComponents = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

class Modals extends Component<ModalComponents> {
  render(): React.ReactNode {
    const { isOpen, onClose, children } = this.props;
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>{children}</ModalContent>
      </Modal>
    );
  }
}

export default Modals;
