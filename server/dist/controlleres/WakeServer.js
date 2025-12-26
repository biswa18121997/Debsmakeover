export default async function WakeServer(req, res) {
    try {
        res.status(200).json({
            message: 'server woke up'
        });
    }
    catch (error) {
        console.log(error);
    }
}
//# sourceMappingURL=WakeServer.js.map