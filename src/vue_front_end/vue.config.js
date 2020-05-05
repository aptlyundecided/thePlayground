module.exports = {
    devServer: {
        proxy: {
            'wod/insomnia/get-wod-list': {
                target: 'http://localhost:5000',
                ws: true,
                changeOrigin: true
            },
            'wod/insomnia/get-wod': {
                target: 'http://localhost:5000',
                ws: true,
                changeOrigin: true
            }
        }
    },
    "transpileDependencies": [
        "vuetify"
    ]
}