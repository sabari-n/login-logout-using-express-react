const getTimeStamps = () => {
    return {
        createdAt : new Date(),
        updatedAt : new Date()
    };
}

const getAddedHours = (toAdd) => {
    let currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + toAdd);
    return currentDate;
}

module.exports = {
    getTimeStamps,
    getAddedHours
};