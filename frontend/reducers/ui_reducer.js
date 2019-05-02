
import { combineReducers } from 'redux';

import filtersReducer from './filter_reducer';
import modalReducer from './modal_reducer';

export default combineReducers({
  filters: filtersReducer,
  modal: modalReducer
})