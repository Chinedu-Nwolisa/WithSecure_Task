import request from 'supertest';

const API_URL = 'http://qa-task-env-1.eba-gpid92d6.eu-west-1.elasticbeanstalk.com';
const apiRequest = request(API_URL);

describe('POST / - Triangle Type Verification', () => {
    describe('Equilateral Triangle', () => {
        it('should return "equilateral" for all equal sides', async () => {
            const response = await apiRequest.post('/').send({ a: 10, b: 10, c: 10 });
            console.log(response.body);
            expect(response.status).toEqual(200);
            expect(response.body).toEqual({ result: 'This is equilateral triangle' });
        });

        it('should return "equilateral" for very large sides', async () => {
            const response = await apiRequest.post('/').send({ a: 1e8, b: 1e8, c: 1e8 });
            console.log(response.body);
            expect(response.status).toEqual(200);
            expect(response.body).toEqual({ result: 'This is equilateral triangle' });
        });

        it('should return "equilateral" for very small sides', async () => {
            const response = await apiRequest.post('/').send({ a: 0.005, b: 0.005, c: 0.005 });
            console.log(response.body);
            expect(response.status).toEqual(200);
            expect(response.body).toEqual({ result: 'This is equilateral triangle' });
        });
    });

    describe('Isosceles Triangle', () => {
        it('should return "Isosceles" for any two equal sides', async () => {
            const response = await apiRequest.post('/').send({ a: 5, b: 10, c: 10 });
            console.log(response.body);
            expect(response.status).toEqual(201);
            expect(response.body).toEqual({ result: 'This is isosceles triangle' });
        });

        it('should return "Isosceles" for another set of equal sides', async () => {
            const response = await apiRequest.post('/').send({ a: 10, b: 5, c: 10 });
            console.log(response.body);
            expect(response.status).toEqual(201);
            expect(response.body).toEqual({ result: 'This is isosceles triangle' });
        });

        it('should return "Isosceles" for yet another set of equal sides', async () => {
            const response = await apiRequest.post('/').send({ a: 10, b: 10, c: 5 });
            console.log(response.body);
            expect(response.status).toEqual(201);
            expect(response.body).toEqual({ result: 'This is isosceles triangle' });
        });
    });

    describe('Versatile Triangle', () => {
        it('should return "Versatile" for three unequal sides', async () => {
            const response = await apiRequest.post('/').send({ a: 5, b: 7, c: 9 });
            console.log(response.body);
            expect(response.status).toEqual(200);
            expect(response.body).toEqual({ result: 'This is versatile triangle' });
        });
    });

    describe('Invalid Triangle', () => {
        it('should return an error for invalid triangle sides', async () => {
            const response = await apiRequest.post('/').send({ a: 1, b: 2, c: 10 });
            console.log(response.body);
            expect(response.status).toEqual(418);
            expect(response.body).toEqual({ error: 'Sum of any 2 sides should be greater than the 3rd' });
        });

        it('should return an error for missing fields', async () => {
            const response = await apiRequest.post('/').send({ a: 10, b: 10 });
            console.log(response.body);
            expect(response.status).toEqual(422);
            expect(response.body).toEqual({ error: 'Triangle should have 3 side' });
        });

        it('should return an error for any side length with zero', async () => {
            const response = await apiRequest.post('/').send({ a: 10, b: 9, c: 0 });
            console.log(response.body);
            expect(response.status).toEqual(418);
            expect(response.body).toEqual({ error: 'Sum of any 2 sides should be greater than the 3rd' });
        });

        it('should return an error for negative side length', async () => {
            const response = await apiRequest.post('/').send({ a: -10, b: 10, c: 10 });
            console.log(response.body);
            expect(response.status).toEqual(422);
            expect(response.body).toEqual({ error: 'All triangle sides should be greater than 0' });
        });
    });
});
