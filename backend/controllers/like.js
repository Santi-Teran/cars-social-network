import {db} from '../connect.js';
import jwt from 'jsonwebtoken';

export const getLikes = (req, res) => {
  const q = `SELECT id_user FROM likes WHERE id_post = ?`
    
  db.query(q, [req.query.id_post], (error, data) => {
    if (error) return res.status(500).json(error);
    
    return res.status(200).json(data.map(like => like.id_user));
  })
}

export const addLike = (req, res) => {
  
  const token = req.cookies.accessToken;
  if(!token) return res.status(401).json('Not logged in')

  jwt.verify(token, "secretkey", (error, userInfo) => {
    if (error) return res.status(403).json('Token not valid')
      
    const q = 'INSERT INTO likes (`id_post`, `id_user`) VALUES (?)'

    const values = [
      req.body.id_post,
      userInfo.id
    ]
    
    db.query(q, [values], (error, data) => {
      if (error) return res.status(500).json(error);
    
      return res.status(200).json('Post liked');
    })
  })
}

export const deleteLike = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json('Not logged in');

  jwt.verify(token, "secretkey", (error, userInfo) => {
    if (error) return res.status(403).json('Token not valid');

    const q = 'DELETE FROM likes WHERE `id_user` = ? AND `id_post` = ?';
    
    db.query(q, [userInfo.id, req.query.id_post], (error, data) => {
      if (error) return res.status(500).json(error);
    
      return res.status(200).json('Post disliked');
    });
  });
};
