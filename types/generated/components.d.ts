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

export interface FrontendPromotions extends Schema.Component {
  collectionName: 'components_frontend_promotions';
  info: {
    displayName: 'Promotions';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.RichText;
    pricing: Attribute.Decimal;
    thumbnail: Attribute.Media;
    validity: Attribute.Date;
    courses: Attribute.Relation<
      'frontend.promotions',
      'oneToMany',
      'api::course.course'
    >;
    books: Attribute.Relation<
      'frontend.promotions',
      'oneToMany',
      'api::book.book'
    >;
    downloads: Attribute.Relation<
      'frontend.promotions',
      'oneToMany',
      'api::download.download'
    >;
    duration: Attribute.Integer & Attribute.DefaultTo<12>;
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
      'frontend.promotions': FrontendPromotions;
      'frontend.reviews': FrontendReviews;
      'reusables.lessons': ReusablesLessons;
      'reusables.modules': ReusablesModules;
    }
  }
}
