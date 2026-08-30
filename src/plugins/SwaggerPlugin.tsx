import React from 'react';
import { GraphiQLPlugin } from '@graphiql/react';

const SwaggerUI = React.lazy(() => import('swagger-ui-react'));

export const swaggerPlugin: GraphiQLPlugin = {
  title: 'DefraDB API',
  icon: () => (<div>API</div>),
  content: () => (
    <React.Suspense>
      <SwaggerUI url="/openapi.json" />
    </React.Suspense>
  ),
}; 