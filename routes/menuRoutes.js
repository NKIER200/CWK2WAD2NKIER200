const express = require('express');
const router = express.Router();
const controller = require('../controllers/menuControllers.js');
const {login} = require('../auth/auth')
const {verify} = require('../auth/auth')

router.get('/', function(req, res) {
    res.redirect('/home.html');
})
router.get('/about', function(req, res) {
    res.redirect('/about.html');
})
router.get('/viewMenus', function(req, res) {
    res.redirect('/viewMenus.html');
})
router.get('/login', controller.show_login);
router.post('/login', login, controller.handle_login);
router.get('/new',verify,controller.show_new_entries);
router.post('/new', verify, controller.post_new_entry);
router.get('/newEntry',verify,controller.show_new_entries);
router.post('/newEntry', verify, controller.post_new_entry);
router.get('/staffMenu',verify,controller.show_edited_entries);
router.post('/staffMenu', verify, controller.post_edited_entry);
router.get('/hideItem',verify,controller.show_hide_entries);
router.post('/hideItem', verify, controller.post_hide_entry);
router.get('/entries', controller.landing_page);
router.get('/entriesDinner', controller.landing_page_dinner);
router.get('/register', controller.show_register_page);
router.post('/register', controller.post_new_user);
router.get("/loggedIn",verify, controller.loggedIn_landing);
router.get("/logout", controller.logout);

router.use(function(req, res) {
        res.status(404);
        res.type('text/plain');
        res.redirect('/404.html');
       
    });
router.use(function(err, req, res, next) {
        res.status(500);
        res.type('text/plain');
        res.send('Internal Server Error.');
    });
module.exports = router;