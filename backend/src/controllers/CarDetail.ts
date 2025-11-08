// import {Request, Response} from 'express';
// import CarDetailService from '../services/CarDetail.services';
// import { CarDetail } from '../models/CarDetail';

// class CarDetailController {
//     async getCarDetails(req: Request, res: Response): Promise<void> {
//         try {
//             const carDetails: CarDetail[] = await CarDetailService.getCarDetails();
//             res.json(carDetails);
//         } catch (error) {
//             res.status(500).json({ error: 'Failed to retrieve car details' });
//         }
//     }

//     async createCarDetail(req: Request, res: Response): Promise<void> {
//         try {
//             const newCarDetail: CarDetail = req.body;
//             const createdCarDetail: CarDetail = await CarDetailService.createCarDetail(newCarDetail);
//             res.status(201).json(createdCarDetail);
//         } catch (error) {
//             res.status(500).json({ error: 'Failed to create car detail' });
//         }
//     }

//     async updateCarDetail(req: Request, res: Response): Promise<void> {
//         try {
//             const carDetailId: string = req.params.id;
//             const updatedCarDetail: CarDetail = req.body;
//             const result: CarDetail | null = await CarDetailService.updateCarDetail(carDetailId, updatedCarDetail);
//             if (result) {
//                 res.json(result);
//             } else {
//                 res.status(404).json({ error: 'Car detail not found' });
//             }
//         } catch (error) {
//             res.status(500).json({ error: 'Failed to update car detail' });
//         }
//     }

//     async deleteCarDetail(req: Request, res: Response): Promise<void> {
//         try {
//             const carDetailId: string = req.params.id;
//             const result: boolean = await CarDetailService.deleteCarDetail(carDetailId);
//             if (result) {
//                 res.status(204).send();
//             } else {
//                 res.status(404).json({ error: 'Car detail not found' });
//             }
//         } catch (error) {
//             res.status(500).json({ error: 'Failed to delete car detail' });
//         }
//     }
// }

// export default new CarDetailController();
