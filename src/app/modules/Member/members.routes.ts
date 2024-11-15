import express, { NextFunction, Request, Response } from 'express';
import { MemberController } from './members.controller';

const router = express.Router();

router.post('/', MemberController.createMember);
router.get('/', MemberController.getAllFromDB);
router.get('/:id', MemberController.getByIdFromDB);
router.put('/', MemberController.updateMember);
router.delete('/', MemberController.deleteMember);

export const MemberRoutes = router;