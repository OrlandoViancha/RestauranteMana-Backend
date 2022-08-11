const User = require("../models/user");

const loginUser = async (req, res, next) => {
  
  try {
    const login = await User.findOne({
      name_user: req.body.name_user,
      password: req.body.password,
    }).count();

    if (login > 0) {
      res.send({ result: true });
    } else {
      res.send({ result: false });
    }
  } catch (error) {
    res.send({ error: error });
  }
};

module.exports = { loginUser };
