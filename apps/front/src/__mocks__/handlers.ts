import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("http://localhost:3001/users", async () => {
    return HttpResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  }),
  http.get("https://restcountries.com/v3.1/all", () => {
    return HttpResponse.json([
      { name: { common: "Brazil" }, cca2: "BR" },
      { name: { common: "Portugal" }, cca2: "PT" },
    ]);
  }),
  http.get("http://localhost:3001/users/:userId", ({ params }) => {
    const { userId } = params;
    return HttpResponse.json({
      _id: userId,
      name: "Nataniel",
      surname: "Porto",
      country: "BR",
      birthday: "01/01/1990",
    });
  }),
  http.get("http://localhost:3001/users", () => {
    return HttpResponse.json([
      {
        _id: "1",
        name: "Nataniel",
        surname: "Porto",
        country: "BR",
        birthday: "01/01/1990",
      },
      {
        _id: "2",
        name: "A1",
        surname: "B1",
        country: "PT",
        birthday: "12/12/1985",
      },
    ]);
  }),
  http.put("http://localhost:3001/users/:userId", () => {
    return HttpResponse.json({
      success: true,
    });
  }),
];
