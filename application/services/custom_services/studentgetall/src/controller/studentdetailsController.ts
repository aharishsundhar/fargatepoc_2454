import { Request, Response } from 'express';
import { studentdetailsService } from '../service/studentdetailsService';
import { CustomLogger } from '../config/Logger'
let studentdetails = new studentdetailsService();

export class studentdetailsController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
studentdetails.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentdetailsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentdetailsController.ts: GpGetAllValues');
    })}


}