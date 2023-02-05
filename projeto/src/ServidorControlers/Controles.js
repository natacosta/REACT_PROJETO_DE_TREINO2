const FakeDb = require('../FakeDb/db')



module.exports = Controles = {

    Tags: async function (req, resp) {

        try {
           
            setTimeout(() => {
                resp.status(200).send(FakeDb.tags)
            }, 2000);

        } catch (error) {
            resp.status(400).send('')
        }

    },
    Cats: async function (req, resp) {

        try {
           
            resp.status(200).send(FakeDb.cats)

        } catch (error) {
            resp.status(400).send('')
        }

    },

}