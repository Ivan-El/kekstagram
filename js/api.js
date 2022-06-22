const getData = (onSuccess, onError) => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })

    .then((previews) => {
      onSuccess(previews);
    })

    .catch((err) => {
      onError(`Ошибка запроса к серверу "${err.message}". Показаны данные для тестирования`);
    });
};


const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .catch((err) => {
      onFail(`Не удалось отправить форму. Возникла ошибка - "${err.message}". Попробуйте ещё раз`);
    });
};


export { getData , sendData }

