import * as React from 'react';
import { Annotated } from '@/components/Annotated';
import { BackgroundImage } from '@/components/atoms';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import { PageComponentProps } from '@/types';
import { PageModelType } from '@/types/generated';

type BaseLayoutProps = React.PropsWithChildren & PageComponentProps & PageModelType;

const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
  const { global, ...page } = props;
  const { site } = global;

  // Read custom field from front-matter (avoid TS headaches by casting)
  const bgVideo = (page as any)?.backgroundVideo as
    | { url: string; opacity?: number }
    | undefined;

  return (
    <Annotated content={page}>
      {/* Make the whole page a positioning context */}
      <div className="relative min-h-screen">
        {/* If video is provided, use it, else fall back to BackgroundImage */}
        {bgVideo ? (
          <video
            className="pointer-events-none fixed inset-0 w-full h-full object-cover -z-10"
            autoPlay
            loop
            muted
            playsInline
            style={{ opacity: (bgVideo.opacity ?? 100) / 100 }}
          >
            <source src={bgVideo.url} type="video/mp4" />
          </video>
        ) : (
          page?.backgroundImage && <BackgroundImage {...(page as any).backgroundImage} />
        )}

        {site.header && <Header {...site.header} />}
        {props.children}
        {site.footer && <Footer {...site.footer} />}
      </div>
    </Annotated>
  );
};

export default BaseLayout;
