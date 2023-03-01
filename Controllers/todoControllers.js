const toDo = require('../Model/todo')



exports.ajoutertodo = async (req, res) => {
    try {
        console.log(req.body);
        await toDo.create(req.body)
        res.send({ message: 'Ajouter avec succes' })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message || 'error serveur' })
    }
}

exports.todoliste = async (req, res, next) => {
    try {
        const liste = await toDo.find()
        res.send({ type: 'GET', liste })
    } catch (error) {
        res.status(500).send({ message: error.message || 'error serveur' })
    }

}

exports.deletetodo = async (req, res, next) => {
    try {
        await toDo.findByIdAndRemove({ _id: req.params.id })
        res.send({ message: 'todo a été supprimer avec success ' })
    } catch (error) {
        res.status(500).send({ message: error.message || 'error serveur' })
    }



}

exports.modifiertodo = async (req, res, next) => {
    try {
        await toDo.findByIdAndUpdate(req.params.id, req.body)
        const todo = await toDo.findById(req.params.id)
        res.send({ mesage: 'todo modifier avec success', todo })
    } catch (error) {
        res.status(500).send({ message: error.message || 'error serveur' })
    }


}