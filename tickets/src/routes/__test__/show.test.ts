import request from "supertest";
import { app } from "../../app";

it("Returns a 404 if the ticket is not found", async () => {
  await request(app).get("/api/tickets/nonexistentid").send().expect(404);
});

it("Returns the ticket if the ticket is found", async () => {
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({
      title: "Test",
      price: 20,
    })
    .expect(201);

  await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .set("Cookie", global.signin())
    .send({})
    .expect(200);
});
