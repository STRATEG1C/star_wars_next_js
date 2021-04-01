import React from 'react';
import { shallow, render } from 'enzyme';

import { AppContext } from '../context';
import { DEFAULT_NUMBER_OF_POSTS } from '../constants';
import { loadPosts } from '../api/posts';

import Home from './index';

describe('Test of main page', () => {
    const loadPostsMock = jest.fn();

    it('Should render the page', () => {
        const wrapper = shallow(
            <AppContext.Provider value={{
                posts: [],
                resetPosts: loadPostsMock()
            }}>
                <Home postList={[]} />
            </AppContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('Should render the page with received posts', async () => {
        const postList = await loadPosts(DEFAULT_NUMBER_OF_POSTS);

        const wrapper = render(
            <Home postList={postList} />
        );

        expect(wrapper).toMatchSnapshot();
    });
})
