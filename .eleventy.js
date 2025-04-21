module.exports = function(eleventyConfig){
    const handlebarsPlugin = require("@11ty/eleventy-plugin-handlebars");
    eleventyConfig.setTemplateFormats([
        "md",
        "njk",
        "hbs"
      ]);

      eleventyConfig.addPassthroughCopy("img");
      eleventyConfig.addPassthroughCopy("fonts");
      eleventyConfig.addPassthroughCopy("js");
      eleventyConfig.addPassthroughCopy("css");
      eleventyConfig.addPlugin(handlebarsPlugin);

    return {
        markdownTemplateEngine: "njk",    
    dir: {
        layouts: "_layouts",
        output: "_site"
    }
    }

   
};


