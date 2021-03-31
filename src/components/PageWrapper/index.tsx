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
            </Head>
            { children }
        </div>
    );
};

export default PageWrapper;
