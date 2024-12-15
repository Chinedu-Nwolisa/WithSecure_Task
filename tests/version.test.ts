import request from 'supertest';

const API_URL =
  'http://qa-task-env-1.eba-gpid92d6.eu-west-1.elasticbeanstalk.com';
const apiRequest = request(API_URL);

describe('GET /version', () => {
  it('should return the application version', async () => {
    const response = await apiRequest.get('/version');
    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
  });
});

// I noticed an inconsistency in the API response for the /version endpoint.
// Sometimes the response is a string that reads {"message":"Oops, something went wrong"}
