use('EC2024-04-CakeHub');

db.createCollection("users", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "users",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "userID": {
                    "bsonType": "string"
                },
                "username": {
                    "bsonType": "string"
                },
                "password": {
                    "bsonType": "string"
                },
                "role": {
                    "bsonType": "string",
                    "enum": [
                        "baker",
                        "customer",
                        "admin"
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "role"
            ]
        }
    },
    "validationLevel": "off"
});




db.createCollection("orders", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "orders",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "orderID": {
                    "bsonType": "string"
                },
                "shippingDate": {
                    "bsonType": "date"
                },
                "shippingAddress": {
                    "bsonType": "string"
                },
                "orderTime": {
                    "bsonType": "date"
                },
                "paymentTime": {
                    "bsonType": "date"
                },
                "completeTime": {
                    "bsonType": "date"
                },
                "total_price": {
                    "bsonType": "number"
                },
                "status": {
                    "bsonType": "string",
                    "enum": [
                        "handling",
                        "handled",
                        "completed"
                    ]
                },
                "user_id": {
                    "bsonType": "string"
                },
                "s_cakeQuantity": {
                    "bsonType": "number"
                },
                "cakes": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "cake_id": {
                                "bsonType": "string"
                            },
                            "img_url": {
                                "bsonType": "string"
                            },
                            "cakeMessage": {
                                "bsonType": "string"
                            },
                            "cakeQuantity": {
                                "bsonType": "number"
                            },
                            "total_price": {
                                "bsonType": "number"
                            }
                        },
                        "additionalProperties": false
                    }
                }
            },
            "additionalProperties": false,
            "required": [
                "status"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("cakes", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "cakes",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "cakeID": {
                    "bsonType": "string"
                },
                "cakeName": {
                    "bsonType": "string"
                },
                "size": {
                    "bsonType": "number",
                    "description": "must be one of the allowed values and is required",
                    "enum": [
                        10,
                        16,
                        24
                    ]
                },
                "jamFilling": {
                    "bsonType": "string",
                    "description": "Must be one of the allowed values and is required"
                },
                "price": {
                    "bsonType": "number"
                },
                "img_url": {
                    "bsonType": "string"
                },
                "cakeType": {
                    "bsonType": "string",
                    "enum": [
                        "gato",
                        "corn cream"
                    ]
                },
                "occasion": {
                    "bsonType": "string",
                    "enum": [
                        "custom",
                        "birthday",
                        "christmas",
                        "anniversary"
                    ]
                },
                "desciption": {
                    "bsonType": "string"
                },
                "recipe_id": {
                    "bsonType": "string"
                },
                "decor_id": {
                    "bsonType": "string"
                },
                "temp_grill": {
                    "bsonType": "number"
                },
                "time_grill": {
                    "bsonType": "number"
                }
            },
            "additionalProperties": false
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("recipes", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "recipes",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "recipeID": {
                    "bsonType": "string"
                },
                "recipeName": {
                    "bsonType": "string"
                },
                "recipesize": {
                    "bsonType": "number"
                },
                "recipe_jam_filling": {
                    "bsonType": "string"
                },
                "ingredients": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "ingredID": {
                                "bsonType": "string"
                            },
                            "ingredQuantity": {
                                "bsonType": "number"
                            },
                            "ingredUnit": {
                                "bsonType": "string"
                            }
                        },
                        "additionalProperties": false
                    }
                },
                "sum_dough": {
                    "bsonType": "number"
                },
                "sum_cream": {
                    "bsonType": "number"
                }
            },
            "additionalProperties": false
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("devices", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "devices",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "deviceID": {
                    "bsonType": "string"
                },
                "deviceModel": {
                    "bsonType": "string"
                },
                "deviceName": {
                    "bsonType": "string"
                },
                "volume": {
                    "bsonType": "string"
                },
                "quantity": {
                    "bsonType": "number"
                },
                "deviceType": {
                    "bsonType": "string",
                    "enum": [
                        "egg_mixer",
                        "baking_oven",
                        "fridge",
                        "cool_storage",
                        "powder_mixer"
                    ]
                },
                "managerID": {
                    "bsonType": "string"
                }
            },
            "additionalProperties": false
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("ingredients", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "ingredients",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "ingredientID": {
                    "bsonType": "string"
                },
                "ingredientName": {
                    "bsonType": "string"
                },
                "ingredientQuantity": {
                    "bsonType": "number"
                },
                "ingredientUnit": {
                    "bsonType": "string"
                },
                "ingredientPrice": {
                    "bsonType": "number"
                },
                "expired": {
                    "bsonType": "string"
                }
            },
            "additionalProperties": false
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("decorations", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "decorations",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "decorID": {
                    "bsonType": "string"
                },
                "ingredients": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "ingredID": {
                                "bsonType": "string"
                            },
                            "ingredQuantity": {
                                "bsonType": "string"
                            },
                            "ingredUnit": {
                                "bsonType": "string"
                            }
                        },
                        "additionalProperties": false
                    }
                },
                "sum_cream": {
                    "bsonType": "string"
                }
            },
            "additionalProperties": false
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("carts", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "carts",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "cartID": {
                    "bsonType": "string"
                },
                "user_id": {
                    "bsonType": "string"
                },
                "cakes": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "cake_id": {
                                "bsonType": "string"
                            },
                            "cakeQuantity": {
                                "bsonType": "number"
                            },
                            "total_price": {
                                "bsonType": "number"
                            }
                        },
                        "additionalProperties": false
                    }
                }
            },
            "additionalProperties": false
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});