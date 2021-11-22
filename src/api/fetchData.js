export const fetchData = (dispatch, addResluts) => fetch('https://api.fastforex.io/fetch-multi?from=USD&to=AMD,RUB&api_key=86f4041568-264535c920-r2t7q9')
.then(response => response.json())
.then(data => dispatch(addResluts(data)))