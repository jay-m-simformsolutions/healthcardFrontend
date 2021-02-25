import axiosInstant from "../axios";
import { caseConstant } from "./constants";

export const PatientCases = () => {
    return async (dispatch) => {
        dispatch({ type: caseConstant.PATIENT_FETCH_CASES_REQUEST})

        const user = JSON.parse(localStorage.getItem('user'))
        try {
            if(user.patientID){
                const res = await axiosInstant.get(`user/${user.patientID}/cases`);
                console.log(res.data)   
            }
        } catch (e) {
            console.log(e);
        }

        console.log('patient')
    }
}

export const DoctorCases = () => {
    return async (dispatch) => {
        dispatch({ type: caseConstant.DOCTOR_FETCH_CASES_REQUEST })
        const user = JSON.parse(localStorage.getItem('user'))
        try{
            if(user.doctorID){
                const res = await axiosInstant.get(`doctor/${user.doctorID}/cases`);
                console.log(res.data)
            }
        } catch (e) {
            console.log(e);
        }

        console.log('doctor')
    }
}
