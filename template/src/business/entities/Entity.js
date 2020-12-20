import joi from 'joi';

export class Entity {
  validationRules = {};

  constructor() {
    if (this.constructor.name === 'Entity') {
      throw new Error('Cannot instantiate base class "Entity"');
    }
  }

  getValidationRules() {
    return joi.object().keys(this.validationRules);
  }

  validate() {
    return this.getValidationRules().validate(this.toRawObject());
  }

  toRawObject() {
    const keys = Object.keys(this);
    const obj = {};

    keys.forEach(key => {
      const value = this[key];
      if (Array.isArray(value)) {
        obj[key] = value.map(v => {
          if (typeof v === 'string' || v instanceof String) {
            return v;
          }

          return this.toRawObject(v);
        });
      } else if (typeof value === 'object' && value !== null) {
        obj[key] = this.toRawObject(value);
      } else {
        obj[key] = value;
      }
    });

    return obj;
  }
}
