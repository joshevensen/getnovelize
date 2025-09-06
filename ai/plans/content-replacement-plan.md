# Content Replacement Plan

## Overview

Replace placeholder content in Vue section components with actual Novelize content from `ai/page-content/` files while maintaining the existing component structure and styling.

## Page-to-Content Mapping

### 1. Home Page (`app/pages/index.vue`)

**Sections Used:**

- `SectionHeroHome` → Use "Home" content from `ai/page-content/home.md`
- `SectionFeatureHome` → Use "Home" feature highlights from `ai/page-content/home.md`
- `SectionCTA` → Use "Home" CTA content from `ai/page-content/home.md`
- `SectionTestimonials` → Use testimonials from `ai/page-content/home.md`

### 2. About Page (`app/pages/about.vue`)

**Sections Used:**

- `SectionHeroPage` → Use "About" hero content from `ai/page-content/about.md`
- `SectionAbout` → Use "About" main content from `ai/page-content/about.md`
- `SectionTeam` → Use "About" team content from `ai/page-content/about.md`
- `SectionCTA` → Use "About" CTA content from `ai/page-content/about.md`

### 3. Features Page (`app/pages/features.vue`)

**Sections Used:**

- `SectionHeroPage` → Use "Features" hero content from `ai/page-content/features.md`
- `SectionFeatureMainRight` → Use "Features" 1st core feature from `ai/page-content/features.md`
- `SectionFeatureMainLeft` → Use "Features" 2nd core feature from `ai/page-content/features.md`
- `SectionFeatureMainRight` → Use "Features" 3rd core feature from `ai/page-content/features.md`
- `SectionCTA` → Use "Features" CTA content from `ai/page-content/features.md`
- `SectionFeatureList` → Use "Features" other feature list from `ai/page-content/features.md`

### 4. Pricing Page (`app/pages/pricing.vue`)

**Sections Used:**

- `SectionHeroPage` → Use "Pricing" hero content from `ai/page-content/pricing.md`
- `SectionPricing` → Use "Pricing" main content from `ai/page-content/pricing.md`
- `SectionFAQ` → Use "Pricing" FAQ content from `ai/page-content/pricing.md`
- `SectionCTA` → Use "Pricing" CTA content from `ai/page-content/pricing.md`

### 5. Contact Page (`app/pages/contact.vue`)

**Sections Used:**

- `SectionHeroPage` → Use "Contact" hero content from `ai/page-content/contact.md`
- `SectionContact` → Use "Contact" main content from `ai/page-content/contact.md`
- `SectionCTA` → Use "Contact" CTA content from `ai/page-content/contact.md`

### 6. Privacy Page (`app/pages/privacy.vue`)

**Sections Used:**

- `SectionHeroPage` → Use "Privacy" hero content from `ai/page-content/privacy.md`
- `SectionContent` → Use "Privacy" main content from `ai/page-content/privacy.md`
- `SectionCTA` → Use "Privacy" CTA content from `ai/page-content/privacy.md`

### 7. Terms Page (`app/pages/terms.vue`)

**Sections Used:**

- `SectionHeroPage` → Use "Terms" hero content from `ai/page-content/terms.md`
- `SectionContent` → Use "Terms" main content from `ai/page-content/terms.md`
- `SectionCTA` → Use "Terms" CTA content from `ai/page-content/terms.md`

## Content Extraction Strategy

### From `ai/page-content/` files, extract:

1. **SEO Titles & Descriptions** (lines 1-42 in each file)
   - Use for page meta titles and descriptions
   - Apply to each corresponding page

2. **Page-Specific Content Sections**
   - **Home**: Lines 43-95 (Homepage skeleton)
   - **Pricing**: Lines 96-161 (Pricing page skeleton)
   - **Features**: Lines 162-248 (Features page skeleton)
   - **About**: Lines 249-315 (About page skeleton)
   - **Privacy**: Lines 316-394 (Privacy policy)
   - **Terms**: Lines 395-497 (Terms of service)
   - **Contact**: Use dedicated `contact.md` file

## Component Updates Required

### 1. Hero Components

- **`SectionHeroHome`**: Update with "Turn your ideas into stories" content
- **`SectionHeroPage`**: Update with page-specific hero content

### 2. Feature Components

- **`SectionFeatureHome`**: Update with 3 core feature tiles
- **`SectionFeatureMainLeft/Right`**: Update with detailed feature descriptions
- **`SectionFeatureList`**: Update with supporting features list

### 3. Content Components

- **`SectionAbout`**: Update with company story and mission
- **`SectionTeam`**: Update with team member information
- **`SectionPricing`**: Update with pricing plan details
- **`SectionFAQ`**: Update with pricing-related FAQs
- **`SectionContact`**: Update with contact form and information
- **`SectionContent`**: Update with privacy/terms content

### 4. CTA Components

- **`SectionCTA`**: Update with "Start your free 30-day trial" messaging

### 5. Testimonials

- **`SectionTestimonials`**: Update with writer testimonials

## Implementation Steps

### Phase 1: Core Pages

1. Update `SectionHeroHome` with home page content
2. Update `SectionFeatureHome` with feature highlights
3. Update `SectionAbout` with company information
4. Update `SectionTeam` with team details
5. Update `SectionPricing` with pricing information

### Phase 2: Feature Pages

1. Update `SectionFeatureMainLeft/Right` with detailed features
2. Update `SectionFeatureList` with supporting features
3. Update `SectionFAQ` with pricing FAQs

### Phase 3: Legal Pages

1. Update `SectionContent` for privacy policy
2. Update `SectionContent` for terms of service
3. Update `SectionContact` with contact information

### Phase 4: Testimonials

1. Update `SectionTestimonials` with writer testimonials

### Phase 5: CTAs & Final Touches

1. Update all `SectionCTA` components with consistent messaging
2. Update `SectionNewsletter` if needed
3. Review and polish all content

## Content Guidelines

### Maintain Existing Structure

- Keep all Vue component templates unchanged
- Only replace text content, not HTML structure
- Preserve all CSS classes and styling
- Maintain responsive design patterns

### Content Adaptation

- Convert markdown formatting to appropriate HTML
- Ensure content fits within existing component layouts
- Maintain consistent tone and messaging
- Use Novelize-specific terminology and branding
- **Content Flexibility**: It's acceptable to improve, expand, or shrink content from `ai/page-content/` files to better fit the structure and layout of the existing `app/components/section/` components
- **Content Enhancement**: Add, remove, or modify content as needed to create the best user experience within the existing component constraints

### SEO Considerations

- Apply SEO titles and descriptions to each page
- Ensure proper heading hierarchy (H1, H2, H3)
- Include relevant keywords naturally
- Maintain meta descriptions under 160 characters

## Files to Update

### Section Components (15 files)

- `app/components/section/About.vue`
- `app/components/section/BlogHome.vue`
- `app/components/section/BlogList.vue`
- `app/components/section/Contact.vue`
- `app/components/section/CTA.vue`
- `app/components/section/FAQ.vue`
- `app/components/section/FeatureHome.vue`
- `app/components/section/FeatureList.vue`
- `app/components/section/FeatureMainLeft.vue`
- `app/components/section/FeatureMainRight.vue`
- `app/components/section/HeroHome.vue`
- `app/components/section/HeroPage.vue`
- `app/components/section/Newsletter.vue`
- `app/components/section/Pricing.vue`
- `app/components/section/Team.vue`
- `app/components/section/Testimonials.vue`

### Content Source Files (7 files)

- `ai/page-content/about.md`
- `ai/page-content/contact.md`
- `ai/page-content/features.md`
- `ai/page-content/home.md`
- `ai/page-content/pricing.md`
- `ai/page-content/privacy.md`
- `ai/page-content/terms.md`

## Success Criteria

- All placeholder content replaced with Novelize-specific content
- Component structure and styling preserved
- SEO titles and descriptions applied
- Consistent messaging across all pages
- Responsive design maintained
- All CTAs point to "Start your free 30-day trial"
- Content accurately reflects Novelize's value proposition
