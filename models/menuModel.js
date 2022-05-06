const nedb = require('nedb');
class MenuBook {
    constructor(dbFilePath) {
        if (dbFilePath) {
        this.db = new nedb({ filename: dbFilePath, autoload: true });
        console.log('DB connected to ' + dbFilePath);
        } else {
        this.db = new nedb();
        }
        }
    //a function to seed the database 
init() {
    this.db.insert({
    _id: '1',
    dishName: 'Wagyu burger',
    dishAvailability: 'off',
    description: 'A5+ grade Wagyu Sirloin, cooked medium rare in a lightly toasted brioche bun. Served with handcut fried potatos',
    mealType: 'Main',
    ingredients: 'Wagyu sirloin, brioche bun, fried potato, olive oil, lettuce, SIR sauce' ,
    menu: 'Dinner',
    allergens: 'gluten',
    price: '£70.00'
    });

    //for later debugging
    console.log('db entry 1 inserted');
    
    this.db.insert({
        _id: '2',
        dishName: 'Chicken Burger',
        dishAvailability: 'on',
        description: 'Chicken born and raised in Greenock, cooked medium rare, in a lightly toasted brioche bun. Served with handcut fried potatos',
        mealType: 'Main',
        ingredients: 'chicken, brioche bun, fried potato, mayonaisse, lettuce, tomato, coleslaw' ,
        menu: 'Lunch',
        allergens: 'gluten, dairy',
        price: '£50.00'
        });
        console.log('db entry 2 inserted');
        this.db.insert({
            _id: '3',
            dishName: 'Wagyu Steak',
            dishAvailability: 'on',
            description: 'A5+ grade Wagyu Sirloin, cooked medium rare. Served with handcut fried potatos',
            mealType: 'Main',
            ingredients: 'Wagyu sirloin, fried potato, lettuce, peppercorn sauce' ,
            menu: 'Dinner',
            allergens: 'gluten',
            price: '£120.00'
            });
            console.log('db entry 3 inserted');
this.db.insert({
    _id: '4',
    dishName: 'Salami Pizza',
    dishAvailability: 'on',
    description: 'Ventricina salami, San Marzano tomato sauce, fresh Mozarella fior di latte, fresh organic basil straight from Napoli. What more can we say.',
    mealType: 'Main',
    ingredients: 'Ventricina salami, basil, San Marzano tomato sauce, Mozarella, woodfired base, basil' ,
    menu: 'Dinner',
    allergens: 'gluten, dairy',
    price: '£100.00'
    });
    console.log('db entry 4 inserted');
this.db.insert({
    _id: '5',
    dishName: 'Cacio e pepe',
    dishAvailability: 'on',
    description: 'Its Cacio e pepe. If you do not know what it is, theres no hope for you',
    mealType: 'Main',
    ingredients: 'black pepper, pecorino cheese and spaghetti' ,
    menu: 'Lunch',
    allergens: 'gluten, dairy',
    price: '£80.00'
    });
    console.log('db entry 5 inserted');
    this.db.insert({
        _id: '6',
        dishName: 'Spaghetti Piemontesi',
        dishAvailability: 'on',
        description: 'A classic spinach spaghetti topped with rich parmesan","',
        mealType: 'Main',
        ingredients: 'butter, onion, garlic, spinach, sage leaves, nutmeg, sea salt and black pepper' ,
        menu: 'Dinner',
        allergens: 'gluten, dairy',
        price: '£90.00'
        });
        console.log('db entry 6 inserted');
this.db.insert({
    _id: '7',
    dishName: 'Focaccia',
    dishAvailability: 'on',
    description: 'Our award winning rosemary and olive oil focaccia. A family recipe passed through generations of Port Glasgow residents.',
    mealType: 'Starter',
    ingredients: 'salt, olive oil, rosemary, sprigs, flour' ,
    menu: 'Lunch',
    allergens: 'gluten',
    price: '£30.00'
    });
    console.log('db entry 7 inserted');
    this.db.insert({
        _id: '8',
        dishName: 'Mozarella Focaccia',
        dishAvailability: 'on',
        description: 'Our award winning rosemary and olive oil focaccia. A family recipe passed through generations of Port Glasgow residents. Topped with mozarella grown in my Uncle Garys basement',
        mealType: 'Starter',
        ingredients: 'salt, olive oil, rosemary, sprigs, flour, mozarella' ,
        menu: 'Dinner',      
        allergens: 'gluten, dairy',
        price: '£40.00'
        });
        console.log('db entry 8 inserted');
    this.db.insert({
    _id: '9',
    dishName: 'Raspberry Cheesecake',
    dishAvailability: 'on',
    description: 'its raspberry Cheesecake. Does what it says on the tin.","',
    mealType: 'dessert',
    ingredients: 'raspberries, digestive busicuit, soft cheese, sugar, vanilla extract, butter, icing sugar' ,
    menu: 'Dinner',
    allergens: 'gluten, dairy',
    price: '£30.00'
    });
    console.log('db entry 9 inserted');
    this.db.insert({
        _id: '10',
        dishName: 'Thai green curried pineapple',
        dishAvailability: 'on',
        description: 'Crazy Daves moleculare pineapple dessert Not sure how he makes it but it tastes great!',
        mealType: 'dessert',
        ingredients: 'pineapple, green chillies, lemongrass, cardamom pods, lime juice, coriander, lime leaves, coriander seeds, malibu, palm sugar,ginger, pineapple juice, milk, sugar, ginger beer, xanthan gum, sodium alginate, calcium lactate, water, lecithin, egg yolk, coconut puree, milk powder, gelatine leaf' ,
        menu: 'Lunch',
        allergens: 'egg, dairy, pineapple',
        price: '£90.00'
        });
        console.log('db entry 10 inserted');
this.db.insert({
    _id: '11',
    dishName: 'Chocolate mousse cake with raspberries',
    dishAvailability: 'on',
    description: 'Its Chocolate mousse, with raspberries. Pretty self-explanatory.',
    mealType: 'dessert',
    ingredients: 'dark chocolate, egg whites, golden caster sugar, creme fraiche, grated chocolate, raspberries' ,
    menu: 'Dinner',
    allergens: 'gluten, dairy, egg',
    price: '£50.00'
    });
    console.log('db entry 11 inserted');
    
}
//a function to return all entries from the database
getAllEntries() {
    //return a Promise object, which can be resolved or rejected
    return new Promise((resolve, reject) => {
    //use the find() function of the database to get the data,
    //error first callback function, err for error, entries for data
    this.db.find({}, function(err, entries) {
    //if error occurs reject Promise
    if (err) {
    reject(err);
    //if no error resolve the promise & return the data
    } else {
    resolve(entries);
    //to see what the returned data looks like
    console.log('function all() returns: ', entries);
    }
    })
    })
    }
    getDinnerEntries() {
        //return a Promise object, which can be resolved or rejected
        return new Promise((resolve, reject) => {
        //find(author:'Peter) retrieves the data,
        //with error first callback function, err=error, entries=data
        this.db.find({ dishAvailability:'on', menu: 'Dinner' }, function(err, entries) {
        //if error occurs reject Promise
        if (err) {
        reject(err);
        //if no error resolve the promise and return the data
        } else {
        resolve(entries);
        //to see what the returned data looks like
        console.log('getDinnerEntries() returns: ', entries);
        }
        })
        })
        }

        getLunchEntries() {
            //return a Promise object, which can be resolved or rejected
            return new Promise((resolve, reject) => {
            //find(author:'Peter) retrieves the data,
            //with error first callback function, err=error, entries=data
            this.db.find({ dishAvailability:'on', menu: 'Lunch' }, function(err, entries) {
            //if error occurs reject Promise
            if (err) {
            reject(err);
            //if no error resolve the promise and return the data
            } else {
            resolve(entries);
            //to see what the returned data looks like
            console.log('getLunchEntries() returns: ', entries);
            }
            })
            })
            }

            addEntry(_id, dishName, dishAvailability, description, mealType, ingredients, menu, allergens, price) {
                var entry = {
                _id: _id,
                dishName: dishName,
                dishAvailability: dishAvailability,
                description: description,
                mealType: mealType,
                ingredients: ingredients,
                menu: menu,
                allergens: allergens,
                price: price,
                }
                console.log('entry created', entry);
                this.db.insert(entry, function(err, doc) {
                if (err) {
                console.log('Error inserting document', _id);
                } else {
                console.log('document inserted into the database', doc);
                }
                }) 
            }

            deletedEntry(_id, dishName, dishAvailability, description, mealType, ingredients, menu, allergens, price) {
                var entry = {
                _id: _id,
                dishName: dishName,
                dishAvailability: dishAvailability,
                description: description,
                mealType: mealType,
                ingredients: ingredients,
                menu: menu,
                allergens: allergens,
                price: price,
                
                }
                console.log('entry updated', entry);
                this.db.update(entry, function(err, doc) {
                if (err) {
                console.log('Error inserting document', _id);
                } else {
                console.log('document inserted into the database', doc);
                }
                }) 
            }


            deleteEntry(u_id, udishName, udishAvailability, udescription, umealType, uingredients, umenu, uallergens, uprice) {
                var entry = {
                    _id: u_id,
                    dishName: udishName,
                dishAvailability: udishAvailability,
                description: udescription,
                mealType: umealType,
                ingredients: uingredients,
                menu: umenu,
                allergens: uallergens,
                price: uprice,
                
                    }
                    this.db.update({ _id: u_id }, { $set: entry }, { multi: true }, function (err, numReplaced) {
                        // numReplaced = help
                        // all Fields 'u_id, udishName, udishAvailability, udescription, umealType, uingredients, umenu, uallergens, uprice' 
                      })
            
                }




updateEntry(_id, dishName, dishAvailability, description, mealType, ingredients, menu, allergens, price) {
    db.update(
        { _id: _id}, 
        { $set: { dishName: dishName} },
        { $set: { dishAvailability: dishAvailability} },
        { $set: { description: description} },
        { $set: { mealType: mealType} },
        { $set: { ingredients: ingredients} },
        { $set: { price: price} },
        { $set: { allergens: allergens} },
        { $set: { menu: menu} },
        
        ); 
}

            getMenus(query, callback) {
                const sortedMeals = this.db.find({}).sort({ts: -1});
                const queryCallback = (err, docs) => {
                 if (err) {
                  callback(null, err);
                  return;
                 }
              
                 callback({entries: docs, count: this.count});
                };
              
                if (query.allNotifications) {
                 sortedNotifications.exec(queryCallback);
                } else if (query.start != null) {
                 sortedMeals
                  .skip(Number(query.start))
                  .limit(Number(query.limit) || DEFAULT_QUERY_LIMIT)
                  .exec(queryCallback);
                } else {
                 sortedMeals.limit(Number(query.limit) || DEFAULT_QUERY_LIMIT).exec(queryCallback);
                }
               }

getEntriesBy_id(_id) {
            return new Promise((resolve, reject) => {
                this.db.find({ '_id': _id }, function(err, entries) {
                if (err) {
                    reject(err);
                } else {
                    resolve(entries);
                console.log('getEntriesByUser returns: ', entries);
            }
        })
    })

 }

}
module.exports = MenuBook;