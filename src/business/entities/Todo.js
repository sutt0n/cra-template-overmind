import { Entity } from './Entity'

export class Todo extends Entity {
  constructor({ title, description }) {
    super();

    this.title = title;
    this.description = description;
  }

  getValidationRules() {
    return {};
  }
}