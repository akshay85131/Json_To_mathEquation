
const { eachRecursive } = require('./eachRecursive')
const { preToInfix } = require('./preToInfix')
const { simplifyIt } = require('./simplify')

const parserJson = async (req, res) => {
  // console.log(req.body)
  // console.log('im running')
  try {
    const obj = req.body
    const arr = await eachRecursive(obj)
    const expression = await preToInfix(arr)
    console.log(expression)
    const lhs = expression.split('=')[0]
    const rhs = expression.split('=')[1].trim()
    const value = await simplifyIt(rhs, lhs)
    const mathEqu = ('x = ' + value)
    const solvedAnswer = ('x = ', eval(value))
    res.status(200).send({
      expression: expression,
      simplifliedEquation: mathEqu,
      Answer: solvedAnswer
    })
  } catch (error) {
    res.status(400).send('something went wrong')
    console.log(error)
  }
}

module.exports = parserJson
