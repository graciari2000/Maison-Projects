module.exports = {
    devServer: {
        setupMiddlewares: function (devServer) {
            // Example middleware: Logging requests
            devServer.app.use((req, res, next) => {
                console.log(`Request received: ${req.method} ${req.url}`);
                next();
            });
        },
        // Other devServer options
    },
};

