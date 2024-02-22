import React from 'react';

import { Header } from './Header';
import './page.css';

type User = {
  name: string;
};

export const Page: React.FC = () => {
    const [user, setUser] = React.useState<User>();
    /* probably shouldn't put everything in a variable then pass it... */
    const pageStyle = 'font-sans text-base leading-6 py-12 px-5 mx-auto max-w-lg text-gray-700';
    const h2Style = 'font-bold text-2xl/[32px] leading-6 mb-1 inline-block align-top';
    const tipWrapperStyle = 'text-xs leading-5 mt-10 mb-10';
    const tipStyle = 'inline-block rounded-2xl text-xs leading-3 font-bold bg-[#e7fdd8] text-[#66bf3c] text-green-600 px-3 mr-4 align-top';

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className={pageStyle}>
        <h2 className={h2Style}>Pages in Storybook</h2>
        <p className="my-4">
          We recommend building UIs with a{' '}
          <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
            <strong>component-driven</strong>
          </a>{' '}
          process starting with atomic components and ending with pages.
        </p>
        <p className="my-4">
          Render pages with mock data. This makes it easy to build and review page states without
          needing to navigate to them in your app. Here are some handy patterns for managing page
          data in Storybook:
        </p>
        <ul className="pl-8 my-4">
          <li className="mb-2">
            Use a higher-level connected component. Storybook helps you compose such data from the
            "args" of child component stories
          </li>
          <li className="mb-2">
            Assemble data in the page component from your services. You can mock these services out
            using Storybook.
          </li>
        </ul>
        <p className="my-4">
          Get a guided tutorial on component-driven development at{' '}
                  <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer" className="no-underline text-blue-500">
            Storybook tutorials
          </a>
          . Read more in the{' '}
                  <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer" className="no-underline text-blue-500">
            docs
          </a>
          .
        </p>
              <div className={tipWrapperStyle}>
                  <span className={tipStyle}>Tip</span> Adjust the width of the canvas with the{' '}
            <svg className="inline-block h-3 w-3 mr-1 align-top mt-1" width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
            <path className="text-blue-500"
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </svg>
          Viewports addon in the toolbar
        </div>
      </section>
    </article>
  );
};
