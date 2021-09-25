

function receivesAFunction(spy){
     spy();
}

function returnsANamedFunction(){
    function nFunction(){
        console.log('hi!');
    }
    return nFunction;
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log('hello');
    }
}