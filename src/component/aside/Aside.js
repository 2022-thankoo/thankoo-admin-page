import PropTypes from 'prop-types';

import * as as from './AsideStyle';

function AsidePage({category}) {

  return (
    <as.Aside>
      <as.Title>Thankoo</as.Title>
      {category.map(({mainCategory, categoryElement}) => {
        return (
          <as.CategoryList key={mainCategory}>
            <as.ListTitle>{mainCategory}</as.ListTitle>
            {categoryElement.map(({url, element}) =>
              <as.ListElement key={url}>
                <as.ElementLink href={url}>{element}</as.ElementLink>
              </as.ListElement>
            )}
          </as.CategoryList>
        );
      })}
    </as.Aside>
  );
}

AsidePage.propTypes = {
  category: PropTypes.arrayOf(
    PropTypes.shape({
      mainCategory: PropTypes.string,
      categoryElement: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string,
          element: PropTypes.string
        })
      )
    })
  )
}

export default AsidePage;