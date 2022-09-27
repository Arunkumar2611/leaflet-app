import axios from 'axios';

export const fetchVolcanos = () => axios.get('https://gist.githubusercontent.com/arfbramboll/259078f1a1ac6b79619cc49a3c120dea/raw/8a3b6c2a081b3e89b446d9d52678e6112f6f43dc/volcanoes.json');