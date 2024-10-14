export async function GET() {
  return Response.json(
    [...Array(5)]
      .map((_, i) => i + 1)
      .map((id) => ({ id, name: `Name ${id}` })),
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  );
}
