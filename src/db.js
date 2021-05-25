const clientData = [
  {
    id: 1,
    name: "Alejandro Ramirez",
    company: "Unphu",
    category: "Educacion"
  },
  {
    id: 2,
    name: "Miguel Angel",
    company: "Unphu",
    category: "Educacion"
  },
  {
    id: 3,
    name: "Leonardo Perez",
    company: "Unphu",
    category: "Educacion"
  },
  {
    id: 4,
    name: "Wilmer Nose",
    company: "Unphu",
    category: "Educacion"
  },
  {
    id: 5,
    name: "Daniel Abreu",
    company: "Unphu",
    category: "Educacion"
  },
  {
    id: 6,
    name: "Darem Perez",
    company: "Unphu",
    category: "Educacion"
  },
];

const adressData = [
{ id: 1, idClient: 1, nameAdress: "km 25 aut duarte" },
{ id: 2, idClient: 1, nameAdress: "km 22 aut duarte" },
{ id: 3, idClient: 1, nameAdress: "km 18 aut duarte" }
];

const newClient = {
id: null,
name: "",
company: null,
category: ""
};
const newAdress = {
  id: null,
  idClient: null,
  name: ""
};


module.exports = {
newClient,
newAdress,
clientData,
adressData
};
