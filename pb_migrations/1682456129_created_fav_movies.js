migrate((db) => {
  const collection = new Collection({
    "id": "35sehpzz51vb3qi",
    "created": "2023-04-25 20:55:29.309Z",
    "updated": "2023-04-25 20:55:29.309Z",
    "name": "fav_movies",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "eoht73pz",
        "name": "movieId",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "x9pjpvng",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "1urblvfr",
        "name": "poster_path",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "chz7szyx",
        "name": "overview",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("35sehpzz51vb3qi");

  return dao.deleteCollection(collection);
})
