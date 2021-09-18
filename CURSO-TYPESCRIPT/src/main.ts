// Decorators
// Decorators are a way to modify the behavior of a class, method, or property.
// "experimentalDecorators": true,              /* Enables experimental support for ES7 decorators. */

function setApiVersion(apiVersion: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = apiVersion;
    };
  };
}

// @logger('cataline')
@setApiVersion('1')
class API {
}
 
console.log(new API());

// Decorator - fazer anotação da versao da api
