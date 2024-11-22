const marked = require('marked');

const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown');

const turndown = require('turndown');

function sanitizeMarkdownContent(markdownContent){
    const turndownService = new TurndownService();

    const convertedHtml = marked.parse(markdownContent);

    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml,{
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags
    })

    return turndownService.turndown(sanitizedHtml);
}

module.exports = sanitizeMarkdownContent;