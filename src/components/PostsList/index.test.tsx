import React from 'react';
import { render } from 'enzyme';

import { testPostList } from '../../constants/testConstants';

import PostList from './index';

describe('Should render PostList', () => {
    let component;
    const onRemovePost = jest.fn();

    beforeEach(() => {
        component = render(
            <PostList
                posts={testPostList}
                onRemovePost={onRemovePost}
            />
        );
    })

    it('Should render posts', () => {
        expect(component.find('.post').length).toBe(testPostList.length);
        expect(component).toMatchSnapshot();
    });
})
