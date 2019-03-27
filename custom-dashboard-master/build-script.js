const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './dist/custom-element-dashboard/runtime.js',
        './dist/custom-element-dashboard/polyfills.js',
        './dist/custom-element-dashboard/scripts.js',
        './dist/custom-element-dashboard/main.js'
    ]
    
    await fs.ensureDir('elements')
    
    await concat(files, 'elements/elements.js')
    console.info('Angular Elements created successfully!')
    // if (fs.existsSync('client-website/elements.js')) {
    //   fs.unlinkSync('client-website/elements.js');
    // }
        fs.copyFileSync('elements/elements.js', 'client-website/elements.js');
})()