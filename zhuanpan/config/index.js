// see http://vuejs-templates.github.io/webpack for documentation.
module.exports = {
    build: require('./prod.env'),
    test: require('./test.env'),
    dev: require('./dev.env'),
    local: require('./local.env')
}