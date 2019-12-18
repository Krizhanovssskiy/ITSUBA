import { combineReducers } from 'redux';
import valueInput from './valueInput';
import shareDataList from './shareDataList';
import carousel from "./carousel";

export default combineReducers({
  valueInput,
  shareDataList,
  carousel
})