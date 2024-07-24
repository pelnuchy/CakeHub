
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
db.orders.insertMany([
    {
        orderID: "O001",
        shippingDate: "2021-08-17",
        shippingAddress: "123 Nguyen Van Linh, Da Nang",
        orderTime: "2021-08-17 10:00:00",
        paymentTime: "2021-08-17 10:30:00",
        completeTime: "2021-08-17 11:00:00",
        total_price: 320000,
        status: "completed",
        user_id: "tra1",
        s_cakeQuantity: 1,
        cakes: [
            {
                cakeID: "C01-DT-S",
                quantity: 1
            }
        ]
    },
    {
        orderID: "O002",
        shippingDate: "2022-08-17",
        shippingAddress: "12 Hai Ba Trung, Da Nang",
        orderTime: "2022-08-17 10:00:00",
        paymentTime: "2022-08-17 10:30:00",
        completeTime: "2022-08-17 11:00:00",
        total_price: 640000,
        status: "completed",
        user_id: "tra1",
        s_cakeQuantity: 2,
        cakes: [
            {
                cakeID: "C01-DT-S",
                quantity: 1
            },
            {
                cakeID: "C02-DT-M",
                quantity: 1
            }
        ]
    }
]);
db.cakes.insertMany([
    {
        cakeID: 'C01-DT-S',
        cakeName: 'Bánh kem giáng sinh màu hồng',
        size: 10,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake1.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C01-DT-M',
        cakeName: 'Bánh kem giáng sinh màu hồng',
        size: 16,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake1.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C01-DT-L',
        cakeName: 'Bánh kem giáng sinh màu hồng',
        size: 24,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake1.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C01-CD-S',
        cakeName: 'Bánh kem giáng sinh màu hồng',
        size: 10,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake1.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C01-CD-M',
        cakeName: 'Bánh kem giáng sinh màu hồng',
        size: 16,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake1.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C01-CD-L',
        cakeName: 'Bánh kem giáng sinh màu hồng',
        size: 24,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake1.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C01-Soco-S',
        cakeName: 'Bánh kem giáng sinh màu hồng',
        size: 10,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake1.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C01-Soco-M',
        cakeName: 'Bánh kem giáng sinh màu hồng',
        size: 16,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake1.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C01-Soco-L',
        cakeName: 'Bánh kem giáng sinh màu hồng',
        size: 24,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake1.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    






    {
        cakeID: 'C02-DT-S',
        cakeName: 'Bánh kem giáng sinh đỏ tươi',
        size: 10,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake2.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C02-DT-M',
        cakeName: 'Bánh kem giáng sinh đỏ tươi',
        size: 16,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake2.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C02-DT-L',
        cakeName: 'Bánh kem giáng sinh đỏ tươi',
        size: 24,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake2.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C02-CD-S',
        cakeName: 'Bánh kem giáng sinh đỏ tươi',
        size: 10,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake2.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C02-CD-M',
        cakeName: 'Bánh kem giáng sinh đỏ tươi',
        size: 16,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake2.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C02-CD-L',
        cakeName: 'Bánh kem giáng sinh đỏ tươi',
        size: 24,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake2.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C02-Soco-S',
        cakeName: 'Bánh kem giáng sinh đỏ tươi',
        size: 10,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake2.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C02-Soco-M',
        cakeName: 'Bánh kem giáng sinh đỏ tươi',
        size: 16,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake2.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C02-Soco-L',
        cakeName: 'Bánh kem giáng sinh đỏ tươi',
        size: 24,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake2.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },








    {
        cakeID: 'C03-DT-S',
        cakeName: 'Bánh kem giáng sinh trắng Merry Christmas',
        size: 10,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake3.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C03-DT-M',
        cakeName: 'Bánh kem giáng sinh trắng Merry Christmas',
        size: 16,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake3.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C03-DT-L',
        cakeName: 'Bánh kem giáng sinh trắng Merry Christmas',
        size: 24,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake3.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C03-CD-S',
        cakeName: 'Bánh kem giáng sinh trắng Merry Christmas',
        size: 10,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake3.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C03-CD-M',
        cakeName: 'Bánh kem giáng sinh trắng Merry Christmas',
        size: 16,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake3.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C03-CD-L',
        cakeName: 'Bánh kem giáng sinh trắng Merry Christmas',
        size: 24,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake3.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C03-Soco-S',
        cakeName: 'Bánh kem giáng sinh trắng Merry Christmas',
        size: 10,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake3.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C03-Soco-M',
        cakeName: 'Bánh kem giáng sinh trắng Merry Christmas',
        size: 16,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake3.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C03-Soco-L',
        cakeName: 'Bánh kem giáng sinh trắng Merry Christmas',
        size: 24,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake3.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },








    {
        cakeID: 'C04-DT-S',
        cakeName: 'Bánh kem giáng sinh xanh lam tuyệt đẹp',
        size: 10,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake4.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C04-DT-M',
        cakeName: 'Bánh kem giáng sinh xanh lam tuyệt đẹp',
        size: 16,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake4.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C04-DT-L',
        cakeName: 'Bánh kem giáng sinh xanh lam tuyệt đẹp',
        size: 24,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake4.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C04-CD-S',
        cakeName: 'Bánh kem giáng sinh xanh lam tuyệt đẹp',
        size: 10,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake4.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C04-CD-M',
        cakeName: 'Bánh kem giáng sinh xanh lam tuyệt đẹp',
        size: 16,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake4.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C04-CD-L',
        cakeName: 'Bánh kem giáng sinh xanh lam tuyệt đẹp',
        size: 24,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake4.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C04-Soco-S',
        cakeName: 'Bánh kem giáng sinh xanh lam tuyệt đẹp',
        size: 10,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake4.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C04-Soco-M',
        cakeName: 'Bánh kem giáng sinh xanh lam tuyệt đẹp',
        size: 16,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake4.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C04-Soco-L',
        cakeName: 'Bánh kem giáng sinh xanh lam tuyệt đẹp',
        size: 24,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake4.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },








    {
        cakeID: 'C05-DT-S',
        cakeName: 'Bánh kem giáng sinh cây thông đẹp',
        size: 10,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake5.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C05-DT-M',
        cakeName: 'Bánh kem giáng sinh cây thông đẹp',
        size: 16,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake5.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C05-DT-L',
        cakeName: 'Bánh kem giáng sinh cây thông đẹp',
        size: 24,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake5.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C05-CD-S',
        cakeName: 'Bánh kem giáng sinh cây thông đẹp',
        size: 10,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake5.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C05-CD-M',
        cakeName: 'Bánh kem giáng sinh cây thông đẹp',
        size: 16,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake5.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C05-CD-L',
        cakeName: 'Bánh kem giáng sinh cây thông đẹp',
        size: 24,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake5.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C05-Soco-S',
        cakeName: 'Bánh kem giáng sinh cây thông đẹp',
        size: 10,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake5.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C05-Soco-M',
        cakeName: 'Bánh kem giáng sinh cây thông đẹp',
        size: 16,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake5.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C05-Soco-L',
        cakeName: 'Bánh kem giáng sinh cây thông đẹp',
        size: 24,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake5.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },









    {
        cakeID: 'C06-DT-S',
        cakeName: 'Bánh kem giáng sinh người tuyết',
        size: 10,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake6.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C06-DT-M',
        cakeName: 'Bánh kem giáng sinh người tuyết',
        size: 16,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake6.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C06-DT-L',
        cakeName: 'Bánh kem giáng sinh người tuyết',
        size: 24,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake6.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C06-CD-S',
        cakeName: 'Bánh kem giáng sinh người tuyết',
        size: 10,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake6.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C06-CD-M',
        cakeName: 'Bánh kem giáng sinh người tuyết',
        size: 16,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake6.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C06-CD-L',
        cakeName: 'Bánh kem giáng sinh người tuyết',
        size: 24,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake6.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C06-Soco-S',
        cakeName: 'Bánh kem giáng sinh người tuyết',
        size: 10,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake6.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C06-Soco-M',
        cakeName: 'Bánh kem giáng sinh người tuyết',
        size: 16,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake6.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C06-Soco-L',
        cakeName: 'Bánh kem giáng sinh người tuyết',
        size: 24,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake6.jpg',
        cakeType: 'gato',
        occasion: 'christmas',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },








    {
        cakeID: 'C07-DT-S',
        cakeName: 'Bánh kem sinh nhật hình nơ',
        size: 10,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake7.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C07-DT-M',
        cakeName: 'Bánh kem sinh nhật hình nơ',
        size: 16,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake7.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C07-DT-L',
        cakeName: 'Bánh kem sinh nhật hình nơ',
        size: 24,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake7.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C07-CD-S',
        cakeName: 'Bánh kem sinh nhật hình nơ',
        size: 10,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake7.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C07-CD-M',
        cakeName: 'Bánh kem sinh nhật hình nơ',
        size: 16,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake7.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C07-CD-L',
        cakeName: 'Bánh kem sinh nhật hình nơ',
        size: 24,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake7.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C07-Soco-S',
        cakeName: 'Bánh kem sinh nhật hình nơ',
        size: 10,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake7.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C07-Soco-M',
        cakeName: 'Bánh kem sinh nhật hình nơ',
        size: 16,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake7.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C07-Soco-L',
        cakeName: 'Bánh kem sinh nhật hình nơ',
        size: 24,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake7.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },







    {
        cakeID: 'C08-DT-S',
        cakeName: 'Bánh kem sinh nhật dâu tây tươi',
        size: 10,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake8.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C08-DT-M',
        cakeName: 'Bánh kem sinh nhật dâu tây tươi',
        size: 16,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake8.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C08-DT-L',
        cakeName: 'Bánh kem sinh nhật dâu tây tươi',
        size: 24,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake8.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C08-CD-S',
        cakeName: 'Bánh kem sinh nhật dâu tây tươi',
        size: 10,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake8.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C08-CD-M',
        cakeName: 'Bánh kem sinh nhật dâu tây tươi',
        size: 16,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake8.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C08-CD-L',
        cakeName: 'Bánh kem sinh nhật dâu tây tươi',
        size: 24,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake8.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C08-Soco-S',
        cakeName: 'Bánh kem sinh nhật dâu tây tươi',
        size: 10,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake8.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C08-Soco-M',
        cakeName: 'Bánh kem sinh nhật dâu tây tươi',
        size: 16,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake8.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C08-Soco-L',
        cakeName: 'Bánh kem sinh nhật dâu tây tươi',
        size: 24,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake8.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },









    {
        cakeID: 'C09-DT-S',
        cakeName: 'Bánh kem "Bày đặt sinh nhật"',
        size: 10,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake9.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C09-DT-M',
        cakeName: 'Bánh kem "Bày đặt sinh nhật"',
        size: 16,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake9.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C09-DT-L',
        cakeName: 'Bánh kem "Bày đặt sinh nhật"',
        size: 24,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake9.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C09-CD-S',
        cakeName: 'Bánh kem "Bày đặt sinh nhật"',
        size: 10,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake9.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C09-CD-M',
        cakeName: 'Bánh kem "Bày đặt sinh nhật"',
        size: 16,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake9.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C09-CD-L',
        cakeName: 'Bánh kem "Bày đặt sinh nhật"',
        size: 24,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake9.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C09-Soco-S',
        cakeName: 'Bánh kem "Bày đặt sinh nhật"',
        size: 10,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake9.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C09-Soco-M',
        cakeName: 'Bánh kem "Bày đặt sinh nhật"',
        size: 16,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake9.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C09-Soco-L',
        cakeName: 'Bánh kem "Bày đặt sinh nhật"',
        size: 24,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake9.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },







    {
        cakeID: 'C10-DT-S',
        cakeName: 'Bánh kem sinh nhật "Tặng cái bánh nè"',
        size: 10,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake10.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C10-DT-M',
        cakeName: 'Bánh kem "Bày đặt sinh nhật"',
        size: 16,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake10.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C10-DT-L',
        cakeName: 'Bánh kem "Bày đặt sinh nhật"',
        size: 24,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake10.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C10-CD-S',
        cakeName: 'Bánh kem "Bày đặt sinh nhật"',
        size: 10,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake10.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C10-CD-M',
        cakeName: 'Bánh kem "Bày đặt sinh nhật"',
        size: 16,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake10.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C10-CD-L',
        cakeName: 'Bánh kem "Bày đặt sinh nhật"',
        size: 24,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake10.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C10-Soco-S',
        cakeName: 'Bánh kem "Bày đặt sinh nhật"',
        size: 10,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake10.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C10-Soco-M',
        cakeName: 'Bánh kem "Bày đặt sinh nhật"',
        size: 16,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake10.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C10-Soco-L',
        cakeName: 'Bánh kem "Bày đặt sinh nhật"',
        size: 24,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake10.jpg',
        cakeType: 'gato',
        occasion: 'birthday',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },







    {
        cakeID: 'C11-DT-S',
        cakeName: 'Bánh kem kỉ niệm tình yêu 4 năm',
        size: 10,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake11.jpg',
        cakeType: 'gato',
        occasion: 'anniversary',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C11-DT-M',
        cakeName: 'Bánh kem kỉ niệm tình yêu 4 năm',
        size: 16,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake11.jpg',
        cakeType: 'gato',
        occasion: 'anniversary',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C11-DT-L',
        cakeName: 'Bánh kem kỉ niệm tình yêu 4 năm',
        size: 24,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake11.jpg',
        cakeType: 'gato',
        occasion: 'anniversary',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C11-CD-S',
        cakeName: 'Bánh kem kỉ niệm tình yêu 4 năm',
        size: 10,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake11.jpg',
        cakeType: 'gato',
        occasion: 'anniversary',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C11-CD-M',
        cakeName: 'Bánh kem kỉ niệm tình yêu 4 năm',
        size: 16,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake11.jpg',
        cakeType: 'gato',
        occasion: 'anniversary',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C11-CD-L',
        cakeName: 'Bánh kem kỉ niệm tình yêu 4 năm',
        size: 24,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake11.jpg',
        cakeType: 'gato',
        occasion: 'anniversary',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C11-Soco-S',
        cakeName: 'Bánh kem kỉ niệm tình yêu 4 năm',
        size: 10,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake11.jpg',
        cakeType: 'gato',
        occasion: 'anniversary',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C11-Soco-M',
        cakeName: 'Bánh kem kỉ niệm tình yêu 4 năm',
        size: 16,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake11.jpg',
        cakeType: 'gato',
        occasion: 'anniversary',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C11-Soco-L',
        cakeName: 'Bánh kem kỉ niệm tình yêu 4 năm',
        size: 24,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake11.jpg',
        cakeType: 'gato',
        occasion: 'anniversary',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },







    {
        cakeID: 'C12-DT-S',
        cakeName: 'Bánh kem kỉ niệm tình yêu 2 năm với trái tim lớn',
        size: 10,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake12.jpg',
        cakeType: 'gato',
        occasion: 'anniversary',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C12-DT-M',
        cakeName: 'Bánh kem kỉ niệm tình yêu 2 năm với trái tim lớn',
        size: 16,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake12.jpg',
        cakeType: 'gato',
        occasion: 'anniversary',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C12-DT-L',
        cakeName: 'Bánh kem kỉ niệm tình yêu 2 năm với trái tim lớn',
        size: 24,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake12.jpg',
        cakeType: 'gato',
        occasion: 'anniversary',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C12-CD-S',
        cakeName: 'Bánh kem kỉ niệm tình yêu 2 năm với trái tim lớn',
        size: 10,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake12.jpg',
        cakeType: 'gato',
        occasion: 'anniversary',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C12-CD-M',
        cakeName: 'Bánh kem kỉ niệm tình yêu 2 năm với trái tim lớn',
        size: 16,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake12.jpg',
        cakeType: 'gato',
        occasion: 'anniversary',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C12-CD-L',
        cakeName: 'Bánh kem kỉ niệm tình yêu 2 năm với trái tim lớn',
        size: 24,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake12.jpg',
        cakeType: 'gato',
        occasion: 'anniversary',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C12-Soco-S',
        cakeName: 'Bánh kem kỉ niệm tình yêu 2 năm với trái tim lớn',
        size: 10,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake12.jpg',
        cakeType: 'gato',
        occasion: 'anniversary',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C12-Soco-M',
        cakeName: 'Bánh kem kỉ niệm tình yêu 2 năm với trái tim lớn',
        size: 16,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake12.jpg',
        cakeType: 'gato',
        occasion: 'anniversary',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C12-Soco-L',
        cakeName: 'Bánh kem kỉ niệm tình yêu 2 năm với trái tim lớn',
        size: 24,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake12.jpg',
        cakeType: 'gato',
        occasion: 'anniversary',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },









    {
        cakeID: 'C13-DT-S',
        cakeName: 'Bánh kem C.AP người nhện',
        size: 10,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake13.jpg',
        cakeType: 'gato',
        occasion: 'custom',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C13-DT-M',
        cakeName: 'Bánh kem C.AP người nhện',
        size: 16,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake13.jpg',
        cakeType: 'gato',
        occasion: 'custom',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C13-DT-L',
        cakeName: 'Bánh kem C.AP người nhện',
        size: 24,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake13.jpg',
        cakeType: 'gato',
        occasion: 'custom',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C13-CD-S',
        cakeName: 'Bánh kem C.AP người nhện',
        size: 10,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake13.jpg',
        cakeType: 'gato',
        occasion: 'custom',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C13-CD-M',
        cakeName: 'Bánh kem C.AP người nhện',
        size: 16,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake13.jpg',
        cakeType: 'gato',
        occasion: 'custom',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C13-CD-L',
        cakeName: 'Bánh kem C.AP người nhện',
        size: 24,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake13.jpg',
        cakeType: 'gato',
        occasion: 'custom',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C13-Soco-S',
        cakeName: 'Bánh kem C.AP người nhện',
        size: 10,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake13.jpg',
        cakeType: 'gato',
        occasion: 'custom',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C13-Soco-M',
        cakeName: 'Bánh kem C.AP người nhện',
        size: 16,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake13.jpg',
        cakeType: 'gato',
        occasion: 'custom',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C13-Soco-L',
        cakeName: 'Bánh kem C.AP người nhện',
        size: 24,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake13.jpg',
        cakeType: 'gato',
        occasion: 'custom',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },









    {
        cakeID: 'C14-DT-S',
        cakeName: 'Bánh kem KyCb con mèo dễ thương',
        size: 10,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake14.jpg',
        cakeType: 'gato',
        occasion: 'custom',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C14-DT-M',
        cakeName: 'Bánh kem KyCb con mèo dễ thương',
        size: 16,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake14.jpg',
        cakeType: 'gato',
        occasion: 'custom',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C14-DT-L',
        cakeName: 'Bánh kem KyCb con mèo dễ thương',
        size: 24,
        jamFilling: 'dâu tây',
        price: 320000,
        img_url: '../../assets/cake/cake14.jpg',
        cakeType: 'gato',
        occasion: 'custom',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_strawberry',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C14-CD-S',
        cakeName: 'Bánh kem KyCb con mèo dễ thương',
        size: 10,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake14.jpg',
        cakeType: 'gato',
        occasion: 'custom',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C14-CD-M',
        cakeName: 'Bánh kem KyCb con mèo dễ thương',
        size: 16,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake14.jpg',
        cakeType: 'gato',
        occasion: 'custom',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C14-CD-L',
        cakeName: 'Bánh kem KyCb con mèo dễ thương',
        size: 24,
        jamFilling: 'chanh dây',
        price: 320000,
        img_url: '../../assets/cake/cake14.jpg',
        cakeType: 'gato',
        occasion: 'custom',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_chanhday',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    },
    {
        cakeID: 'C14-Soco-S',
        cakeName: 'Bánh kem KyCb con mèo dễ thương',
        size: 10,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake14.jpg',
        cakeType: 'gato',
        occasion: 'custom',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_10_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 25,
    },
    {
        cakeID: 'C14-Soco-M',
        cakeName: 'Bánh kem KyCb con mèo dễ thương',
        size: 16,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake14.jpg',
        cakeType: 'gato',
        occasion: 'custom',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_16_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 40,
    },
    {
        cakeID: 'C14-Soco-L',
        cakeName: 'Bánh kem KyCb con mèo dễ thương',
        size: 24,
        jamFilling: 'socola',
        price: 320000,
        img_url: '../../assets/cake/cake14.jpg',
        cakeType: 'gato',
        occasion: 'custom',
        description: 'A delicious cake to celebrate 2 years of memories',
        recipe_id: 'gato_24_socola',
        decor_id: 'DCR50001',
        temp_grill: 150,
        time_grill: 60,
    }




])
