const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

// Matches with "/api/games"
router.route("/")
  .get(gamesController.findAll)
  .post(gamesController.create);

 // Matches with "/api/games/live 
 router.route("/live/:week_id/:id")
 .get(gamesController.live);

 // Matches with "/api/games/live 
 router.route("/player/:week_id/:id")
 .get(gamesController.player);

  // Matches with "/api/games/team 
  router.route("/team/")
  .get(gamesController.team);
 
 // Matches with "/api/games/:id"
router
  .route("/:id")
  .get(gamesController.findById)
  .put(gamesController.update)
  .delete(gamesController.remove);


module.exports = router;
