module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000' // 개발서버
            }
        }
    }
}
