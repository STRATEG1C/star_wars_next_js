import React, { useContext } from 'react';
import { AppContext } from '../../context';

const Header: React.FC = () => {
    const { posts, resetPosts } = useContext(AppContext);

    return (
        <header className="header">
            <h2 className="font-bold text-3xl">The Fight Continues</h2>
            <div>
                <span className="font-bold">{ posts.length } Warriors</span>
                <button className="btn btn-blue ml-8 w-32" onClick={resetPosts}>Reset</button>
            </div>
        </header>
    );
};

export default Header;
