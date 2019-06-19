const express = require('express');
const router = express.Router();
const user_service = require('../service/user_service');

router.get('/signup', function (req, res) {
  res.render('user/signup', {});
});

router.post('/signup', async function (req, res) {
  let email = req.body.email;
  let status = 'fail';
  let msg = '';
  try {
    const response = await user_service.signupByEmail(email);
    console.log(response[0].affectedRows);
    if (response[0].affectedRows === 1) {
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

router.get('/setup', async function (req, res) {
  const hash = req.query.q;
  let msg = '';
  try {
    const result = await user_service.setUpAccount(hash);
    console.log(result);
  } catch (e) {
    msg = e.msg;
  }
  if (msg) {
    res.render('error', { message: msg });
  } else {
    res.render('user/set_password', { hash });
  }
});

router.post('/setup', async function (req, res) {
  const password = req.body.password;
  const password_confirm = req.body.password_confirm;
  const hash = req.body.hash;
  let status = 'fail';
  let msg = '';

  try {
    const response = await user_service.setUpPassword(
      { password, password_confirm, hash });
    console.log(response[0].affectedRows);
    if (response[0].affectedRows === 1) {
      status = 'ok';
    }
  } catch (e) {
    msg = e.msg;
  }
  let result = {
    status: status
  }
  if (msg) {
    result.msg = msg;
  }
  res.json(result);
});

router.get('/login', function (req, res) {
  res.end('user login page\n');
});

router.post('/login', function (req, res) {
  res.end('user login check\n');
});

module.exports = router;
