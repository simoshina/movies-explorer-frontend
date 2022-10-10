export const nameInputValidation = {
  required: 'Поле обязательно для заполнения', 
  minLength: {
    value: 2, 
    message: 'Поле "Имя" должно содержать 2 и более символов'
  },
  maxLength: {
    value: 30, 
    message: 'Поле "Имя" не может содержать более 30 символов'
  }
};

export const emailInputValidation = {
  required: 'Поле "E-mail" обязательно для заполнения', 
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i, 
    message: 'Введите корректный e-mail'
  }
};

export const passwordInputValidation = {
  required: 'Поле "Пароль" обязательно для заполнения',
};

export const searchInputValidation = {
  required: 'Нужно ввести ключевое слово',
};