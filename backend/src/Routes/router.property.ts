import { Router } from 'express';
import { PropertyController } from '../Controllers/property.controllers';
const path = '/property';
const property = Router();
const controllers = PropertyController();

property.post(`${path}`, controllers.newProperty);
property.get(`${path}`, controllers.getAllProperty);
property.get(`${path}/:id`, controllers.getPropertyById);
property.delete(`${path}/:id`, controllers.deleteProperty);
property.put(`${path}/:id`, controllers.updateProperty);

export default property;
