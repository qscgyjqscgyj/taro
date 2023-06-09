import { useEffect, useState } from 'react';

import { initFonts } from 'src/styles/fonts/services';

export function useApp() {
    const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

    useEffect(() => {
        async function loadFontsAsync() {
            try {
                await initFonts();
                setFontsLoaded(true);
            } catch (error) {
                console.log('Error loading fonts:', error);
            }
        }

        loadFontsAsync();
    }, []);

    return { fontsLoaded };
}
