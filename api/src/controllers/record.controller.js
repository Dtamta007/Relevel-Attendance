const createRecord = (req,res) =>{
    //Creating record logic here
};

const getAllRecords = (req,res) =>{
    //Getting All Records logic here
}

const editRecord = (req,res) =>{
    //Editing Record logic here
}

const deleteRecord = (req,res) =>{
    //Editing Record logic here
}

const getAttendance = (req,res) =>{
    //Getting attendance logic here
}

const addAttendee = (req,res) =>{
    //adding an attendee logic here
}

const deleteAttendee = (req,res) =>{
    //Deleting an attendee logic here
}

const RecordController = {
    createRecord,
    getAllRecords,
    editRecord,
    deleteRecord,
    getAttendance,
    addAttendee,
    deleteAttendee
}

module.exports = RecordController;