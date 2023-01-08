import {combineReducers} from "redux";
import School from "../pages/school";
import Teacher from "./teacher-reducer";
import Pupil from "../pages/pupils";


        const rootReducer = combineReducers({
            School,
            Teacher,
            Pupil,
        })

export default rootReducer;