function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if (!hasDrivingLiscence) {
        return "You cannot drive"
    }
    if (hasDrivingLiscence && !isTired && isSober) {
        return "You can drive"
    }
    return "You shouldn't drive"

}

module.exports = CanDrive;