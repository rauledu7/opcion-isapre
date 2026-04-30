import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage: import.meta.env.PROD
    ? {
        kind: 'github',
        repo: {
          owner: 'rauledu7',
          name: 'opcion-isapre',
        },
      }
    : {
        kind: 'local',
      },
  singletons: {
    landing: singleton({
      label: 'Landing',
      path: 'src/content/landing',
      format: 'yaml',
      schema: {
        siteName: fields.text({ label: 'Nombre del sitio' }),
        headerCta: fields.text({ label: 'CTA header' }),
        hero: fields.object({
          badge: fields.text({ label: 'Badge hero' }),
          title: fields.text({ label: 'Titulo hero' }),
          description: fields.text({ label: 'Descripcion hero', multiline: true }),
          primaryCta: fields.text({ label: 'CTA primario hero' }),
          secondaryCta: fields.text({ label: 'CTA secundario hero' }),
          image: fields.image({
            label: 'Imagen de Fondo',
            directory: 'public/images',
            publicPath: '/images/',   
          }),
        }),
        partnersTitle: fields.text({ label: 'Titulo alianzas' }),
        partners: fields.array(
          fields.object({
            name: fields.text({ label: 'Nombre de la Isapre' }),
            logo: fields.image({
              label: 'Logo',
              directory: 'public/images',
              publicPath: '/images/',
            }),
          }),
          { 
            label: 'Logos de Alianzas', 
            itemLabel: (props) => props.fields.name.value || 'Nueva Isapre' 
          }
        ),
        quote: fields.object({
          title: fields.text({ label: 'Titulo formulario' }),
          subtitle: fields.text({ label: 'Subtitulo formulario' }),
          submitText: fields.text({ label: 'Boton formulario' }),
          privacyText: fields.text({ label: 'Texto privacidad' }),
        }),
        about: fields.object({
          title: fields.text({ label: 'Titulo quienes somos' }),
          paragraphOne: fields.text({ label: 'Parrafo 1', multiline: true }),
          paragraphTwo: fields.text({ label: 'Parrafo 2', multiline: true }),
        }),
        promoText: fields.text({ label: 'Texto promocional', multiline: true }),
        comparison: fields.object({
          title: fields.text({ label: 'Titulo comparativa' }),
          subtitle: fields.text({ label: 'Subtitulo comparativa' }),
          fonasaTitle: fields.text({ label: 'Titulo fonasa' }),
          fonasaSubtitle: fields.text({ label: 'Subtitulo fonasa' }),
          isapreTitle: fields.text({ label: 'Titulo isapre' }),
          isapreSubtitle: fields.text({ label: 'Subtitulo isapre' }),
          fonasaItems: fields.array(
            fields.object({
              icon: fields.text({ label: 'Icono material' }),
              text: fields.text({ label: 'Texto' }),
            }),
            { label: 'Items Fonasa', itemLabel: (props) => props.fields.text.value || 'Item' }
          ),
          isapreItems: fields.array(
            fields.object({
              icon: fields.text({ label: 'Icono material' }),
              text: fields.text({ label: 'Texto' }),
            }),
            { label: 'Items Isapre', itemLabel: (props) => props.fields.text.value || 'Item' }
          ),
        }),
        benefits: fields.object({
          badge: fields.text({ label: 'Badge beneficios' }),
          title: fields.text({ label: 'Titulo beneficios' }),
          items: fields.array(
            fields.object({
              icon: fields.text({ label: 'Icono material' }),
              title: fields.text({ label: 'Titulo beneficio' }),
              description: fields.text({ label: 'Descripcion', multiline: true }),
            }),
            { label: 'Items beneficios', itemLabel: (props) => props.fields.title.value || 'Beneficio' }
          ),
        }),
        faqTitle: fields.text({ label: 'Titulo FAQ' }),
        faqs: fields.array(
          fields.object({
            question: fields.text({ label: 'Pregunta' }),
            answer: fields.text({ label: 'Respuesta', multiline: true }),
          }),
          { label: 'FAQs', itemLabel: (props) => props.fields.question.value || 'FAQ' }
        ),
        footer: fields.object({
          description: fields.text({ label: 'Descripcion footer', multiline: true }),
          linkInicio: fields.text({ label: 'Texto link inicio' }),
          linkCotizar: fields.text({ label: 'Texto link cotizar' }),
          linkFaq: fields.text({ label: 'Texto link faq' }),
        }),
      },
    }),
  },
});