import request from "supertest";

describe("Register favorite Character", () => {
  it("Should be able to register new favorite character", async () => {
    const name = "andre" + new Date().toISOString();

    const result = await request("http://localhost:4001").post("/user").send({
      name,
      password: "1234",
    });

    const response = await request("http://localhost:4001")
      .post("/favorite-character")
      .set("Authorization", `Bearer ${result.body.token}`)
      .send({
        id_api: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
        ],
        url: "https://rickandmortyapi.com/api/character/1",
        created: "2017-11-04T18:48:46.250Z",
      });

    expect(response.statusCode).toEqual(201);
    expect(response.body.result).toHaveProperty("id");
  });

  it("Should not be able to register new favorite character because there's no authorization", async () => {
    const response = await request("http://localhost:4001")
      .post("/favorite-character")
      .send({
        id_api: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
        ],
        url: "https://rickandmortyapi.com/api/character/1",
        created: "2017-11-04T18:48:46.250Z",
      });

    expect(response.statusCode).toEqual(400);
  });

  it("Should not be able to register new favorite character because was sent wrong data", async () => {
    const name = "andre" + new Date().toISOString();

    const result = await request("http://localhost:4001").post("/user").send({
      name,
      password: "1234",
    });

    const response = await request("http://localhost:4001")
      .post("/favorite-character")
      .set("Authorization", `Bearer ${result.body.token}`)
      .send({
        url: "https://rickandmortyapi.com/api/character/1",
        created: "2017-11-04T18:48:46.250Z",
      });

    expect(response.statusCode).toEqual(400);
  });
});
