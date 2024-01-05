const pizza = require('../model/pizza');

const createPizza = (req, res, next) => {
    const {
        name,
        image,
        proteins,
        fats,
        carbohydrates,
        availability,
        cost,
        type,
    } = req.body;

    pizza.create({
        name,
        image,
        proteins,
        fats,
        carbohydrates,
        availability,
        cost,
        type,
    })
        .then((newPizza) => {
            res.send(newPizza)
        })
};

const deletePizza = (req, res, next) => {
    const { pizzaId } = req.body;
    if (pizzaId !== '') {
        pizza.findByIdAndDelete(pizzaId)
            .then((deletedPizza) => {
                if (deletedPizza !== null) {
                    return res.send(`${deletedPizza} удалено`)
                }
                throw new Error('такого имени нет');
            })
            .catch((err) => {
                res.send('не найдено')
            })
    }
    else (
        res.send('не найдено')
    )
}

const findAll = (req, res, next) => {
    pizza.find({})
        .then((pizza) => {
            res.send(pizza)
        })
}

module.exports = {
    createPizza,
    deletePizza,
    findAll,
}