import STUDENTS from "../../data/dummy-data";
import {
  SET_STUDENTS,
  UPDATE_STUDENTS,
  CREATE_STUDENTS,
  DELETE_STUDENTS,
} from "../actions/Students";
import StudentsModel from "../model/StudentsModel";

const initialState = {
     totalStudents:STUDENTS,
      student: STUDENTS.filter(prod => prod.ownerId === 'u1')
  };

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_STUDENTS:
          return {
            availableStudents: action.student,
          };
      }
      return state;
     
  
};