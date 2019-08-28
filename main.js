const keyIs = document.getElementById('keyIs')
const whichIs = document.getElementById('whichIs')
const codeIs = document.getElementById('codeIs')
// const input = document.getElementById('input')

const body = document.querySelector('body')

document.addEventListener("keydown", event => {
        keyIs.textContent = event.key
        whichIs.textContent = event.which
        codeIs.textContent = event.code
        
        console.dir(event)

        console.log(`whichIs.textContent  ${whichIs.textContent}`)

        // ascii code max 127
        // rgb max 255
        // so X2 the ascii for color??

        // body.style.backgroundColor = whichIs.textContent

  })

   