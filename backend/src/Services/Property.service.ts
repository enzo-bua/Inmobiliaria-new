import { Property } from '../Entities/Property';

export const PropertyService = () => {
  const getPropertyId = async (id: string) => {
    const property = await Property.findOne({
      where: {
        id: id,
      },
    });

    if (!property) throw new Error('property not found');

    return property;
  };

  return { getPropertyId };
};
