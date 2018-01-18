import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../components/App';

it('should render <App /> without user', () => {
  const wrapper = shallow(<App user="" />);
  expect(wrapper.find(".user").exists()).toBeFalsy();
});

it('should render <App /> with user', () => {
  const wrapper = mount(<App user='Dante' />);
  expect(wrapper.find(".user").text()).toEqual("Dante")
});

it('call the internal method loginSuccessful', () => {
  const email = "dante@test.com";
  const wrapper = mount(<App user='' />);
  wrapper.instance().loginSuccessful(email);
  expect(wrapper.state().user).toBe(email);
});

it('call the internal method logout', () => {
  const wrapper = mount(<App user='Dante' />);
  wrapper.instance().logout();
  expect(wrapper.state().user).toEqual('');
});