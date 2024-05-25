import type { Schema, Attribute } from '@strapi/strapi';

export interface FrontendFaq extends Schema.Component {
  collectionName: 'components_frontend_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface FrontendReviews extends Schema.Component {
  collectionName: 'components_frontend_reviews';
  info: {
    displayName: 'Reviews';
  };
  attributes: {
    name: Attribute.String;
    content: Attribute.RichText;
    avatar: Attribute.Media;
  };
}

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
      'frontend.faq': FrontendFaq;
      'frontend.reviews': FrontendReviews;
      'reusables.lessons': ReusablesLessons;
      'reusables.modules': ReusablesModules;
    }
  }
}
