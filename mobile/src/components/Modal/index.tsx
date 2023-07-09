import { Modal } from 'react-native';

import { MainLinearGradient } from 'src/components/App/LinearGradient';

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
            <MainLinearGradient>
                <Component {...props} closeModal={closeModal} />
            </MainLinearGradient>
        </Modal>
    );
}
