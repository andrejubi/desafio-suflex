import request from "supertest";

describe("Create User", () => {
  it("Should be able to create a new user", async () => {
    const name = "andre" + new Date().toISOString();
    const response = await request("http://localhost:4001").post("/user").send({
      name,
      password: "1234",
    });

    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty("token");
  });

  it("Should not be able to create a new user", async () => {
    const name = "andre" + new Date().toISOString();

    await request("http://localhost:4001").post("/user").send({
      name,
      password: "1234",
    });

    const response2 = await request("http://localhost:4001")
      .post("/user")
      .send({
        name,
        password: "1234",
      });

    expect(response2.statusCode).toEqual(400);
  });
});
