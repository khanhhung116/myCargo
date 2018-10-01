export const addAct = (VNA, DOW, MZFW, MTOW, MLDW) => {
    return {
        type: 'ADD',
        acVNA: VNA,
        acDOW: DOW,
        acMZFW: MZFW,
        acMTOW: MTOW,
        acMLDW: MLDW

    }
}

export const deleteAct = (index) => {
    return {
        type: 'DELETE',
        atIndex: index
    }
}