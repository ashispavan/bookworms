// eslint-disable-next-line no-undef
const path = require('path');
// eslint-disable-next-line no-undef
exports.createPages = ({graphql, actions}) => {
	const { createPage } = actions;
	const bookTemplate = path.resolve('src/templates/bookTemplate.js');
	return graphql(`
    {
        allBook {
          edges {
            node {
              id
              title
              summary
              author {
                name
              }
            }
          }
        }
      }
    `).then((result) => {
		if (result.errors) {
			throw result.errors;
		}
		const { edges } = result.data.allBook;
		edges.forEach(book => {
			createPage({
				path: `/book/${book.node.id}`,
				component: bookTemplate,
				context: book.node
			});
		});
	});
};


