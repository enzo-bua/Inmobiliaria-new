import { z } from 'zod';
import { PropertyDto } from '../Dtos/PropertyDto';

const ProductosSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters long',
  }),
  description: z.string(),
  price: z.number().positive({
    message: 'Price must be a positive number',
  }),
  type: z.string().min(2, {
    message: 'Type must be at least 2 characters long',
  }),
  address: z.string().min(2, {
    message: 'Address must be at least 2 characters long',
  }),
  images: z.array(z.string()),
});

export async function validateProperty(object: PropertyDto) {
  return ProductosSchema.safeParseAsync(object);
}

export async function validatePartialProperty(object: PropertyDto) {
  return ProductosSchema.partial().safeParseAsync(object);
}
