"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const auth_Controller_1 = require("../controllers/auth.Controller");
router.post('/signup', auth_Controller_1.signup);
router.post('/signin', auth_Controller_1.signin);
router.get('/profile', auth_Controller_1.profile);
exports.default = router;
//# sourceMappingURL=auth.js.map