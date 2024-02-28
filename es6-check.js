// ES6-check online https://jstool.gitlab.io/es6-check/

function parse(source) {
    // var string = text1.value
    var string = source

    var options = { ecmaVersion: 5 }

    var ast = jsCompiler.parse(string, options)
    window.ast = ast

    ast = JSON.stringify(ast, null, '  ')
    // console.log(window.ast)
    console.log(ast)
    result.innerHTML = 'AST:\n' + ast
}
