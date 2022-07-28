import request from "supertest";

describe("Auth User", () => {
  it("Should be able to auth a user", async () => {
    const name = "andre" + new Date().toDateString();

    await request("http://localhost:4001").post("/user").send({
      name: name,
      password: "1234",
    });

    const response = await request("http://localhost:4001")
      .post("/login")
      .send({
        name: name,
        password: "1234",
      });

    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty("token");
  });

  it("Should not be able to auth a user", async () => {
    const response = await request("http://localhost:4001")
      .post("/login")
      .send({
        name: "teodoro" + new Date().toDateString(),
        password: "123456",
      });

    expect(response.statusCode).toEqual(400);
  });
});
