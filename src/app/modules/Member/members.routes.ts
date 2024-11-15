import express, { NextFunction, Request, Response } from 'express';
import { MemberController } from './members.controller';

const router = express.Router();

router.post('/', MemberController.createMember);
router.get('/', MemberController.getAllFromDB);
router.get('/:id', MemberController.getByIdFromDB);
router.put('/:id', MemberController.updateMember);
router.delete('/:id', MemberController.deleteMember);

export const MemberRoutes = router;