export type AppearanceToolsSettings = {
  /**
   * Setting that enables the following UI tools:
   *
   * - border: color, radius, style, width
   * - color: link
   * - spacing: blockGap, margin, padding
   * - typography: lineHeight
   */
  appearanceTools?: boolean;
};

export type ColorSettings = {
  /**
   * Settings related to colors.
   */
  color?: {
    /**
     * Allow users to set background colors.
     */
    background?: boolean;
    /**
     * Allow users to select custom colors.
     */
    custom?: boolean;
    /**
     * Allow users to create custom duotone filters.
     */
    customDuotone?: boolean;
    /**
     * Allow users to create custom gradients.
     */
    customGradient?: boolean;
    /**
     * Allow users to choose filters from the default duotone filter presets.
     */
    defaultDuotone?: boolean;
    /**
     * Allow users to choose colors from the default gradients.
     */
    defaultGradients?: boolean;
    /**
     * Allow users to choose colors from the default palette.
     */
    defaultPalette?: boolean;
    /**
     * Duotone presets for the duotone picker.
     *
     * Doesn't generate classes or properties.
     */
    duotone?: ColorDuotone[];
    /**
     * Gradient presets for the gradient picker.
     *
     * Generates a single class (`.has-{slug}-background`) and custom property (`--wp--preset--gradient--{slug}`) per preset value.
     */
    gradients?: ColorGradient[];
    /**
     * Allow users to set link colors.
     */
    link?: boolean;
    /**
     * Color palette presets for the color picker.
     *
     * Generates three classes (`.has-{slug}-color`, `.has-{slug}-background-color`, and `.has-{slug}-border-color`) and a single custom property (`--wp--preset--color--{slug}`) per preset value.
     */
    palette?: ColorPalette[];
    /**
     * Allow users to set text colors.
     */
    text?: boolean;
  };
};

export type LayoutSettings = {
  /**
   * Settings related to layout.
   */
  layout?: {
    /**
     * Sets the max-width of the content.
     */
    contentSize?: string;
    /**
     * Sets the max-width of wide (`.alignwide`) content.
     */
    wideSize?: string;
  };
};

export type TypographySettings = {
  /**
   * Settings related to typography.
   */
  typography?: {
    /**
     * Allow users to set custom font sizes.
     *
     * Default value: `true`
     */
    customFontSize?: boolean;
    /**
     * Allow users to set custom font styles.
     *
     * Default value: `true`
     */
    fontStyle?: boolean;
    /**
     * Allow users to set custom font weights.
     *
     * Default value: `true`
     */
    fontWeight?: boolean;
    /**
     * Opts into fluid typography.
     */
    fluid?: boolean;
    /**
     * Allow users to set custom letter spacing.
     *
     * Default value: `true`
     */
    letterSpacing?: boolean;
    /**
     * Allow users to set custom line height.
     *
     * Default value: `false`
     */
    lineHeight?: boolean;
    /**
     * Allow users to set custom text decorations.
     *
     * Default value: `true`
     */
    textDecoration?: boolean;
    /**
     * Allow users to set custom text transforms.
     *
     * Default value: `true`
     */
    textTransform?: boolean;
    /**
     * Enable drop cap.
     *
     * Default value: `true`
     */
    dropCap?: boolean;
    /**
     * Font size presets for the font size selector.
     *
     * Generates a single class (`.has-{slug}-color`) and custom property (`--wp--preset--font-size--{slug}`) per preset value.
     */
    fontSizes?: FontSize[];
    /**
     * Font family presets for the font family selector.
     *
     * Generates a single custom property (`--wp--preset--font-family--{slug}`) per preset value.
     */
    fontFamilies?: FontFamily[];
  };
};

export type SpacingSettings = {
  /**
   * Settings related to spacing.
   */
  spacing?: {
    /**
     * Enables `--wp--style--block-gap` to be generated from styles.spacing.blockGap.
     *
     * A value of `null` instead of `false` further disables layout styles from being generated.
     *
     * Default value: `null`
     */
    blockGap?: boolean | null;
    /**
     * Allow users to set a custom margin.
     *
     * Default value: `false`
     */
    margin?: boolean;
    /**
     * Allow users to set a custom padding.
     *
     * Default value: `false`
     */
    padding?: boolean;
    /**
     * List of units the user can use for spacing values.
     *
     * Default value: `['px', 'em', 'rem', 'vh', 'vw', '%']`
     */
    units?: string[];
    /**
     * Allow users to set custom space sizes.
     *
     * Default value: `true`
     */
    customSpacingSize?: boolean;
    /**
     * Space size presets for the space size selector.
     *
     * Generates a custom property (`--wp--preset--space-size--{slug}`) per preset value.
     */
    spacingSizes?: SpacingSize[];
    /**
     * Space size presets for the space size selector.
     *
     * Generates a custom property (`--wp--preset--space-size--{slug}`) per preset value.
     */
    spacingScale?: {
      /**
       * With + or * depending on whether scale is generated by increment or mulitplier.
       */
      operator?: '+' | '*';
      /**
       * The amount to increment each step by.
       */
      increment?: number;
      /**
       * Number of steps to generate in scale.
       */
      steps?: number;
      /**
       * The value to medium setting in the scale.
       */
      mediumStep?: number;
      /**
       * Unit that the scale uses, eg. rem, em, px.
       */
      unit?: 'px' | 'em' | 'rem' | 'vh' | 'vw' | '%';
    };
  };
};

export type BorderSettings = {
  /**
   * Settings related to borders.
   */
  border?: {
    /**
     * Allow users to set custom border colors.
     */
    color?: boolean;
    /**
     * Allow users to set custom border radius.
     */
    radius?: boolean;
    /**
     * Allow users to set custom border styles.
     */
    style?: boolean;
    /**
     * Allow users to set custom border widths.
     */
    width?: boolean;
  };
};

export type CustomSettings = {
  /**
   * Generate custom CSS custom properties of the form `--wp--custom--{key}--{nested-key}: {value};`.
   *
   * `camelCased` keys are transformed to `kebab-case` as to follow the CSS property naming schema.
   *
   * Keys at different depth levels are separated by `--`, so keys should not include `--` in the name.
   */
  custom?: { [k: string]: CustomProperty };
};

export type CustomProperty = string | number | { [k: string]: CustomProperty };

export type Settings = AppearanceToolsSettings &
  ColorSettings &
  LayoutSettings &
  SpacingSettings &
  TypographySettings &
  BorderSettings &
  CustomSettings;

export type GlobalSettings = Settings & {
  /**
   * Settings defined on a per-block basis.
   */
  blocks?: {
    // There are (currently?) no regex keys in TypeScript so this is more permissive than the schema.
    [k: `${string}/${string}`]: Settings;
    /**
     * Archive block. Display a monthly archive of your posts.
     *
     * This block has no block-level settings.
     */
    'core/archives'?: Record<string, never>;
    'core/audio'?: Settings;
    'core/avatar'?: Settings;
    'core/block'?: Settings;
    'core/button'?: AppearanceToolsSettings & {
      /**
       * Settings related to borders.
       *
       * Gutenberg plugin required.
       */
      border?: {
        /**
         * Allow users to set custom border radius.
         *
         * Gutenberg plugin required.
         */
        radius?: boolean;
      };
    } & ColorSettings &
      LayoutSettings &
      SpacingSettings &
      TypographySettings &
      CustomSettings;
    'core/buttons'?: Settings;
    'core/calendar'?: Settings;
    'core/categories'?: Settings;
    'core/code'?: Settings;
    'core/column'?: Settings;
    'core/columns'?: Settings;
    'core/comment-author-name'?: Settings;
    'core/comment-content'?: Settings;
    'core/comment-date'?: Settings;
    'core/comment-edit-link'?: Settings;
    'core/comment-reply-link'?: Settings;
    'core/comment-template'?: Settings;
    'core/comments'?: Settings;
    'core/cover'?: Settings;
    'core/embed'?: Settings;
    'core/file'?: Settings;
    'core/freeform'?: Settings;
    'core/gallery'?: Settings;
    'core/group'?: Settings;
    'core/heading'?: Settings;
    'core/home-link'?: Settings;
    'core/html'?: Settings;
    'core/image'?: Settings;
    'core/latest-comments'?: Settings;
    'core/latest-posts'?: Settings;
    'core/list'?: Settings;
    'core/loginout'?: Settings;
    'core/media-text'?: Settings;
    'core/missing'?: Settings;
    'core/more'?: Settings;
    'core/navigation'?: Settings;
    'core/navigation-link'?: Settings;
    'core/nextpage'?: Settings;
    'core/page-list'?: Settings;
    'core/paragraph'?: Settings;
    'core/post-author'?: Settings;
    'core/post-comments'?: Settings;
    'core/post-comments-count'?: Settings;
    'core/post-comments-form'?: Settings;
    'core/post-comments-link'?: Settings;
    'core/post-content'?: Settings;
    'core/post-date'?: Settings;
    'core/post-excerpt'?: Settings;
    'core/post-featured-image'?: Settings;
    'core/post-navigation-link'?: Settings;
    'core/post-template'?: Settings;
    'core/post-terms'?: Settings;
    'core/post-title'?: Settings;
    'core/preformatted'?: Settings;
    'core/pullquote'?: Settings;
    'core/query'?: Settings;
    'core/query-pagination'?: Settings;
    'core/query-pagination-next'?: Settings;
    'core/query-pagination-numbers'?: Settings;
    'core/query-pagination-previous'?: Settings;
    'core/query-title'?: Settings;
    'core/quote'?: Settings;
    'core/rss'?: Settings;
    'core/search'?: Settings;
    'core/separator'?: Settings;
    'core/shortcode'?: Settings;
    'core/site-logo'?: Settings;
    'core/site-tagline'?: Settings;
    'core/site-title'?: Settings;
    'core/social-link'?: Settings;
    'core/social-links'?: Settings;
    'core/spacer'?: Settings;
    'core/table'?: Settings;
    'core/table-of-contents'?: Settings;
    'core/tag-cloud'?: Settings;
    'core/template-part'?: Settings;
    'core/term-description'?: Settings;
    'core/text-columns'?: Settings;
    'core/verse'?: Settings;
    'core/video'?: Settings;
    'core/widget-area'?: Settings;
    'core/legacy-widget'?: Settings;
    'core/widget-group'?: Settings;
  };
};

export type ColorDuotone = {
  /**
   * Name of the duotone preset, translatable.
   */
  name: string;
  /**
   * Kebab-case unique identifier for the duotone preset.
   */
  slug: string;
  /**
   * List of colors from dark to light.
   *
   * CSS hex or rgb strings.
   */
  colors: string[];
};

export type ColorGradient = {
  /**
   * Name of the gradient preset, translatable.
   */
  name: string;
  /**
   * Kebab-case unique identifier for the gradient preset.
   */
  slug: string;
  /**
   * CSS gradient string.
   */
  gradient: string;
};

export type ColorPalette = {
  /**
   * Name of the color preset, translatable.
   */
  name: string;
  /**
   * Kebab-case unique identifier for the color preset.
   */
  slug: string;
  /**
   * CSS hex or rgb(a) string.
   */
  color: string;
};

export type SpacingSize = {
  /**
   * Name of the space size preset, translatable.
   */
  name?: string;
  /**
   * Kebab-case unique identifier for the space size preset.
   */
  slug?: string;
  /**
   * CSS `space-size` value, including units.
   */
  size?: string;
};

export type FontSize = {
  /**
   * Name of the font size preset, translatable.
   */
  name?: string;
  /**
   * Kebab-case unique identifier for the font size preset.
   */
  slug?: string;
  /**
   * CSS `font-size` value, including units.
   */
  size?: string;
  /**
   * Specifies the minimum and maximum font size value of a fluid font size.
   *
   * Set to `false` to bypass fluid calculations and use the static `size` value.
   */
  fluid?:
    | false
    | {
        /**
         * A min font size for fluid font size calculations in px, rem or em.
         */
        min?: string;
        /**
         * A max font size for fluid font size calculations in px, rem or em.
         */
        max?: string;
      };
};

export type FontFamily = {
  /**
   * Name of the font family preset, translatable.
   */
  name?: string;
  /**
   * Kebab-case unique identifier for the font family preset.
   */
  slug?: string;
  /**
   * CSS `font-family` value.
   */
  fontFamily?: string;
  /**
   * Array of font-face declarations.
   */
  fontFace?: FontFace[];
};

export type FontFace = {
  /**
   * CSS `font-family` value.
   *
   * Default value: `''`
   */
  fontFamily: string;
  /**
   * CSS `font-style` value.
   *
   * Default value: `normal`
   */
  fontStyle?: string;
  /**
   * List of available font weights, separated by a space.
   *
   * Default value: `400`
   */
  fontWeight?: string | number;
  /**
   * CSS `font-display` value.
   *
   * Default value: `fallback`
   */
  fontDisplay?: 'auto' | 'block' | 'fallback' | 'swap';
  /**
   * Paths or URLs to the font files.
   */
  src: string | string[];
  /**
   * CSS `font-stretch` value.
   */
  fontStretch?: string;
  /**
   * CSS `ascend-override` value.
   */
  ascendOverride?: string;
  /**
   * CSS `descend-override` value.
   */
  descendOverride?: string;
  /**
   * CSS `font-variant` value.
   */
  fontVariant?: string;
  /**
   * CSS `font-feature-settings` value.
   */
  fontFeatureSettings?: string;
  /**
   * CSS `font-variation-settings` value.
   */
  fontVariationSettings?: string;
  /**
   * CSS `line-gap-override` value.
   */
  lineGapOverride?: string;
  /**
   * CSS `size-adjust` value.
   */
  sizeAdjust?: string;
  /**
   * CSS `unicode-range` value.
   */
  unicodeRange?: string;
};

export type BorderStyles = {
  /**
   * Sets the `border-color` CSS property.
   */
  color?: string;
  /**
   * Sets the `border-radius` CSS property.
   */
  radius?:
    | string
    | {
        /**
         * Sets the `border-top-left-radius` CSS property.
         */
        topLeft?: string;
        /**
         * Sets the `border-top-right-radius` CSS property.
         */
        topRight?: string;
        /**
         * Sets the `border-bottom-left-radius` CSS property.
         */
        bottomLeft?: string;
        /**
         * Sets the `border-bottom-right-radius` CSS property.
         */
        bottomRight?: string;
      };
  /**
   * Sets the `border-style` CSS property.
   */
  style?: string;
  /**
   * Sets the `border-width` CSS property.
   */
  width?: string;
  /**
   * Top border styles.
   */
  top?: {
    /**
     * Sets the `border-top-color` CSS property.
     */
    color?: string;
    /**
     *  Sets the `border-top-style` CSS property.
     */
    style?: string;
    /**
     * Sets the `border-top-width` CSS property.
     */
    width?: string;
  };
  /**
   * Right border styles.
   */
  right?: {
    /**
     * Sets the `border-right-color` CSS property.
     */
    color?: string;
    /**
     *  Sets the `border-right-style` CSS property.
     */
    style?: string;
    /**
     * Sets the `border-right-width` CSS property.
     */
    width?: string;
  };
  /**
   * Bottom border styles.
   */
  bottom?: {
    /**
     * Sets the `border-bottom-color` CSS property.
     */
    color?: string;
    /**
     *  Sets the `border-bottom-style` CSS property.
     */
    style?: string;
    /**
     * Sets the `border-bottom-width` CSS property.
     */
    width?: string;
  };
  /**
   * Left border styles.
   */
  left?: {
    /**
     * Sets the `border-left-color` CSS property.
     */
    color?: string;
    /**
     *  Sets the `border-left-style` CSS property.
     */
    style?: string;
    /**
     * Sets the `border-left-width` CSS property.
     */
    width?: string;
  };
};

export type ColorStyles = {
  /**
   * Sets the `background-color` CSS property.
   */
  background?: string;
  /**
   * Sets the `background` CSS property.
   */
  gradient?: string;
  /**
   * Sets the `color` CSS property.
   */
  text?: string;
};

export type SpacingStyles = {
  /**
   * Sets the `--wp--style--block-gap` CSS custom property when `settings.spacing.blockGap` is true.
   */
  blockGap?: string;
  /**
   * Margin styles.
   */
  margin?: {
    /**
     * Sets the `margin-top` CSS property.
     */
    top?: string;
    /**
     * Sets the `margin-right` CSS property.
     */
    right?: string;
    /**
     * Sets the `margin-bottom` CSS property.
     */
    bottom?: string;
    /**
     * Sets the `margin-left` CSS property.
     */
    left?: string;
  };
  /**
   * Padding styles.
   */
  padding?: {
    /**
     * Sets the `padding-top` CSS property.
     */
    top?: string;
    /**
     * Sets the `padding-right` CSS property.
     */
    right?: string;
    /**
     * Sets the `padding-bottom` CSS property.
     */
    bottom?: string;
    /**
     * Sets the `padding-left` CSS property.
     */
    left?: string;
  };
};

export type TypographyStyles = {
  /**
   * Sets the `font-family` CSS property.
   */
  fontFamily?: string;
  /**
   * Sets the `font-size` CSS property.
   */
  fontSize?: string;
  /**
   * Sets the `font-style` CSS property.
   */
  fontStyle?: string;
  /**
   * Sets the `font-weight` CSS property.
   */
  fontWeight?: string;
  /**
   * Sets the `letter-spacing` CSS property.
   */
  letterSpacing?: string;
  /**
   * Sets the `line-height` CSS property.
   */
  lineHeight?: string;
  /**
   * Sets the `text-decoration` CSS property.
   */
  textDecoration?: string;
  /**
   * Sets the `text-transform` CSS property.
   */
  textTransform?: string;
};

export type FilterStyles = {
  /**
   * Sets the duotone filter.
   */
  duotone?: string;
};

export type Elements = {
  /**
   *
   */
  button?: StyleProperties;
  /**
   *
   */
  caption?: StyleProperties;
  /**
   *
   */
  h1?: StyleProperties;
  /**
   *
   */
  h2?: StyleProperties;
  /**
   *
   */
  h3?: StyleProperties;
  /**
   *
   */
  h4?: StyleProperties;
  /**
   *
   */
  h5?: StyleProperties;
  /**
   *
   */
  h6?: StyleProperties;
  /**
   *
   */
  heading?: StyleProperties;
  /**
   *
   */
  link?: StyleProperties & {
    /**
     *
     */
    ':hover'?: StyleProperties;
    /**
     *
     */
    ':focus'?: StyleProperties;
    /**
     *
     */
    ':active'?: StyleProperties;
  };
};

export type BlockName =
  | `${string}/${string}`
  | 'core/archives'
  | 'core/audio'
  | 'core/avatar'
  | 'core/block'
  | 'core/button'
  | 'core/buttons'
  | 'core/calendar'
  | 'core/categories'
  | 'core/code'
  | 'core/column'
  | 'core/columns'
  | 'core/comment-author-name'
  | 'core/comment-content'
  | 'core/comment-date'
  | 'core/comment-edit-link'
  | 'core/comment-reply-link'
  | 'core/comment-template'
  | 'core/comments'
  | 'core/cover'
  | 'core/embed'
  | 'core/file'
  | 'core/freeform'
  | 'core/gallery'
  | 'core/group'
  | 'core/heading'
  | 'core/home-link'
  | 'core/html'
  | 'core/image'
  | 'core/latest-comments'
  | 'core/latest-posts'
  | 'core/list'
  | 'core/loginout'
  | 'core/media-text'
  | 'core/missing'
  | 'core/more'
  | 'core/navigation'
  | 'core/navigation-link'
  | 'core/nextpage'
  | 'core/page-list'
  | 'core/paragraph'
  | 'core/post-author'
  | 'core/post-comments'
  | 'core/post-comments-count'
  | 'core/post-comments-form'
  | 'core/post-comments-link'
  | 'core/post-content'
  | 'core/post-date'
  | 'core/post-excerpt'
  | 'core/post-featured-image'
  | 'core/post-navigation-link'
  | 'core/post-template'
  | 'core/post-terms'
  | 'core/post-title'
  | 'core/preformatted'
  | 'core/pullquote'
  | 'core/query'
  | 'core/query-pagination'
  | 'core/query-pagination-next'
  | 'core/query-pagination-numbers'
  | 'core/query-pagination-previous'
  | 'core/query-title'
  | 'core/quote'
  | 'core/rss'
  | 'core/search'
  | 'core/separator'
  | 'core/shortcode'
  | 'core/site-logo'
  | 'core/site-tagline'
  | 'core/site-title'
  | 'core/social-link'
  | 'core/social-links'
  | 'core/spacer'
  | 'core/table'
  | 'core/table-of-contents'
  | 'core/tag-cloud'
  | 'core/template-part'
  | 'core/term-description'
  | 'core/text-columns'
  | 'core/verse'
  | 'core/video'
  | 'core/widget-area'
  | 'core/legacy-widget'
  | 'core/widget-group';

export type Blocks = Record<
  BlockName,
  StyleProperties & {
    elements?: Elements;
  }
>;

export type StyleProperties = {
  /**
   * Border styles.
   */
  border?: BorderStyles;
  /**
   * Color styles.
   */
  color?: ColorStyles;
  /**
   * Spacing styles.
   */
  spacing?: SpacingStyles;
  /**
   * Typography styles.
   */
  typography?: TypographyStyles;
};

export type AllStyleProperties = StyleProperties & {
  /**
   * CSS and SVG filter styles.
   */
  filter?: FilterStyles;
};

export type GlobalStyles = AllStyleProperties & {
  /**
   * Styles defined on a per-element basis using the element's selector.
   */
  elements?: Elements;
  /**
   * Styles defined on a per-block basis using the block's selector.
   */
  blocks?: Blocks;
};

export type CustomTemplate = {
  /**
   * Filename, without extension, of the template in the templates folder.
   */
  name: string;
  /**
   * Title of the template, translatable.
   */
  title: string;
  /**
   * List of post types that can use this custom template.
   *
   * Default value: `['page']`
   */
  postTypes?: string[];
};

export type TemplatePart = {
  /**
   * Filename, without extension, of the template in the parts folder.
   */
  name: string;
  /**
   * Title of the template, translatable.
   */
  title?: string;
  /**
   * The area the template part is used for. Block variations for `header` and `footer` values exist and will be used when the area is set to one of those.
   *
   * Default value: `uncategorized`
   */
  area?: string;
};

export type JsonHeader = {
  /**
   * JSON schema URI for theme.json.
   */
  $schema?: string;
  /**
   * Version of theme.json to use.
   */
  version: 2;
};

export type GlobalSettingsAndStyles = {
  /**
   * Settings for the block editor and individual blocks. These include things like:
   *
   * - Which customization options should be available to the user.
   * - The default colors, font sizes... available to the user.
   * - CSS custom properties and class names used in styles.
   * - And the default layout of the editor (widths and available alignments).
   */
  settings?: GlobalSettings;
  /**
   * Organized way to set CSS properties. Styles in the top-level will be added in the `body` selector.
   */
  styles?: GlobalStyles;
  /**
   * Additional metadata for custom templates defined in the templates folder.
   */
  customTemplates?: CustomTemplate[];
  /**
   * Additional metadata for template parts defined in the parts folder.
   */
  templateParts?: TemplatePart[];
  /**
   * An array of pattern slugs to be registered from the Pattern Directory.
   */
  patterns?: string[];
};

export type Theme = JsonHeader & GlobalSettingsAndStyles;
