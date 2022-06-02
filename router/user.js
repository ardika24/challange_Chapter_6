const express = require("express");
const router = express.Router();
const UserControllers = require("../controllers/user");

router.get("/:id/bio", UserControllers.getBio);
router.get("/:id/edit", UserControllers.getUser);
router.get("/register", UserControllers.getRegister);
router.get("/login", UserControllers.getLogin);
router.get("/add", UserControllers.getCreateUser);
router.get("/", UserControllers.getUsers);
router.post("/register", UserControllers.postReqUser);
router.post("/auth", UserControllers.postAuthUser);
router.post("/", UserControllers.postCreateUser);
router.put("/:id", UserControllers.putUpdateUser);
router.delete("/:id", UserControllers.deleteUser);

module.exports = router;
