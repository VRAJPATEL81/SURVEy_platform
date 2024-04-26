import axios from "axios";
import { CREATE_SURVEY, ADD_QUESTION, GET_ERRORS } from "./types";

// Create Survey
export const createSurvey = userData => dispatch => {
  axios
    .post("/api/tests/create_test", userData)
    .then(res => {
      dispatch(setSurveyId(res.data));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setSurveyId = data => {
  return {
    type: CREATE_SURVEY,
    payload: data
  };
};

export const addQuestion = userData => dispatch => {
  axios
    .post("/api/tests/add_question", userData)
    .then(res => {
      dispatch(isAdded(res.data));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const isAdded = data => {
  return {
    type: ADD_QUESTION,
    payload: data
  };
};
