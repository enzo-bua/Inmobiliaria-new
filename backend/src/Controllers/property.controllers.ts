import { Request, Response, NextFunction } from 'express';
import { Property } from '../Entities/Property';
import {
  validatePartialProperty,
  validateProperty,
} from '../Schemas/propertySchema';
import { Image } from '../Entities/Image';
import { PropertyService } from '../Services/Property.service';

export const PropertyController = () => {
  const propertyService = PropertyService();

  const newProperty = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result = await validateProperty(req.body);

      if (!result.success) {
        return res
          .status(400)
          .json({ error: JSON.parse(result.error.message) });
      }

      const { title, description, price, type, address, images } = result.data;

      const imageObjects: Image[] = images.map((imgUrl: string) => {
        const image = new Image();
        image.url = imgUrl;
        return image;
      });

      const newProperty = new Property();
      newProperty.title = title;
      newProperty.description = description;
      newProperty.price = price;
      newProperty.type = type;
      newProperty.address = address;
      newProperty.images = imageObjects;

      await newProperty.save();

      res.status(201).json({ success: true });
    } catch (error) {
      next(error);
    }
  };
  const updateProperty = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const propertyId = req.params.id;
      const result = await validatePartialProperty(req.body);

      if (!result.success) {
        return res
          .status(400)
          .json({ error: JSON.parse(result.error.message) });
      }

      const { title, description, price, type, address, images } = result.data;

      let imageObjects: Image[] = [];

      if (images) {
        // Verificar si images está definido antes de mapearlo
        imageObjects = images.map((imgUrl: string) => {
          const image = new Image();
          image.url = imgUrl;
          return image;
        });
      }

      // Buscar la propiedad existente por ID
      const existingProperty = await propertyService.getPropertyId(propertyId);

      if (!existingProperty) {
        return res.status(404).json({ error: 'Property not found' });
      }

      // Actualizar los campos de la propiedad existente
      existingProperty.title = title || existingProperty.title; // Usar el valor existente si no se proporciona uno nuevo
      existingProperty.description =
        description || existingProperty.description;
      existingProperty.price = price || existingProperty.price;
      existingProperty.type = type || existingProperty.type;
      existingProperty.address = address || existingProperty.address;
      existingProperty.images =
        imageObjects.length > 0 ? imageObjects : existingProperty.images; // Actualizar imágenes solo si se proporcionaron nuevas

      await existingProperty.save();

      res.status(200).json({ success: true });
    } catch (error) {
      next(error);
    }
  };
  const deleteProperty = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const propertyId = req.params.id;

      const deleteResult = await propertyService.getPropertyId(propertyId);
      console.log('result', deleteResult);
      if (!deleteResult) {
        return res.status(404).json({ error: 'Property not found' });
      }
      await deleteResult.remove();
      res.status(200).json({ success: true });
    } catch (error) {
      next(error);
    }
  };
  const getAllProperty = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const property = await Property.find();

      res.status(200).json(property);
    } catch (error) {
      next(error);
    }
  };

  const getPropertyById = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const propertyId = req.params.id;

      // Buscar la propiedad por ID usando where
      const property = await Property.find({ where: { id: propertyId } });

      if (!property || property.length === 0) {
        return res.status(404).json({ error: 'Property not found' });
      }

      res.status(200).json(property[0]);
    } catch (error) {
      next(error);
    }
  };

  return {
    newProperty,
    updateProperty,
    deleteProperty,
    getAllProperty,
    getPropertyById,
  };
};
