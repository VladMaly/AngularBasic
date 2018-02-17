# AngularBasic on top of setup made by Angular Cli 1.6.3
...

Website built using Angularjs CLI(which uses webpack under the hood) module bundler. Note that since 2017, yarn is supported by Angular CLI, yarn seems to be getting faster build speeds then even newer versions of npm, yet either is fine to use, as the speed jump is only on the developing side of the application.

Angularjs 5 is used. The alternatives would be using either Vue or React with webpack and babel.

# CSS, SCSS, LESS. Styled Components and CSS Modules.
Where SCSS(more compatible version with normal css over the earlier SASS), Stylus, LESS dominate the preprocessor's market for CSS(both give greater functionality to style sheets, like allowing to use variables, and loop). SCSS has been gaining speed, bootstrap 4 changed from LESS to SCSS as their go to, although Stylus is recently being voted above in preference the other two mentioned here. I am picking Stylus due to it being on top of its game in terms of features as well as being able to produce the cleanest css code ever imaginable. On the topic of bootstrap, I will be using ngBootstrap available for Ang 4+, which is a remake of bootstrap without the use of JQuery.

There are a couple advances to css on top of having preprocessors, the following are mostly about easier css maintainability, Css-loader, Styled-components, and BEM(more of css naming convention, where you end up with very long class names in order to achieve some order when looking at classes).

I will make some notes on css-loader, styled-components(others are jss and glamorous which are similar):
Css-loader library(css-module), that lets us require/import css as if they were objects and then reference them inside out templates/html files using the dot notation like we do with objects. Using Css modules benefits to eliminate collisions between other global css files. Give clarity about which css files are actually being used on a component rather than having to search it all over the app, while also promoting simple nomenclature of the class names without having multiple css files interlinked on one component. Personal note, that given that an element's inline styles take priority over higher forms of css, when making changes to accompany css modularity way of coding, be on allert as to not supersede/supplant that of a global style sheet(a problem that will be less likely to exist if the css modularity approach is made from the initialization of the app).

styled-components(Generally just any css-in-js library) try to achieve the end the result that css-loader does, except it does this by letting you write css inside your javascript files stored inside constants in your js files. After which they then are attached/added to components's html files, the benifits are similar to the css-module aproach. Both get the job done, I won't say that one is better than the other, yet there are forums and detailed analysis about bigger app sizes with css-in-js and other performance hits of the final app when compared to having the css files separated from js files. While the argument for development experience may be made with styled-components over css modules, I believe css modules takes the best of both worlds, being a nice medium of separated css files and fully writen css inside your js files, personally it seems to give more clarity in terms of visually understanding the code.

# Typescript, JSlint, JSHint, ESlint. Consider possibly using Facebook's Flow.
Since I am writing in TypeScript, TSLint will be used to lint the code, otherwise JSLint, JSHint or ESLint would have been been my options for javascript style checking. Note that instead of using Microsoft's Typescript we could have also used the alternative in the market, Facebook's Flow, although when using Angularjs its highly recommended to use Typescript, wheres as Flow is frequently accompanied with React applications.

# Fixing common error on typescript files.
Note that there will be an error with using 'require' in typescript, to solve this around, add this to typings.d.ts to not cause an error and let the 'require' word go through typescript checking. 'declare var require: any;' . Due to the error with type 'any'. The line becomes the following:
`interface WebpackRequire {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
}
interface NodeRequire extends WebpackRequire {}

declare var require: NodeRequire;`

# Gulp, Grant, basic scripts within package.json
For any task's that need to be run, scripts inside package.json are used, which are found within package.json, found no need for Grunt or Gulp.

# Underscore library
Underscore library for extra functionality when coding in js/ts files.

# Angular Cli testing tools, Jasmine, Protractor, Karma
Angular Cli default project comes with Protractor for end to end testing, Jasmine for js code testing, but more importantly its needed in order to run Protractor. Karma is for unit tests. Angular Cli also comes with standard rule sets added to the lint as part of codelyzer being updated into the default package.

# Reactive froms vs Template Driven forms
Consider using Reactive Forms rather than Template Driven Forms, as they give more power for unit testing, and are more in-line with state based thinking.

# Design Pattern
While Redux is mostly famous for being used with React, its a fair alternative to MVC if you think having a single source of truth that the Redux implementation results in for your project would help in the workflow.
