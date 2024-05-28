// webpack.config.js
Moduleodule.exports = {
    // autres options de configuration
    devServer: {
        setupMiddlewares: (middlewares, devServer) => {
            // Ajoutez votre middleware qui était précédemment dans onBeforeSetupMiddleware
            middlewares.unshift({
                name: 'custom-middleware-before',
                middleware: (req, res, next) => {
                    // logique de middleware avant
                    next();
                }
            });

            // Ajoutez votre middleware qui était précédemment dans onAfterSetupMiddleware
            middlewares.push({
                name: 'custom-middleware-after',
                middleware: (req, res, next) => {
                    // logique de middleware après
                    next();
                }
            });

            return middlewares;
        }
    }
};
