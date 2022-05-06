const menuDAO = require("../models/menuModel");
const userDao = require("../models/userModel.js");

const db = new menuDAO();
db.init();

exports.show_login = function (req, res) {
  res.render("user/login");
};

exports.handle_login = function (req, res) {
  db.getAllmenus()
    .then((list) => {
      res.render("newEntry", {
        title: "Login",
        user: "user",
        menus: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};
exports.landing_page = function (req, res) {
  db.getLunchEntries()
    .then((list) => {
      res.render("entries", {
        title: "Menu",
        entries: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.landing_page_dinner = function (req, res) {
    db.getDinnerEntries()
      .then((list) => {
        res.render("entries", {
          title: "Menu",
          entries: list,
        });
      })
      .catch((err) => {
        console.log("promise rejected", err);
      });
  };

exports.show_new_entries = function (req, res) {
  res.render("newEntry", {
    title: "New Entries",
    user: "user",
  });
};

exports.post_new_entry = function (req, res) {
  console.log("processing post-new_entry controller");
  if (!req.body.menu) {
    response.status(400).send("Entries must have an menu.");
    return;
  }
  db.addEntry(req.body._id, req.body.dishName, req.body.dishAvailability, req.body.description, req.body.mealType, req.body.ingredients, req.body.menu, req.body.allergens, req.body.price);
  res.redirect("/viewMenus");
};

exports.show_edited_entries = function (req, res) {
    res.render("staffMenu", {
      title: "Edit Menu",
      user: "user",
    });
  };
  
  exports.post_edited_entry = function (req, res) {
    console.log("processing post-edited_entry controller");
    if (!req.body.menu) {
      response.status(400).send("Entries must have an menu.");
      return;
    }
    db.deleteEntry(req.body._id, req.body.dishName, req.body.dishAvailability, req.body.description, req.body.mealType, req.body.ingredients, req.body.menu, req.body.allergens, req.body.price);
    res.redirect("/viewMenus");
  };

  exports.show_hide_entries = function (req, res) {
    res.render("hideItem", {
      title: "Hide Menu item",
      user: "user",
    });
  };
  
  exports.post_hide_entry = function (req, res) {
    console.log("processing post-hide_entry controller");
    if (!req.body._id) {
      response.status(400).send("Updates must have an ID.");
      return;
    }
    db.deleteEntry(req.body._id, req.body.dishName, req.body.dishAvailability, req.body.description, req.body.mealType, req.body.ingredients, req.body.menu, req.body.allergens, req.body.price);
    res.redirect("/viewMenus");
  };

exports.show_user_entries = function (req, res) {
  let menu = req.params.menu;
  db.getEntriesByUser(menu)
    .then((entries) => {
      res.render("entries", {
        title: "Menu",
        menu: "menu",
        entries: entries,
      });
    })
    .catch((err) => {
      console.log("Error: ");
      console.log(JSON.stringify(err));
    });
};

exports.show_entries = function (req, res) {
    
        res.render("entries", {
          title: "Menu",
          user: "user",
          entries: entries,
        });
      
     
  };

exports.show_register_page = function (req, res) {
  res.render("user/register");
};

exports.post_new_user = function (req, res) {
  const user = req.body.username;
  const password = req.body.pass;

  if (!user || !password) {
    res.send(401, "no user or no password");
    return;
  }
  userDao.lookup(user, function (err, u) {
    if (u) {
      res.send(401, "User exists:", user);
      return;
    }
    userDao.create(user, password);
    console.log("register user", user, "password", password);
    res.redirect("/login");
  });
};

exports.loggedIn_landing = function (req, res) {
  db.getAllEntries()
    .then((list) => {
      res.render("staffMenu", {
        title: "Staff Menu",
        user: "user",
        entries: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.logout = function (req, res) {
  res.clearCookie("jwt").status(200).redirect("/");
};