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
        type,
    } = req.body;

    roll.create({
        name,
        image,
        proteins,
        fats,
        carbohydrates,
        availability,
        cost,
        type,
    })
        .then((newRoll) => {
            res.send(newRoll)
        })
};

const deleteRoll = (req, res, next) => {
    const { rollId } = req.body;
    if (rollId !== '') {
        roll.findByIdAndDelete(rollId)
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