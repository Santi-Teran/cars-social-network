import {db} from '../connect.js';
import jwt from 'jsonwebtoken';
import moment from 'moment';

export const getPosts = (req, res) => {
  const id_user = req.query.id_user;
  const token = req.cookies.accessToken;
  
  if (!token) return res.status(401).json('Not logged in');

  jwt.verify(token, "secretkey", (error, userInfo) => {
    if (error) return res.status(403).json('Token not valid');
    
    let q;
    let values;

    if (id_user !== 'undefined') {
      q = `SELECT p.*, u.id AS id_user, name, profilePic 
           FROM posts AS p 
           JOIN users AS u ON (u.id = p.id_user) 
           WHERE p.id_user = ? 
           ORDER BY p.createdAt DESC`;
      values = [id_user];
    } else {
      q = `SELECT p.*, u.id AS id_user, name, profilePic 
           FROM posts AS p 
           LEFT JOIN users AS u ON (u.id = p.id_user) 
           LEFT JOIN relationships AS r ON (p.id_user = r.id_followed) 
           WHERE r.id_follower = ? OR p.id_user = ? 
           ORDER BY p.createdAt DESC`;
      values = [userInfo.id, userInfo.id];
    }

    db.query(q, values, (error, data) => {
      if (error) return res.status(500).json({ error });
    
      return res.status(200).json(data);
    });
  });
};


export const addPost = (req, res) => {

  const token = req.cookies.accessToken;
  if(!token) return res.status(401).json('Not logged in')

  jwt.verify(token, "secretkey", (error, userInfo) => {
    if (error) return res.status(403).json('Token not valid')
      
    const q = 'INSERT INTO posts (`description`, `image`, `createdAt`, `id_user`) VALUES (?)'

    const values = [
      req.body.description,
      req.body.image,
      moment().format('YYYY-MM-DD HH:mm:ss'),
      userInfo.id
    ]
    
    db.query(q, [values], (error, data) => {
      if (error) return res.status(500).json(error);
    
      return res.status(200).json('Post created');
    })
  })
}

