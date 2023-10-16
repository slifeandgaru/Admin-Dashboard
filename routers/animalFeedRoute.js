const { createNewAnimalFeed, getAllNewAnimalFeed } = require('../controllers/animalFeedController');
// const { checkLogin, checkAdmin } = require('../middleware/auth');
const router = require('express').Router();

router.get('/get-all-animal-feed', getAllNewAnimalFeed);
// router.get('/get-brand-by-id/:brandId', getBrandById);
// router.get('/find-brand', findBrandByRegex);
router.post('/create-new-animal-feed', createNewAnimalFeed);
// router.patch('/change-brand-info/:brandId', checkLogin, checkAdmin, updateBrandInfo);
// router.patch('/update-brand-thump/:brandId', checkLogin, checkAdmin, upload.single('thump'), changeBrandThump);

module.exports = router;