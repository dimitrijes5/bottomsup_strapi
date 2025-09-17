import type { Schema, Struct } from '@strapi/strapi';

export interface ClinicContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_clinic_contact_infos';
  info: {
    displayName: 'contact-info';
  };
  attributes: {
    city: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    hours: Schema.Attribute.JSON;
    phone: Schema.Attribute.String;
    street: Schema.Attribute.String;
  };
}

export interface ClinicDescription extends Struct.ComponentSchema {
  collectionName: 'components_clinic_descriptions';
  info: {
    displayName: 'description';
  };
  attributes: {
    content: Schema.Attribute.JSON;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    learnMoreLink: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ClinicSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_clinic_social_medias';
  info: {
    displayName: 'social-media';
  };
  attributes: {
    facebook: Schema.Attribute.Text;
    instagram: Schema.Attribute.String;
  };
}

export interface ClinicStaff extends Struct.ComponentSchema {
  collectionName: 'components_clinic_staff';
  info: {
    displayName: 'staff';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    clinic: Schema.Attribute.Relation<'oneToOne', 'api::clinic.clinic'>;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    imageAlt: Schema.Attribute.String;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HeroHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Subtitle: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'clinic.contact-info': ClinicContactInfo;
      'clinic.description': ClinicDescription;
      'clinic.social-media': ClinicSocialMedia;
      'clinic.staff': ClinicStaff;
      'hero.hero': HeroHero;
    }
  }
}
