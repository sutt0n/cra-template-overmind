export class Entity {
  constructor() {
    if(this.constructor.name === 'Entity') {
      throw new Error('Cannot instantiate base class "Entity"')
    }
  }

  getValidationRules() {
    return this.validationRules;
  }

  toRawObject() {
    const keys = Object.keys(this);
    const obj = {};
    
    for (let key of keys) {
      const value = this[key];
      if (Array.isArray(value)) {
        obj[key] = value.map(v => {
          if (typeof v === 'string' || v instanceof String) {
            return v;
          } else {
            return this.toRawObject(v);
          }
        });
      } else if (typeof value === 'object' && value !== null) {
        obj[key] = this.toRawObject(value);
      } else {
        obj[key] = value;
      }
    }

    return obj;
  }
}