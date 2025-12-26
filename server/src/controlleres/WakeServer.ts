import type { Request, Response } from "express";

export default async function WakeServer(req: Request, res: Response) {
	try {
		res.status(200).json({
			message: 'server woke up'
		});
	} catch (error){
		console.log(error);
}
}
