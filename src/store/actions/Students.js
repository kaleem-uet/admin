import StudentsModel from "../model/StudentsModel";
export const DELETE_STUDENTS = 'DELETE_STUDENTS';
export const CREATE_STUDENTS = 'CREATE_STUDENTS';
export const UPDATE_STUDENTS = 'UPDATE_STUDENTS';
export const SET_STUDENTS = 'SET_STUDENTS';

export const fetchStudents = () => {
    return async dispatch => {
      // any async code you want!
      try {
        const response = await fetch(
          ''
        );
  
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
  
        const resData = await response.json();
        const loadedStudents = [];
  
        for (const key in resData) {
          loadedStudents.push(
            new StudentsModel(
              key,
              'u1',
              resData[key].name,
              resData[key].email,
              resData[key].imageUrl,
            )
          );
        }
  
        dispatch({ type: SET_STUDENTS, student:loadedStudents});
      } catch (err) {
        // send to custom analytics server
        throw err;
      }
    };
  };