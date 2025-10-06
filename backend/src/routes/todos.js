const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM todos');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, is_done } = req.body;
    const [result] = await pool.query(
      'INSERT INTO todos (title, is_done) VALUES (?, ?)',
      [title, is_done ? 1 : 0]
    );
    const insertedId = result.insertId;
    const [rows] = await pool.query('SELECT * FROM todos WHERE id = ?', [insertedId]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { title, is_done } = req.body;
    await pool.query(
      'UPDATE todos SET title = ?, is_done = ? WHERE id = ?',
      [title, is_done ? 1 : 0, id]
    );
    const [rows] = await pool.query('SELECT * FROM todos WHERE id = ?', [id]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await pool.query('DELETE FROM todos WHERE id = ?', [id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
