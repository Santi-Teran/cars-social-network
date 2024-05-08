import {db} from '../connect.js';
import jwt from 'jsonwebtoken';

export const getUser = (req, res) => {
  const userId = req.params.userId;
  const q = 'SELECT * FROM users WHERE id=?'

  db.query(q, [userId], (error, data) => {
    if(error) return res.status(500).json(error)
    const { password, ...info} = data[0];
    return res.json(info);
  })
};

export const updateUser = (req, res) => {

  const token = req.cookies.accessToken;
  if(!token) return res.status(401).json('Not logged in')

  jwt.verify(token, "secretkey", (error, userInfo) => {
    if (error) return res.status(403).json('Token not valid')

    const q = "UPDATE users SET `name`=?, `city`=?, `username`=?, `profilePic`=?, `coverPic`=? WHERE id=?"

    db.query(q, [req.body.name, req.body.city, req.body.username, req.body.profilePic, req.body.coverPic, userInfo.id ], (error, data) => {
      if (error) res.status(500).json(error);
      if (data.affectedRows > 0) return res.json("Update");
      return res.status(403).json("You can update only your user.");
    })
  })
};

