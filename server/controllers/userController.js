const { User } = require('../models/index');
const { comparePassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');

class userController {
  static async register(req, res, next) {
    const { full_name, email, password } = req.body;
    try {
      const user = await User.create({ full_name, email, password });
      res.status(201).json({
        msg: 'Register success',
        id: user.id,
        full_name: user.full_name,
        email: user.email
      })
    } catch (err) {
      const error = err.errors[0].message || 'Internal server error';
      if (full_name === '' || email === '' || password === '') res.status(400).json({ error });
      res.status(500).json(error);
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({
        where: {
          email
        }
      })
      if (!user) throw { error: 'Invalid email or password' };
      const comparedPassword = comparePassword(password, user.password);
      if (!comparedPassword) throw { error: 'Invalid email or password' };
      const access_token = generateToken({
        id: user.id,
        email: user.email
      });
      res.status(200).json({ access_token });
    } catch (err) {
      if (email === '' || password === '') {
        res.status(400).json({ error: 'Email dan password harus diisi!' });
      } else if (err.error) {
        res.status(404).json({ error: err.error });
      } else {
        res.status(500).json({ error: err });
      }
    }
  }
}

module.exports = userController;