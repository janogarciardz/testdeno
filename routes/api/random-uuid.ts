import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
		GET(req) {
				const uuid = crypto.randomUUID();
				return new Response(JSON.stringify({
					uuid: uuid,
					key : 'nada'
				}), {
						headers: { "Content-Type": "application/json" },
				});
				},
};