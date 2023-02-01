import { Request, Response } from 'express';
import { typesService } from '../service/typesService';
import { CustomLogger } from '../config/Logger'
let types = new typesService();

export class typesController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    types.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    types.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpCreate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    types.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpUpdate');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    types.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpSearch');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    types.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpGetNounCreatedBy');
    })}


}