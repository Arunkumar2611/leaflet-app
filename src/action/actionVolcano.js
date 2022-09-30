// import * as api from '../api'
import { VOLCANODATA, VOLCANOERROR, VOLCANOLOADING } from "../constant/constant";

export function fetchData() {
    return dispatch => {
        dispatch({ type: VOLCANOLOADING });
        return fetch("https://gist.githubusercontent.com/arfbramboll/259078f1a1ac6b79619cc49a3c120dea/raw/8a3b6c2a081b3e89b446d9d52678e6112f6f43dc/volcanoes.json")
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: VOLCANODATA,
                    data: data.features
                });
            })
            .catch(error => {
                dispatch({
                    type: VOLCANOERROR,
                    error
                });
            });
    };
}