"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberRoutes = void 0;
const express_1 = __importDefault(require("express"));
const members_controller_1 = require("./members.controller");
const router = express_1.default.Router();
router.post('/', members_controller_1.MemberController.createMember);
router.get('/', members_controller_1.MemberController.getAllFromDB);
router.get('/:id', members_controller_1.MemberController.getByIdFromDB);
router.put('/:id', members_controller_1.MemberController.updateMember);
router.delete('/:id', members_controller_1.MemberController.deleteMember);
exports.MemberRoutes = router;
