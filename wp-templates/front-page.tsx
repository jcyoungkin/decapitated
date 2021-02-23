import React from 'react';
import { usePosts, useGeneralSettings } from '@wpengine/headless/react';
import { CTA, Header, Footer, Hero, Posts } from '../components';
import styles from '../scss/wp-templates/front-page.module.scss';

export default function FrontPage(props: any): JSX.Element {
  const posts = usePosts();
  const settings = useGeneralSettings();

  return (
    <>

      <main className="content">
        <Hero
          title="Decapitate This!"
          buttonText="Headless Horseman"
          buttonURL="https://www.youtube.com/watch?v=ysNSKrH8hHo"
          bgImage="https://dyn1.heritagestatic.com/lf?set=path%5B1%2F9%2F4%2F3%2F6%2F19436098%5D&call=url%5Bfile%3Aproduct.chain%5D"
          id={styles.home_hero}>
          <p>
            Some great examples of the Headless Horseman include the animated classic from<a href="https://disney.fandom.com/wiki/The_Headless_Horseman">Disney</a>, as well as the Johnny Depp version, <a href="https://en.wikipedia.org/wiki/Sleepy_Hollow_(film)">Sleepy Hollow</a>, but don't forget to read up on the <a href="https://en.wikipedia.org/wiki/The_Legend_of_Sleepy_Hollow">Legen of Sleepy Hollow</a> to get a better understanding of where this fiction originates from.
          </p>
        </Hero>

        <Posts
          posts={posts?.nodes}
          headingLevel="h2"
          postTitleLevel="h3"
          count={6}
          id={styles.post_list}
        />
      </main>
      
    </>
  );
}
