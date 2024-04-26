import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import createSurvey from "./createSurvey";
import addQuestion from "./createSurvey";

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  create_survey: createSurvey,
  add_question: addQuestion
});

export default rootReducer;