import React from 'react';
import Head from 'next/head';

type Props = {
    title: string
}

const PageWrapper: React.FC<Props> = ({ title, children }) => {
    return (
        <div>
            <Head>
                <title>{ title }</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Test site on Nest js" />
                <meta name="keywords" content="Next, React, JavaScript" />
            </Head>
            { children }
        </div>
    );
};

export default PageWrapper;
