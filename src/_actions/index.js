import { CHANGE_EMAIL, CHANGE_NAME, CHANGE_PLACEHOLDER } from '../constants';

export const onChangeName = (value) => ({
  type: CHANGE_NAME,
  payload: value
});

export const onChangeEmail = (value) => ({
  type: CHANGE_EMAIL,
  payload: value
});

export const setPlaceholder = (value) => ({
  type: CHANGE_PLACEHOLDER,
  payload: value
});

export const createSubscription = ({name, email}) => async dispatch => {
  const data = {
    title: name,
    body: email
  };
  fetch('https://simple-blog-api.crew.red/posts', {
    method: 'POST',
    header: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(res => {
      alert('Успешно');
      dispatch({
        type: '',
        payload: res
      })
    })
    .catch(error => alert(error))
};

