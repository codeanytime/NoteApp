import React, { useState } from "react";
import { Modal } from "antd";

const ConfirmModal = ({ openModal, onClickConfirm, onClickCancel }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);

    onClickConfirm();
  };

  const handleCancel = () => {
    setIsModalOpen(false);

    onClickCancel();
  };

  return (
    <>
      <Modal open={openModal} onOk={handleOk} onCancel={handleCancel}>
        <p>Do you want to delete this note?</p>
      </Modal>
    </>
  );
};

export default ConfirmModal;
