export const RequestLogger = (req, res, next) => {
    const timeStamp = new Date(Date.now()).toLocaleString('en-IN', { timeZone: 'Asia/kolkata', hour12: false });
    const ipAddress = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'];
    console.log(`[${timeStamp}]		[${req.method}]		[${req.route}]		[${ipAddress}]		[${userAgent}]`);
};
//# sourceMappingURL=RequestLogger.js.map