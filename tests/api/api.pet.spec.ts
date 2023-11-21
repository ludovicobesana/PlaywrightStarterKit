import { test, expect } from "@playwright/test";

test.describe("Pet Store @API", () => {
  test("GET /pet/{petId} returns pet details", async ({ request }) => {
    const petId = 1;
    const response = await request.get(`https://petstore.swagger.io/v2/pet/${petId}`);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(petId);
    expect(responseBody).toHaveProperty("name");
    expect(responseBody).toHaveProperty("status");
  });
});
