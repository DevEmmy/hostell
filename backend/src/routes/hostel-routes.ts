import { Request, Response, Router } from "express";
import Container from "typedi";
import HostelController from "../controllers/HostelController";


const router = Router()

const hostelController = Container.get(HostelController)

router.post("/", (req: Request, res: Response)=> hostelController.create(req, res))

router.get("/:id", (req: Request, res: Response)=> hostelController.getOne(req, res))

router.get("/", (req: Request, res: Response)=> hostelController.getAll(req, res))

router.patch("/:id", (req: Request, res: Response)=> hostelController.update(req, res))

router.delete("/:id", (req: Request, res: Response)=> hostelController.delete(req, res))

router.patch("/switch-availability/:id", (req: Request, res: Response)=> hostelController.switchAvailability(req, res))

export default router