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
