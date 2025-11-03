let feedbackArray = [];
let idCounter = 1;

function getAll() {
    return feedbackArray;
}

function addOne(sender, message, rating) {

    if (!sender || !message || !rating) {
        return false;
    }
    const newFeedback = {
        id: idCounter++,
        sender,
        message,
        rating
    };
    feedbackArray.push(newFeedback);
    return newFeedback;
}

function findById(id) {
    const numericId = Number(id);
    const feedback = feedbackArray.find(item => item.id === numericId);
    if (feedback)
        return feedback;
    else
        return false;
}

function updateById(id, updatedData) {
    const feedback = findById(id);
    if (feedback) {
        if (updatedData.sender) {
            feedback.sender = updatedData.sender;
        }
        if (updatedData.message) {
            feedback.message = updatedData.message;
        }
        if (updatedData.rating) {
            feedback.rating = updatedData.rating;
        }
        return feedback;
    }
    return false;
}

function deleteById(id) {
    const feedback = findById(id);
    if (feedback) {
        const initialLength = feedbackArray.length;
        feedbackArray = feedbackArray.filter(feedback => feedback.id !== Number(id));
        return feedbackArray.length < initialLength;
    }
    return false;
}

    if (require.main === module) {
        let result = addOne("John Smith", "Great session on React components! I found the examples very helpful.", 4);
        console.log(result);
        console.log("getAll called:", getAll());
        console.log("findById called:", findById(1));
        // rest of the tests here
        console.log("Update called:", updateById(1, { message: "Updated message", rating: 5 }));
        console.log("Delete called:", deleteById(1));
        console.log("Final feedbacks:", getAll());
}

Feedback = {
    getAll,
    addOne,
    findById,
    updateById,
    deleteById
};

module.exports = Feedback;
