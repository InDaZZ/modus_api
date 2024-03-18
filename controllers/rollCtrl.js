const roll = require('../model/roll');

const createRoll = (req, res, next) => {
    const {
        name,
        image,
        proteins,
        fats,
        carbohydrates,
        availability,
        cost,
        sale
    } = req.body;

    roll.create({
        name,
        image,
        proteins,
        fats,
        carbohydrates,
        availability,
        cost,
        sale,
    })
        .then((newRoll) => {
            res.send(newRoll)
        })
        .catch(err => console.log(err))
};

const deleteRoll = (req, res, next) => {
    const { _id } = req.body;
    if (_id !== '') {
        roll.findByIdAndDelete(_id)
            .then((deletedRoll) => {
                if (deletedRoll !== null) {
                    return res.send(`${deletedRoll} удалено`)
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
    console.log(req.body)
    roll.find({})
        .then((rols) => {
            res.send(rols)
        })
}

module.exports = {
    createRoll,
    deleteRoll,
    findAll,
}