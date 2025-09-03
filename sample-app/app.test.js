const request = require('supertest');
const app = require('./app');

describe('API Tests', () => {
  test('GET /health returns healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
  });

  test('GET /api/users returns user list', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(2);
  });

  test('POST /api/users creates new user', async () => {
    const newUser = { name: 'Test User', email: 'test@example.com' };
    const response = await request(app).post('/api/users').send(newUser);
    expect(response.status).toBe(201);
    expect(response.body.name).toBe(newUser.name);
  });

  test('POST /api/users validates required fields', async () => {
    const response = await request(app).post('/api/users').send({});
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Name and email required');
  });
});