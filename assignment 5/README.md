OVERVIEW -
This assignment 5 is a demo of including the implementation of CSS Grid and Flexbox layouts, as well as the use of SASS/SCSS features. It showcases a rich user interface designed with a focus on modularity and organization which involves a supercar rental website.

FEATURES IMPLEMENTED -
1. CSS Grid Layouts: Two CSS Grid layouts were created to structure the page content efficiently.
    a. Testimonials in index.scss
    b. Hypercars list grid in cars-list.scss
2. Flexbox Layouts: Two Flexbox layouts were implemented for responsive design and content alignment. 
    a. Navbar having Home and Cars List in both pages
    b. index.scss

SASS Features:
    1. Variables: Sass variables $navyblue and $white were used for easy management of respective color codes in cars-list.scss
    2. Custom Properties: CSS custom properties (variables) were applied to create background-color and font-size that can be used globally in the assignment, defined in main.scss
    3. Nesting: Sass nesting was used for improved readability in multiples files ie. index.scss and cars-list.scss
    4. Interpolation: Interpolation was employed to create dynamic class names and style values within the stylesheets in cars-list.scss
    5. Placeholder Selectors: Placeholder selectors were used to define reusable abstract styles for button in cars-list.scss
    6. Mixins: Mixins are created in a _mixins.scss file to reuse a block of styles in index.scss
    7. Functions: Custom functions were used for calculating values and applying dynamic styles to a border in index.scss

Additional SASS Features implemented: (cars-list.scss)
    i. round() Math function to round width for a style class to nearest integer.
    ii. height() Math function to calculate % height for a style class.
    iii. Parent selector (&) to add background color on hover.
    iv. unquote() function to do String manipulation.

