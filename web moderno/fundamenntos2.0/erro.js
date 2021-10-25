function tratarErro(erro) {
   throw new Error(' error 357')
};

function imprimirnomegritando(obj) {
   try{
     console.log(obj.name.toUpperCase() + '!!!!')
   } catch (e) {
       tratarErro(e)
   }  finally  {
        console.log(' erro ex001')
   };
};

const obj = { name: 'Higor'};
imprimirnomegritando(obj)