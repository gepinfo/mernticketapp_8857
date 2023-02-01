import { Request, Response } from 'express';
import { severityService } from '../service/severityService';
import { CustomLogger } from '../config/Logger'
let severity = new severityService();

export class severityController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    severity.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into severityController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from severityController.ts: GpDelete');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    severity.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into severityController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from severityController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    severity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into severityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from severityController.ts: GpCreate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    severity.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into severityController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from severityController.ts: GpUpdate');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    severity.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into severityController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from severityController.ts: GpSearch');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    severity.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into severityController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from severityController.ts: GpGetNounCreatedBy');
    })}


}