var target= {
    get foo() {
        console.log("in foo");
        console.log(this);
        return this.bar;
    },

    bar: 3
};

var handler = {
    get(target, propertyKey, receiver) {
        console.log("called with propertyKey: " + propertyKey);

        console.log("target:")
        console.log(target);

        console.log("receiver: ")
        console.log(receiver);
        
        if (propertyKey === "bar") {
            console.log("property is bar");
            return 3;
        }

        console.log("using Reflect: ");
        console.log(Reflect.get(target, propertyKey, receiver));
        console.log("getting from target directly: ");
        console.log("target[propertyKey]: " + propertyKey + "..." + target[propertyKey]);
        return "returning from get trap";
    }
};

var obj = new Proxy(target, handler);
console.log(target.foo + ":" + target["foo"]);
console.log("-----------------------");
console.log(obj.foo);

/* 

in foo
{foo: <accessor>, bar: 3}
in foo
{foo: <accessor>, bar: 3}
3:3               <-- accessor method works like a property, in both .and [] notations

-----------------------
                  <-- Proxy object defines a "target" object, and a hanlder's methods to trap calls to the "target" object
                  <-- Trapping happens either by method's name, or by method's type, i.e., get or set
                  <-- the 3rd parameter "receiver" is the Proxy object invoking the handler's method

called with propertyKey: foo            <-- from obj.foo call, the call is to a get, being trapped by the handler
target:
{foo: <accessor>, bar: 3}
receiver: 
Proxy {foo: <accessor>, bar: 3}
using Reflect:                          <-- failing check of property name value == "bar"
in foo                                  <-- Reflect call
Proxy {foo: <accessor>, bar: 3}         <-- on the Proxy object when the "receiver" parameter is present
    called with propertyKey: bar            <-- from this.bar call, the call is also a get, being trapped again
    target:
    {foo: <accessor>, bar: 3}
    receiver: 
    Proxy {foo: <accessor>, bar: 3}
    property is bar                         <-- passing check of property name value == "bar"
                                            <-- return from this.bar call
                                        <-- return from Reflect.get
3
getting from target directly: 
in foo                                  <-- get called on the raw object
{foo: <accessor>, bar: 3}
target[propertyKey]: foo...3            
returning from get trap                 <-- return value from obj.foo call, which is the return value from handler's get call
*/