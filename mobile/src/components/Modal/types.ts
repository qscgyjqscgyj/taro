export interface ModalComponentProps {
    isModalOpen: boolean;
    closeModal: () => void;
}

export interface ModalProps extends ModalComponentProps {
    component: React.FC<ModalComponentProps>;
}
