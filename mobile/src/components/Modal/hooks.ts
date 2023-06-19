import { useCallback, useState } from 'react';

export function useModal() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    return { openModal, closeModal, isModalOpen };
}
