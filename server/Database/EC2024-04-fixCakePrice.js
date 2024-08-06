use("EC2024-04-CakeHub");

db.cakes.updateMany(
    { size: 16, occasion: "custom" },
    { $set: { price: 360000 } }
)

db.cakes.updateMany(
    { size: 24, occasion: "custom" },
    { $set: { price: 400000 } }
)


db.cakes.updateMany(
    { size: 10, occasion: "christmas" },
    { $set: { price: 345000 } }
)

db.cakes.updateMany(
    { size: 16, occasion: "christmas" },
    { $set: { price: 385000 } }
)

db.cakes.updateMany(
    { size: 24, occasion: "christmas" },
    { $set: { price: 425000 } }
)

db.cakes.updateMany(
    { size: 10, occasion: "anniversary" },
    { $set: { price: 350000 } }
)

db.cakes.updateMany(
    { size: 16, occasion: "anniversary" },
    { $set: { price: 390000 } }
)

db.cakes.updateMany(
    { size: 24, occasion: "anniversary" },
    { $set: { price: 430000 } }
)

db.cakes.updateMany(
    { size: 10, occasion: "birthday" },
    { $set: { price: 335000 } }
)

db.cakes.updateMany(
    { size: 16, occasion: "birthday" },
    { $set: { price: 375000 } }
)

db.cakes.updateMany(
    { size: 24, occasion: "birthday" },
    { $set: { price: 415000 } }
)