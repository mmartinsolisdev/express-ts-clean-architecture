import app from '../../frameworks/express/express-server';
import mock from '../mocks/member';
import * as dotenv from "dotenv";
import request from 'supertest';
import mongoose from 'mongoose';

//jest.setTimeout(60000);
dotenv.config();
beforeAll((done) => {
  let MONGO_URI: string = 'mongodb+srv://' + process.env.DB_USER as string + ':' + process.env.DB_PASS as string + '@cluster0.ca0jy.mongodb.net/' + process.env.DB_NAME as string + '?retryWrites=true&w=majority'
  //mongoose.connect('mongodb+srv://' + 'crossUser1' + ':' + 'cr0ssf1tApp' + '@cluster0.ca0jy.mongodb.net/' + 'crossDB' + '?retryWrites=true&w=majority')
  mongoose.connect(MONGO_URI)
    .then(
      () => {
        done();
      }
    )
});

afterAll(async () => {
  await mongoose.disconnect();
});


describe('Api Routes test', () => {
  test('Get members ', () => {
    return request(app)
      .get('/api/members/getMembers')
      .expect('Content-Type', /json/)
      .then(response => {
        //console.log(response.body);
        expect(response.statusCode).toBe(200);
      });
  });

  test('Get member by ID', () => {
    return request(app)
      .get('/api/members/getMember/60147eb0b1986121b0dc64fd')
      .expect('Content-Type', /json/)
      .then(response => {
        //console.log(response.body.member.id);
        expect(response.statusCode).toBe(200);
        expect(response.body.member.name).toBe('Ana');
      });
  });

  test('Update member', () => {
    console.log(mock.member);
    return request(app)
      .put('/api/members/updateMember/60147eb0b1986121b0dc64fc')
      .set('Accept', 'application/json')
      .send(mock.member)
      .expect('Content-Type', /json/)
      .then(response => {
        //console.log(response.body);
        expect(response.statusCode).toBe(201);
        expect(response.body.member.name).toBe('Ericka');
      });
  });

  test('Add new member', () => {
    return request(app)
      .post('/api/members/addMember')
      .set('Accept', 'application/json')
      .send(mock.newMember)
      .expect('Content-Type', /json/)
      .then(response => {
        //console.log(response.body);
        expect(response.statusCode).toBe(201);
        expect(response.body.member.name).toBe('Lucelly');
      });
  });


});
