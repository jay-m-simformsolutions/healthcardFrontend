import { caseConstant } from '../Actions/constants';

const intitialState = {
    caseID: null,
    caseDetail: '',
    dateOfEntry: '',
    patientID: null,
    docID: null,
    prescriptionID: null,
    reportID: null,
    prescDetail: '',
    dateOfPrescription: '',
    dateOfReport: '',
    reportURL: []
}

export default function casesReducer(state=intitialState, action) {
    switch(action.type) {
        case caseConstant.PATIENT_FETCH_CASES_REQUEST:
            return { ...state }
        case caseConstant.PATIENT_FETCH_CASES_SUCCESS:
            return { ...state, ...action.payload }
        case caseConstant.PATIENT_FETCH_CASES_FAILURE:
            return { ...state }
        default:
            return state;
    }
}
