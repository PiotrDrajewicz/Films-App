migrate((db) => {
  const collection = new Collection({
    "id": "2fxsndok9qbkmay",
    "created": "2023-05-02 18:36:18.386Z",
    "updated": "2023-05-02 18:36:18.386Z",
    "name": "rated_movies",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wfjejk27",
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
        "id": "aoghprsq",
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
        "id": "bicyei0g",
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
        "id": "sqhlaa9i",
        "name": "overview",
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
        "id": "uzqdrnqk",
        "name": "isFav",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "jkcsymg8",
        "name": "rating",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("2fxsndok9qbkmay");

  return dao.deleteCollection(collection);
})
