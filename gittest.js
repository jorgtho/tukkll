const { execSync } = require('child_process')

const setSafeCrlf = () => {
    let crlf
    try {
        crlf = runAndReturnGitCommand('git config --get core.safecrlf')
        crlf = crlf.trim()
    } catch (error) {
        crlf = 'notSet'
    }
    if (crlf !== 'false') {
        runAndReturnGitCommand('git config --global core.safecrlf false')
    }
    return crlf
  }
  
  const resetSafeCrlf = (prevCrlf) => {
    if (prevCrlf === 'notSet') {
        runAndReturnGitCommand('git config --global --unset core.safecrlf')
    } else if (prevCrlf !== 'false') {
        runAndReturnGitCommand(`git config --global core.safecrlf ${prevCrlf}`)
    }
  }

  const showCrlf = () => {
    let crlf
    try {
        crlf = runAndReturnGitCommand('git config --get core.safecrlf')
        crlf = crlf.trim()
    } catch (error) {
        crlf = 'notSet'
    }
    console.log(crlf)
  }
  
  const runAndReturnGitCommand = command => {
    try {
      const res = execSync(command)
      return res.toString()
    } catch (err) {
      if (err.message.includes('Not a git repository')) {
        throw new Error('Directory is not a Git repository')
      }
      throw err
    }
  }

showCrlf()
const cr = setSafeCrlf()
console.log('Expecting false: ')
showCrlf()
resetSafeCrlf(cr)
console.log(`Expecting ${cr}`)
showCrlf()

