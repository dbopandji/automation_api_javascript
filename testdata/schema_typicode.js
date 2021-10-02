const getTypiCodeScheme = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "array",
    "title": "The root schema",
    "uniqueItems": false,
    "additionalItems": false,
    "items": {
        "$id": "#/items",
        "type": "object",
        "title": "The items schema",
        "required": [
            "userId",
            "id",
            "title",
            "body"
        ],
        "properties": {
            "userId": {
                "$id": "#/items/properties/userId",
                "type": "integer",
                "title": "The userId schema"
            },
            "id": {
                "$id": "#/items/properties/id",
                "type": "integer",
                "title": "The id schema"
            },
            "title": {
                "$id": "#/items/properties/title",
                "type": "string",
                "title": "The title schema"
            },
            "body": {
                "$id": "#/items/properties/body",
                "type": "string",
                "title": "The body schema"
            }
        },
        "additionalProperties": false
    }
};

module.exports = {
    getTypiCodeScheme
}