"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const verifyToken_1 = require("../libs/verifyToken");
const auth_Controller_1 = require("../controllers/auth.Controller");
router.post('/signup', auth_Controller_1.signup);
router.post('/signin', auth_Controller_1.signin);
router.get('/profile', verifyToken_1.TokenValidation, auth_Controller_1.profile);
router.get('/testing', verifyToken_1.TokenValidation, auth_Controller_1.testing);
exports.default = router;
//# sourceMappingURL=auth.js.map