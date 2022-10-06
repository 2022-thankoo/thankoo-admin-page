import PropTypes from 'prop-types';

import * as As from './AsideStyle';
import AuthorizationWrapper from "../AuthorizationWrapper";

function AsidePage({category}) {

  return (
    <AuthorizationWrapper>
      <As.Aside>
        <As.Title>Thankoo</As.Title>
        {category.map(({mainCategory, categoryElement}) => {
          return (
            <As.CategoryList key={mainCategory}>
              <As.ListTitle>{mainCategory}</As.ListTitle>
              {categoryElement.map(({url, element}) =>
                <As.ListElement key={url}>
                  <As.ElementLink href={url}>{element}</As.ElementLink>
                </As.ListElement>
              )}
            </As.CategoryList>
          );
        })}
      </As.Aside>
    </AuthorizationWrapper>
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