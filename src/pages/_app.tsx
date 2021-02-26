import { useState } from 'react';
import '../styles/global.css';

import { ChallengeProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {

    return (
        <ChallengeProvider>
            <Component {...pageProps} />
        </ChallengeProvider>
    )
}

export default MyApp