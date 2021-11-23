setTimeout(function(){
    console.log('Execultando callback...')

    setTimeout(function(){
        console.log('Execultando callbacl...')

        setTimeout(function(){
            console.log('Execultando callbacl...')
        }, 2000)
    }, 2000)
}, 2000)

