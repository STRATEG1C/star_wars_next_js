import React from 'react';
import { shallow } from 'enzyme';
import PageWrapper from './index';

describe('Should render PageWrapper and title', () => {
    it('Should render component with title and children', () => {
        const wrapper = shallow(
            <PageWrapper title="Title">
                <p>App</p>
            </PageWrapper>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
