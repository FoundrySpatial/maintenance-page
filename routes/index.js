const { Router } = require('express');

const router = Router();

/* GET index page. */
router.get('*', (req, res) => {
    res.set({
        'Retry-After': 3600,
        'Cache-Control': 'no-store',
    });
    res.status(503);
    res.render('index', {
        extraText: process.env.extraText,
    });
});

module.exports = router;
