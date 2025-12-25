import type { Request, Response, NextFunction } from 'express';
export const RequestLogger = (req: Request, res: Response, next: NextFunction) => {
	const timeStamp = new Date(Date.now()).toLocaleString('en-IN', { timeZone: 'Asia/kolkata', hour12: false });
	const ipAddress = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	const userAgent = req.headers['user-agent'];

	console.log(`[${timeStamp}]		[${req.method}]		[${req.route}]		[${ipAddress}]		[${userAgent}]`);

}

