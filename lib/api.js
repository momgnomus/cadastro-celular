import axios from 'axios';

const api = axios.create({
  baseURL: 'https://phones--melhorcom.repl.co',
});

api.defaults.headers.cpf = '10305102613';

export default api;
