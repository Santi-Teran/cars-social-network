import { db } from '../connect.js';
import jwt from 'jsonwebtoken';
import moment from 'moment';

export const getComments = (req, res) => {
  const q = `SELECT c.*, u.id AS id_user, name, profilePic FROM comments AS c JOIN users AS u ON (u.id = c.id_user) WHERE c.id_post = ? ORDER BY c.createdAt DESC`
    
  db.query(q, [req.query.id_post], (error, data) => {
    if (error) return res.status(500).json(error);
    
    return res.status(200).json(data);
  })
}

export const addComment = (req, res) => {
  const token = req.cookies.accessToken;
  if(!token) return res.status(401).json('Not logged in')

  jwt.verify(token, "secretkey", (error, userInfo) => {
    if (error) return res.status(403).json('Token not valid')
      
    const q = 'INSERT INTO comments ( `content`,  `createdAt`,  `id_user`, `id_post`) VALUES (?)'

    const values = [
      req.body.content,
      moment().format('YYYY-MM-DD HH:mm:ss'),
      userInfo.id,
      req.body.id_post
    ]
    
    db.query(q, [values], (error, data) => {
      if (error) return res.status(500).json(error);
    
      return res.status(200).json('Comment created');
    })
  })
}