const express = require('express');
const router = express.Router();
const { saveManifestList, getManifestList, removeFromManifest } = require('../controllers/ManifestController');

router.post('/add', saveManifestList);

router.get('/:userId', getManifestList);
router.delete('/userId',removeFromManifest )
module.exports = router;
