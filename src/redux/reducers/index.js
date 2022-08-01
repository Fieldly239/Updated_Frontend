import { combineReducers } from "redux";
import HomeReducer from "../reducers/home.reducer";
import ApplicationReducer from "../reducers/application.reducer";
import KnowledgeReducer from "../reducers/knowledge.reducer";
import CategoryReducer from "../reducers/category.reducer";
import FileAttachmentReducer from "../reducers/fileAttachment.reducer";

const rootReducer = combineReducers({
  homeReducer: HomeReducer,
  knowledges: KnowledgeReducer,
  categories: CategoryReducer,
  applications: ApplicationReducer,
  fileAttachmentReducer: FileAttachmentReducer,
});

export default rootReducer;
