/* eslint-disable no-undef */
import {supertest} from 'supertest';

import app from '../app';

describe('Init test', () => {
  test('GET /', (done) => {
    supertest(app)
      .get('/')
      .expect(404);
  });
});
