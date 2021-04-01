import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

test('Check render of Header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});
