import { Router } from 'express';
import { CategoryModel } from '../model/CategoryModel';

const CategoryRoute = Router();

const Categories: CategoryModel[] = [];

CategoryRoute.post('/', (req, res) => {
    const { name, description } = req.body;

    const category = new CategoryModel();

    Object.assign(category, {
        name,
        description,
        createdAt: new Date(),
        updatedAt: new Date()
    });

    Categories.push(category);

    return res.status(201).send({ category });
});

export {CategoryRoute};