// error first error handling functions

exports.error400 = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    next(err);
  }
};

exports.errorMongo = (err, req, res, next) => {
  if (err.code === 11000) {
    res.status(409).send({ msg: "User already exists" });
  } else {
    next(err);
  }
};

exports.error500 = (err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: "Internal server error" });
};

// error handling functions set by author

exports.error404 = (req, res, next) => {
  res.status(404).send({ msg: "Not found" });
};

exports.error405 = (req, res, next) => {
  res.status(405).send({ msg: "Method not allowed" });
};