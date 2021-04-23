const { User } = require("../database/db-connection");

exports.fetchUsers = () => {
  return User.find({}, (err, users) => {
    if (err) return console.log(err);
    return users;
  });
};

exports.fetchUser = ({ _id, username }) => {
  let searchObject = {};
  if (_id) searchObject = { _id };
  if (username) searchObject = { username };

  return User.find(searchObject).then((user) => {
    if (!Object.keys(user).length) {
      return Promise.reject({ status: 404, msg: "Not found" });
    } else {
      return user[0];
    }
  });
};

exports.amendUserById = (
  { _id, username },
  { blurblesInc, club_id, newBadge }
) => {
  if (_id) searchObject = { _id };
  if (username) searchObject = { username };

  let updateObj;
  if (blurblesInc) updateObj = { $inc: { blurbles: blurblesInc } };
  if (club_id) {
    updateObj = {
      $push: { clubs: { club_id, progress: 0, hasNominated: false } }
    };
  }
  if (newBadge) updateObj = { $push: { badges: newBadge } };

  return User.findOneAndUpdate(searchObject, updateObj, { new: true }).then(
    (doc) => {
      return doc;
    }
  );
};

exports.amendUserClubsById = (
  { _id, username },
  { club_id, progress, hasNominated }
) => {
  if (_id) searchObject = { _id };
  if (username) searchObject = { username };
  return this.fetchUser(searchObject).then((userInfo) => {
    const updatedClubs = userInfo.clubs.map((club) => {
      if (club_id === club.club_id) {
        if (progress) club.progress = progress;
        if (hasNominated) club.hasNominated = hasNominated;
      }
      return club;
    });
    return User.findOneAndUpdate(
      searchObject,
      { clubs: updatedClubs },
      { new: true }
    ).then((doc) => {
      return doc;
    });
  });
};
