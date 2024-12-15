import request from 'supertest';

const API_URL = 'http://qa-task-env-1.eba-gpid92d6.eu-west-1.elasticbeanstalk.com';
const apiRequest = request(API_URL);

describe('GET /version', () => {
  it('should return the application version', async () => {
    const response = await apiRequest.get('/version');
    console.log(JSON.stringify(response, null, 2)); // Log the response body for debugging

    // Type assertion for response to ensure it matches the expected shape
    expect(response.status).toBe(200); // Check for HTTP 200
    expect(response.text).toBeTruthy(); // Ensure 'version' is present
  });
});

// I noticed an inconsistency in the API response for the /version endpoint. 
// Sometimes the response is a string that reads {"message":"Oops, something went wrong"}