import app from "./index";
import request from 'supertest'

describe('POST /event/update', () => {
    describe('test request with params',() => {
        it('should respond with 200 status code',async()=>{
            const res = await request(app).post('/events/update').send({
                title:'testevent',
                date:'2023-03-04'
            })
            expect(res.statusCode).toBe(200);
        })
        it('should respond with 500 status code since date is missing', async () => {
            const res = await request(app)
              .post('/events/update')
              .send({
                title: 'testevent'
              });
            expect(res.statusCode).toBe(500);
            expect(res.body.message).toBe("Missing date parameter");
        });
        it('should respond with 500 status code since title is missing', async () => {
            const res = await request(app)
              .post('/events/update')
              .send({
                date: '2023-03-04'
              });
            expect(res.statusCode).toBe(500);
            expect(res.body.message).toBe("Missing title parameter");
        });
          
    })
});