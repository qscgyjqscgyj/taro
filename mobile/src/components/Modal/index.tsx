import { Modal } from 'react-native';

import { ModalProps } from './types';

export function ModalComponent(props: ModalProps) {
    const { component: Component, closeModal, isModalOpen } = props;

    return (
        <Modal
            visible={isModalOpen}
            animationType="slide"
            transparent={true}
            onRequestClose={closeModal}
        >
            <Component {...props} closeModal={closeModal} />
        </Modal>
    );
}
