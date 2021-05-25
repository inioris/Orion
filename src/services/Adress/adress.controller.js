'use strict';
const lodash = require('lodash');
const controllerAdress = {};
const dataAdress = require('../../db');

controllerAdress.list = async (req, res) => {
    const adress = [];
    await dataAdress.adressData.map(res => {
        const client = dataAdress.clientData.filter(resp => resp.id === res.idClient);
        let data = lodash.set(res, 'client', client);
        adress.push(data);
    });
    return res.json(adress);
}
controllerAdress.get = async (req, res) => {
    if (req.params.id){
        const infoAdress = await dataAdress.adressData.find(res => res.id === Number(req.params.id));
        const client = await dataAdress.clientData.filter(res => res.id === infoAdress.idClient);
        lodash.set(infoAdress, 'client', client);
        return res.json(infoAdress);
    }
}

controllerAdress.post = async (req, res) => {
    if (req.body){
        if (req.body.idClient){
            const id = dataAdress.clientData.findIndex(data => data.id === Number(req.body.idClient));
            if (!id && req.body.nameAdress){
                const id = dataAdress.adressData.length + 1;
                const dataInsert = Object.assign({id: id}, {
                    idClient: req.body.idClient,
                    nameAdress: req.body.nameAdress
                });
                await dataAdress.adressData.push(dataInsert);
                return res.json(dataAdress.adressData);
            } else {
                res.json({message: "Not Fond Users"})
            }
        }
    }
}

controllerAdress.put = async (req, res) => {
    if (req.body){
        if (req.body.idClient){
            const id = dataAdress.adressData.findIndex(data => data.id === Number(req.params.id));
            const idUser = dataAdress.clientData.findIndex(data => data.id === Number(req.body.idClient));

            if (!dataAdress.clientData[id] || !idUser){
                return res.json({message: "Not Fond"})
            }

            if (id && req.body.nameAdress){
                if (req.body){
                    req.body.nameAdress ? dataAdress.adressData[id].nameAdress = req.body.nameAdress : undefined;
                    req.body.idClient ? dataAdress.adressData[id].idClient = req.body.idClient : undefined;
                }
                const data = await dataAdress.adressData[id];
                return res.json(data);
            } else {
                res.json({message: "Not Fond Adress"})
            }
        }
    }
}

controllerAdress.delete = async (req, res) => {
    if (req.params.id) {
        const id = await dataAdress.adressData.findIndex(data => data.id === Number(req.params.id));
        if (!id){
            return res.json({message: "Not Fond"})
        }
        await dataAdress.adressData.splice(1, id);
        return res.json({message: "Successfully deleted"});
    } else {
        return res.json({message: "required params"})
    }
}

module.exports = controllerAdress;
