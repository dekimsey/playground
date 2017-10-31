import React from 'react';
import Main from './components/_Main';
import CodeBlock from '../../components/CodeBlock';

const Tutorial = () => (
  <div>
    <h2>Learn More</h2>

    <p>
      Hopefully, through these tutorials and examples, you discovered how powerful the Firefox
      Debugger can be for debugging your JavaScript code. There is nothing wrong with using
      <code>console.log</code>, but it should just be one of the many tools in your toolbelt.{' '}
    </p>

    <p>
      If you want to learn more about Firefox Debugger, check out the{' '}
      <a href="https://developer.mozilla.org/docs/Tools/Debugger" target="_blank">
        Firefox Debugger Documentation on MDN
      </a>.
    </p>

    <p>
      Mozilla recently rebuilt Firefox Debugger from the ground-up using React and Redux. This new
      Debugger is designed to be approachable, yet powerful. It is available right now in Firefox
      Quantum. And the best part? It is completely hackable.{' '}
      <a href="https://github.com/devtools-html/debugger.html" target="_blank">
        Check out the repository on GitHub
      </a>.
    </p>

    <p>
      That's a wrap! If you haven't yet, check out Firefox Developer Edition. It has the latest
      features, is blazingly fast, and comses packed with all the development tools you need to
      build for the open web.
    </p>

    <p><a href="#">Download Firefox Developer Edition</a></p>
  </div>
);

export default () => <Main currentPageNum={5} tutorial={<Tutorial />} />;
