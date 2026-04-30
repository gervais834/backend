import cors from 'cors';
import express from 'express';
import getUsers from './users.js'
const app = express();
app.use(cors());
app.use(express.json());    
app.use(express.urlencoded({ extended: true }));

app.get('/users', getUsers)

// app.post('/users', async (req, res) => {
//     const { username, email, password } = req.body;
//     try {
//         const [result] = await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
//         res.json({ id: result.insertId, username, email });
//     } catch (error) {
//         console.error('Error creating user:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }); 
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
