
const { html2 } = require('./base');
// console.log(html2);

// console.log(html2.match(/<.+>.+<\/.+>/g)); // greedy
// console.log(html2.match(/<.+?>.+?<\/.+?>/g)); // lazy

// $1 $2 $3 -> retrovisores
// * -> dot all -> pontuações

// console.log(html2.match(/<(\w+).*?>.+?<\/\1>/g)); // grupos + retrovisores (não encherga quebra de linha)

// console.log(html2.match(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/g)); // grupos + retrovisores (encherga quebra de linha)

// remontando html e editando conteúdo com retrovisores
// ?: exclui o grupo da memoria
console.log(html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 HAHA $3 HAHA $4'));
