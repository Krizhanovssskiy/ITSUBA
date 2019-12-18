import './style.scss';

import React from 'react';
import { connect } from 'react-redux';
import isEmail from "validator/lib/isEmail";
import {createSubscription, onChangeEmail, onChangeName, setPlaceholder} from "../../_actions";


const SubscriptionForm = ({
                            valueName,
                            valueEmail,
                            valuePlaceholder,
                            onChangeEmail,
                            onChangeName,
                            setPlaceholder,
                            createSubscription }) => {
  const onChangeInput = ({target}) => {
    setPlaceholder('');
    if (target.getAttribute('type') === 'text') {
      onChangeName(target.value)
    } else if (target.getAttribute('type') === 'email') {
      onChangeEmail(target.value)
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (valueName.length && isEmail(valueEmail)) {
      createSubscription({name: valueName, email: valueEmail});
      setPlaceholder('');
      onChangeEmail('');
      onChangeName('');
    } else if (valueName.length) {
      setPlaceholder('введите email')
    } else if (isEmail(valueEmail)) {
      setPlaceholder('введите имя')
    } else {
      setPlaceholder('')
    }

  };
  return (
    <form
      onSubmit={onSubmit}
      className='Form'
    >
      <input
        className='Form__input Text__extraSmall'
        type="text"
        placeholder= {valuePlaceholder ? valuePlaceholder : 'full name'}
        value={valueName}
        onChange={onChangeInput}
      />
      <input
        className='Form__input Text__extraSmall'
        type="email"
        placeholder={valuePlaceholder ? valuePlaceholder : 'email'}
        value={valueEmail}
        onChange={onChangeInput}
      />
      <button className='Form__btn-submit Text__extraSmall'>
        submit
      </button>
    </form>
  )
};

export default connect(
  ({valueInput}) => ({
    valueEmail: valueInput.valueEmail,
    valueName: valueInput.valueName,
    valuePlaceholder: valueInput.valuePlaceholder
  }),
  {
    setPlaceholder,
    onChangeEmail,
    onChangeName,
    createSubscription,
  }
)(SubscriptionForm);