import React from 'react';
import { shallow } from 'enzyme';

import { testPost } from '../../../constants/testConstants';

import Post from './index';

describe('Should render Post component', () => {
    let component;
    const onRemove = jest.fn();

    beforeEach(() => {
        component = shallow(
            <Post
                post={testPost}
                idx={0}
                onRemove={onRemove}
            />
        )
    })

    it('Should render info from prop', () => {
        expect(component.exists('img')).toBe(true);
        expect(component.find('.post__author-name').text()).toBe(testPost.author.name);
        expect(component.find('.post__author-info').text()).toContain(testPost.author.specie);
        expect(component.find('.post__author-info').text()).toContain(testPost.author.home);
    });

    it('Should react on clicking on remove', () => {
        component.find('button').simulate('click', 0);
        expect(onRemove).toHaveBeenCalledWith(0);
    });
})
