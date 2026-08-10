# frozen_string_literal: true

module Home
  class SeoHeadComponent < ApplicationComponent
    def before_render
      helpers.content_for(:head, flush: false) do
        helpers.safe_join(
          [
            canonical_tag,
            *hreflang_tags,
            *open_graph_tags,
            *twitter_tags,
            json_ld_tag,
            hero_preload_tag
          ]
        )
      end
    end

    def call
      "".html_safe
    end

    private

    def locale_root_url(locale = I18n.locale)
      if locale.to_sym == I18n.default_locale
        helpers.root_url(locale: nil)
      else
        helpers.root_url(locale: locale)
      end
    end

    def canonical_url
      locale_root_url
    end

    def canonical_tag
      helpers.tag.link(rel: "canonical", href: canonical_url)
    end

    def hreflang_tags
      {
        "pt" => locale_root_url(:pt),
        "en" => locale_root_url(:en),
        "es" => locale_root_url(:es),
        "x-default" => locale_root_url(:pt)
      }.map { |lang, href| helpers.tag.link(rel: "alternate", hreflang: lang, href: href) }
    end

    def open_graph_tags
      [
        helpers.tag.meta(property: "og:type", content: "website"),
        helpers.tag.meta(property: "og:site_name", content: "Square Soft"),
        helpers.tag.meta(property: "og:title", content: ht("meta.title")),
        helpers.tag.meta(property: "og:description", content: ht("meta.description")),
        helpers.tag.meta(property: "og:url", content: canonical_url),
        helpers.tag.meta(property: "og:locale", content: og_locale),
        helpers.tag.meta(property: "og:image", content: helpers.image_url("hero-team-1200.webp"))
      ]
    end

    def twitter_tags
      [
        helpers.tag.meta(name: "twitter:card", content: "summary_large_image"),
        helpers.tag.meta(name: "twitter:title", content: ht("meta.title")),
        helpers.tag.meta(name: "twitter:description", content: ht("meta.description")),
        helpers.tag.meta(name: "twitter:image", content: helpers.image_url("hero-team-1200.webp"))
      ]
    end

    def json_ld_tag
      payload = {
        "@context" => "https://schema.org",
        "@graph" => [
          {
            "@type" => "Organization",
            "name" => "Square Soft",
            "url" => locale_root_url(:pt),
            "logo" => helpers.image_url("hero-team-1200.webp"),
            "description" => ht("meta.description")
          },
          {
            "@type" => "WebSite",
            "name" => "Square Soft",
            "url" => canonical_url,
            "inLanguage" => html_lang_code,
            "publisher" => { "@type" => "Organization", "name" => "Square Soft" }
          }
        ]
      }

      helpers.content_tag(:script, payload.to_json.html_safe, type: "application/ld+json")
    end

    def hero_preload_tag
      helpers.tag.link(
        rel: "preload",
        as: "image",
        href: Home::HeroComponent.preload_href(helpers),
        imagesrcset: Home::HeroComponent.webp_srcset(helpers),
        imagesizes: "100vw",
        type: "image/webp",
        fetchpriority: "high"
      )
    end

    def og_locale
      case I18n.locale
      when :en then "en_US"
      when :es then "es_ES"
      else "pt_BR"
      end
    end

    def html_lang_code
      case I18n.locale
      when :en then "en"
      when :es then "es"
      else "pt-BR"
      end
    end
  end
end
