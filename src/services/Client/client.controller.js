'use strict';
const lodash = require('lodash');
const controllerClient = {};
const dataClient = require('../../db');

controllerClient.list = async (req, res) => {
    const client = [];
    await dataClient.clientData.map(res => {
        const adress = dataClient.adressData.filter(resp => resp.idClient === res.id);
        let data = lodash.set(res, 'Adress', adress);
        client.push(data);
    });
    return res.json(client);
}

controllerClient.get = async (req, res) => {
    if (req.params.id){
        const clientData = await dataClient.clientData.find(res => res.id === Number(req.params.id));
        const adress = await dataClient.adressData.filter(res => res.idClient === Number(req.params.id));
        lodash.set(clientData, 'Adress', adress);
        return res.json(clientData);
    }
}

controllerClient.post = async (req, res) => {
    if (req.body){
        if (req.body.company && req.body.name && req.body.category){
           const id = dataClient.clientData.length + 1;
           const dataInsert = Object.assign({id: id}, req.body);
           await dataClient.clientData.push(dataInsert);
           return res.json(dataClient.clientData);
        } else {
            res.json({message: "required params"})
        }
    }
}

controllerClient.put = async (req, res) => {
    if (req.params.id){
        if (req.body){
            const id = await dataClient.clientData.findIndex(data => data.id === Number(req.params.id));
            if (!dataClient.clientData[id]){
                return res.json({message: "Not Fond"})
            }
            const data = await dataClient.clientData[id];
            if (req.body){
                req.body.name ? dataClient.clientData[id].name = req.body.name : undefined;
                req.body.company ? dataClient.clientData[id].company = req.body.company : undefined;
                req.body.category ? dataClient.clientData[id].category = req.body.category : undefined;
            }
            return res.json(data);
        } else {
            res.json({message: "required params"})
        }
    }
}

controllerClient.delete = async (req, res) => {
    if (req.params.id) {
        const id = await dataClient.clientData.findIndex(data => data.id === Number(req.params.id));
        if (!id){
            return res.json({message: "Not Fond"})
        }
        await dataClient.clientData.splice(1, id);
        return res.json({message: "Successfully deleted"});
    } else {
        return res.json({message: "required params"})
    }
}


module.exports = controllerClient;

