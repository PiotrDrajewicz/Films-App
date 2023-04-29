migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("35sehpzz51vb3qi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ogivb4yn",
    "name": "isFav",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qp9zhlih",
    "name": "rating",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("35sehpzz51vb3qi")

  // remove
  collection.schema.removeField("ogivb4yn")

  // remove
  collection.schema.removeField("qp9zhlih")

  return dao.saveCollection(collection)
})
