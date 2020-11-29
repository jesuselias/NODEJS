"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.signin = exports.signup = void 0;
const signup = (req, res) => {
    res.send('singup');
};
exports.signup = signup;
const signin = (req, res) => {
    res.send('singnin');
};
exports.signin = signin;
const profile = (req, res) => {
    res.send('profile');
};
exports.profile = profile;
//# sourceMappingURL=auth.Controller.js.map