import { http, HttpResponse } from "msw";

const baseUrl = "http://localhost:3000/api";

export const handlers = [
  http.get(`${baseUrl}/items`, () => {
    return HttpResponse.json(
      [...Array(3)]
        .map((_, i) => i + 1)
        .map((id) => ({ id, name: `Name ${id}` }))
    );
  }),
];
