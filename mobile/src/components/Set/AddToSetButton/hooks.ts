import { useAppContext } from 'src/services/store/context';

export function useAddToSetButton() {
    const { activeCard } = useAppContext();

    return { activeCard };
}
