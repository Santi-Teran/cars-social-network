import {db} from '../connect.js';
import jwt from 'jsonwebtoken';

export const getRelationships = (req, res) => {
  const q = `SELECT id_follower FROM relationships WHERE id_followed = ?`
    
  db.query(q, [req.query.id_followed], (error, data) => {
    if (error) return res.status(500).json(error);
    
    return res.status(200).json(data.map(relationship => relationship.id_follower));
  })
}

export const addRelationship = (req, res) => {
  
  const token = req.cookies.accessToken;
  if(!token) return res.status(401).json('Not logged in')

  jwt.verify(token, "secretkey", (error, userInfo) => {
    if (error) return res.status(403).json('Token not valid')
      
    const q = 'INSERT INTO relationships (`id_follower`, `id_followed`) VALUES (?)'

    const values = [
      userInfo.id,
      req.body.id_user
    ]
    
    db.query(q, [values], (error, data) => {
      if (error) return res.status(500).json(error);
    
      return res.status(200).json('Following');
    })
  })
}

export const deleteRelationship = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json('Not logged in');

  jwt.verify(token, "secretkey", (error, userInfo) => {
    if (error) return res.status(403).json('Token not valid');

    const q = 'DELETE FROM relationships WHERE `id_follower` = ? AND `id_followed` = ?';
    
    db.query(q, [userInfo.id, req.query.id_user], (error, data) => {
      if (error) return res.status(500).json(error);
    
      return res.status(200).json('Unfollow');
    });
  });
};
