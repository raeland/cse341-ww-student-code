const mongodb = require('../data/database');
const ObjectId = require("mongodb").ObjectId

/* **************************
 * Retrieves ALL Contacts from the database
 * *******************************/
const getAllContact = async (req, res, next) => {
    //#swagger.tags=['Contacts']
  const result = await mongodb.getDb().db().collection().find();
  result.toArray().then((users) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(users); // we just need the first one (the only one)
  });
};

/* **************************
 * Retrieves A Single Contact from database
 * *******************************/
const getSingleContact = async (req, res, next) => {
      //#swagger.tags=['Contacts']
    const userId = new ObjectId(req.params.id)
    const result = await mongodb.getDb().db().collection('contacts').find({_id:userId});
    result.toArray().then((users) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(users[0]); // we just need the first one (the only one)
    });
  };

/* **************************
 * Inserts A USER to database
 * *******************************/
const createContact = async (req, res, next) => {
  //#swagger.tags=['Contacts']
const userId = new ObjectId(req.params.id)
const result = await mongodb.getDb().db().collection('contacts').find({_id:userId});
result.toArray().then((users) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(users[0]); // we just need the first one (the only one)
});
};

module.exports = { getAllContact, getSingleContact };