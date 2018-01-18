import React from 'react';
import { mount } from 'enzyme';
import Login from '../components/Login';

it('simulate login failed', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  wrapper.setState({ email: 'fail', password: 'fish' });
  wrapper.find('form').simulate('submit');
  expect(wrapper.state().message.type).toEqual('ERROR');
});

it('simulate login success', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  wrapper.setState({ email: 'dante@test.com', password: '123Test321' });
  wrapper.find('form').simulate('submit');
  expect(wrapper.state().message.body).toEqual('Logged in');
});

it('simulate email change event', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  const email = "dante@test.com";
  expect(wrapper.state('email')).toEqual('');
  const handleChange = {target: {name: "email", value: email }};
  wrapper.find('input[name="email"]').simulate('change', handleChange);
  expect(wrapper.state('email')).toEqual(email);
});
