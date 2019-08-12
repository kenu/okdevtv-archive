const express = require('express');
const router = express.Router();
const user_service = require('../service/user_service');
const uuidv4 = require('uuid/v4');

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
  let reset = 'N';

  try {
    const result = await user_service.setUpPassword(
      { password, password_confirm, hash });
    reset = result.reset;
    if (result.result[0].affectedRows === 1) {
      status = 'ok';
    }
  } catch (e) {
    msg = e.msg;
    console.log(e);
  }
  let result = {
    status: status,
    reset
  };
  if (msg) {
    result.msg = msg;
  }
  res.json(result);
});

router.post('/change_password', async function (req, res) {
  const password = req.body.password;
  const password_confirm = req.body.password_confirm;
  const email = req.session.user;
  let status = 'fail';
  let msg = '';
  try {
    if (email) {
      const change_result = await user_service.changePassword({ password, password_confirm, email });
      if (change_result.result[0].affectedRows === 1) {
        status = 'ok';
      }
    } else {
      msg = 'login이 필요합니다.';
    }
  } catch (e) {
    msg = e.msg;
    console.log(e);
  }
  let result = {
    status: status,
    msg
  };
  res.json(result);
});

router.get('/reset_password', async function (req, res) {
  const email = req.query.email;
  res.render('user/reset_password', { email });
});

router.post('/reset_password', async function (req, res) {
  let email = req.body.email;
  let status = 'fail';
  let msg = '';
  try {
    const response = await user_service.resetPassword(email);
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

router.get('/login', function (req, res) {
  res.render('user/login', { user: req.session.user, title: 'hello okdevtv' });
});

router.post('/login', async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const result = await user_service.doLogin({ email, password });
    if (result) {
      req.session.user = email;
      console.log(req.session.user);
      res.json({ status: 'ok', msg: 'login success' });
      return;
    } else {
      res.json({ status: 'fail', msg: '이메일 또는 비번이 맞지 않습니다.' });
      return;
    }
  } catch (e) {
    res.json({ status: 'fail', msg: e });
    return;
  }
});

router.all('/logout', async function (req, res) {
  req.session.destroy(function (err) {
    // cannot access session here
  });
  res.redirect('/');
});

router.get('/mypage', async function (req, res) {
  if (true || req.session.user) {
    res.render('user/mypage', { user: req.session.user });
  } else {
    res.redirect('/user/login');
  }
})

module.exports = router;
