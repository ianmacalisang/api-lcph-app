import type { Schema, Attribute } from '@strapi/strapi';

export interface ReusablesLessons extends Schema.Component {
  collectionName: 'components_reusables_lessons';
  info: {
    displayName: 'Lessons';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    duration: Attribute.Integer;
    url: Attribute.String;
  };
}

export interface ReusablesModules extends Schema.Component {
  collectionName: 'components_reusables_modules';
  info: {
    displayName: 'Modules';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    lessons: Attribute.Component<'reusables.lessons', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'reusables.lessons': ReusablesLessons;
      'reusables.modules': ReusablesModules;
    }
  }
}
