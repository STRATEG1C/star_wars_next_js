import * as React from 'react'
import { mount } from 'enzyme'
import Header from './index';

describe('Header should be rendered', () => {
    const wrap = mount(<Header/>);
    expect(wrap.find('h2').text()).toBe('The Fight Continues');
});
