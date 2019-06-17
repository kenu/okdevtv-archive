const express = require('express');
const router = express.Router();
const user_service = require('../service/user_service');

router.get('/signup', function(req, res) {
  res.render('user/signup', {});
});

router.post('/signup', async function(req, res) {
  let email = req.body.email;
  let status = 'fail';
  let msg = '';
  try {
    const response = await user_service.signupByEmail(email);
    if (response === 1) {
      status = 'ok';
    }  
  } catch (e) {
    msg = e.msg;
  }
  let result = {
    status: status,
    data: email
  }
  if (msg) {
    result.msg = msg;
  }
  res.json(result);
});

router.get('/setup', function(req, res) {
  res.end('user password setup page\n');
});

router.post('/setup', function(req, res) {
  res.end('user setup check\n');
});

router.get('/login', function(req, res) {
  res.end('user login page\n');
});

router.post('/login', function(req, res) {
  res.end('user login check\n');
});

module.exports = router;
