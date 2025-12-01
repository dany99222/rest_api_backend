import request from "supertest";
import server from "../server";

describe("GET /api", () => {
  it("should send back  a json response", async () => {
    const res = await request(server).get("/api");

    // Esto es lo que debe hacer 
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toMatch(/json/);
    expect(res.body.msg).toBe("Desde API");

    // Lo que no debe hacer 
    expect(res.status).not.toBe(404)
    expect(res.body.msg).not.toBe('desde api')
  });
});
