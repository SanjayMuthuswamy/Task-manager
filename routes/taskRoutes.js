const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

router.post('/', (req, res) => {
    const { title, description, assigned_to, due_date } = req.body;
    db.query(
        'INSERT INTO tasks (title, description, assigned_to, due_date) VALUES (?, ?, ?, ?)',
        [title, description, assigned_to, due_date],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: result.insertId, title, description, assigned_to, status: 'To-Do', due_date });
        }
    );
});

router.put('/:id', (req, res) => {
    const { status } = req.body;
    db.query('UPDATE tasks SET status = ? WHERE id = ?', [status, req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Task updated successfully' });
    });
});

router.delete('/:id', (req, res) => {
    db.query('DELETE FROM tasks WHERE id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Task deleted successfully' });
    });
});

module.exports = router;
