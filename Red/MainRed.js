let appState = {
    data: [
        { VNA: 'DEMO', DOW: 43422, MZFW: 62500, MTOW: 77000, MLDW: 66000 },
        { VNA: 'DEMO2', DOW: 43422, MZFW: 62500, MTOW: 77000, MLDW: 66000 },

        
    ]
}

const MainRed = (state = appState, action) => {
    let newACList = state.data;
    switch (action.type) {
        case 'ADD':
            const newAC = {
                VNA: action.acVNA,
                DOW: action.acDOW,
                MZFW: action.acMZFW,
                MTOW: action.acMTOW,
                MLDW: action.acMLDW
            }
            return {
                ...state,
                data: [...newACList, newAC]
            }

        case 'DELETE':
            newACList = newACList.filter((item, i) => i !== action.atIndex)
            return {
                ...state,
                data: newACList
            }

    }
    return state;// quan trong
}

export default MainRed;