import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { renderRoutes } from '../imports/startup/client/routes.js';
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  render(<App/>, document.getElementById('react-root'));
});
