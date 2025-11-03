const tours = [];

const addOne = (name, info, image, price) => {
    const newTour = { id: tours.length + 1, name, info, image, price };
    tours.push(newTour);
    return newTour;
};

const getAll = () => {
    return tours;
};

const findById = (id) => {
    return tours.find(tour => tour.id === id);
};
const updateOne = (id, name, info, image, price) => {
    const tour = findById(id);
    if (!tour) return null;
    tour.name = name;
    tour.info = info;
    tour.image = image;
    tour.price = price;
    return tour;
};
const deleteOne = (id) => {
    const index = tours.findIndex(tour => tour.id === id);
    if (index === -1) return null;
    const deletedTour = tours[index];
    tours.splice(index, 1);
    return deletedTour;
};

module.exports = {
    getAll,
    addOne,
    findById,
    updateOne,
    deleteOne,
};

if (require.main === module) {
    let result = addOne("7 Days Tour"," Join us for the Best of Helsinki!","https://www.course-api.com/images/tours/tour-x.jpeg", "1,495");
    console.log(result);
    console.log("getAll called:", getAll());
    console.log("findById called:", findById(1));
   }