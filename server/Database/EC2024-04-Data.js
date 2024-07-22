
// Select the database to use.
use('EC2024-04-CakeHub');

db.users.insertOne({
    userID: "admin01",
    username: "admin",
    password: "123",
    role: "admin"
})


db.devices.insertMany([
    {
        deviceID: "B15GF",
        deviceModel: "BIGSTAR",
        deviceName: "Máy đánh trứng, đánh kem B15GF",
        volume: "15L",
        quantity: 2,
        deviceType: "egg_mixer",
        managerID: "admin01"
    },
    {
        deviceID: "B30",
        deviceModel: "BIGSTAR",
        deviceName: "Máy trộn bột, nhào bột B30L",
        volume: "30L",
        quantity: 2,
        deviceType: "powder_mixer",
        managerID: "admin01"
    },
    {
        deviceID: "BJY-E13KW-2BD",
        deviceModel: "Berjaya",
        deviceName: "Lò nướng Berjaya 2 tầng 4 khay",
        volume: "1295L",
        quantity: 2,
        deviceType: "baking_oven",
        managerID: "admin01"
    },
    {
        deviceID: "SL-24C4",
        deviceModel: "Alaska",
        deviceName: "Tủ Mát Alaska SL-24C4, 4 Cánh",
        volume: "2400L",
        quantity: 1,
        deviceType: "fridge",
        managerID: "admin01"
    },
    {
        deviceID: "TBP1500-2",
        deviceModel: "Turbo Air",
        deviceName: "Tủ trữ lạnh bánh 3 tầng 1m5 Turbo Air",
        volume: "615L",
        quantity: 1,
        deviceType: "cool_storage",
        managerID: "admin01"
    }
])


db.ingredients.insertMany([
    {
        ingredientID: "trungga",
        ingredientName: "Trứng gà",
        ingredientQuantity: 1500,
        ingredientUnit: "quả",
        ingredientPrice: 3000,
        expired: "2024-08-17"
    },
    {
        ingredientID: "botmiso8",
        ingredientName: "Bột mì số 8",
        ingredientQuantity: 5000,
        ingredientUnit: "gam",
        ingredientPrice: 26000,
        expired: "2024-08-17"
    },
    {
        ingredientID: "botbap",
        ingredientName: "Bột bắp",
        ingredientQuantity: 5000,
        ingredientUnit: "gam",
        ingredientPrice: 34000,
        expired: "2024-08-17"
    },
    {
        ingredientID: "suatuoikhongduong",
        ingredientName: "Sữa tươi không đường",
        ingredientQuantity: 5000,
        ingredientUnit: "ml",
        ingredientPrice: 33000,
        expired: "2024-08-17"
    },
    {
        ingredientID: "dauthucvat",
        ingredientName: "Dầu thực vật",
        ingredientQuantity: 5000,
        ingredientUnit: "ml",
        ingredientPrice: 500000,
        expired: "2024-08-17"
    },
    {
        ingredientID: "duongcat",
        ingredientName: "Đường cát",
        ingredientQuantity: 10000,
        ingredientUnit: "g",
        ingredientPrice: 30500,
        expired: "2024-08-17"
    },
    {
        ingredientID: "bottartar",
        ingredientName: "Bột Tartar",
        ingredientQuantity: 1000,
        ingredientUnit: "g",
        ingredientPrice: 200000,
        expired: "2024-08-17"
    },
    {
        ingredientID: "muoi",
        ingredientName: "Muối",
        ingredientQuantity: 1000,
        ingredientUnit: "g",
        ingredientPrice: 13000,
        expired: "2024-08-17"
    },
    {
        ingredientID: "mutdau",
        ingredientName: "Mứt dâu đà lạt",
        ingredientQuantity: 10000,
        ingredientUnit: "g",
        ingredientPrice: 127000,
        expired: "2024-08-17"
    },
    {
        ingredientID: "mutchanhday",
        ingredientName: "Mứt chanh dây đà lạt",
        ingredientQuantity: 10000,
        ingredientUnit: "g",
        ingredientPrice: 127000,
        expired: "2024-08-17"
    },
    {
        ingredientID: "mutsocola",
        ingredientName: "MỨT SOCOLA HẠT DẺ NUTELLA",
        ingredientQuantity: 10000,
        ingredientUnit: "g",
        ingredientPrice: 670000,
        expired: "2024-08-17"
    },
    {
        ingredientID: "gelatin",
        ingredientName: "Gelatin",
        ingredientQuantity: 5000,
        ingredientUnit: "g",
        ingredientPrice: 287000,
        expired: "2024-08-17"
    },
    {
        ingredientID: "suatuoiitduong",
        ingredientName: "Sữa tươi ít đường",
        ingredientQuantity: 5000,
        ingredientUnit: "ml",
        ingredientPrice: 33000,
        expired: "2024-08-17"
    },
    {
        ingredientID: "vanila",
        ingredientName: "Bột vanila",
        ingredientQuantity: 5000,
        ingredientUnit: "g",
        ingredientPrice: 235000,
        expired: "2024-08-17"
    },
    {
        ingredientID: "bolat",
        ingredientName: "Bơ lạt Úc Pilot ",
        ingredientQuantity: 5000,
        ingredientUnit: "g",
        ingredientPrice: 115000,
        expired: "2024-08-17"
    },
    {
        ingredientID: "dauan",
        ingredientName: "Dầu ăn",
        ingredientQuantity: 5000,
        ingredientUnit: "g",
        ingredientPrice: 50000,
        expired: "2024-08-17"
    },
    {
        ingredientID: "bapmy",
        ingredientName: "Bắp mỹ",
        ingredientQuantity: 5000,
        ingredientUnit: "g",
        ingredientPrice: 50000,
        expired: "2024-08-17"
    },
    {
        ingredientID: "mascarpone",
        ingredientName: "Kem mascarpone",
        ingredientQuantity: 10000,
        ingredientUnit: "g",
        ingredientPrice: 270000,
        expired: "2024-08-17"
    },
    {
        ingredientID: "whippingcream",
        ingredientName: "Whipping Cream",
        ingredientQuantity: 10000,
        ingredientUnit: "ml",
        ingredientPrice: 159000,
        expired: "2024-08-17"
    },
])


db.recipes.insertMany([
    {
        recipeID: "gato_10_strawberry",
        recipeName: "Công thức bánh gato size 10cm vị dâu",
        recipeSize: 10,
        recipe_jam_filling: "strawberry",
        ingredients: [
            {
                ingredID: "trungga",
                ingredQuantity: 2,
                ingredUnit: "quả"
            },
            {
                ingredID: "botmiso8",
                ingredQuantity: 28,
                ingredUnit: "g"
            },
            {
                ingredID: "botbap",
                ingredQuantity: 19,
                ingredUnit: "g"
            },
            {
                ingredID: "suatuoikhongduong",
                ingredQuantity: 28,
                ingredUnit: "ml"
            },
            {
                ingredID: "dauthucvat",
                ingredQuantity: 23,
                ingredUnit: "ml"
            },
            {
                ingredID: "duongcat",
                ingredQuantity: 55,
                ingredUnit: "g"
            },
            {
                ingredID: "bottartar",
                ingredQuantity: 2,
                ingredUnit: "g"
            },
            {
                ingredID: "muoi",
                ingredQuantity: 3,
                ingredUnit: "g"
            },
            {
                ingredID: "mutdau",
                ingredQuantity: 50,
                ingredUnit: "g"
            },
            {
                ingredID: "gelatin",
                ingredQuantity: 2,
                ingredUnit: "g"
            },
            {
                ingredID: "suatuoiitduong",
                ingredQuantity: 150,
                ingredUnit: "ml"
            },
            {
                ingredID: "vanila",
                ingredQuantity: 2.5,
                ingredUnit: "g"
            }
        ],
        sum_dough: 263,
        sum_cream: 169.5
    },
    {
        recipeID: "gato_16_strawberry",
        recipeName: "Công thức bánh gato size 16cm vị dâu",
        recipeSize: 16,
        recipe_jam_filling: "strawberry",
        ingredients: [
            {
                ingredID: "trungga",
                ingredQuantity: 3,
                ingredUnit: "quả"
            },
            {
                ingredID: "botmiso8",
                ingredQuantity: 45,
                ingredUnit: "g"
            },
            {
                ingredID: "botbap",
                ingredQuantity: 30,
                ingredUnit: "g"
            },
            {
                ingredID: "suatuoikhongduong",
                ingredQuantity: 45,
                ingredUnit: "ml"
            },
            {
                ingredID: "dauthucvat",
                ingredQuantity: 36,
                ingredUnit: "ml"
            },
            {
                ingredID: "duongcat",
                ingredQuantity: 90,
                ingredUnit: "g"
            },
            {
                ingredID: "bottartar",
                ingredQuantity: 4,
                ingredUnit: "g"
            },
            {
                ingredID: "muoi",
                ingredQuantity: 5,
                ingredUnit: "g"
            },
            {
                ingredID: "mutdau",
                ingredQuantity: 90,
                ingredUnit: "g"
            },
            {
                ingredID: "gelatin",
                ingredQuantity: 2,
                ingredUnit: "g"
            },
            {
                ingredID: "suatuoiitduong",
                ingredQuantity: 250,
                ingredUnit: "ml"
            },
            {
                ingredID: "vanila",
                ingredQuantity: 5,
                ingredUnit: "g"
            }
        ],
        sum_dough: 410,
        sum_cream: 282
    },
    {
        recipeID: "gato_24_strawberry",
        recipeName: "Công thức bánh gato size 24cm vị dâu",
        recipeSize: 24,
        recipe_jam_filling: "strawberry",
        ingredients: [
            {
                ingredID: "trungga",
                ingredQuantity: 5,
                ingredUnit: "quả"
            },
            {
                ingredID: "botmiso8",
                ingredQuantity: 68,
                ingredUnit: "g"
            },
            {
                ingredID: "botbap",
                ingredQuantity: 45,
                ingredUnit: "g"
            },
            {
                ingredID: "suatuoikhongduong",
                ingredQuantity: 68,
                ingredUnit: "ml"
            },
            {
                ingredID: "dauthucvat",
                ingredQuantity: 54,
                ingredUnit: "ml"
            },
            {
                ingredID: "duongcat",
                ingredQuantity: 133,
                ingredUnit: "g"
            },
            {
                ingredID: "bottartar",
                ingredQuantity: 6,
                ingredUnit: "g"
            },
            {
                ingredID: "muoi",
                ingredQuantity: 9,
                ingredUnit: "g"
            },
            {
                ingredID: "mutdau",
                ingredQuantity: 150,
                ingredUnit: "g"
            },
            {
                ingredID: "gelatin",
                ingredQuantity: 2,
                ingredUnit: "g"
            },
            {
                ingredID: "suatuoiitduong",
                ingredQuantity: 600,
                ingredUnit: "ml"
            },
            {
                ingredID: "vanila",
                ingredQuantity: 7.5,
                ingredUnit: "g"
            }
        ],
        sum_dough: 648,
        sum_cream: 644.5
    },
    {
        recipeID: "gato_10_socola",
        recipeName: "Công thức bánh gato size 10cm vị socola",
        recipeSize: 10,
        recipe_jam_filling: "socola",
        ingredients: [
            {
                ingredID: "trungga",
                ingredQuantity: 2,
                ingredUnit: "quả"
            },
            {
                ingredID: "botmiso8",
                ingredQuantity: 28,
                ingredUnit: "g"
            },
            {
                ingredID: "botbap",
                ingredQuantity: 19,
                ingredUnit: "g"
            },
            {
                ingredID: "suatuoikhongduong",
                ingredQuantity: 28,
                ingredUnit: "ml"
            },
            {
                ingredID: "dauthucvat",
                ingredQuantity: 23,
                ingredUnit: "ml"
            },
            {
                ingredID: "duongcat",
                ingredQuantity: 55,
                ingredUnit: "g"
            },
            {
                ingredID: "bottartar",
                ingredQuantity: 2,
                ingredUnit: "g"
            },
            {
                ingredID: "muoi",
                ingredQuantity: 3,
                ingredUnit: "g"
            },
            {
                ingredID: "mutsocola",
                ingredQuantity: 50,
                ingredUnit: "g"
            },
            {
                ingredID: "gelatin",
                ingredQuantity: 2,
                ingredUnit: "g"
            },
            {
                ingredID: "suatuoiitduong",
                ingredQuantity: 150,
                ingredUnit: "ml"
            },
            {
                ingredID: "vanila",
                ingredQuantity: 2.5,
                ingredUnit: "g"
            }
        ],
        sum_dough: 263,
        sum_cream: 169.5
    },
    {
        recipeID: "gato_16_socola",
        recipeName: "Công thức bánh gato size 16cm vị socola",
        recipeSize: 16,
        recipe_jam_filling: "socola",
        ingredients: [
            {
                ingredID: "trungga",
                ingredQuantity: 3,
                ingredUnit: "quả"
            },
            {
                ingredID: "botmiso8",
                ingredQuantity: 45,
                ingredUnit: "g"
            },
            {
                ingredID: "botbap",
                ingredQuantity: 30,
                ingredUnit: "g"
            },
            {
                ingredID: "suatuoikhongduong",
                ingredQuantity: 45,
                ingredUnit: "ml"
            },
            {
                ingredID: "dauthucvat",
                ingredQuantity: 36,
                ingredUnit: "ml"
            },
            {
                ingredID: "duongcat",
                ingredQuantity: 90,
                ingredUnit: "g"
            },
            {
                ingredID: "bottartar",
                ingredQuantity: 4,
                ingredUnit: "g"
            },
            {
                ingredID: "muoi",
                ingredQuantity: 5,
                ingredUnit: "g"
            },
            {
                ingredID: "mutsocola",
                ingredQuantity: 80,
                ingredUnit: "g"
            },
            {
                ingredID: "gelatin",
                ingredQuantity: 2,
                ingredUnit: "g"
            },
            {
                ingredID: "suatuoiitduong",
                ingredQuantity: 250,
                ingredUnit: "ml"
            },
            {
                ingredID: "vanila",
                ingredQuantity: 5,
                ingredUnit: "g"
            }
        ],
        sum_dough: 410,
        sum_cream: 282
    },
    {
        recipeID: "gato_24_socola",
        recipeName: "Công thức bánh gato size 24cm vị socola",
        recipeSize: 24,
        recipe_jam_filling: "socola",
        ingredients: [
            {
                ingredID: "trungga",
                ingredQuantity: 5,
                ingredUnit: "quả"
            },
            {
                ingredID: "botmiso8",
                ingredQuantity: 68,
                ingredUnit: "g"
            },
            {
                ingredID: "botbap",
                ingredQuantity: 45,
                ingredUnit: "g"
            },
            {
                ingredID: "suatuoikhongduong",
                ingredQuantity: 68,
                ingredUnit: "ml"
            },
            {
                ingredID: "dauthucvat",
                ingredQuantity: 54,
                ingredUnit: "ml"
            },
            {
                ingredID: "duongcat",
                ingredQuantity: 133,
                ingredUnit: "g"
            },
            {
                ingredID: "bottartar",
                ingredQuantity: 6,
                ingredUnit: "g"
            },
            {
                ingredID: "muoi",
                ingredQuantity: 9,
                ingredUnit: "g"
            },
            {
                ingredID: "mutsocola",
                ingredQuantity: 120,
                ingredUnit: "g"
            },
            {
                ingredID: "gelatin",
                ingredQuantity: 2,
                ingredUnit: "g"
            },
            {
                ingredID: "suatuoiitduong",
                ingredQuantity: 600,
                ingredUnit: "ml"
            },
            {
                ingredID: "vanila",
                ingredQuantity: 7.5,
                ingredUnit: "g"
            }
        ],
        sum_dough: 648,
        sum_cream: 644.5
    },
    {
        recipeID: "gato_10_chanhday",
        recipeName: "Công thức bánh gato size 10cm vị chanh dây",
        recipeSize: 10,
        recipe_jam_filling: "chanhday",
        ingredients: [
            {
                ingredID: "trungga",
                ingredQuantity: 2,
                ingredUnit: "quả"
            },
            {
                ingredID: "botmiso8",
                ingredQuantity: 28,
                ingredUnit: "g"
            },
            {
                ingredID: "botbap",
                ingredQuantity: 19,
                ingredUnit: "g"
            },
            {
                ingredID: "suatuoikhongduong",
                ingredQuantity: 28,
                ingredUnit: "ml"
            },
            {
                ingredID: "dauthucvat",
                ingredQuantity: 23,
                ingredUnit: "ml"
            },
            {
                ingredID: "duongcat",
                ingredQuantity: 55,
                ingredUnit: "g"
            },
            {
                ingredID: "bottartar",
                ingredQuantity: 2,
                ingredUnit: "g"
            },
            {
                ingredID: "muoi",
                ingredQuantity: 3,
                ingredUnit: "g"
            },
            {
                ingredID: "mutchanhday",
                ingredQuantity: 40,
                ingredUnit: "g"
            },
            {
                ingredID: "gelatin",
                ingredQuantity: 2,
                ingredUnit: "g"
            },
            {
                ingredID: "suatuoiitduong",
                ingredQuantity: 150,
                ingredUnit: "ml"
            },
            {
                ingredID: "vanila",
                ingredQuantity: 2.5,
                ingredUnit: "g"
            }
        ],
        sum_dough: 263,
        sum_cream: 169.5
    },
    {
        recipeID: "gato_16_chanhday",
        recipeName: "Công thức bánh gato size 16cm vị chanh dây",
        recipeSize: 16,
        recipe_jam_filling: "chanhday",
        ingredients: [
            {
                ingredID: "trungga",
                ingredQuantity: 3,
                ingredUnit: "quả"
            },
            {
                ingredID: "botmiso8",
                ingredQuantity: 45,
                ingredUnit: "g"
            },
            {
                ingredID: "botbap",
                ingredQuantity: 30,
                ingredUnit: "g"
            },
            {
                ingredID: "suatuoikhongduong",
                ingredQuantity: 45,
                ingredUnit: "ml"
            },
            {
                ingredID: "dauthucvat",
                ingredQuantity: 36,
                ingredUnit: "ml"
            },
            {
                ingredID: "duongcat",
                ingredQuantity: 90,
                ingredUnit: "g"
            },
            {
                ingredID: "bottartar",
                ingredQuantity: 4,
                ingredUnit: "g"
            },
            {
                ingredID: "muoi",
                ingredQuantity: 5,
                ingredUnit: "g"
            },
            {
                ingredID: "mutchanhday",
                ingredQuantity: 70,
                ingredUnit: "g"
            },
            {
                ingredID: "gelatin",
                ingredQuantity: 2,
                ingredUnit: "g"
            },
            {
                ingredID: "suatuoiitduong",
                ingredQuantity: 250,
                ingredUnit: "ml"
            },
            {
                ingredID: "vanila",
                ingredQuantity: 5,
                ingredUnit: "g"
            }
        ],
        sum_dough: 410,
        sum_cream: 282
    },
    {
        recipeID: "gato_24_chanhday",
        recipeName: "Công thức bánh gato size 24cm vị chanh dây",
        recipeSize: 24,
        recipe_jam_filling: "chanhday",
        ingredients: [
            {
                ingredID: "trungga",
                ingredQuantity: 5,
                ingredUnit: "quả"
            },
            {
                ingredID: "botmiso8",
                ingredQuantity: 68,
                ingredUnit: "g"
            },
            {
                ingredID: "botbap",
                ingredQuantity: 45,
                ingredUnit: "g"
            },
            {
                ingredID: "suatuoikhongduong",
                ingredQuantity: 68,
                ingredUnit: "ml"
            },
            {
                ingredID: "dauthucvat",
                ingredQuantity: 54,
                ingredUnit: "ml"
            },
            {
                ingredID: "duongcat",
                ingredQuantity: 133,
                ingredUnit: "g"
            },
            {
                ingredID: "bottartar",
                ingredQuantity: 6,
                ingredUnit: "g"
            },
            {
                ingredID: "muoi",
                ingredQuantity: 9,
                ingredUnit: "g"
            },
            {
                ingredID: "mutchanhday",
                ingredQuantity: 110,
                ingredUnit: "g"
            },
            {
                ingredID: "gelatin",
                ingredQuantity: 2,
                ingredUnit: "g"
            },
            {
                ingredID: "suatuoiitduong",
                ingredQuantity: 600,
                ingredUnit: "ml"
            },
            {
                ingredID: "vanila",
                ingredQuantity: 7.5,
                ingredUnit: "g"
            }
        ],
        sum_dough: 648,
        sum_cream: 644.5
    },
    {
        recipeID: "kembap_10",
        recipeName: "Công thức bánh kem bắp size 10cm",
        recipeSize: 10,
        recipe_jam_filling: null,
        ingredients: [
            {
                ingredID: "trungga",
                ingredQuantity: 2,
                ingredUnit: "quả"
            },
            {
                ingredID: "botmiso8",
                ingredQuantity: 12,
                ingredUnit: "g"
            },
            {
                ingredID: "botbap",
                ingredQuantity: 12,
                ingredUnit: "g"
            },
            {
                ingredID: "muoi",
                ingredQuantity: 2,
                ingredUnit: "g"
            },
            {
                ingredID: "duongcat",
                ingredQuantity: 43,
                ingredUnit: "g"
            },
            {
                ingredID: "bottartar",
                ingredQuantity: 2.5,
                ingredUnit: "g"
            },
            {
                ingredID: "bolat",
                ingredQuantity: 6,
                ingredUnit: "g"
            },
            {
                ingredID: "dauan",
                ingredQuantity: 12,
                ingredUnit: "ml"
            },
            {
                ingredID: "suatuoikhongduong",
                ingredQuantity: 25,
                ingredUnit: "ml"
            },
            {
                ingredID: "bapmy",
                ingredQuantity: 25,
                ingredUnit: "g"
            },
            {
                ingredID: "mascarpone",
                ingredQuantity: 90,
                ingredUnit: "g"
            },
            {
                ingredID: "whippingcream",
                ingredQuantity: 150,
                ingredUnit: "ml"
            }
        ],
        sum_dough: 256.5,
        sum_cream: 243
    },
    {
        recipeID: "kembap_16",
        recipeName: "Công thức bánh kem bắp size 16cm",
        recipeSize: 16,
        recipe_jam_filling: null,
        ingredients: [
            {
                ingredID: "trungga",
                ingredQuantity: 3,
                ingredUnit: "quả"
            },
            {
                ingredID: "botmiso8",
                ingredQuantity: 20,
                ingredUnit: "g"
            },
            {
                ingredID: "botbap",
                ingredQuantity: 20,
                ingredUnit: "g"
            },
            {
                ingredID: "muoi",
                ingredQuantity: 3,
                ingredUnit: "g"
            },
            {
                ingredID: "duongcat",
                ingredQuantity: 65,
                ingredUnit: "g"
            },
            {
                ingredID: "bottartar",
                ingredQuantity: 2.5,
                ingredUnit: "g"
            },
            {
                ingredID: "bolat",
                ingredQuantity: 10,
                ingredUnit: "g"
            },
            {
                ingredID: "dauan",
                ingredQuantity: 20,
                ingredUnit: "ml"
            },
            {
                ingredID: "suatuoikhongduong",
                ingredQuantity: 35,
                ingredUnit: "ml"
            },
            {
                ingredID: "bapmy",
                ingredQuantity: 35,
                ingredUnit: "g"
            },
            {
                ingredID: "mascarpone",
                ingredQuantity: 150,
                ingredUnit: "g"
            },
            {
                ingredID: "whippingcream",
                ingredQuantity: 250,
                ingredUnit: "ml"
            }
        ],
        sum_dough: 285.5,
        sum_cream: 405
    },
    {
        recipeID: "kembap_24",
        recipeName: "Công thức bánh kem bắp size 24cm",
        recipeSize: 24,
        recipe_jam_filling: null,
        ingredients: [
            {
                ingredID: "trungga",
                ingredQuantity: 5,
                ingredUnit: "quả"
            },
            {
                ingredID: "botmiso8",
                ingredQuantity: 30,
                ingredUnit: "g"
            },
            {
                ingredID: "botbap",
                ingredQuantity: 30,
                ingredUnit: "g"
            },
            {
                ingredID: "muoi",
                ingredQuantity: 5,
                ingredUnit: "g"
            },
            {
                ingredID: "duongcat",
                ingredQuantity: 98,
                ingredUnit: "g"
            },
            {
                ingredID: "bottartar",
                ingredQuantity: 5,
                ingredUnit: "g"
            },
            {
                ingredID: "bolat",
                ingredQuantity: 15,
                ingredUnit: "g"
            },
            {
                ingredID: "dauan",
                ingredQuantity: 50,
                ingredUnit: "ml"
            },
            {
                ingredID: "suatuoikhongduong",
                ingredQuantity: 50,
                ingredUnit: "ml"
            },
            {
                ingredID: "bapmy",
                ingredQuantity: 55,
                ingredUnit: "g"
            },
            {
                ingredID: "mascarpone",
                ingredQuantity: 225,
                ingredUnit: "g"
            },
            {
                ingredID: "whippingcream",
                ingredQuantity: 375,
                ingredUnit: "ml"
            }
        ],
        sum_dough: 630,
        sum_cream: 608
    }
])

db.cakes.insertMany([
    {
        cakeID: 'BG50015',
        cakeName: 'Bánh kỉ niệm 2 năm',
        size: 10,
        jamFilling: 'Strawberry',
        price: 320000,
        img_url: '../../assets/cake/cake1.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'RCP50001',
        decor_id: 'DCR50001',
        temp_grill: 180,
        time_grill: 30,
    },
    {
        cakeID: 'BG50016',
        cakeName: 'Bánh kỉ niệm trái tim',
        size: 10,
        jamFilling: 'Raspberry',
        price: 280000,
        img_url: '../../assets/cake/cake2.jpg',
        cakeType: 'Butter cake',
        occasion: 'christmas',
        description: 'A heart-shaped cake to celebrate special moments',
        recipe_id: 'RCP50002',
        decor_id: 'DCR50002',
        temp_grill: 160,
        time_grill: 25,
    },
    {
        cakeID: 'BG50017',
        cakeName: 'Bánh chúc mừng kỉ niệm',
        size: 16,
        jamFilling: 'Blueberry',
        price: 350000,
        img_url: '../../assets/cake/cake3.jpg',
        cakeType: 'Chocolate cake',
        occasion: 'christmas',
        description: 'A congratulatory cake for memorable occasions',
        recipe_id: 'RCP50003',
        decor_id: 'DCR50003',
        temp_grill: 200,
        time_grill: 35,
    },
    {
        cakeID: 'BG50018',
        cakeName: 'Bánh lịch kỉ niệm',
        size: 10,
        jamFilling: 'Mixed berries',
        price: 400000,
        img_url: '../../assets/cake/cake4.jpg',
        cakeType: 'Red velvet cake',
        occasion: 'anniversary',
        description: 'A calendar-shaped cake to mark special dates',
        recipe_id: 'RCP50004',
        decor_id: 'DCR50004',
        temp_grill: 180,
        time_grill: 30,
    },
    {
        cakeID: 'BG50024',
        cakeName: 'Bánh hoa bắp',
        size: 10,
        jamFilling: 'Corn',
        price: 600.000,
        img_url: '../../assets/cake/cake5.jpg',
        cakeType: 'Sponge cake',
        occasion: 'birthday',
        description: 'A beautiful flower-shaped cake for a corn lover',
        recipe_id: 'RCP50005',
        decor_id: 'DCR50005',
        temp_grill: 200,
        time_grill: 35,
    },
    {
        cakeID: 'BG50023',
        cakeName: 'Bánh hạt bắp',
        size: 10,
        jamFilling: 'Corn',
        price: 600000,
        img_url: '../../assets/cake/cake6.jpg',
        cakeType: 'Butter cake',
        occasion: 'birthday',
        description: 'A delicious corn-flavored cake with corn kernels',
        recipe_id: 'RCP50006',
        decor_id: 'DCR50006',
        temp_grill: 180,
        time_grill: 30,
    },
    {
        cakeID: 'BG50021',
        cakeName: 'Bánh bắp trái',
        size: 16,
        jamFilling: 'Corn',
        price: 400000,
        img_url: '../../assets/cake/cake7.jpg',
        cakeType: 'Chocolate cake',
        occasion: 'birthday',
        description: 'A fruity cake with corn and mixed fruits',
        recipe_id: 'RCP50007',
        decor_id: 'DCR50007',
        temp_grill: 200,
        time_grill: 35,
    },
    {
        cakeID: 'BG50022',
        cakeName: 'Bánh bắp dâu nho',
        size: 10,
        jamFilling: 'Corn',
        price: 420000,
        img_url: '../../assets/cake/cake8.jpg',
        cakeType: 'Red velvet cake',
        occasion: 'custom',
        description: 'A corn-flavored cake with strawberry and grape',
        recipe_id: 'RCP50008',
        decor_id: 'DCR50008',
        temp_grill: 180,
        time_grill: 30,
    },
    {
        cakeID: 'BG50023',
        cakeName: 'Bánh sinh nhật hình chú mèo',
        size: 24,
        jamFilling: 'Vanilla',
        price: 250000,
        img_url: '../../assets/cake/cake9.jpg',
        cakeType: 'Sponge cake',
        occasion: 'birthday',
        description: 'A cute cat-shaped birthday cake with vanilla flavor',
        recipe_id: 'RCP50009',
        decor_id: 'DCR50009',
        temp_grill: 160,
        time_grill: 25,
    },
    {
        cakeID: 'BG50024',
        cakeName: 'Bánh hoa hồng',
        size: 24,
        jamFilling: 'Strawberry',
        price: 350000,
        img_url: '../../assets/cake/cake10.jpg',
        cakeType: 'Butter cake',
        occasion: 'anniversary',
        description: 'A beautiful rose-shaped cake with strawberry filling',
        recipe_id: 'RCP50010',
        decor_id: 'DCR50010',
        temp_grill: 180,
        time_grill: 30,
    }
])
